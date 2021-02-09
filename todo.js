"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("~~~~ New task added ~~~~");
        console.log("Task name: " + task + " inserted in the array");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("START: All items in Array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in Array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("~~~~ Task Removed ~~~~");
            console.log("Task " + task + " removed");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('drink');
myTodos.listAllTasks();
myTodos.deleteTask('drink');
