var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('mainController', function($scope) {
  var tasks = new getTasks();

  $scope.list = tasks.items;
  $scope.removeStatus = false;

  $scope.getShitDone = function(item) {
    item.done = !item.done;
  };

  $scope.onRemove = function(item) {
    tasks.remove(item);
  };

  $scope.onClickRemove = function() {
    $scope.removeStatus = !$scope.removeStatus;
  }
})