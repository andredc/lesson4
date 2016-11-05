(function (angular) {

  'use strict';

  angular.module('EditController', []);

  angular
    .module('EditController')
    .controller('EditController', EditController);

  EditController.$inject = ['taskStorageService', '$routeParams'];


  //This is the application controller
  function EditController(taskStorageService, $routeParams) {
    var vm = this;
 
    vm.items = taskStorageService.get() || [];
    vm.setTask = setTask;
    vm.clearForm = clearForm;
    vm.submit = submit;
    vm.searchTask = searchTask;
    vm.itemTitle = $routeParams.taskTitle;
    // alert($routeParams.taskTitle)

    vm.task = vm.items.filter(searchTask)[0]
    setTask(vm.task);

    //alert(angular.toJson(vm.task))
    function clearForm() {
      vm.task.title = "";
      vm.task.description = "";
      vm.task.tags = "";
      vm.task.priority = "";
      vm.task.status = "";
      vm.task.estimatedwork = "";
      vm.task.date = "";
      //alert("clearform");
    }


    function setTask(task) {
      vm.task.title = task.title
      vm.task.description = task.description;
      vm.task.tags = task.tags;
      vm.task.priority = task.priority;
      vm.task.status = task.status;
      vm.task.estimatedwork = task.estimatedwork;
      vm.task.date = task.date;

    }

    function submit(task) {
      //  alert(angular.toJson(task))
      var index = vm.items.indexOf(task);
      // alert(angular.toJson(task));
      vm.items[index] = task;
      //       alert(angular.toJson(vm.items[index]));
      taskStorageService.set(vm.items);

    }
    function searchTask(item) {
      if (item.title == vm.itemTitle)
        return item;
    }

  }


})(window.angular);