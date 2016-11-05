(function (angular) {
    'use strict';

    angular.module('todoApp', [
        'ngMessages',
        'ngMaterial',
        'ngRoute',
        'noteModule',
        'taskModule',
        'FormController',
        'EditController'
           ]);

    angular.module('todoApp').config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/note', {
            controller: 'NoteController as nctrl',
            templateUrl: 'app/note/note.html'
        });
        $routeProvider.when('/task', {
            controller: 'TaskController as tctrl',
            templateUrl: 'app/task/task.html'
        });
        $routeProvider.when('/form', {
            controller: 'FormController as fctrl',
            templateUrl: 'app/form/form.html'
        });
       
          $routeProvider.when('/edit/:taskTitle', {
          templateUrl: '/app/edit/edit.html',
          controller: 'EditController as ectrl',
          bindToController:true
           });
        $routeProvider.otherwise({ redirectTo: '/task' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

})(angular);