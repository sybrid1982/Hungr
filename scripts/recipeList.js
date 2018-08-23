"use strict";

const recipeList = {
    templateUrl: "recipeList.html",

    controller: ["RecipePull", "FavoritesService", "$location", function(RecipePull, FavoritesService, $location) {
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

        vm.location = () => {
            $location.url("/favorites");
        }
    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);