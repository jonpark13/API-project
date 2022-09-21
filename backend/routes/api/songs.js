const express = require('express')

const { restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song, Album, Comment } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize")

const router = express.Router();


// Get all songs
router.get('/', async (req, res) => {
    let { page, size, title, createdAt } = req.query

    if(!size) {
        size = 20
    }
    if(!page) {
        page = 1
    }
    let pag = {}
    if(page >= 1 && size >= 1 ){
        pag.limit = size
        pag.offset = size * (page - 1)
    }
    if( size > 20){
      pag.limit = 20
    }

    if (isNaN(size) || isNaN(page) || size < 0 || page < 0) {
        res.status(400);
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
              "page": "Page must be greater than or equal to 0",
              "size": "Size must be greater than or equal to 0",
              "createdAt": "CreatedAt is invalid"
            }
        });
    }
    const where = {};

    if(title){
        where.title = title
    }
    if(createdAt){
        let checkDate = new Date(createdAt)
        if(checkDate == 'Invalid Date'){
            res.status(400);
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
              "page": "Page must be greater than or equal to 0",
              "size": "Size must be greater than or equal to 0",
              "createdAt": "CreatedAt is invalid"
            }
        });
        }
        where.createdAt = {
            [Op.lt]: createdAt
        }
    }
    
    const getSongs = await Song.findAll({
        include:
            [{
                model: User
            },
            {
                model: Album
            }],
        where,
        ...pag
    })
    res.json({
        Songs: getSongs,
        page,
        size
    })
});

// Create a song w / w/o album
router.post('/', restoreUser, async (req, res) => {
    const { user } = req
    const { title, description, url, imageUrl, albumId } = req.body
    if(!title || !url){
        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "title": "Song title is required",
                "url": "Audio is required"
            }
        })
    }
    
    if(albumId){
        let checkAlbum = await Album.findByPk(albumId)
        if(!checkAlbum) {
            res.status(404)
            return res.json({
                "message": "Album couldn't be found",
                "statusCode": 404
              })
        }
    }

    let newSong = await Song.create({
        userId: user.id,
        albumId,
        title,
        description,
        url,
        previewImage: imageUrl // adding in preview Images
    })
    await newSong.save() //?
    res.json(newSong)
})

// Get all songs by current user
router.get('/current', restoreUser, async (req, res) => {
    const { user } = req
    // console.log(user.toSafeObject())
    const getSongs = await Song.findAll({
        where: {
            userId: user.id
        }
    })
    res.json({Songs: getSongs})
});

// Delete a song
router.delete('/:id', requireAuth, async (req, res) => {
    const { user } = req
    
    const getSong = await Song.findByPk(req.params.id)

    if(!getSong){
        res.status(404)
        return res.json({
            "message": "Song couldn't be found",
            "statusCode": res.statusCode
        })
    }

    if(user.id === getSong.userId){
        await getSong.destroy()
        res.status(200)
        return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
          })
    } else {
        return res.json({
            messsage: "Wrong User"
        })
    }
})

// Edit a song
router.put('/:id', async (req, res) => {
    const { user } = req
    const { title, description, url, imageUrl, albumId } = req.body

    if(!title || !url){
        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "title": "Song title is required",
                "url": "Audio is required"
            }
        })
    }

    const getSong = await Song.findByPk(req.params.id)

    if(!getSong){
        res.status(404)
        return res.json({
            "message": "Song couldn't be found",
            "statusCode": res.statusCode
        })
    }
    
    if(user.id === getSong.userId){
        getSong.title = title,
        getSong.description = description,
        getSong.url = url,
        getSong.previewImage = imageUrl,
        getSong.albumId = albumId
    }
    await getSong.save()
    res.json(getSong)
})

// Get song details by id
router.get('/:id', restoreUser, async (req, res) => {
    const getSong = await Song.findByPk(req.params.id,
        { include: [
            {
                model: User,
                // as: 'Artist'
            },
            {
                model: Album
            }
        ]}
        )
    if(!getSong){
        res.status(404)
        return res.json({
            "message": "Song couldn't be found",
            "statusCode": res.statusCode
        })
    }
    return res.json(getSong)
});

// Get all comments by song id
router.get('/:id/comments', async (req, res) => {
    const getSong = await Song.findByPk(req.params.id)

    if(!getSong){
        res.status(404)
        return res.json({
            "message": "Song couldn't be found",
            "statusCode": res.statusCode
        })
    }

    const getSongComments = await Comment.findAll({
        where: {
            songId: req.params.id
        },
        include: User

    })

    res.json({Comments: getSongComments})
})

// Create comment by song id
router.post('/:id/comments', async (req, res) => {
    const { user } = req
    const { body } = req.body
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

    const getSong = await Song.findByPk(req.params.id)
    if(!getSong){
        res.status(404)
        return res.json({
            "message": "Song couldn't be found",
            "statusCode": res.statusCode
        })
    }

    let newComment = await Comment.create({
        userId: user.id,
        songId: req.params.id,
        body
    })
    await newComment.save() //?
    res.json(newComment)
})

module.exports = router;