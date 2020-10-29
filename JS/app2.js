// (function () {
// 'use strict';
//
// var shoppingList = [
//   "Milk", "Food", "even more food", "Chocolate", "Candy", "Even more Candy", "The BEST Candy IN THE WORLD"
// ];
//
// angular.module('ShoppingListApp', [])
// .controller('ShoppingListController', ShoppingListController);
//
// ShoppingListController.$inject = ['$scope'];
// function ShoppingListController($scope) {
//   $scope.shoppingList = shoppingList;
// }
//
// })();

(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2);

ParentController1.$inject = ['$scope'];
function ParentController1($scope) {
  $scope.parentValue = 1;
  $scope.pc = this;
  $scope.pc.parentValue = 1;
}

ChildController1.$inject = ['$scope'];
function ChildController1($scope) {
  console.log("$scope.parentValue: ", $scope.parentValue);
  console.log("CHILD $scope: ", $scope);

  $scope.parentValue = 5;
  console.log("*** CHANGED: $scope.parentValue = 5 ***");
  console.log("$scope.parentValue: ", $scope.parentValue);
  console.log($scope);
}

// Controller As Syntax
ParentController2.$inject = ['$scope'];
function ParentController2($scope) {
  var parent = this;
  parent.value = 1;
}

})();
