"use strict";

function FavoritesService() {
  const vm = this;
  vm.favList = JSON.parse(localStorage.getItem("favs")) || [];

  vm.addToFavorites = (recipe) => {
    vm.favList.unshift(recipe);
    localStorage.setItem("favs", JSON.stringify(vm.favList));
  }
  vm.deleteFavorites = (index) => {
    vm.favList.splice(index,1);
    localStorage.setItem("favs", JSON.stringify(vm.favList));
  }
}

angular
  .module("App")
  .service("FavoritesService", FavoritesService);