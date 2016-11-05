(function () {
    'use strict';
    angular.module('task.customGrid.directive', [])

    angular
        .module('task.customGrid.directive')
        .directive('taskCustomGrid', directive);

    directive.$inject = [];

    function directive() {
        return {
            //scope: {},
            bindToController: {
                items: '=',
                selectedItem: '=',
                filterFunction: '=',
            },
            controller: customGridController,
            controllerAs: 'customGridCtrl',
            transclude: true,
            restrict: 'E',
            templateUrl: '../app/components/task.customGrid.directive.html',
        };
    }

    customGridController.$inject = ['taskStorageService'];

    //Directive controller
    function customGridController(taskStorageService) {
        var vm = this;

        
        vm.checkStateChanged = checkStateChanged;
        vm.toggleSelection = toggleSelection; 
        vm.getPriority = getPriority;
        vm.changePriority = changePriority;


        //Changes the priority of the given item
         function changePriority(item) {
            if (item.priority <= 0)
                item.priority++;
            else
                item.priority = -1;

            taskStorageService.set(vm.items);
        }

        //Occurs when the status of an items changes
         function checkStateChanged () {
            taskStorageService.set(vm.items);
        }

        //Select or deselect the given item
       function toggleSelection(item) {
            //alert(item.sel)
            //if (item.sel==0){
            //      item.sel=1;}
            // else{
            //     item.sel=0;
            //}
            taskStorageService.set(vm.items);

        }
       function getPriority(item) {
            if (item.priority == -1)
                return "green";
            if (item.priority == 0)
                return "yellow";
            if (item.priority == 1)
                return "red";

        }

    }
})();