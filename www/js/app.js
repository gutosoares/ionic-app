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

app.controller('mainController', function($scope, $ionicModal) {
  var tasks = new getTasks();

  $scope.list = tasks.items;
  $scope.task = {description: '', done: false};
  $scope.removeStatus = false;

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.getShitDone = function(item) {
    item.done = !item.done;
  };

  $scope.onAddItem = function(item) {
    // var item = {description: 'teste', done: false}

    // showModal();
    tasks.add(item);

    $scope.modal.hide();
  };

  $scope.onRemove = function(item) {
    tasks.remove(item);
  };

  $scope.onClickRemove = function() {
    $scope.removeStatus = !$scope.removeStatus;
  };

  $ionicModal.fromTemplateUrl('add-item.html', {
    scope: $scope,
    animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
  });
})