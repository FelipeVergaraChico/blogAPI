const { User } = require('../models');
const { generateToken } = require('../utils/token');

const loginvalidate = async (email, password) => {
  const user = await User
    .findOne({ where: { email, password }, attributes: { exclude: ['password'] } });
  if (!user) return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  const token = generateToken(email);
  return { status: 'OK', data: { token } };
};

module.exports = {
  loginvalidate,
};