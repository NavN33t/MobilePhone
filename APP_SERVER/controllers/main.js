const index = function(req, res){
  res.render('index', { title: 'Mobile Phone Store' });
};

module.exports = {
  index
};