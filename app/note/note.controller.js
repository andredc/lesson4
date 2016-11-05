(function(angular) {

    'use strict';

    angular.module('NoteController', []);

    angular
            .module('NoteController')
            .controller('NoteController', NoteController);

    NoteController.$inject = ['noteStorageService', '$mdDialog', '$scope'];


    //This is the application controller
    function NoteController(noteStorageService, $mdDialog) {
        var vm = this;
       
        vm.selectedItem = null;
        vm.items = noteStorageService.get() || [];

        vm.notDone = notDone;
        vm.done = done; 
        vm.all = all;
        vm.deleteItem = deleteItem;
        vm.createItem = createItem; 
        vm.addNote = addNote; 

        function notDone(item) {
            return item.done == false;
        }

       function done(item) {
            return item.done == true;
        }

        function all(item) {
            return true;
        }

        //Delete the current selected item, if any
        function deleteItem(ev) {
             if (vm.selectedItem != null) {
                var confirm = $mdDialog.confirm()

                .textContent('The note "' + vm.selectedItem.title + '" will be deleted. Are you sure?')
                    .ariaLabel('Delete note')
                    .targetEvent(ev)
                    .ok('Yes')
                    .cancel('No');

                $mdDialog.show(confirm).then(function(result) {
                    if (result) {
                        var index = vm.items.indexOf(vm.selectedItem);
                        if (index != -1) {
                            vm.items.splice(index, 1);
                            noteStorageService.set(vm.items);
                        }
                    }
                });
            }
        }

        //Creates a new item with the given parameters
        function createItem(title, priority, done, date) {
         
            vm.items.push({
                title: title,
                done: done || false,
                priority: priority || 0,
                date: date || Date.now()
            });
           noteStorageService.set(vm.items);
           //alert (angular.toJson(vm.items));
        }


        //Add a new note to the items list 
        function addNote(ev) {
              // alert(angular.toJson(noteStorageService.get()));
            var confirm = $mdDialog.prompt()
                .title('Add new note')
                .placeholder('Your note title...')
                .ariaLabel('Your note title...')
                .targetEvent(ev)
                .ok('Add')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function(result) {
                if (result)
                    vm.createItem(result);
            });
        };

    }


})(window.angular);