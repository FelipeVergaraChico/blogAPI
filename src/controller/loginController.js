const loginService = require('../services/loginService');
const httpStatus = require('../utils/htppStatus');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.loginvalidate(email, password);
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  loginController,
};