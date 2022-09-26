const express = require('express')

const { restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song, Album, Comment, Playlist, PlaylistSong } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Add a song to playlist by id
router.post('/:playlistId/songs', requireAuth, async (req, res) => {
    const { user } = req
    const { songId } = req.body

    let getSong = await Song.findByPk(songId)

    if(!getSong){
        res.status(404)
        return res.json({
            "message": "Song couldn't be found",
            "statusCode": 404
        })
    }

    let findPlaylist = await Playlist.findByPk(req.params.playlistId)

    if(!findPlaylist){
        res.status(404)
        return res.json({
            "message": "Playlist couldn't be found",
            "statusCode": 404
        })
    }

    let addSongToPlaylist = await PlaylistSong.create({
        playlistId: Number(req.params.playlistId),
        songId: songId
    })
    console.log(addSongToPlaylist)
    await addSongToPlaylist.save() //?
    res.json(getSong)
});

// Get playlist of current user
router.get('/current', requireAuth, async (req, res) => {
    const { user } = req
    let findPlaylist = await Playlist.findAll({
        where: {
            userId: user.id
        }})

    res.json({Playlists: findPlaylist})
})

// Get playlist by id
router.get('/:playlistId', async (req, res) => {
    let findPlaylist = await Playlist.findByPk(req.params.playlistId, 
        { include: [
            {
                model: Song,
                include: User,
                through: {attributes: []}
                
            }
        ]}
    
    )

    if(!findPlaylist){
        res.status(404)
        return res.json({
            "message": "Playlist couldn't be found",
            "statusCode": 404
        })
    }

    res.json(findPlaylist)
})

// Edit playlist by id
router.put('/:id', requireAuth, async (req, res) => {
    const { user } = req
    const { name, imageUrl } = req.body

    if(!name){
        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "name": "Playlist name is required"
            }
        })
    }

    let findPlaylist = await Playlist.findByPk(req.params.id)

    if(!findPlaylist){
        res.status(404)
        return res.json({
            "message": "Playlist couldn't be found",
            "statusCode": 404
        })
    }

    if(user.id === findPlaylist.userId){
        findPlaylist.name = name
        findPlaylist.imageUrl = imageUrl
        await findPlaylist.save()
        return res.json(findPlaylist)
    }

    res.json({
        message: 'Wrong User'
    })
});

// Create a playlist
router.post('/', requireAuth, async (req, res) => {
    const { user } = req
    const { name, imageUrl } = req.body
    if(!name){
        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "name": "Playlist name is required"
            }
        })
    }

    let newPlaylist = await Playlist.create({
        userId: user.id,
        name,
        imageUrl: imageUrl
    })
    await newPlaylist.save() //?
    res.json(newPlaylist)
});

// Delete playlist by id
router.delete('/:id', requireAuth, async (req, res) => {
    let { user } = req
    let findPlaylist = await Playlist.findByPk(req.params.id)

    if(!findPlaylist){
        res.status(404)
        return res.json({
            "message": "Playlist couldn't be found",
            "statusCode": 404
        })
    }

    if(user.id === findPlaylist.userId){
        await findPlaylist.destroy()
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