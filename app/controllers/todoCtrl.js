'use strict';

angular.module("myToDo")
    .controller('todoCtrl', ['$scope', 'localStorageSvc', function ($scope, localStorageSvc) {
        $scope.taskList = localStorageSvc.getTaskList();
        $scope.updateIndex = false;
        $scope.count = $scope.taskList.length;
        $scope.isUpdate = false;
        $scope.addTask = function() {
            if( $scope.updateIndex === false){
                $scope.taskList.push({ 
                    'task': $scope.task,
                    'isDone': false 
                });
            } else {
                $scope.taskList[$scope.updateIndex].task = $scope.task;
            }
            localStorageSvc.updateTaskList($scope.taskList);    
            $scope.editIndex = false;
            $scope.task = '';     
            $scope.count = $scope.taskList.length; 
        };

        $scope.updateTask = function (index) {
            $scope.task = $scope.taskList[index].task;
            localStorageSvc.updateTaskList($scope.taskList);    
            $scope.updateIndex = index;
        };

        $scope.completeTask = function (index) {
            $scope.taskList[index].isDone = true;
            localStorageSvc.updateTaskList($scope.taskList);
        };

        $scope.inCompleteTask = function (index) {
            $scope.taskList[index].isDone = false;
            localStorageSvc.updateTaskList($scope.taskList);
        };

        $scope.deleteTask = function (index) {
            $scope.taskList.splice(index, 1);
            localStorageSvc.updateTaskList($scope.taskList);  
            $scope.count = $scope.taskList.length;   
        };
    }]);
