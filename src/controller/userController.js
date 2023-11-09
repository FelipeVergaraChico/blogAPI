const userServices = require('../services/userServices');
const httpStatus = require('../utils/htppStatus');

const userControllers = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userServices.userRegister({ displayName, email, password, image });
  return res.status(httpStatus(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await userServices.getAll();
  return res.status(httpStatus(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userServices.getById(id);
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  userControllers,
  getAll,
  getById,
};