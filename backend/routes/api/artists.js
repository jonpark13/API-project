const express = require('express')

const { restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');

const { sequelize, Op } = require("sequelize");
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Get all songs by artist id
router.get('/:id/songs', async (req, res) => {
    const findArtist = await User.findByPk(req.params.id)

    if(!findArtist){
        res.status(404)
        return res.json({
            "message": "Artist couldn't be found",
            "statusCode": 404
          })
    }

    const getAllSongs = await Song.findAll({
        where: {
            userId: req.params.id
        }
    })

    res.json({Songs: getAllSongs})
})

// Get all albums by artist id
router.get('/:id/albums', async (req, res) => {
    const findArtist = await User.findByPk(req.params.id)

    if(!findArtist){
        res.status(404)
        return res.json({
            "message": "Artist couldn't be found",
            "statusCode": 404
          })
    }

    const getAllAlbums = await Album.findAll({
        where: {
            userId: req.params.id
        }
    })

    res.json({Albums: getAllAlbums})
})

// Get artist by id
router.get('/:id', async (req, res) => {
    const getArtistDetails = await User.findByPk(req.params.id)

    if(!getArtistDetails){
        res.status(404)
        return res.json({
            "message": "Artist couldn't be found",
            "statusCode": 404
          })
    }

    const getTotalSongs = await Song.count({
        where: {
            userId: req.params.id
        }
    })
    const getTotalAlbums = await Album.count({
        where: {
            userId: req.params.id
        }
    })
    
    res.json({...getArtistDetails.dataValues, totalSongs: getTotalSongs, totalAlbums: getTotalAlbums})
});

module.exports = router;