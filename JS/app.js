// (function () {
// 'use strict';
//
// angular.module('DIApp', [])
// .controller('DIController', DIController);
//
// DIController.$inject = ['$scope', '$filter']
//
// function DIController ($scope, $filter) {
//   $scope.name = "Vansh";
//
//   $scope.upper = function () {
//     var upCase = $filter('uppercase')
//     $scope.name = upCase($scope.name)
//   };
// }
//
// })();
// (function(){'use strict';angular.module('DIApp',[]).controller('DIController',DIController);DIController.$inject=['$scope','$filter']
// function DIController($scope,$filter){$scope.name="Vansh";$scope.upper=function(){var upCase=$filter('uppercase')
// $scope.name=upCase($scope.name)}}})()


// (function () {
// 'use strict';
//
// angular.module('MsgApp', [])
// .controller('MsgController', MsgController);
//
// MsgController.$inject = ['$scope'];
// function MsgController($scope) {
//   $scope.name = "Vansh";
//
//   $scope.sayMessage = function () {
//     return "Vnashs likes junk food, OH YEA!!";
//   };
// }
// })();

// (function () {
// 'use strict';
//
// angular.module('CounterApp', [])
// .controller('CounterController', CounterController);
//
// CounterController.$inject = ['$scope', '$timeout'];
// function CounterController($scope, $timeout) {
//   $scope.onceCounter = 0;
//   $scope.counter = 0;

  // $scope.showNumberOfWatchers = function () {
  //   console.log("# of Watchers: ", $scope.$$watchersCount);
  // };
  //
  // $scope.countOnce = function () {
  //   $scope.onceCounter = 1;
  // };
//   $scope.upCounter = function () {
//     $timeout(function () {
//             $scope.counter++;
//             console.log("Counter incremented!");
//     }, 2000);
// };






  //   setTimeout(function () {
  //     $scope.$apply(function () {
  //       $scope.counter++;
  //       console.log("Counter incremented!");
  //     });
  //   }, 2000);
  // };



  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.counter++;
  //     console.log("Counter incremented!");
  //     $scope.$digest();
  //   }, 2000);
  // };

  // $scope.$watch(function () {
  //   console.log("Digest Loop Fired!")
  // });

  // $scope.$watch('onceCounter', function (newValue, oldValue) {
  //   console.log("onceCounter old value:", oldValue);
  //   console.log("onceCounter new value: ", newValue);
  // });
  //
  // $scope.$watch('counter', function (newValue, oldValue) {
  //   console.log("counter old value:", oldValue);
  //   console.log("counter new value: ", newValue);
  // });
  //
// }
//
// })();








// (function () {
// 'use strict';
//
// angular.module('BindingApp', [])
// .controller('BindingController', BindingController);
//
// BindingController.$inject = ['$scope'];
// function BindingController($scope) {
//   $scope.firstName = "Vanashke";
//   // $scope.fullName = "";
//
//   $scope.showNumberOfWatchers = function () {
//     console.log("# of Watchers: ", $scope.$$watchersCount);
//   };
//   $scope.setFullName = function () {
//     $scope.fullName = $scope.firstName + " " + "Patiboi";
//   };
//
//   $scope.logFirstName = function () {
//     console.log("First name is: ", $scope.firstName);
//   };
//
//   $scope.logFullName = function () {
//       console.log("Full name is: ", $scope.fullName);
//   };
// }
//
// })();

// (function () {
// 'use strict';
//
// var shoppingList1 = [
//   "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
// ];
//
// var shoppingList2 = [
//   {
//     name: "Milk",
//     quantity: "2"
//   },
//   {
//     name: "Donuts",
//     quantity: "200"
//   },
//   {
//     name: "Cookies",
//     quantity: "300"
//   },
//   {
//     name: "Chocolate",
//     quantity: "5"
//   }
//
// ];
//
// angular.module('ShoppingListApp', [])
// .controller('ShoppingListController', ShoppingListController)
//
// ShoppingListController.$inject = ['$scope'];
// function ShoppingListController() {
//   $scope.shoppingList1 = shoppingList1;
//   $scope.shoppingList2 = shoppingList2;
// }
//
// })();
