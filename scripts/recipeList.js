"use strict";

const recipeList = {
    template: `
        <section class="recipe__container">
            <ul class="recipe__list">
                <li recipe="recipe" index="$index" ng-repeat="recipe in $ctrl.results track by $index">
                   <h1>{{ recipe.label }}</h1>
                   <p>{{ recipe.source }}</p>
                   <button ng-click="$ctrl.addToFavorites(recipe)">Add To Favorites</button>
                </li>
            </ul>
        </section>
    `,

    controller: ["RecipePull", "FavoritesService", function(RecipePull, FavoritesService) {
        const vm = this;
        
        vm.results = RecipePull.results;

        vm.addToFavorites = (recipe) => FavoritesService.addToFavorites(recipe);
    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);