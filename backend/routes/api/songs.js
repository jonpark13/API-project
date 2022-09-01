const express = require('express')

const { restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

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

router.delete('/:id', async (req, res) => {
    const { user } = req
    
    const getSong = await Song.findByPk(req.params.id)

    if(user.id === getSong.userId){
        await getSong.destroy()
        res.status(200)
        return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
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
                
// Get all songs
router.get('/', async (req, res) => {
const getSongs = await Song.findAll({})
res.json(getSongs)
});

module.exports = router;