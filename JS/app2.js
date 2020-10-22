(function () {
'use strict';

var shoppingList = [
  "Milk", "Food", "even more food", "Chocolate", "Candy", "Even more Candy", "The BEST Candy IN THE WORLD"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;
}

})();
