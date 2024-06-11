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
});

cross.addEventListener('click',(e)=>{
  if(e.target.tagName==='IMG'){
    openTab.classList.remove('open-tab');
    addIcon.classList.remove('active');
    addButton.classList.remove('remove');
    cross.classList.remove('remove');
  }
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
    if(description.value!==''){
      let para=document.createElement('p');
      para.innerHTML=description.value;
      list.appendChild(para);
    }
  }
  taskName.value="";
  description.value="";
});

let taskList=document.querySelector('.task-list');

taskList.addEventListener('click', (e)=>{
  if(e.target.tagName==='LI' || e.target.tagName==='P'){
    e.target.classList.toggle('checked');
  }else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
  }
}, false);

