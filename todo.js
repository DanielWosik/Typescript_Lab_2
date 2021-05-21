"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("__________ Mew Task Added __________");
        console.log("Task " + task + " instered in the list");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("Start: all items in Array:");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End: all items in Array:");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("_____________ Task Removed _____________");
            console.log("task " + task + " removed from list.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.listAllItems();
myTodos.deleteTask('sleep');
