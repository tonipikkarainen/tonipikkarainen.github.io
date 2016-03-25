(function() {
  var app = angular.module('gemStore', ['store-directives']);

 app.controller('StoreController', function(){
  this.products = gems;
});
  
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
  
   var gems = [{
      name: 'Fender Stratocaster',
      description: "Stratocaster has usually single-coil microphones and has very unique sound",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/strato1.jpg",
        "images/strato2.jpg",
        "images/stratocaster4.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "Great guitar!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Great guitar!",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Gibson Les Paul',
      description: "Les Paul has humbucker microphones and it is played by many rockstars like Slash.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/lespaul1.jpg",
        "images/lespaul2.jpg",
        "images/lespaul3.jpg",
      ],
      reviews: [{
        stars: 3,
        body: "Great guitar!",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Great guitar!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Fender Telecaster',
      description: "Telecaster has usually single-coil mics and its usually used in country music.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/telecaster1.jpg",
        "images/telecaster2.jpg",
        "images/telecaster3.jpg"
      ],
      reviews: [{
        stars: 1,
        body: "Great guitar!",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Great guitar!",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Great guitar!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
  
 
 
})();
