"use strict";

function FavoritesService() {
  const vm = this;
  vm.favorites = [];
  

  vm.addToFavorites = (recipe) => {
    vm.favorites.unshift(recipe);
    vm.addToLocalStorage(recipe);
  }
  vm.deleteFavorites = (index) => {
    vm.favorites.splice(index,1);
    vm.removeFromLocalStorage(index);
  }

  vm.favList = [];
  vm.addToLocalStorage = (recipe) => {
    vm.favList.push(recipe);
    localStorage.setItem("favorites", JSON.stringify(vm.favList)); 
  }

  vm.removeFromLocalStorage = (index) => {
    vm.favList.splice(index,1);
    localStorage.setItem("favorites", JSON.stringify(vm.favList));
  }
}

angular
  .module("App")
  .service("FavoritesService", FavoritesService);