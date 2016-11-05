(function() {
    'use strict';
    angular.module('task.customList.directive', [])

    angular
        .module('task.customList.directive')
        .directive('taskCustomList', directive);

    directive.$inject = [];

    function directive() {
        return {
         
         //  scope: {},
            bindToController: {
                items: '=',
                selectedItem: '=',
                filterFunction: '=',
                
            },
            controller: customListController,
            controllerAs: 'customListCtrl',
            transclude: true,
            restrict: 'E',
            templateUrl: '../app/components/task.customList.directive.html',
        };
    }
    
    customListController.$inject = ['taskStorageService'];

    //Directive controller
    function customListController(taskStorageService) {
        var vm = this;
        vm.toggleSelection =  toggleSelection;
        vm.changePriority = changePriority;
        vm.checkStateChanged = checkStateChanged;


        //Changes the priority of the given item
         function changePriority(item) {
            if (item.priority <= 0)
                item.priority++;
            else
                item.priority = -1;

            taskStorageService.set(vm.items);
        }

        //Occurs when the status of an items changes
        function checkStateChanged() {
            taskStorageService.set(vm.items);
        }

        //Select or deselect the given item
       function toggleSelection(item) {
             if (item.selected == false)
                item.selected = true;
            else
                item.selected = false;

        }
    }
})();