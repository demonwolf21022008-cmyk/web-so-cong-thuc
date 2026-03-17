function openTab(id){

let subjects=document.querySelectorAll(".subject");
let tabs=document.querySelectorAll(".tab");

subjects.forEach(s=>s.classList.remove("active"));
tabs.forEach(t=>t.classList.remove("active"));

document.getElementById(id).classList.add("active");
document.getElementById("tab_"+id).classList.add("active");

}

function addChapter(subjectId){

let name=prompt("Tên chuong:");
if(!name) return;

let chapter=document.createElement("div");
chapter.className="chapter";

let title=document.createElement("h3");
title.innerText=name;

let btn=document.createElement("button");
btn.innerText="Thêm công th?c";

btn.onclick=function(){
addNote(chapter);
}

chapter.appendChild(title);
chapter.appendChild(btn);

document.getElementById(subjectId).appendChild(chapter);

}

function addNote(chapter){

let text=prompt("Nh?p công th?c:");
if(!text) return;

let source=prompt("Ngu?n:");

let note=document.createElement("div");
note.className="note";

let p=document.createElement("p");
p.innerText=text;

let s=document.createElement("div");
s.style.color="gray";
s.style.fontSize="14px";
s.innerText="Ngu?n: "+(source?source:"Không rõ");

let controls=document.createElement("div");
controls.className="controls";

let edit=document.createElement("button");
edit.innerText="S?a";

edit.onclick=function(){
let newText=prompt("S?a:",p.innerText);
if(newText) p.innerText=newText;
}

let del=document.createElement("button");
del.innerText="Xóa";
del.className="delete";

del.onclick=function(){
note.remove();
}

controls.appendChild(edit);
controls.appendChild(del);

note.appendChild(p);
note.appendChild(s);
note.appendChild(controls);

chapter.appendChild(note);

}
