module.exports = async (req, res) => {
  const { body } = req;
  res.send(`Hello ${body.name}, you just parsed the request body!`);
};
