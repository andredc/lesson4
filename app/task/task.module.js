(function (angular) {
    'use strict';

    angular.module('taskModule', [
        'ngMaterial',
        'ngRoute',
        'task.storage.service',
        'task.customList.directive',
        'task.customGrid.directive',
         'task.customCard.directive',
        'TaskController',
        'FormController',
        'EditController'
    ]);


})(angular);