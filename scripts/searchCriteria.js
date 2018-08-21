'use strict';

const searchCriteria = {
    // Links to the template for SearchCriteria, which is in its own HTML file
    templateUrl: './searchCriteria.html',
    controller: ['RecipePull', function(RecipePull) {
        // gets this and sets to vm
        const vm = this;
        // creates empty object for us to push values onto
        vm.recipeReqs = {};
        // array that holds options for the diet restrictions
        vm.restrictions = [
            'low-carb',
            'low-sodium',
            'low-fat',
        ];
        vm.search = () => {
            // If the search box isn't null
            if(vm.recipeReqs.text !== '')
            {
                // Build empty array to hold restrictions
                let restrictArray = [];
                console.log(vm.restrictionSelections);
                // Currently not correct - need to push an array of objects instead
                // vm.recipeReqs.reqs = vm.restrictionSelections;
                for(const restriction in vm.restrictionSelections) {
                    if(vm.restrictionSelections[restriction] === true) {
                        restrictArray.push(restriction);
                    }
                }
                vm.recipeReqs.reqs=restrictArray;

                // Send call to factory with requirements
                RecipePull.searchRecipe(vm.recipeReqs);
            } else {
                // Throw error to console if search box is empty
                console.log("search field cannot be null");
            }
        }
    }]
}

angular.module('App').component('searchCriteria', searchCriteria);