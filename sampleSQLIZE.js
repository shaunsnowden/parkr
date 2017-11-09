db.sync().then(function(){
  Article.create({
    parking_name:"afdawf",
    street_address: "asff"
  });
});

// calling a create as a callbackfunction

// findOne
db.sync().then(function () {
  Article.findById().then(function(article){
    console.log(article.dataValues);
  });
});

// findAll
db.sync().then(function () {
  Article.findALL.then(function (article) {
    console.log(articles.dataValues);
  });
});