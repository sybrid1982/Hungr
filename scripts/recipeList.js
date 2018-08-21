"use strict";

const recipeList = {
    template: `
        <section class="recipe__container">
            <ul class="recipe__list">
                <li ng-repeat="recipe in $ctrl.results.data.hits.recipe">
                   <h1>{{ $ctrl.recipe.label }}</h1>
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