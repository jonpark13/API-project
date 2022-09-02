const router = require('express').Router();

// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs');
const albumsRouter = require('./albums');
const artistsRouter = require('./artists');
const commentsRouter = require('./comments');

const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/albums', albumsRouter);

router.use('/songs', songsRouter);

router.use('/artists', artistsRouter);

router.use('/comments', commentsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });
  
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


module.exports = router;