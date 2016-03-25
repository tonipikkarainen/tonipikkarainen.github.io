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
      designer: 'Leo Fender',
      neck: 'maple',
      pickups: 'Usually 3 single coils',
      color: '#CCC',
	  price: 1500,
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
        body: "Not so great guitar!",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Gibson Les Paul',
      description: "Les Paul has humbucker microphones and it is played by many rockstars like Slash.",
      designer: 'Ted McCarty',
      neck: 'Usually mahogany',
      pickups: 'Usually two humbuckers',
      color: '#EEE',
	  price: 2000,
      faces: 12,
      images: [
        "images/lespaul1.jpg",
        "images/lespaul2.jpg",
        "images/lespaul3.jpg",
      ],
      reviews: [{
        stars: 3,
        body: "Intermediate guitar!",
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
      designer: 'Leo Fender',
      neck: 'maple',
      pickups: 'Traditionally two single coils',
      color: '#000',
	  price: 1000,
      faces: 6,
      images: [
        "images/telecaster1.jpg",
        "images/telecaster2.jpg",
        "images/telecaster3.jpg"
      ],
      reviews: [{
        stars: 1,
        body: "Not so great guitar!",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }]
    }];
  
 
 
})();
