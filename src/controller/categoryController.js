const categoryService = require('../services/categoryService');
const httpStatus = require('../utils/htppStatus');

const create = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.create(name);
  return res.status(httpStatus(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await categoryService.getAll();
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  create,
  getAll,
};