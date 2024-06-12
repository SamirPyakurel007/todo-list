// --------------add-icon---------------
let addIcon=document.querySelector('.add-task-icon');
let openTab=document.querySelector('.task-tab');
let addButton=document.querySelector('.add-task-btn');
let cross=document.querySelector('.cross');

addIcon.addEventListener('click',()=>{
  addIcon.classList.add('active');
  openTab.classList.add('open-tab');
  addButton.classList.add('remove');
  cross.classList.add('remove');
  saveData();
});

cross.addEventListener('click',(e)=>{
  if(e.target.tagName==='IMG'){
    openTab.classList.remove('open-tab');
    addIcon.classList.remove('active');
    addButton.classList.remove('remove');
    cross.classList.remove('remove');
  }
  saveData();
},false);
//----------------add-button------------

addButton.addEventListener('click',()=>{

  let taskName=document.querySelector('#task-name');
  let description=document.querySelector('#description');
  let taskList=document.querySelector('.task-list');

  if(taskName.value===''){
    alert('write something!!!');
  }else{
    let list=document.createElement('li');
    list.innerHTML=taskName.value;
    taskList.appendChild(list);
    let span=document.createElement('span');
    span.innerHTML='\u00d7';
    list.appendChild(span);
    saveData();
    if(description.value!==''){
      let para=document.createElement('p');
      para.innerHTML=description.value;
      list.appendChild(para);
      saveData();
    }
  }
  taskName.value="";
  description.value="";
  saveData();
});

let taskList=document.querySelector('.task-list');

taskList.addEventListener('click', (e)=>{
  if(e.target.tagName==='LI' || e.target.tagName==='P'){
    e.target.classList.toggle('checked');
    saveData();
  }else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
  }
  saveData();
}, false);

function saveData(){
  localStorage.setItem('data',taskList.innerHTML);
}

function showTask(){
  taskList.innerHTML=localStorage.getItem('data');
}

showTask();
