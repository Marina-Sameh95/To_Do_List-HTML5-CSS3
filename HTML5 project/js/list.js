 var i=0;
  if(localStorage.getItem('list'))
 {
     document.getElementById('todo').innerHTML=localStorage.getItem('list');
 }

function add() {
        var ul = document.getElementById('ul1');
        var li = document.createElement('li');
        li.innerText = document.getElementById('myInput').value;
        i++;
        li.setAttribute('id',i);
        li.setAttribute('ondragover','allowDrop(event)');
        li.setAttribute('draggable','true');
        li.setAttribute('ondragstart','drag(event)');
        ul.appendChild(li);
        localStorage.setItem('list',document.getElementById('todo').innerHTML);
}

function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id);

}

function drop(ev){
    var list= ev.target;
    var newlist= ev.dataTransfer.getData("text");
    var draggedElement= document.getElementById(newlist);
    list.appendChild(draggedElement);
    localStorage.setItem('list',document.getElementById('todo').innerHTML);


}

function allowDrop(ev){
    ev.preventDefault();
}

function stopDropping(ev){
     ev.stopPropagation();
 }
