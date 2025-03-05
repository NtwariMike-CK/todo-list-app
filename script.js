const data = document.querySelector('#search')
const add = document.querySelector('#push')
const tasks = document.querySelector('#tasks')


// If the user clicks on Add, we need to first see if there is content in Input
// If content available, Alert a message saying task added
// If content not available, alert a message saying not task available to be added

// In the future we will check if the task is already present in the available task
// then tell them that task not yet completed

// window.alert(task)

// ADD NEW TASK
add.onclick = function(){
  if (data.value.length == 0){
    alert("Please Enter a Task")
  }
  // We will use template literals since this is vanialla js `html here, use ${to add js}`

  
  else{
    tasks.innerHTML += `
      <div class="tasks">
        <span id="taskname">
          ${data.value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;

    // DELETE TASK
    var current_tasks = document.querySelectorAll('.delete')
    for (var i=0; i < current_tasks.length; i++){
      current_tasks[i].onclick = function(){
        this.parentNode.remove()
      }
    }
    // MARK TASK AS COMPLETED
    var complete_task = document.querySelectorAll('.tasks')
    for (var i=0; i < complete_task.length; i++){
      complete_task[i].onclick = function(){
      this.classList.toggle('completed')
      }
    }
  }
}



