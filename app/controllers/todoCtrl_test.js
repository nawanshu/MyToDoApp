'use strict';

describe('myToDo', function () {

  beforeEach(module('myToDo'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('addTask', function () {
		it('After adding taskList length should be increased', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', { $scope: $scope });
			$scope.taskList = [{"task":"Task 1","isDone":false}];
			$scope.count = $scope.taskList.length;
			$scope.addTask();
			expect($scope.count).toBe(2);
		});	
	});
	
	 describe('deleteTask', function () {
		it('After deleting taskList length should be decreased', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', { $scope: $scope });
			$scope.taskList = [{"task":"Task 1","isDone":false}];
			$scope.count = $scope.taskList.length;
			$scope.deleteTask();
			expect($scope.count).toBe(0);
		});	
	});
	
	 describe('updateTask', function () {
		it('After updating taskList length should remain same', function () {
			var $scope = {};
			var index = 0;
			var controller = $controller('todoCtrl', { $scope: $scope });
			$scope.taskList = [{"task":"Task 1","isDone":false}];
			$scope.task = $scope.taskList[index].task;
			$scope.count = 1;
			$scope.updateTask(index);
			expect($scope.count).toBe(1);
		});	
	});
	
	describe('completeTask', function () {
		it('After completing task done status should to changes to true', function () {
			var $scope = {};
			var index = 0;
			var controller = $controller('todoCtrl', { $scope: $scope });
			$scope.taskList = [{"task":"Task 1","isDone":false}]
			$scope.taskList[index].isDone = false;
			$scope.completeTask(index);
			expect($scope.taskList[index].isDone).toBe(true);
		});	
	});
	
	describe('inCompleteTask', function () {
		it('After undoing task done status should to changes to false', function () {
			var $scope = {};
			var index = 0;
			var controller = $controller('todoCtrl', { $scope: $scope });
			$scope.taskList = [{"task":"Task 1","isDone":false}]
			$scope.taskList[index].isDone = true;
			$scope.inCompleteTask(index);
			expect($scope.taskList[index].isDone).toBe(false);
		});	
	});
});
