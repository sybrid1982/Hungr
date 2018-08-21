'use strict';

const searchCriteria = {
    template: `
        <input type='text' ng-model='$ctrl.recipeReqs.text'>
        <button type='button' ng-click='$ctrl.search();'>Click</button>
        `,
    controller: ['RecipePull', function(RecipePull) {
        const vm = this;
        vm.recipeReqs = {};
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