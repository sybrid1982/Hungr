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
            .when("/favorites", {
                template: `<favorites-page></favorites-page>`
            })
            .otherwise({
                redirectTo: "/search"
            })
    }])