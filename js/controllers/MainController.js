app.controller('MainController', 
  ['$scope', function($scope) {
    $scope.title = 'Top Sellers in Books';
    $scope.promo = '40% off';
    $scope.products = [
      {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        likes: 0,
        dislikes: 0,
        cover: 'img/little_mac.jpg'
      },
      {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        likes: 0,
        dislikes: 0,
        cover: 'img/502ecd75cc378f036c2e26a69c81a91ccc422cce.jpg'
      },
      {
        name: 'Memoirs of a Geisha',
        price: 90,
        likes: 0,
        dislikes: 0,
        pubdate: new Date('2002', '09', '04'),
        cover: 'img/lis.jpg'
      },
      {
        name: 'Golden Temple',
        price: 35,
        likes: 0,
        dislikes: 0,
        pubdate: new Date('2004', '05', '05'),
        cover: 'img/temple.jpg'
      }
    ];
    $scope.plusOne = function(index) {
      $scope.products[index].likes +=1;
    };
    $scope.minusOne = function(index) {
      $scope.products[index].dislikes +=1;
    };
}]);