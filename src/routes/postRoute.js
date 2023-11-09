const router = require('express').Router();
const postController = require('../controller/postController');
const tokenAuth = require('../middlewares/tokenAuth');

router.get('/', tokenAuth, postController.getAll);

module.exports = router;