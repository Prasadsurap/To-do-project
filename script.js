const addBtn=document.querySelector("#add-btn");
const newTaskInput=document.querySelector("#wrapper input");
const tasksContainer=document.querySelector("#tasks");
const error=document.querySelector("#error");
const countValue=document.querySelector("#count-value");
let taskCount=0;

const displayCount=(taskCount)=>{                                                    
    countValue.innerHTML=taskCount;
}
const addTask =()=>{
    const taskName =newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName)
    {
        setTimeout(()=>{
            error.style.display="block"
        },200);
        return;
    }

    
    const task=`<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
        <i class="fa-solid fa-pen-to-square">
    </i></button>
    
    <button class="delete">
        <i class="fa-solid fa-trash">
    </i></button>
    </div>`

    tasksContainer.insertAdjacentHTML("beforeend",task);
   
    const deleteButtons=document.querySelectorAll(".delete")
    deleteButtons.forEach((button)=>{
        button.onclick=()=>{
            button.parentNode.remove();
            taskCount -=1;
            displayCount(taskCount);
        }
    })          
    
    const editButoons=document.querySelectorAll(".edit");
    editButoons.forEach((editBtn)=>{
        editBtn.onclick=(e)=>{
             let targetElement=e.target;
             if(!(e.target.className=="edit")){
                targetElement=e.target.parentElement;
             }
             newTaskInput.value=targetElement.previousElementSibling?.innerHTML;
             targetElement.parentNode.remove();
             taskCount-1;
             displayCount(taskCount);

        }
    })
    const tasksCheck=document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkBox)=>{
        checkBox.onchange= () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if(checkBox.checked){
                taskCount -= 1;
            }
            else{
                taskCount += 1;
            }
            displayCount(taskCount)
        }
    })
    taskCount +=1;
    displayCount(taskCount);
    newTaskInput.value="";

};

addBtn.addEventListener("click",addTask);
window.onload=()=>{
    taskCount=0;
    displayCount(taskCount);
    newTaskInput.value="";
}






// const addBtn = document.querySelector("#add-btn");
// const newTaskInput = document.querySelector("#wrapper input");
// const tasksContainer = document.querySelector("#tasks");
// const error = document.querySelector("#error");
// const countValue = document.querySelector("#count-value");
// let taskCount = 0;

// const displayCount = (taskCount) => {
//     if (countValue) {
//         countValue.innerHTML = taskCount;
//     }
// };

// const addTask = () => {
//     const taskName = newTaskInput.value.trim();
//     error.style.display = "none";
//     if (!taskName) {
//         setTimeout(() => {
//             error.style.display = "block";
//         }, 200);
//         return;
//     }

//     const task = `<div class="task">
//         <input type="checkbox" class="task-check">
//         <span class="taskname">${taskName}</span>
//         <button class="edit">
//             <i class="fa-solid fa-pen-to-square"></i>
//         </button>
//         <button class="delete">
//             <i class="fa-solid fa-trash"></i>
//         </button>
//     </div>`;

//     tasksContainer.insertAdjacentHTML("beforeend", task);
//     taskCount += 1; // Increase task count when a new task is added
//     displayCount(taskCount);

//     const deleteButtons = document.querySelectorAll(".delete");
//     deleteButtons.forEach((button) => {
//         button.onclick = () => {
//             button.parentNode.remove();
//             taskCount -= 1; // Decrease task count when a task is removed
//             displayCount(taskCount);
//         };
//     });

//     const editButtons = document.querySelectorAll(".edit");
//     editButtons.forEach((editBtn) => {
//         editBtn.onclick = (e) => {
//             let targetElement = e.target;
//             if (!targetElement.classList.contains("edit")) {
//                 targetElement = e.target.parentElement;
//             }
//             newTaskInput.value = targetElement.previousElementSibling?.innerHTML;
//             targetElement.parentNode.edit();
//             taskCount -= 1; // Decrease task count when a task is being edited (and removed temporarily)
//             displayCount(taskCount);
//         };
//     });

//     const tasksCheck = document.querySelectorAll(".task-check");
//     tasksCheck.forEach((checkBox) => {
//         checkBox.onchange = () => {
//             checkBox.nextElementSibling.classList.toggle("completed");
//             if (checkBox.checked) {
//                 taskCount -= 1; // Decrease count if task is marked as completed
//             } else {
//                 taskCount += 1; // Increase count if task is unchecked
//             }
//             displayCount(taskCount);
//         };
//     });
//     taskCount+=1;
//     newTaskInput.value = ""; // Clear the input after adding a task
// };

// addBtn.addEventListener("click", addTask);
// window.onload = () => {
//     taskCount = 0;
//     displayCount(taskCount);
//     newTaskInput.value = "";
// };
