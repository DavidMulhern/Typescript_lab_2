var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("~~~~ New task added ~~~~");
    console.log("Task name: " + task + " inserted in the array");
    return tasks.length;
}
function listAllTasks() {
    console.log("START: All items in Array");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("END: All items in Array");
}
function deleteTask(task) {
    var index = task.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("~~~~ Task Removed ~~~~");
        console.log("Task " + task + " removed");
    }
    return tasks.length;
}
var numItems = addTask('Wake up');
console.log("Number of items in list: " + numItems);
addTask('Sleep');
listAllTasks();
deleteTask('Sleep');
