
let inputElement = document.querySelector('#todo-myinput');
let formElement  = document.querySelector('#form');
let post=  document.querySelector('#post');
let clearitem = document.querySelector('#clear');

formElement.addEventListener("submit", (e) =>{
 e.preventDefault();
 console.log("button clicked");

 formValidation();
});

let formValidation = () => {
if (inputElement.value ==="") {
 alert("post cannot be blank");
console.log("failure")
}else{
 console.log("success");
 acceptData();
}

}



let data = [];

let  acceptData = () => {
     data.push({
 text:inputElement.value,
 });

 localStorage.setItem("data",JSON.stringify(data));
 
     console.log(data);

createPost();

};



let createPost = () => {
post.innerHTML ="";
     data.map((x,y) => {
 return(post.innerHTML += `
 <div id =${y}>
 <p>${x.text}</p>
 <span class = "options">
      <i onClick ="editTask(this)" class="far fa-edit"></i>
      <i onClick ="deleteTask(this);createPost ()"class="far fa-times-circle"></i>
      <i onClick = "checkTask(this)"class="fa fa-circle-thin"></i>
 </span>
 </div>
 `);
     }) 
 
 inputElement.value = "";

}
 
let deleteTask = (e) => {
     e.parentElement.parentElement.remove();
     data.splice(e.parentElement.parentElement.id, 1);
      localStorage.setItem("data",JSON.stringify(data));
      console.log(data);
 
};

let editTask = (e) => {
let selectedTask = e.parentElement.parentElement;

inputElement.value = selectedTask.children[0].innerHTML;
 deleteTask(e);

};

let checkTask = (e) =>{

  }
   
  

 (() => {
     data = JSON.parse(localStorage.getItem("data")) || [];
     console.log(data);
     createPost();
    
})();
clearitem.addEventListener(
  "click",
  function () {
    post.innerHTML = "";
    inputElement.value = "";
    clearitem.classList.remove("clear-appear");
  },
  false
);