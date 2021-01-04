const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
// access to the html object


const TODOS_LS = "toDos";  // local storage 
let toDos =[]; // emptry array for the todo list 


function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));// JSON.stringify to make it as string
    // local sotrage can only save string values.
    // js object --> string
}



function paintToDo(text){
    const potato =document.createElement("li"); // create li tag
    const delBtn = document.createElement("button");  // create button
    delBtn.innerHTML=" ❌ ";  // button inside
    delBtn.addEventListener("click",deleteToDo);  // button event if click -> delte todo
    const onion = document.createElement("span"); 
    const newId= toDos.length+1;    // li id 

    onion.innerText =text; // text that you write in the todo 
    potato.appendChild(onion);  
    potato.appendChild(delBtn);
    toDoList.appendChild(potato);
    potato.id =newId;   // give id to li 
    

    const toDoObj = {
        text:text,
        id: newId   
    };   // this object to the toDos array
    toDos.push(toDoObj);  // add the array object
    saveTodos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);  // take string back to object
        console.log(parsedToDos);
        parsedToDos.forEach(function(eachItem){
            paintToDo(eachItem.text);
        })// each task it will shows 
        // eachItem .text or id or both?

    }
}

function handleSubmit(event){

    event.preventDefault();
    const currentValue= toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}


function deleteToDo(event){

    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos= toDos.filter(function (toDo) 
    {
        return toDo.id !== parseInt(li.id);
    });// check if li id is exist of
    toDos = cleanToDos;
    saveTodos();
}


function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}


init()


