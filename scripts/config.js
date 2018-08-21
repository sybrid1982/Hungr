"use strict";

angular
    .module("App")
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/results", {
                template: `<recipe-list></recipe-list>`
            })
            .when("/search", {
                template: `<search-criteria></search-criteria>`
            })
            .otherwise({
                redirectTo: "/search"
            })
    }])