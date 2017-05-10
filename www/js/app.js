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
  $scope.list = [
    {
      description: 'Aprender Vuejs',
      done: false
    },
    {
      description: 'Aprender Ruby on Rails',
      done: false
    },
    {
      description: 'Aprender Banco de Dados NoSQL',
      done: false
    },
    {
      description: 'Começar a trabalhar em uma empresa bacana',
      done: false
    },
    {
      description: 'Aprender a desenvolver aplicações mobile',
      done: false
    },
    {
      description: 'Fazer parte de uma comunidade',
      done: false
    },
    {
      description: 'Começar a palestrar em eventos',
      done: false
    },
    {
      description: 'Criar projetos open-source',
      done: false
    },
  ];

  $scope.task = {description: '', done: false};
  $scope.removeStatus = false;

  $scope.showModal = function() {
    $scope.task.description = '';
    $scope.modal.show();
  };

  $scope.getShitDone = function(item) {
    item.done = !item.done;
  };

  $scope.onRemove = function(item) {
    var pos = $scope.list.indexOf(item);
    $scope.list.splice(pos, 1);
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

  $scope.onAddTask = function(task) {
    $scope.list.push({description: task.description, done: false});
    $scope.modal.hide();
  };
})