(function (angular) {

    'use strict';

    angular.module('TaskController', []);

    angular
        .module('TaskController')
        .controller('TaskController', TaskController);

    TaskController.$inject = ['taskStorageService', '$mdDialog', '$scope', '$routeParams'];


    //This is the application controller
    function TaskController(taskStorageService, $mdDialog) {
        var vm = this;

        vm.selectedItem = null;
        vm.items = taskStorageService.get() || [];
        vm.order = 'title';

        vm.notDone = notDone;
        vm.done = done;
        vm.all = all;
        vm.deleteItem = deleteItem;
        vm.priorityItem = priorityItem;
        vm.statusItem = statusItem;


        function notDone(item) {
            return item.done == false;
        }

        function done(item) {
            return item.done == true;
        }

        function all(item) {
            return true;
        }

        function selitem(item) {
            if (item.sel == 1)
                return item;
        }
        function deleteItem(ev) {
            var selecteditems = vm.items.filter(selitem);
            if (selecteditems.length != 0) {
                var confirm = $mdDialog.confirm()

                    .textContent('The tasks will be deleted. Are you sure?')
                    .ariaLabel('Delete tasks')
                    .targetEvent(ev)
                    .ok('Yes')
                    .cancel('No');

                $mdDialog.show(confirm).then(function (result) {
                    if (result) {
                        selecteditems.forEach(function (item) {
                            var index = vm.items.indexOf(item);
                            // alert (angular.toJson(item))
                            if (index != -1) {  
                                vm.items.splice(index, 1);
                            }
                            taskStorageService.set(vm.items);

                        })
                    }

                });
            }
        }

        function priorityItem(ev) {
            var selecteditems = vm.items.filter(selitem);
            if (selecteditems.length != 0) {
                var firstPriority = angular.copy(selecteditems[0].priority);
               // alert(firstPriority);
                selecteditems.forEach(function (item) {
                    var index = vm.items.indexOf(item);
                  //  alert(angular.toJson(item))
                    if (index != -1) {
                        if (firstPriority <= 0)
                            vm.items[index].priority = firstPriority + 1;
                        else
                            vm.items[index].priority = -1;
                    }
                    taskStorageService.set(vm.items);

                })
            }

        }

        function statusItem(ev) {
            var selecteditems = vm.items.filter(selitem);
            if (selecteditems.length != 0) {
                var firstStatus = angular.copy(selecteditems[0].status);
                selecteditems.forEach(function (item) {
                    var index = vm.items.indexOf(item);
                  //  alert(angular.toJson(item))
                    if (index != -1) {
                        if (firstStatus == false)
                            vm.items[index].status = true;
                        else
                            vm.items[index].status = false;
                    }
                    taskStorageService.set(vm.items);

                })
            }

        }

    }


})(window.angular);