"use strict";

const favoritesPage = {
  template: `
  <section class="recipe__container">
    <ul class="recipe__list">
        <li ng-repeat="recipe in $ctrl.favorites track by $index">
        <a href="{{ recipe.url }}" target="_blank" ><img src="{{ recipe.image }}"></a>
  <div class="container">
    <header class="results__header">
      <nav class="results__header--nav">
        <a href="#!/search" class="logo">Hungr</a>
        <h1 class="fav--title">My Favorite Recipes</h1>
        <button class="search--button">Search</button>
        <button ng-click="$ctrl.location()" class="fav--button">Favorites</button>
      </nav>
    </header>
    <section class="favorites__container">
      <ul class="favorites__list">
          <li ng-repeat="recipe in $ctrl.favorites track by $index">
          <button class="delete--button" ng-click="$ctrl.deleteFavorites($index)">Delete</button>
          <img src="{{ recipe.image }}">
          <h1>{{ recipe.label }}</h1>
          <p>{{ recipe.source }}</p>
          </li>
      </ul>
    </section>
  </div>
  `,

  controller: ["FavoritesService", function(FavoritesService) {
    const vm = this;
    vm.favorites = FavoritesService.favorites;
    vm.deleteFavorites = (index) => {
      FavoritesService.deleteFavorites(index);
    }
  }]
}

angular
  .module("App")
  .component("favoritesPage", favoritesPage);