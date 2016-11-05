(function(angular) {

    'use strict';

    angular.module('FormController', []);

    angular
            .module('FormController')
            .controller('FormController', FormController);

    FormController.$inject = ['taskStorageService', '$mdDialog', '$scope','$window'];


    //This is the application controller
    function FormController(taskStorageService, $mdDialog) {
        var vm = this;

        vm.task = {'sel': 'false'};
     
        vm.items = taskStorageService.get() || [];
      
        vm.submit = submit; 
        vm.clearForm = clearForm;
        vm.editTask= editTask;
  

        function submit(task) {
            vm.items.push(task);
           taskStorageService.set(vm.items);
          // alert(angular.toJson(vm.items));
           clearForm();
         
        }

        function clearForm(){
            vm.task.title = "";
            vm.task.description = "";
            vm.task.tags = "";
            vm.task.priority = "";
            vm.task.status = "";
            vm.task.estimatedwork = "";
            vm.task.date = "";
            //alert("clearform");
        }

    
        function setTask(task){
            vm.task.title = task.title;
            vm.task.description = task.description;
            vm.task.tags = task.tags;
            vm.task.priority = task.priority;
            vm.task.status = task.status;
            vm.task.estimatedwork = task.estimatedwork;
            vm.task.date = task.date;
        }
    
        function editTask(task){
            var index = vm.items.indexOf(task);
            vm.items[index]=vm.task;
            taskStorageService.set(items);

        }

}


})(window.angular);