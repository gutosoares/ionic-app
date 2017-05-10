function getTasks() {
  this.tasks = [];

  var list = localStorage.getItem('taskList');
  if(list !== null) {
    this.tasks = angular.fromJson(list);
  }

  this.save = function() {
    var list = angular.toJson(this.tasks);
    localStorage.setItem('taskList', list);
  };

  this.add = function(task) {
    this.tasks.push(task);
  };

  this.remove = function(task) {
    var pos = this.tasks.indexOf(task);
    this.tasks.splice(pos, 1);
  };
}