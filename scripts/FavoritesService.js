"use strict";

function FavoritesService() {
  const vm = this;
  vm.favList = JSON.parse(localStorage.getItem("favs")) || [];

  vm.addToFavorites = (recipe) => {
    vm.addToLocalStorage(recipe);
  }
  vm.deleteFavorites = (index) => {
    vm.removeFromLocalStorage(index);
  }

  vm.addToLocalStorage = (recipe) => {
    vm.favList.unshift(recipe);
    localStorage.setItem("favs", JSON.stringify(vm.favList));
  }

  vm.removeFromLocalStorage = (index) => {
    vm.favList.splice(index,1);
    localStorage.setItem("favs", JSON.stringify(vm.favList));
  }
}

angular
  .module("App")
  .service("FavoritesService", FavoritesService);