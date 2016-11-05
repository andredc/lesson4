(function (angular) {
    'use strict';

    angular.module('noteModule', [
        'ngMaterial',
        'ngRoute',
        'note.storage.service',
        'note.customList.directive',
        'NoteController'
    ]);


})(angular);