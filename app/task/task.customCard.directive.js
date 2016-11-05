(function () {
    'use strict';
    angular.module('task.customCard.directive', [])

    angular
        .module('task.customCard.directive')
        .directive('taskCustomCard', directive);

    directive.$inject = [];

    function directive() {
        return {
            //scope: {},
            bindToController: {
                items: '=',
                selectedItem: '=',
                filterFunction: '=',
            },
            controller: customCardController,
            controllerAs: 'customCardCtrl',
            transclude: true,
            restrict: 'E',
            templateUrl: '../app/components/task.customCard.directive.html',
        };
    }

    customCardController.$inject = ['taskStorageService', '$routeParams'];

    //Directive controller
    function customCardController(taskStorageService) {
        var vm = this;
        vm.getPriority = getPriority;
        vm.changePriority = changePriority;
        vm.checkStateChanged = checkStateChanged;
        vm.toggleSelection = toggleSelection; 

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

         function getPriority (item) {
            if (item.priority == -1)
                return "green";
            if (item.priority == 0)
                return "yellow";
            if (item.priority == 1)
                return "red";

        }
    }
})();