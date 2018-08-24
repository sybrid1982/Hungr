"use strict";

const recipeList = {
    templateUrl: "recipeList.html",

    controller: ["RecipePull", "FavoritesService", "$location", function(RecipePull, FavoritesService, $location) {
        const vm = this;
        vm.title = RecipePull.lastRecipeInfo.text;
        vm.restrictions = [
            'low-carb',
            'high-protein',
            'low-fat',
        ];
        vm.recipeReqs = { calorie: 
            {
                minimum: '',
                maximum: '',
            }
        };

        vm.results = RecipePull.results;

        vm.addToFavorites = (recipe) => FavoritesService.addToFavorites(recipe);
        vm.getMoreResults = () => {
            RecipePull.searchRecipe(null, false).then(() => {
                vm.results = RecipePull.results;
            });
        }

        vm.search = () => {
            // If the search box isn't null
            if(vm.recipeReqs.text !== '')
            {
                // Build empty array to hold restrictions
                let restrictArray = [];

                // Loop over the restrictionSelections object
                for(const restriction in vm.restrictionSelections) {
                    // For each restriction added to the restrictionSelections, if it has a value of true, push the property name to the array as a restriction to be sent to the factory
                    if(vm.restrictionSelections[restriction] === true) {
                        restrictArray.push(restriction);
                    }
                }
                // Take the array built above and put it in recipeReqs to send to the factory
                vm.recipeReqs.reqs=restrictArray;

                // Send call to factory with requirements
                RecipePull.searchRecipe(vm.recipeReqs, true).then(()=>{
                    vm.results = RecipePull.results;
                });
            } else {
                // Throw error to console if search box is empty
                console.log("search field cannot be null");
            }
        }


        vm.location = () => {
            $location.url("/favorites");
        }
    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);