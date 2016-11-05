(function () {
    'use strict';

    angular.module('note.storage.service', []);

    angular
          .module('note.storage.service')
          .service('noteStorageService', Service);

        // Service.$inject = ['$window'];

    function Service($window) {
        var vm = this;
        vm.set = set;
        vm.get = get;

        //Loads value from the session storage
        function get() {
            var json = $window.localStorage.getItem("noteStorage");
            if (json != null) {
                return angular.fromJson(json);
            }
            return null;
        }

        //Saves the value to the session storage
        function set(value) {
            $window.localStorage.setItem("noteStorage", angular.toJson(value));
        }
    }
})(angular);