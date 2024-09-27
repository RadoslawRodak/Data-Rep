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

listAllTasks(tasks);
//tasks.push("something");

//tasks.length;


//tasks.forEach()

//let index = tasks.indexOf(value);

//tasks.splice(index, 1);