const express = require('express')

const { restoreUser } = require('../../utils/auth');
const { User, Song } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Get all songs
router.get('/', async (req, res) => {
    const getSongs = await Song.findAll({})
    res.json(getSongs)
});

router.get('/current', restoreUser, async (req, res) => {
    const { user } = req;
    console.log(user.toSafeObject())
    const getSongs = await Song.findAll({
        where: {
            userId: user.id
        }
    })
    res.json({Songs: getSongs})
});

module.exports = router;