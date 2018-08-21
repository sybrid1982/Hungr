'use strict';

function RecipePull($http){
    const vm = this;
    vm.results = null;

    vm.searchRecipe = (recipeInfo) => {
        return $http({
            url: `https://api.edamam.com/search?q=${recipeInfo.text}&app_id=8411dab9&app_key=e39015f1fb6854b7456a750bbca41575`,
            method: "GET",
        }).then((response) => {
            vm.results = response;
            console.log(vm.results);
        });
    }
}

angular.module('App').service('RecipePull', RecipePull);