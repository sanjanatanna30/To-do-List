
// const inputbox = document.getElementById('input-box');
// const listcontainer = document.getElementById('list-container');

// function addTask(){
//     if(inputbox.value === ''){
//         alert("You must write something!")
//     }
//     else{
//         let li = document.createElement('li');
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);
//         // cross icon
//         let span = document.createElement('span');  
//         // here u00d7 is used for cross icon
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputbox.value = '';
//     saveData();
// }

// listcontainer.addEventListener('click', function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// // storing the todo list data
// function saveData(){
//     localStorage.setItem("data",listcontainer.innerHTML);
// }
// // Display data again when we revisit the site
// function showTask(){
//     listcontainer.innerHTML = localStorage.getItem("data");
// }
// showTask();
