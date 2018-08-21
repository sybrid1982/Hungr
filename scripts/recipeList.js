"use strict";

const recipeList = {
    template: `
        <section class="recipe__container">
            <ul class="recipe__list">
                <li>
                   {{ $ctrl.results.data.hits[1].recipe.label }}
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