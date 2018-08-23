"use strict";

const recipeList = {
<<<<<<< HEAD
    template: `
        <section class="recipe__container">
            <ul class="recipe__list">
                <li recipe="recipe" index="$index" ng-repeat="recipe in $ctrl.results track by $index">
                   <h1>{{ recipe.label }}</h1>
                   <p>{{ recipe.source }}</p>
                   <button ng-click="$ctrl.addToFavorites(recipe)">Add To Favorites</button>
                </li>
            </ul>
            <button ng-click='$ctrl.getMoreResults()'>More Results</button>
        </section>
    `,
=======
    templateUrl: "recipeList.html",
>>>>>>> 03ccb972e9984858de0a6e5466727c75705560aa

    controller: ["RecipePull", "FavoritesService", function(RecipePull, FavoritesService) {
        const vm = this;
        vm.restrictions = [
            'low-carb',
            'high-protein',
            'low-fat',
        ];
        
        vm.results = RecipePull.results;

        vm.addToFavorites = (recipe) => FavoritesService.addToFavorites(recipe);
        vm.getMoreResults = () => {
            RecipePull.searchRecipe(null, false).then(() => {
                vm.results = RecipePull.results;
            });
        }
    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);