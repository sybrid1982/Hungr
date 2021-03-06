"use strict";

const favoritesPage = {
  template: `
  <div class="container">
    <header class="favorites__header">
      <nav class="results__header--nav">
        <a href="#!/search" class="logo">Hungr</a>
        <h1 class="fav--title">My Favorite Recipes</h1>
        <button ng-click="$ctrl.location()" class="search-button">Search</button>
      </nav>
    </header>
    <section class="favorites__container">
      <ul class="favorites__list">
          <li ng-repeat="recipe in $ctrl.favList track by $index">
          <button class="delete--button" ng-click="$ctrl.deleteFavorites($index)">Delete</button>
          <a href="{{ recipe.url }}" target="_blank"><img src="{{ recipe.image }}"></a>
          <h1 class="recipe__label">{{ recipe.label }}</h1>
          <p>Source: <span>{{ recipe.source }}<span></p>
          <details>
            <summary>Ingredients</summary>
            <p ng-repeat="ingredient in recipe.ingredients">- {{ ingredient.text }}</p>
          </details>
          </li>
      </ul>
    </section>
  </div>
  `,

  controller: ["FavoritesService", "$location", function(FavoritesService, $location) {
    const vm = this;
    vm.favList = FavoritesService.favList;

    vm.deleteFavorites = (index) => {
      FavoritesService.deleteFavorites(index);
    }
    vm.location = () => {
      $location.url("/results");
    }

  }]
}

angular
  .module("App")
  .component("favoritesPage", favoritesPage);