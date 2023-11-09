const router = require('express').Router();
const userValidate = require('../middlewares/userValidate');
const tokenAuth = require('../middlewares/tokenAuth');
const { userControllers, getAll, getById } = require('../controller/userController');

router.post('/', userValidate, userControllers);
router.get('/', tokenAuth, getAll);
router.get('/:id', tokenAuth, getById);

module.exports = router;