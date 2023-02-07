var test1 = document.getElementById("test");
var parsing = JSON.parse(localStorage.getItem("taskArr"));
var taskArr = parsing;
var taskArr = JSON.parse(localStorage.getItem("taskArr")) || [];

show();
function pushElement() {
  var inputtask = document.getElementById("inputtask").value;
  if (inputtask != "") {
    var tasko = {};
    var ischeck = false;
    tasko.task = inputtask;
    tasko.time = new Date().toLocaleString();
    tasko.ischeck = ischeck;
    taskArr.push(tasko);
    console.log(taskArr);
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
    <th>Sr no.</th>
    
    <th>Task List</th>
    
     <th >Time </th>
    
      <th>Edit task</th>
      
      <th>Delete task</th>

      <th>Mark as Done</th>
      </tr>
      
      `;

    for (let i = 0; i < taskArr.length; i++) {
      tasktable1.innerHTML += `
        
        <tr id = "mouse-click${i}" onclick = "m(${i})" >
          
                            <td > ${i + 1}</td>

                            <td class = "taskset" id = 'hlo'>${
                              taskArr[i].task
                            }</td>
                            
                              <td>
                            ${taskArr[i].time}
                            </td>
                            
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

                           <td><button type="button" class="btn btn-outline-danger " id = "done"  onclick="markDone(${i})">
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

function markDone(i) {
  var done1 = taskArr[i].task;
  var r = done1;
  console.log(r);
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
    taskArr[i].task = r;
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

  inputtaskEdit.value = taskArr[i].task;
}
//mouse.addEventListener("click", (i) => {});

function saveEdit() {
  if (inputtaskEdit.value != "") {
    taskArr[editi].task = inputtaskEdit.value;
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

/////////////////////////////////////////////////////////////////////////////////////////
//var mouse = document.getElementById(`mouse-click${i}`).innerHTML;
//var t = document.getElementById("tasktable").getElementsByTagName("tr");
function m(i) {
  alert(mouse);
}
document.onkeydown = function (e) {
  console.log(e);
  if ((e.ctrlKey = true && e.key == "s")) {
    e.preventDefault();
    pushElement();
  }
  else if ((e.ctrlKey = true && e.key == "d")) {
    e.preventDefault();
    yesDelete();
    //alert("helo");
  }

};
