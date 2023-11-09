const router = require('express').Router();
const { loginvalidate } = require('../middlewares/loginValidate');
const { loginController } = require('../controller/loginController');

router.post('/', loginvalidate, loginController);

module.exports = router;