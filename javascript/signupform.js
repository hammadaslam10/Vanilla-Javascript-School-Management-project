const firebaseConfig = {
  apiKey: "AIzaSyBvGhzU4RKM4hsR7-9Lx9KRju4XctGaeLU",
  authDomain: "univ-17c45.firebaseapp.com",
  databaseURL: "https://univ-17c45-default-rtdb.firebaseio.com",
  projectId: "univ-17c45",
  storageBucket: "univ-17c45.appspot.com",
  messagingSenderId: "154980446150",
  appId: "1:154980446150:web:b6b42bcc74578debadccc7"
};
var app = firebase.initializeApp(firebaseConfig);
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function loginstd(){
  var stduser=document.getElementById('stdusername').value
  var stdpass=document.getElementById('stdpassword').value
  for(var i=0; i<stdlist.length;i++){
    if(stduser==stdlist[i][0] && stdpass==stdlist[i][4]){
      localStorage.setItem("stduentname",JSON.stringify(i))
      alert('correct')
      window.open('./studentportal.html')
return
    }
  }
  alert('wrong pass')
}
function loginteach(){
  var stduser=document.getElementById('teachuser').value
  var stdpass=document.getElementById('teachpass').value
  for(var i=0; i<teachlist.length;i++){
    if(stduser=='admin' && stdpass=='admin'){
window.open('./adminpanel.html')
    }
    if(stduser==teachlist[i][0] && stdpass==teachlist[i][4]){
      localStorage.setItem("teachname",JSON.stringify(i))
alert('correct')
window.open('./teacherportal.html')
return
    }
  }
  alert('wrong pass')
}
var stdlist = [];
var teachlist=[];
function teachselectall(){
 
  teachno = 0
  firebase.database().ref('teacher').once('value',
      function (allrecords) {
          allrecords.forEach(
              function (currentrecord) {
                  var name = currentrecord.val().NameofTeacher;
                  var roll = currentrecord.val().id;
                  var sec = currentrecord.val().grade;
                  var gen = currentrecord.val().gender;
                  var pass=currentrecord.val().password;
                  var age=currentrecord.val().experience;
                  teachlist.push([name, roll , sec, gen,pass,age])

                  
              }
          );
      });
}
function stdselectall(){
 
  stdno = 0
  firebase.database().ref('student').once('value',
      function (allrecords) {
          allrecords.forEach(
              function (currentrecord) {
                  var name = currentrecord.val().NameofStudent;
                  var roll = currentrecord.val().roll;
                  var sec = currentrecord.val().section;
                  var gen = currentrecord.val().gender;
                  var pass=currentrecord.val().password;
                  var age=currentrecord.val().age


                  stdlist.push([name, roll, gen, sec,pass,age])       
              }
          );
      });
}
let show = function() {
  stdselectall()
  teachselectall()
};

show();