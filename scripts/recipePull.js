'use strict';

function RecipePull($http, $location) {
    const vm = this;
    vm.lastRecipeInfo = null;
    vm.results = [];
    const numOfResultsPerCall = 48;
    vm.lastEndPointForResults = null;

    vm.makeHealthReqs = (recipeInfo, healthAddition) => {
        // If the health requirements aren't empty, then go ahead and build onto the healthAddition string
        if (recipeInfo.reqs !== null && recipeInfo.reqs.length > 0) {
            for (let i = 0; i < recipeInfo.reqs.length; i++) {
                healthAddition += `&diet=${recipeInfo.reqs[i]}`;
            }
        }
        return healthAddition;
    }

    vm.makeCalorieReqs = (recipeInfo, oldUrl) => {
        // If minimum is greater than zero, then we have a minimum.  From there we have two options: either there is a maximum (and we need to get the recipes in a calorie range), or there isn't (and we just need all meals that meet a minimum calorie count)
        if (recipeInfo.calorie.minimum && recipeInfo.calorie.minimum > 0) {
            if (recipeInfo.calorie.maximum && recipeInfo.calorie.maximum > 0) {
                oldUrl += `&calories=${recipeInfo.calorie.minimum}-${recipeInfo.calorie.maximum}`;
            } else {
                oldUrl += `&calories=${recipeInfo.calorie.minimum}%2B`
            }
            // If we reach this else statement, we do not have a minimum value.  If we have a maximum, we should set that as the maximum number of calories.  Otherwise, we ignore the check (as no calorie limits were entered) 
        } else if (recipeInfo.calorie.maximum && recipeInfo.calorie.maximum > 0) {
            oldUrl += `&calories=${recipeInfo.calorie.maximum}`
        }
        return oldUrl;
    }

    vm.randomizeArray = (array) => {
        let newArray = []
        while(array.length > 0) {
            let index = Math.floor(Math.random()*array.length);
            newArray.push(array[index]);
            array.splice(index, 1);
        }
        return newArray;
    }

    vm.searchRecipe = (recipeInfo, resetTracker) => {
        
        if(resetTracker) {
            vm.lastEndPointForResults = null;
            vm.lastRecipeInfo = recipeInfo;
            vm.results = [];
        }
        if(vm.lastRecipeInfo === null) {
            vm.lastRecipeInfo = recipeInfo;
        }

        // Base URL for grabbing recipes with the search text field's text
        let url = `https://api.edamam.com/search?q=${vm.lastRecipeInfo.text}&app_id=8411dab9&app_key=e39015f1fb6854b7456a750bbca41575`;

        url = vm.makeHealthReqs(vm.lastRecipeInfo, url);

        url = vm.makeCalorieReqs(vm.lastRecipeInfo, url);

        if (vm.lastRecipeInfo.exclusions) {
            let noSpaceString = vm.lastRecipeInfo.exclusions.foodExclusion.replace(/\s/g, "+");
            url += `&exclude=${noSpaceString}`
        }

        if(vm.lastEndPointForResults === null) {
            vm.lastEndPointForResults = 0;
        }
        url+=`&from=${vm.lastEndPointForResults}`

        vm.lastEndPointForResults += numOfResultsPerCall;

        // Get the first numOfResultsPerCall results
        url+=`&to=${vm.lastEndPointForResults}`;

        console.log(url);

        return $http({
            url: url,
            method: "GET",
        }).then((response) => {
            // Looping through each of the api response objects and pushing them into the empty results array.
            let tempResults = [];

            for (let i = 0; i < response.data.hits.length; i++) {
                tempResults.push(response.data.hits[i].recipe);
            }
            // Shuffle the array
            tempResults = vm.randomizeArray(tempResults);

            for (let i = 0; i < tempResults.length; i++) {
                vm.results.push(tempResults[i]);
            }

            vm.lastEndPointForResults = vm.results.length;

            $location.url("/results");
            console.log(vm.results);
        });
    }

    vm.getLastSearchParams = () => {
        return vm.lastRecipeInfo;
    }
}

angular.module('App').service('RecipePull', RecipePull);