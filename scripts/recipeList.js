"use strict";

const recipeList = {
    templateUrl: "recipeList.html" 
        
    ,

    controller: ["RecipePull", "FavoritesService", function(RecipePull, FavoritesService) {
        const vm = this;
        vm.restrictions = [
            'low-carb',
            'high-protein',
            'low-fat',
        ];
        
        vm.results = RecipePull.results;

        vm.addToFavorites = (recipe) => FavoritesService.addToFavorites(recipe);
    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);