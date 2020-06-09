$("#currentDay").text(moment())
var task9Am = document.getElementById("task9Am")
var save9Am = document.getElementById("save9Am")
var task10Am = document.getElementById("task10Am")
var save10am = document.getElementById("save10Am")
var task11Am = document.getElementById("task11Am")
var save11am = document.getElementById("save11Am")
var task12Pm = document.getElementById("task12Pm")
var save12Pm = document.getElementById("save12Pm")
var task1Pm = document.getElementById("task1Pm")
var save1Pm = document.getElementById("save1Pm")
var task2Pm = document.getElementById("task2Pm")
var save2Pm = document.getElementById("save2Pm")
var task3Pm = document.getElementById("task3Pm")
var save3Pm = document.getElementById("save3Pm")
var task4Pm = document.getElementById("task4Pm")
var save4Pm = document.getElementById("save4Pm")
var task5Pm = document.getElementById("task5Pm")
var save5Pm = document.getElementById("save5Pm")

var elementRefs = {
 task9Am : document.getElementById("task9Am"),
 save9Am : document.getElementById("save9Am"),
 task10Am : document.getElementById("task10Am"),
 save10am : document.getElementById("save10Am"),
 task11Am : document.getElementById("task11Am"),
 save11am : document.getElementById("save11Am"),
 task12Pm : document.getElementById("task12Pm"),
 save12Pm : document.getElementById("save12Pm"),
 task1Pm : document.getElementById("task1Pm"),
 save1Pm : document.getElementById("save1Pm"),
 task2Pm : document.getElementById("task2Pm"),
 save2Pm : document.getElementById("save2Pm"),
 task3Pm : document.getElementById("task3Pm"),
 save3Pm : document.getElementById("save3Pm"),
 task4Pm : document.getElementById("task4Pm"),
 save4Pm : document.getElementById("save4Pm"),
 task5Pm : document.getElementById("task5Pm"),
 save5Pm : document.getElementById("save5Pm"),
}
//Load local storage data
task9Am.innerHTML=localStorage.getItem("task9Am")
task10Am.innerHTML=localStorage.getItem("task10Am")
task11Am.innerHTML=localStorage.getItem("task11Am")
task12Pm.innerHTML=localStorage.getItem("task12Pm")
task1Pm.innerHTML=localStorage.getItem("task1Pm")
task2Pm.innerHTML=localStorage.getItem("task2Pm")
task3Pm.innerHTML=localStorage.getItem("task3Pm")
task4Pm.innerHTML=localStorage.getItem("task4Pm")
task5Pm.innerHTML=localStorage.getItem("task5Pm")

var time = moment().format("HH")
var dataId = $("#task9Am").attr("data-id")

// Function for updating the clock every second
setInterval(function(){
    $("#currentDay").text(moment());
 },1000);

//Here I change the colors of time blocks based on current time of day
$('[id*="task"]').each(function(index, el){
    var timeSlot = $(el).attr('data-id');
    if (+timeSlot > time){
     $(el).addClass("bg-success");
}
    else if (+timeSlot < time){
     $(el).addClass("bg-secondary");
    } 
    else {
        $(el).addClass("bg-danger");
    }
});

// Add data to calendar and save it to local storage 
 task9Am.addEventListener("click", function(){
     task9Am.innerHTML = prompt("Please add event")
 })
save9Am.addEventListener("click", function(){
    localStorage.setItem("task9Am",task9Am.innerHTML)
})


task10Am.addEventListener("click", function(){
     task10Am.innerHTML = prompt("Please add event")
 })
save10Am.addEventListener("click", function(){
    localStorage.setItem("task10Am",task10Am.innerHTML)
})


task11Am.addEventListener("click", function(){
     task11Am.innerHTML = prompt("Please add event")
 })
save11Am.addEventListener("click", function(){
    localStorage.setItem("task11Am",task11Am.innerHTML)
})


task12Pm.addEventListener("click", function(){
     task12Pm.innerHTML = prompt("Please add event")
 })
save12Pm.addEventListener("click", function(){
    localStorage.setItem("task12Pm",task12Pm.innerHTML)
})


task1Pm.addEventListener("click", function(){
     task1Pm.innerHTML = prompt("Please add event")
 })
save1Pm.addEventListener("click", function(){
    localStorage.setItem("task1Pm",task1Pm.innerHTML)
})


task2Pm.addEventListener("click", function(){
     task2Pm.innerHTML = prompt("Please add event")
 })
save2Pm.addEventListener("click", function(){
    localStorage.setItem("task2Pm",task2Pm.innerHTML)
})


task3Pm.addEventListener("click", function(){
     task3Pm.innerHTML = prompt("Please add event")
 })
save3Pm.addEventListener("click", function(){
    localStorage.setItem("task3Pm",task3Pm.innerHTML)
})


task4Pm.addEventListener("click", function(){
     task4Pm.innerHTML = prompt("Please add event")
 })
save4Pm.addEventListener("click", function(){
    localStorage.setItem("task4Pm",task4Pm.innerHTML)
})


task5Pm.addEventListener("click", function(){
     task5Pm.innerHTML = prompt("Please add event")
 })
save5Pm.addEventListener("click", function(){
    localStorage.setItem("task5Pm",task5Pm.innerHTML)
})
