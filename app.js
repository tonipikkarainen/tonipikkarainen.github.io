(function() {
  var app = angular.module('gemStore', ['store-directives']);

 app.controller('StoreController', ['$http', function($http){
  var store = this;
  store.products = [];

  $http.get('/store-products.json').success(function(data){
    store.products = data;
  });
}]);
  
  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  
  app.controller('ReviewController', function(){
    this.review={};
    this.addReview=function(product){
	  this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review={};
    };
  });
  
 
 
})();
