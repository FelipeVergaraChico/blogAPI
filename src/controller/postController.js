const postService = require('../services/PostService');
const httpStatus = require('../utils/htppStatus');

const getAll = async (req, res) => {
  const { status, data } = await postService.getAllPosts();
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  getAll,
};