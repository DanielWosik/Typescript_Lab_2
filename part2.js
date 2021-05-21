var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("__________ Mew Task Added __________");
    console.log("Task " + task + " instered in the list");
    return tasks.length;
}
function listAllTasks() {
    console.log("Start: all items in Array:");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End: all items in Array:");
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("_____________ Task Removed _____________");
        console.log("task " + task + " removed from list.");
    }
    return tasks.length;
}
addTask('wake up');
addTask('sleep');
listAllTasks();
deleteTask('sleep');
