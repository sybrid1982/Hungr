"use strict";

const recipeList = {
    template: `
        <section class="recipe__container">
            <ul class="recipe__list">
                <li ng-repeat="recipe in $ctrl.results track by $index">
                   <h1>{{ recipe.label }}</h1>
                   <p>{{ recipe.source }}</p>
                </li>
            </ul>
        </section>
    `,

    controller: ["RecipePull", function(RecipePull) {
        const vm = this;
        
        vm.results = RecipePull.results;
       
    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);