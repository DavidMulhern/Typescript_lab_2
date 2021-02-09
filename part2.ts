let tasks: string[] = [];

function addTask(task:string): number{

    tasks.push(task);
    console.log("~~~~ New task added ~~~~");
    console.log("Task name: " + task + " inserted in the array");
    return tasks.length;
}

function listAllTasks():void{
    console.log("START: All items in Array")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("END: All items in Array")
}

function deleteTask(task:string):number{
    let index:number = task.indexOf(task);
    if(index >-1){
        tasks.splice(index, 1);
        console.log("~~~~ Task Removed ~~~~");
        console.log("Task " + task + " removed");
    }
    return tasks.length;
}

let numItems : number = addTask('Wake up');
console.log("Number of items in list: " + numItems);
addTask('Sleep');

listAllTasks();

deleteTask('Sleep');