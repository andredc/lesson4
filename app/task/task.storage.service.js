(function () {
    'use strict';

    angular.module('task.storage.service', []);

    angular
          .module('task.storage.service')
          .service('taskStorageService', Service);

         Service.$inject = ['$window'];

    function Service($window) {
        var vm = this;
        vm.set = set;
        vm.get = get;

        //Loads value from the session storage
        function get() {
            var json = $window.localStorage.getItem("taskStorage");
            if (json != null) {
                return angular.fromJson(json);
            }
            return null;
        }

        //Saves the value to the session storage
        function set(value) {
            $window.localStorage.setItem("taskStorage", angular.toJson(value));
        }
    }
})(angular);