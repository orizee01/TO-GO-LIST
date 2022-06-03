
let inputElement = document.querySelector('#todo-myinput');
let formElement  = document.querySelector('#form');
let mylist  =  document.querySelector('ul');
let clearitem = document.querySelector('#clear');

let tasklist = [
    "buy gorceries",
    "buy books",
]



function populatelist(todo){
let newitem = document.createElement('li');

 // create form and add classlist
 let form = document.createElement('form');
 let task = document.createElement('input');
 task.type = "text"
 task.value = todo;
 task.disabled = "true"
 form.appendChild(task);
 form.classList.add('task');



 //create div for the icon and add classlist
 let icons = document.createElement('div');
 icons.classList.add('icons');

//create  and add  check button
let check = document.createElement('input')
check.type = 'checkbox'
icons.appendChild(check);



//create add edit button
let editbtn = document.createElement('button');
editbtn.classList.add('edit');
let EditElement = document.createElement('i');
EditElement.classList.add('edit','far','fa-edit');
editbtn.appendChild(EditElement);
icons.appendChild(editbtn);


//create add delete button
let deletebtn = document.createElement('button');
deletebtn.classList.add('delete');
let deleteElement = document.createElement('i');
deleteElement.classList.add('delete', 'far', 'fa-times-circle'); 
deletebtn.appendChild(deleteElement);
icons.appendChild(deletebtn);

newitem.appendChild(form);
newitem.appendChild(icons)
 
//add li to ul
 mylist.appendChild(newitem)

}

mylist.addEventListener('click', function (e) {
 e.preventDefault()
 if(e.target.classList.contains('delete')) {
  e.target.parentElement.parentElement.parentElement.remove()
 }
 if(e.target.classList.contains('edit')){
  let form = e.target.parentElement.parentElement.previousSibling
  form.lastChild.disabled = false;
  form.addEventListener('submit', (event) =>{ 
e.preventDefault();
 let submit = form.lastChild.disabled("true");
    

    

}     



  )
  
 }
})



function addtask (todo) { 
 if(todo){
 populatelist(todo);
}

} 

formElement.addEventListener("submit", (e) =>{ e.preventDefault(); 
 let todo = formElement.add.value.trim();

 if(todo.length !=0) {
 addtask(todo);
 formElement.reset();
 }else {
     alert('please input task');
 }
})


clearitem.addEventListener(
  "click",
  function () {
    mylist.innerHTML = "";
    inputElement.value = "";
    clearitem.classList.remove("clear-appear");
  },
  false
);




