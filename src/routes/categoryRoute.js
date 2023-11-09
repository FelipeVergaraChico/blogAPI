const router = require('express').Router();
const categoryController = require('../controller/categoryController');
const tokenAuth = require('../middlewares/tokenAuth');
const categoryValidate = require('../middlewares/categoryValidate');

router.post('/', tokenAuth, categoryValidate, categoryController.create);
router.get('/', tokenAuth, categoryController.getAll);

module.exports = router;