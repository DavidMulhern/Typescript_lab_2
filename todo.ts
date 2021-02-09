import {todoInterface} from './todointerface';

class Todo implements todoInterface{

    constructor(){}

    tasks: Array<string>=[];

    addTask(task:string): number{

        this.tasks.push(task);
        console.log("~~~~ New task added ~~~~");
        console.log("Task name: " + task + " inserted in the array");
        return this.tasks.length;
    }
    
    listAllTasks():void{
        console.log("START: All items in Array")
        this.tasks.forEach(function(task){
            console.log(task);
        })
        console.log("END: All items in Array")
    }
    
    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index >-1){
            this.tasks.splice(index, 1);
            console.log("~~~~ Task Removed ~~~~");
            console.log("Task " + task + " removed");
        }
        return this.tasks.length;
    }

}

let myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('drink');

myTodos.listAllTasks();

myTodos.deleteTask('drink');