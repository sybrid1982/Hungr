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
                RecipePull.searchRecipe(vm.recipeReqs);
            } else {
                // Throw error to console if search box is empty
                console.log("search field cannot be null");
            }
        }
    }]
}

angular.module('App').component('searchCriteria', searchCriteria);