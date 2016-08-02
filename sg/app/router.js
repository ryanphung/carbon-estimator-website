'use strict';

angular.module('app').config([
    '$routeProvider', 'TabletopProvider',
    function ($routeProvider, $tabletopProvider) {    
    $tabletopProvider.setTabletopOptions({
        key: "https://docs.google.com/spreadsheets/d/1QC1qEfeDZdGcd0d5Bv7WQSwonSQvnjSDmxN2BrZOFOE/pubhtml",
        prettyColumnNames: false,
        parseNumbers: true
    });
    
    $routeProvider
        .when("/", { // Home
            templateUrl: "app/partials/main.html", controller: "MainController"
        });
}]);