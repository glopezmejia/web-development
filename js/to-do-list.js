//creates an array to store the tasks
const tasks = [];

//creates a task variable
let task = '';

//creates a variable for the delete command
let deleteIndex = 0;

//gets command from user 
let command = prompt('Please enter a command: ').toLowerCase();

//gets command from user while user doesn't quit app
while(command !== 'quit') {

    //performs the command accordingly
    switch(command) {
        case "new": {
            task = prompt('add a task to the list')
            tasks.push(task)
            break;
        }
        case "list": {
            if (tasks.length === 0) {
                console.log('list is empty')
                break;
            }
            console.log('=================')
            for (let i = 0; i < tasks.length; i++) {
                console.log(`[${i}]: ${tasks[i]}`)
            }
            console.log('=================')
            break;
        }
        case "delete": {
            deleteIndex = parseInt(prompt('enter the number of task you want to delete: '))
            //delete starting @ deleteIndex and delete 1 element
            tasks.splice(deleteIndex,1)
            break;
        }
        case "quit": {
            break;
        }
        default: {
            alert('command not found')
            break;
        }
    }

    command = prompt('Please enter a command: ').toLowerCase()
}

console.log('app is closing')
console.log('good bye')