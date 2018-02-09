Backendless.initApp("2E1CB16F-151D-7A78-FF79-286005B2DC00" , "280F4831-C5FE-9B8B-FFED-A4DED61CD100");

$(document).on("pageshow","#todopage", onPageShow);

function processResults(tasks) {
    //display the first task in an array of tasks. 
    alert(tasks[0].Task);
    alert(tasks[1].Task);
    //wipe the list clean
    $('#taskList').empty();
    //add each tasks
    for (var i = 0; i < tasks.length; i++) { 
        $('#taskList').append("<li>"+tasks[i].Task+"</li>");
        //refresh the listview
        $('#taskList').listview('refresh');
    }

}

$(document).on("click", "#addTaskButton", onAddTask);

function saved(savedTask) {
console.log( "new Contact instance has been saved" + savedTask);
}

function error(err) {
    alert(err);
}

function onPageShow() {
    Backendless.Data.of("TASKS").find().then(processResults).catch(error);
	console.log("page shown");
} 

function onAddTask() {
    console.log("add task button clicked");
    var tasktext = $('#addTaskText').val();
    var newTask = {};
    newTask.Task = tasktext;
    Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error); 
    
}
