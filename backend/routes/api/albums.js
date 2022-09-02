const express = require('express')

const { restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Current users albums
router.get('/current', async (req, res) => {
    const { user } = req
    const getAlbums = await Album.findAll({
        where: {
            userId: user.id
        }
    })
    res.json(getAlbums)
});

// Get album by id
router.get('/:albumId', async (req, res) => {
    const getAlbums = await Album.findByPk(req.params.albumId,
        { include: [
            {
                model: User,
                // as: 'Artist'
            },
            {
                model: Song
            }
        ]}
    )
    if(!getAlbums){
        res.status(404)
        return res.json({
            "message": "Album couldn't be found",
            "statusCode": res.statusCode
        })
    }
    res.json(getAlbums)
});

router.put('/:albumId', async (req, res) => {
    const { user } = req
    const { title, description, imageUrl } = req.body
    if(!title){
        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "title": "Album title is required"
            }
        })
    }

    const getAlbum = await Album.findByPk(req.params.albumId)

    if(user.id === getAlbum.userId){
        getAlbum.title = title,
        getAlbum.description = description,
        getAlbum.previewImage = imageUrl
    }
    
    await getAlbum.save()
    res.json(getAlbum)
})

// Delete an album
router.delete('/:albumId', async (req, res) => {
    const { user } = req
    
    const getAlbum = await Album.findByPk(req.params.id)

    if(user.id === getAlbum.userId){
        await getAlbum.destroy()

        res.status(200)
        return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
          })
    }


})

// Create an album
router.post('/', requireAuth, async (req, res) => {
    const { user } = req
    const { title, description, imageUrl } = req.body
    if(!title){
        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "title": "Album title is required"
            }
        })
    }

    let newAlbum = await Album.create({
        userId: user.id,
        title,
        description,
        previewImage: imageUrl // adding in preview Images
    })
    await newAlbum.save() //?
    res.json(newAlbum)
});

// Get all albums
router.get('/', async (req, res) => {
    const getAlbums = await Album.findAll({})
    res.json(getAlbums)
});

module.exports = router;