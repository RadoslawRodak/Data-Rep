//array of sports
let tasks = ["football", "basketball", "formula 1", "tennis"];

//add task arrow function
let addTask = (task) => {
    //add new task to the end of the array
    tasks.push(task);
    console.log(task + " Task Added");

    //return array length
    return tasks.length;
}

//add gaelic to the array
console.log(addTask("Gaelic"));

//list all tasks arrow function
let listAllTasks = (tasks) => {

    tasks.forEach(task => {
        console.log(task);
    });
}

//invoke function
listAllTasks(tasks);

//arrow function for deleting tasks
let deleteTasks = (task) => {
    let index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(task + " has been removed from my Tasks")
    }

    else {
        console.log(task + " not found in my Tasks")
    }

    return tasks.length;

}

//invoke function
addTask("hockey")
addTask("rugby")
listAllTasks(tasks);
deleteTasks("dfdfasf");
deleteTasks("tennis");

//tasks.length;


//tasks.forEach()

//let index = tasks.indexOf(value);

//tasks.splice(index, 1);