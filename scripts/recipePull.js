'use strict';

function RecipePull($http, $location) {
    const vm = this;
    vm.results = null;

    vm.makeHealthReqs = (recipeInfo, healthAddition) => {
        // If the health requirements aren't empty, then go ahead and build onto the healthAddition string
        if (recipeInfo.reqs !== null && recipeInfo.reqs.length > 0) {
            console.log('not null or empty');
            for (let i = 0; i < recipeInfo.reqs.length; i++) {
                healthAddition += `&diet=${recipeInfo.reqs[i]}`;
            }
        }
        return healthAddition;
    }

    vm.makeCalorieReqs = (recipeInfo, oldUrl) => {
        // If we have the 'useCalories' checkbox checked, restrict to the calorie range
        // in the calorie object
        // NOTE: The calories property on the object is the total number of calories in
        // the entire dish.  To get calories per serving, take the object's calories and divide by yield
        if (recipeInfo.calorie.useCalories) {
            // If minimum is greater than zero, then we have a minimum.  From there we have two options: either there is a maximum (and we need to get the recipes in a calorie range), or there isn't (and we just need all meals that meet a minimum calorie count)
            if (recipeInfo.calorie.minimum > 0) {
                if (recipeInfo.calorie.maximum > 0) {
                    oldUrl += `&calories=${recipeInfo.calorie.minimum}-${recipeInfo.calorie.maximum}`;
                } else {
                    oldUrl += `&calories=${recipeInfo.calorie.minimum}%2B`
                }
                // If we reach this else statement, we do not have a minimum value.  If we have a maximum, we should set that as the maximum number of calories.  Otherwise, we ignore the check (as no calorie limits were entered) 
            } else if (recipeInfo.calorie.maximum > 0) {
                oldUrl += `&calories=${recipeInfo.calorie.maximum}`
            }
        }
        return oldUrl;
    }

    vm.searchRecipe = (recipeInfo) => {
        // Base URL for grabbing recipes with the search text field's text
        let url = `https://api.edamam.com/search?q=${recipeInfo.text}&app_id=8411dab9&app_key=e39015f1fb6854b7456a750bbca41575`;

        url = vm.makeHealthReqs(recipeInfo, url);

        url = vm.makeCalorieReqs(recipeInfo, url);

        if (recipeInfo.exclusions) {
            let noSpaceString = recipeInfo.exclusions.foodExclusion.replace(/\s/g, "+");
            url += `&exclude=${noSpaceString}`
        }

        return $http({
            url: url,
            method: "GET",
        }).then((response) => {
            // Setting results to equal an empty array.
            vm.results = [];
            // Looping through each of the api response objects and pushing them into the empty results array.
            for (let i = 0; i < 10; i++) {
                vm.results.push(response.data.hits[i].recipe);
            }
            $location.url("/results");
            console.log(vm.results);
        });
    }
}

angular.module('App').service('RecipePull', RecipePull);