document.addEventListener('DOMContentLoaded', function() {
var inp=document.querySelectorAll('input')[0];

var searchInput = document.getElementById("search");


var main=document.getElementById("main")
var add=document.getElementById("add")

// add.addEventListener("click",function(){

function addimgdiv(student,i) {
var div=document.createElement("div")
div.className="imgdiv";
main.appendChild(div);
var img=document.createElement("img");
img.src="sticky.jpeg"
div.appendChild(img);
img.className="img"
var newdiv=document.createElement("div")
newdiv.className="head";
div.appendChild(newdiv);
var edit=document.createElement("button");
edit.className="fa-regular fa-pen-to-square edit"
div.appendChild(edit);
edit.addEventListener("click",function(){
    var headinp=document.createElement("input");
    headinp.className="headinp";
    headinp.placeholder="Edit text.."
    headinp.value=`${student.txt}`
    div.appendChild(headinp);
    var save=document.createElement("button");
    save.innerHTML="Save"
    save.className="save"
    div.appendChild(save);
save.addEventListener("click",function(){
    var editinp = headinp.value;
    student.txt = editinp;

 
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students[i] = student;
    localStorage.setItem('students', JSON.stringify(students));
message.innerHTML = ` => ${student.txt}`;
    headinp.value="";
    save.remove();
    headinp.remove();
   


})











})







var del = document.createElement("button");
del.className="fa-regular fa-trash-can del";
div.appendChild(del)
del.addEventListener("click",function(){
    div.remove();
    const notes = JSON.parse(localStorage.getItem('students'));
    const index = notes.indexOf(student);
    notes.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(notes));
});



const message = document.createElement("div");
message.className = "input";
message.innerHTML =` => ${student.txt}`;
div.appendChild(message);







var newClock = document.createElement("div");
newClock.className = "clock";
div.appendChild(newClock);


var h = document.createElement("div");
h.className = "hrs";
var mi = document.createElement("div");
mi.className = "mint";
var se = document.createElement("div");
se.className = "secd";

newClock.appendChild(h);

newClock.appendChild(mi);

newClock.appendChild(se);



var dat  =document.createElement("div");
div.appendChild(dat);
dat.className="dat"

var heading=document.createElement("div");
heading.innerHTML="Sticky Notes";
div.appendChild(heading);
heading.className="heading"












const callByInterval=()=>{
    var date=new Date()
    var hour=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()
    

if(hour > 12){
    hour-=12
}
hour=(hour < 10) ? "0"+ hour : hour;
min=(min < 10) ?"0"+min: min;
sec=(sec < 10) ?"0"+sec : sec;
    
    h.innerText=hour+" "+":";
    mi.innerText=min+" "+":" ;
    se.innerText=sec;
 
}

setInterval(callByInterval, 1000);















setInterval(() => {
    var dateinfo=  new Date();
    var doy=["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
        var dayindex=dateinfo.getDay();
        var dayname=doy[dayindex];
    var month=[
        "Januray",
        "Feburay",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Augest",
        "September",
        "October",
        "November",
        "December"];
     var monthindex=dateinfo.getMonth();
     var monthname= month[monthindex];
     var dd=dateinfo.getDate();
var year=dateinfo.getFullYear();


dat.innerText=`${dayname},${dd} ${monthname} ${year}`










})

}


function load() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach((student,i) => addimgdiv(student,i));
};

add.addEventListener('click', function () {

    let student={txt: inp.value }

   
if (localStorage.getItem('students')) {
    const data = JSON.parse(localStorage.getItem('students')) || [];
   
    localStorage.setItem('students', JSON.stringify([...data,student]));
} else {
  
    localStorage.setItem('students', JSON.stringify([ student]));
}
    addimgdiv(student);
    inp.value = ''; 
});



searchInput.addEventListener('change', function() {
    const display = searchInput.value.toLowerCase();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    main.innerHTML = ''; 
    students.forEach(student => {
        if (student.txt.includes(display)) {
            addimgdiv(student,i); 
        }
//         else{
// var result=document.createElement(div);
// main.appendChild(result);
// result.className="result";
// result.innerHTML='no result found'


//         }

    });
    searchInput.value="";
});

load(); 
















})