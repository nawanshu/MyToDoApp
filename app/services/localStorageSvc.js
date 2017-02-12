'use strict';

angular.module('myToDo')
    .service('localStorageSvc', ['$window', function ($window) {
       var taskList = [];
       this.getTaskList = function () {
            //Get Task List from Local Storage  
            taskList = angular.fromJson(localStorage.getItem("tasks"));                         
            return taskList ? taskList : [];
        };

        this.updateTaskList = function (list) {
            if (window.localStorage && list) {  
            //Add task list 
                localStorage.setItem("tasks", angular.toJson(list));  
            }  
            taskList = list; 
        };
    }]);
