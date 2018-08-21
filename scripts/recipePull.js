'use strict';

function RecipePull($http, $location) {
    const vm = this;
    vm.results = null;

    vm.searchRecipe = (recipeInfo) => {
        // Base URL for grabbing recipes with the search text field's text
        let url = `https://api.edamam.com/search?q=${recipeInfo.text}&app_id=8411dab9&app_key=e39015f1fb6854b7456a750bbca41575`;
        // This string will hold health restrictions that have been checked
        let healthAddition = '';
        console.log(recipeInfo.reqs);
        // If the health requirements aren't empty, then go ahead and build onto the healthAddition string
        if(recipeInfo.reqs !== null && recipeInfo.reqs.length > 0) {
            console.log('not null or empty');
            for(let i = 0; i < recipeInfo.reqs.length; i++) {
                healthAddition += `&diet=${recipeInfo.reqs[i]}`;
            }
        }
        // If we have the 'useCalories' checkbox checked, restrict to the calorie range
        // in the calorie object
        // NOTE: The calories property on the object is the total number of calories in
        // the entire dish.  To get calories per serving, take the object's calories and divide by yield
        if(recipeInfo.calorie.useCalories) {
            healthAddition+=`&calories=${recipeInfo.calorie.minimum}-${recipeInfo.calorie.maximum}`;
        }

        console.log(recipeInfo.reqs.length);
        url += healthAddition;
        console.log(healthAddition);


        return $http({
            url: url,
            method: "GET",
        }).then((response) => {
            vm.results = response;
            $location.url("/results");
            console.log(vm.results);
        });
    }
}

angular.module('App').service('RecipePull', RecipePull);