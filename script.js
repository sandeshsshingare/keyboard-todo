var test1 = document.getElementById("test");
var parsing = JSON.parse(localStorage.getItem("taskArr"));
var taskArr = parsing;
var taskArr = JSON.parse(localStorage.getItem("taskArr")) || [];

show();

function pushElement() {
  var inputtask = document.getElementById("inputtask").value;
  if (inputtask != "") {
    taskArr.push(inputtask);
    localStorage.taskArr = JSON.stringify(taskArr);
    show();
    clearinput();
  } else {
    alert("please give value into the input box");
  }
}

function key() {
  if (event.keyCode == 13) {
    pushElement();
  }
 
}

function clearinput() {
  var getinput = document.getElementById("inputtask");
  if ((getinput.value = "")) {
    getinput = "";
  }
}

function show() {
  var tasktable1 = document.getElementById("tasktable");
  if (taskArr.length > 0) {
    tasktable1.innerHTML = `
    <tr style="background-color: black; color: white;">
    <th>Sr no.</td>
    
    <th class = "taskset">Task List</th>
    
    
    
      <th>Edit task</th>
      
      <th>Delete task</th>

      <th>Mark as Done</th>
      </tr>
      
      `;

    for (let i = 0; i < taskArr.length; i++) {
      tasktable1.innerHTML += `
        
        <tr>
          
        <td >
        ${i + 1}
        </td>

        <td class = "taskset">
        ${taskArr[i]}
        
        <td>
        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">
        Edit
        </button>
        
        </td>
        
        <td>
                <button type="button" class="btn btn-outline-danger " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="deleteTask(${i})">
                  Delete
                  </button>
                  </td>

                   <td>
                <button type="button" class="btn btn-outline-danger " id = "done"  onclick="markDone(${i})">
                  Done
                  </button>
                  </td>
                  
                  </tr>
                  
                  `;
    }
  } else {
    tasktable1.innerHTML = taskArr;
  }
}
//mark done fn
function markDone(i) {
  var done1 = taskArr[i];
  var r = done1;
  var doneb = r.split("");
  //console.log(doneb);
  let f = 0;
  for (let j = 0; j < doneb.length; j++) {
    if (doneb[j] == "✅") {
      f = 1;
      break;
    }
  }

  if (f === 0) {
    r = "✅" + done1;
    taskArr[i] = r;
    localStorage.setItem("taskArr", JSON.stringify(taskArr));
  }
  show();
}

function deleteAll() {
  taskArr = [];
  desArr = [];
  localStorage.clear();

  show();
}
//}
var editi = 0;
var inputtaskEdit = document.getElementById("edittext");

function edit(i) {
  editi = i;

  inputtaskEdit.value = taskArr[i];
}

function saveEdit() {
  if (inputtaskEdit.value != "") {
    taskArr[editi] = inputtaskEdit.value;
    localStorage.setItem("taskArr", JSON.stringify(taskArr));
  } else {
    alert("please enter value in input field");
  }

  show();
}

var yes1 = 0;

function deleteTask(i) {
  yes1 = i;
}

function yesDelete(yes) {
  for (let j = yes1; j < taskArr.length; j++) {
    taskArr[j] = taskArr[j + 1];
  }

  taskArr.pop();

  localStorage.setItem("taskArr", JSON.stringify(taskArr));

  show();
}
