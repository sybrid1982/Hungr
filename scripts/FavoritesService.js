"use strict";

function FavoritesService() {
  const vm = this;
  vm.favorites = [];

  vm.addToFavorites = (recipe) => {
    vm.favorites.unshift(recipe);
    console.log(vm.favorites);
  }
}

angular
  .module("App")
  .service("FavoritesService", FavoritesService);