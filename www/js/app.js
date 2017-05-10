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

app.controller('mainController', function($scope, $ionicModal, $ionicPopup, $ionicListDelegate) {
  var task = new getTasks();

  $scope.list = task.tasks;
  $scope.removeStatus = false;

  // Functions
  function getItem(item, novo) {
    $scope.data = {};
    $scope.data.description = item.description;

    $ionicPopup.show({
      title: 'New ToDo',
      scope: $scope,
      template: '<input type="text" placeholder="ToDo", autofocus="true" ng-model="data.description">',
      buttons: [
        {text: 'OK', 
        onTap: function(e) {
          item.description = $scope.data.description;
          if(novo) {
            task.add(item);
          }
          task.save();
        }},
        {text: 'Cancel'}
      ]
    });

    $ionicListDelegate.closeOptionButtons();
  };

  $scope.getShitDone = function(task) {
    task.done = !task.done;
  };

  $scope.onRemove = function(item) {
    task.remove(item);
    task.save();
  };

  $scope.onClickRemove = function() {
    $scope.removeStatus = !$scope.removeStatus;
  };

  $scope.onAddTask = function() {
    var item = {description: '', done: false};

    getItem(item, true);
  }

  $scope.onEditTask = function(item) {
    getItem(item, false);
  }

  // function save() {
  //   var list = angular.toJson($scope.list);
  //   localStorage.setItem("taskList", list);
  // }

  // function getList() {
  //   var list = localStorage.getItem("taskList");
  //   if(list !== null) {
  //     $scope.list = list;
  //   }
  // }

  // $scope.onAddTask = function(task) {
  //   $scope.list.push({description: task.description, done: false});
  //   $scope.modalAdd.hide();
  //   save();
  // };
})