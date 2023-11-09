const { User } = require('../models');
const { generateToken } = require('../utils/token');

const getAll = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'OK', data: user };
};

const userRegister = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });
  if (user !== null) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const createNew = await User.create({ displayName, email, password, image });
  if (!createNew) {
    return { status: 'INTERNAL_SERVER_ERROR', data: { message: 'System Error' } };
  }
  const token = generateToken(email, displayName, image);
  return { status: 'CREATED', data: { token } };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'OK', data: user };
};
module.exports = {
  userRegister,
  getAll,
  getById,
};