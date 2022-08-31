const express = require('express')

const { restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Current users albums
router.post('/current', async (req, res) => {
    const { user } = req
    const getAlbums = await Album.findAll({
        where: {
            userId: user.id
        }
    })
    res.json(getAlbums)
});

// Create an album
router.post('/', async (req, res) => {
    const getAlbums = await Album.findAll({})
    res.json(getAlbums)
    });

// Get all albums
router.get('/', async (req, res) => {
    const getAlbums = await Album.findAll({})
    res.json(getAlbums)
});

module.exports = router;