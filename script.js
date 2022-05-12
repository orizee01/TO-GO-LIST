let inputElement =document.querySelector('todo-myinput');
let formElement  = document.querySelector('form');
let mylist      =     document.querySelector('ul');
let clearitem = document.querySelector('end')

let tasklist = [
 'buy groceries',
 'car service',
]




function populatelist(){
        mylist.innerHTML = '',
        tasklist.forEach(function(item){
        let newitem = document.createElement('li'); 

        // Add check button
         let checkElement = document.createElement('i');
         checkElement.classList.add('check','fa fa-check-square');
         checkElement.style.color = 'green'
         checkElement.style.fontSize = '24px'
          newitem.apprendchild(checkElement);

        // Add Edit button
           let EditElement = document.createElement('i');
           EditElement.classList.add('Edit', 'far" fa-edit');
           EditElement.style.color = ' rgb(89, 192, 240)' 
           EditElement.style.fontsize = '24px'
            newitem.apprendchild(EditElement);


        // Add delete button
           let deleteElement = document.   createElement('i');
           deleteElement.classList.add('delete','far" fa-times-circle' );
           deleteElement.style.color= 'red'
           deleteElement.fontSize = '24px'      
           newitem.apprendchild(deleteElement);

       //add li to ul
       mylist.apprendchild(newitem);
})
 
}
populatelist();
 

function addtask(){
if (formElement.value){
 tasklist.push(inputElement.value);
 populatelist();
}          
}

formElement.addEventListener("summit",function(e){e.preventDefault();
  addtask();


} )