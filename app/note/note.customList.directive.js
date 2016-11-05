(function() {
    'use strict';
    angular.module('note.customList.directive', [])

    angular
        .module('note.customList.directive')
        .directive('noteCustomList', directive);

    directive.$inject = [];

    function directive() {
        return {
            scope: {},
            bindToController: {
                items: '=',
                selectedItem: '=',
                filterFunction: '=',
               
            },
            controller: customListController,
            controllerAs: 'customListCtrl',
            transclude: true,
            restrict: 'E',
            templateUrl: '../app/components/note.customList.directive.html',
        };
    }
    
    customListController.$inject = ['noteStorageService'];

    //Directive controller
    function customListController(noteStorageService) {
        var vm = this;
        vm.toggleSelection = toggleSelection;
        vm.checkStateChanged = checkStateChanged;
        vm.changePriority = changePriority; 
        
        //Changes the priority of the given item
        function changePriority(item) {
            if (item.priority <= 0)
                item.priority++;
            else
                item.priority = -1;

            noteStorageService.set(vm.items);
        }

        //Occurs when the status of an items changes
        function checkStateChanged () {
            noteStorageService.set(vm.items);
        }

        //Select or deselect the given item
         function toggleSelection(item) {
           // alert("selected");
            if (vm.selectedItem == null || vm.selectedItem != item)
                vm.selectedItem = item;
            else
                vm.selectedItem = null;
        }
    }
})();