"use strict";

const recipeList = {
    template: `
        <section class="recipe__container">
            <ul class="recipe__list">
                <li>
                   <h1>{{ $ctrl.results.data.hits[0].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[0].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[1].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[1].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[2].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[2].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[3].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[3].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[4].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[4].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[5].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[5].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[6].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[6].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[7].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[7].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[8].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[8].recipe.source }}</p>
                </li>
                <li>
                   <h1>{{ $ctrl.results.data.hits[9].recipe.label }}</h1>
                   <p>{{ $ctrl.results.data.hits[9].recipe.source }}</p>
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