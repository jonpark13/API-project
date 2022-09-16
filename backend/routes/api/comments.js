const express = require('express')

const { restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song, Album, Comment } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Edit comment by id
router.put('/:id', requireAuth, async (req, res) => {
    let { user } = req
    let { body } = req.body

    if(!body){
        res.status(400)
        return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "body": "Comment body text is required"
            }
        })
    }

    const getComment = await Comment.findByPk(req.params.id)

    if(!getComment){
        res.status(404)
        return res.json({
            "message": "Comment couldn't be found",
            "statusCode": 404
          })
    }

    if(user.id === getComment.userId){
        getComment.body = body
        await getComment.save()
        return res.json(getComment)
    }

    res.json({
        message: 'Wrong User'
    })
});

// Delete comment by id
router.delete('/:id', requireAuth, async (req, res) => {
    let { user } = req
    const getComment = await Comment.findByPk(req.params.id)

    if(!getComment){
        res.status(404)
        return res.json({
            "message": "Comment couldn't be found",
            "statusCode": 404
          })
    }
    // console.log('test')
    if(user.id === getComment.userId){
        await getComment.destroy()
        res.status(200)
        return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
          })
    }

    res.json({
        message: 'Wrong User'
    })
})

module.exports = router;