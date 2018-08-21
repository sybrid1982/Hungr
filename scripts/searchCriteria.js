'use strict';

const searchCriteria = {
    templateUrl: './searchCriteria.html',
    controller: ['RecipePull', function(RecipePull) {
        const vm = this;
        vm.recipeReqs = {};
        vm.restrictions = [
            'Low Carb',
            'Gluten Free',
            'High Protein',
            'Vegan',
            'Vegetarian',
            'Sugar-Free',
        ];
        vm.search = () => {
            if(vm.recipeReqs.text !== ''){
                RecipePull.searchRecipe(vm.recipeReqs);
            } else {
                console.log("search field cannot be null");
            }
        }
    }]
}

angular.module('App').component('searchCriteria', searchCriteria);