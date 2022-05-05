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
var loadstd=document.getElementById('stdload')
var teachno=0;
var arrroll = []
var teachlist=[]
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
var stdlist = [];
// function stdadditemstotable(name, roll, sec, gen,pass,age){
  
//     var tbody = document.getElementById('tbody1')
//     var trow = document.createElement('tr')
//     var td1 = document.createElement('td')
//     var td2 = document.createElement('td')
//     var td3 = document.createElement('td')
//     var td4 = document.createElement('td')
//     var td5 = document.createElement('td')
//     var td6=document.createElement('td')
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "password", "id='pass'");
//     x.disabled=true
//     stdlist.push([name, roll, gen, sec,pass,age])
//     arrroll.push(roll)
//     td1.innerHTML = ++stdno;
//     td2.innerHTML = name;
//     td3.innerHTML = roll;
//     td4.innerHTML = sec;
//     td5.innerHTML = gen;
//     td6.innerHTML=age;
   
//     x.value=pass;
    
//     td2.classList += "namefield"
//     td3.classList += "rollfield"
//     td4.classList += "secfield"
//     td5.classList += "genfield"
//     trow.appendChild(td1)
//     trow.appendChild(td2)
//     trow.appendChild(td3)
//     trow.appendChild(td4)
  

//     trow.appendChild(td5)
//     trow.appendChild(x)

//     trow.appendChild(td6)  
   
//     var controldiv = document.createElement("div");
//     controldiv.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="fillrowstd(null)">add new record </button>'
//     controldiv.innerHTML += '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="fillrowstd(' + stdno + ')" >edit record </button>'
//     trow.appendChild(controldiv)
 
    
//     tbody.appendChild(trow)
// }  
function teachselectall(){
    document.getElementById("tbody2").innerHTML = ""
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
                    teachdadditemstotable(name, roll, sec, gen,age)
                         }
            );
        });
}
var teachlist = [];
var teacharrroll=[];
function teachdadditemstotable(name, id, grade, gen,age){
  
    var tbody = document.getElementById('tbody2')
    var trow = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6=document.createElement('td')
    
    teachlist.push([name,id,grade,gen,age])
    teacharrroll.push(id)
    td1.innerHTML = ++teachno;
    td2.innerHTML = name;
    td3.innerHTML = id;
    td4.innerHTML = grade;
    td5.innerHTML = gen;
    td6.innerHTML=age;
   
    
    
    td2.classList += "namefield2"
    td3.classList += "rollfield2"
    td4.classList += "secfield2"
    td5.classList += "genfield2"
    trow.appendChild(td1)
    trow.appendChild(td2)
    trow.appendChild(td3)
    trow.appendChild(td4)
  

    trow.appendChild(td5)
    
    trow.appendChild(td6)  
   
    
    
    tbody.appendChild(trow)
  
}
var found;
var searchbar2 = document.getElementById('searchbar2')
var searchbtn2=document.getElementById('searchbtn2')
var category2 = document.getElementById("categoryselector2")
var tbody4= document.getElementById('tbody2')
function searching2(Category) {
    var filter = searchbar2.value.toUpperCase()
    var tr = tbody4.getElementsByTagName("tr")
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByClassName(Category)
        for (let j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true
            }
        }
        if (found) {
            tr[i].style.display = ""
            found = false
        }
        else {
            tr[i].style.display = "none"
        }
    }
    
}
searchbtn2.onclick = function () {
    if (searchbar2.value == "");
    else if (category2.value == 1) {
        searching2("namefield2")
    }
    else if (category2.value == 2) {
        searching2("rollfield2")
    }
    else if (category2.value == 3) {
        searching2("secfield2")
    }
    else if (category2.value == 4) {
        searching2("genfield2")
    }
}
function teachinfo(name1,gender1,id12,pass1,experience1,grade1){
    var name=document.getElementById('name')
    var  gender=document.getElementById('gender')
    var id=document.getElementById('id1')
    var pass  =document.getElementById('pass')
    var experience=document.getElementById('experience')
    var grade=document.getElementById('grade')
    name.innerHTML=name1
    gender.innerHTML=gender1
    id.innerHTML=id12
    pass.innerHTML=pass1
    experience.innerHTML=experience1
    grade.innerHTML=grade1
    
}
let show = function() {
    stdselectall()
    teachselectall()
};

show();
var stdmain=document.getElementById('std')
var assignmentsload=document.getElementById('assignements')
var stdbtn=document.getElementById('study')
var teachmain=document.getElementById('teach')
var loadteach=document.getElementById('teachload')
stdbtn.onclick=()=>{
    stdmain.style.display='none'
    teachmain.style.display='none'
 assignmentsload.style.display='block'

}
// window.onload = function () {
    loadstd.onclick= () => {
     // location.reload()
     assignmentsload.style.display='none'
     teachmain.style.display='none'
     stdmain.style.display='block'
 
 teachselectall()
 // then(
 
 //     message =>console.log('done')
 // )
 
 
  }         
 var mainitem=localStorage.getItem('stduentname')
 loadteach.onclick=function(){
    
    stdmain.style.display='none'
    assignmentsload.style.display='none'
    
    teachmain.style.display='block'
    stdselectall()
    
    teachinfo(stdlist[mainitem][0],stdlist[mainitem][1],stdlist[mainitem][2],stdlist[mainitem][3],stdlist[mainitem][4],stdlist[mainitem][5])
    // then(
    //     message =>console.log('done')
    // )
 
    }
    function teachinfo(name1,gender1,id12,pass1,experience1,grade1){
        var name=document.getElementById('name')
        var  gender=document.getElementById('gender')
        var id=document.getElementById('id1')
        var pass  =document.getElementById('pass')
        var experience=document.getElementById('experience')
        var grade=document.getElementById('grade')
        name.innerHTML=name1
        gender.innerHTML=gender1
        id.innerHTML=id12
        pass.innerHTML=pass1
        experience.innerHTML=experience1
        grade.innerHTML=grade1
        
    }
    
   
            // console.log(teachlist[0][0],teachlist[0][1],teachlist[0][2],teachlist[0][3],teachlist[0][4],teachlist[0][5])
        
   
    
