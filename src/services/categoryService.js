const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return { status: 'CREATED', data: category };
};

const getAll = async () => {
  const category = await Category.findAll();
  return { status: 'OK', data: category };
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  return { status: 'OK', data: category };
};

module.exports = {
  create,
  getAll,
  getById,
};