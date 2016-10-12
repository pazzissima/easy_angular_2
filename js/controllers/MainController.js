app.controller('MainController', ['$scope', function($scope) {
  // $scope.move = {
  //   icon: 'img/lis.jpg',
  //   title: 'MOVE',
  //   developer: 'MOVE, Inc.',
  //   price: 0.99
  // };

  // $scope.shutterbugg = {
  //   icon: 'img/little_mac.jpg',
  //   title: 'Shutterbugg',
  //   developer: 'Chico Dusty',
  //   price: 2.99
  // };

  // $scope.gameboard = {
  //   icon: 'img/temple.jpg',
  //   title: 'Gameboard',
  //   developer: 'Armando P.',
  //   price: 1.99
  // };

  // $scope.forecast = {
  //   icon: 'img/owl.jpg',
  //   title: 'Forecast',
  //   developer: 'Forecast',
  //   price: 1.99
  // };
  $scope.apps = [
    {
      icon: 'img/owl.jpg',
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    },
    {
      icon: 'img/lis.jpg',
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99
    },
    {
      icon: 'img/temple.jpg',
      title: 'Pokemon',
      developer: 'Niantik',
      price: 4.99
    },
    {
      icon: 'img/little_mac.jpg',
      title: 'Angry Birds',
      developer: 'Arrrrgh',
      price: 1.99
    }
  ]
}]);