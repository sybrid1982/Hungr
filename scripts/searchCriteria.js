'use strict';

const searchCriteria = {
    templateUrl: './searchCriteria.html',
    controller: ['RecipePull', '$location', function(RecipePull, $location) {
        const vm = this;
        vm.recipeReqs = {};
        vm.search = () => {
            if (vm.recipeReqs.text !== '') {
                RecipePull.searchRecipe(vm.recipeReqs);
                // $location.path("/results");
            } else {
                console.log("search field cannot be null");
            }
        }
    }]
}

angular.module('App').component('searchCriteria', searchCriteria);