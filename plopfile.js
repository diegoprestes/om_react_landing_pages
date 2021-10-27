module.exports = (plop) => {
  plop.setGenerator('component', require('./plop-generators/component'));
  plop.setGenerator('c', require('./plop-generators/component'));
};
