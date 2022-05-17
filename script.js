
let formElement  = document.querySelector('#form');
let inputElement = document.querySelector('#todo-myinput');
let mylist  =  document.querySelector('ul');
let clearitem = document.querySelector('#end')

let tasklist = [
 'buy groceries',
 'car service',
]




function populatelist(todo) {

     //declare a variable for li
        let newitem = document.createElement('li'); 
        
        //create span to add todo itself
          let task = document.createElement('span');
          task.innerHTML = todo;
          newitem.appendChild(task)



        // create and Add check button
         let checkElement = document.createElement('i');
         checkElement.classList.add('check','fa-regular','fa-circle-check');
         checkElement.style.color = 'rgb(90, 206, 171)'
          checkElement.style.fontSize = '16px'
          newitem.appendChild(checkElement);

        //  create and Add Edit button
           let EditElement = document.createElement('i');
           EditElement.classList.add('Edit', 'far', 'fa-edit');
           EditElement.style.color = ' rgb(89, 192, 240)' 
           EditElement.style.fontsize = '25px'
            newitem.appendChild(EditElement);


        // create and Add delete button
           let deleteElement = document.createElement('i');
           deleteElement.classList.add('delete','far', 'fa-times-circle' );
           deleteElement.style.color= 'red'
           deleteElement.fontSize = '25px'      
           newitem.appendChild(deleteElement);

       //add li to ul
       mylist.appendChild(newitem);
}
 

 

     function addtask(todo)   {
      if (todo)  {
      populatelist(todo);
    }

}

    formElement.addEventListener("submit", function (e)  { 
     e.preventDefault();
    let todo = formElement.add.value.trim()
      addtask(todo);
    formElement.reset();

    
} )





