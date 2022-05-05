const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// Select The Elements

var big_wrapper;
var hamburger_menu;

function declare() {
 
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;



function events() {
  
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }
function sendform(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "saadbhai642@gmail.com",
    Password : "2012156szabist",
    To : 'saadbhai642@gmail.com',    
    From : "saadbhai642@gmail.com",
    Subject : "query ",
    Body : "name "+document.getElementById('name').value+
    "<br> Email "+document.getElementById('email').value +
    "<br> phone num: "+document.getElementById('phone').value+
    "<br> query detail "+document.getElementById('message').value
    
}).then(
  message => alert("message sent")
);

}