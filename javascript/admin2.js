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
var arrname = []
var arrroll = []
var arrgen = []
var arrsec = []

var stdno = 0;
var teachno=0;
var loadstd=document.getElementById('stdload')
var loadteach=document.getElementById('teachload')
var stdmain=document.getElementById('std')

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


                    teachdadditemstotable(name, roll, sec, gen,pass,age);
                }
            );
        });
}
function stdselectall(){
    document.getElementById("tbody1").innerHTML = ""
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


                    stdadditemstotable(name, roll, sec, gen,pass,age);
                }
            );
        });
}
// var myButton = document.getElementsByName('dynamic');
// var myInput = document.getElementsByName('viewPass');
// myButton.forEach(function(element, index){
//   element.onclick = function(){
//      'use strict';

//       if (myInput[index].type == 'password') {
//           myInput[index].setAttribute('type', 'text');
//           element.firstChild.textContent = 'Hide';
//           element.firstChild.className = "";

//       } else {
//            myInput[index].setAttribute('type', 'password');
//            element.firstChild.textContent = '';
//             element.firstChild.className = "bi bi-eye";
//       }
//   }
// })

// function saveData(name, roll, sec, gen,pass,age) {
//     app.database().ref('student' + modroll.value).push({ NameofStudent: name, roll: roll, section: sec, gender: gen ,password:pass ,age:age})
// }
// function saveData2(name, id, grade, gen,pass,exp) {
//     app.database().ref('teacher' + teachmodid.value).push({ NameofTeacher: name, id: id, grade: grade , gender: gen ,password:pass ,experience:exp})
// }


var stdlist = [];
var teachlist=[];
var teacharrroll=[];
function teachdadditemstotable(name, id, grade, gen,pass,age){
  
    var tbody = document.getElementById('tbody2')
    var trow = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6=document.createElement('td')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "password", "id='pass'");
    x.disabled=true
    teachlist.push([name, id, grade, gen,pass,age])
    teacharrroll.push(id)
    td1.innerHTML = ++teachno;
    td2.innerHTML = name;
    td3.innerHTML = id;
    td4.innerHTML = grade;
    td5.innerHTML = gen;
    td6.innerHTML=age;
   
    x.value=pass;
    
    td2.classList += "namefield2"
    td3.classList += "rollfield2"
    td4.classList += "secfield2"
    td5.classList += "genfield2"
    trow.appendChild(td1)
    trow.appendChild(td2)
    trow.appendChild(td3)
    trow.appendChild(td4)
  

    trow.appendChild(td5)
    trow.appendChild(x)

    trow.appendChild(td6)  
   
    var controldiv = document.createElement("div");
    controldiv.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter2" onclick="fillrowteach(null)">add new record </button>'
    controldiv.innerHTML += '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter2" onclick="fillrowteach(' + teachno + ')" >edits record </button>'
    trow.appendChild(controldiv)
 
    
    tbody.appendChild(trow)
  
}
function stdadditemstotable(name, roll, sec, gen,pass,age){
  
    var tbody = document.getElementById('tbody1')
    var trow = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6=document.createElement('td')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "password", "id='pass'");
    x.disabled=true
    stdlist.push([name, roll, gen, sec,pass,age])
    arrroll.push(roll)
    td1.innerHTML = ++stdno;
    td2.innerHTML = name;
    td3.innerHTML = roll;
    td4.innerHTML = sec;
    td5.innerHTML = gen;
    td6.innerHTML=age;
   
    x.value=pass;
    
    td2.classList += "namefield"
    td3.classList += "rollfield"
    td4.classList += "secfield"
    td5.classList += "genfield"
    trow.appendChild(td1)
    trow.appendChild(td2)
    trow.appendChild(td3)
    trow.appendChild(td4)
  

    trow.appendChild(td5)
    trow.appendChild(x)

    trow.appendChild(td6)  
   
    var controldiv = document.createElement("div");
    controldiv.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="fillrowstd(null)">add new record </button>'
    controldiv.innerHTML += '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="fillrowstd(' + stdno + ')" >edit record </button>'
    trow.appendChild(controldiv)
 
    
    tbody.appendChild(trow)
  
}

function fillrowteach(index) {
    let newroll=Math.max(...teacharrroll)
    if (index == null) {
        teachmodname.value = " "
     teachmodid.value =++newroll
        teachmodid.disabled = true
        teachmodgrade.value = " "
        teachmodgen.value = " "
        teachmodage.value=" "
        teachmodpass.value=" "
        btadd.style.display = "inline-block"
        btup.style.display = "none"
        btdel.style.display = "none"

    }
    else {

        --index;
        ab = index
        teachmodname.value = teachlist[index][0]
        teachmodid .value = teachlist[index][1]
        teachmodgen.value = teachlist[index][3]
        teachmodgrade .value = teachlist[index][2]
        teachmodpass.value=teachlist[index][4]
        teachmodage.value=teachlist[index][5]
        
        teachmodid.disabled = true
  

        btadd.style.display = "none"
        btup.style.display = "inline-block"
        btdel.style.display = "inline-block"

    }

}


var modname = document.getElementById('namemodal');
var modroll = document.getElementById('rollmodal');
var modsec = document.getElementById('secmodal');
var modgen = document.getElementById('gendermodal');
var modpass=document.getElementById('passemodal');
var modage=document.getElementById('agemodal');


var teachmodname = document.getElementById('teachnamemodal');
var teachmodid = document.getElementById('teachidmodal');
var teachmodgrade = document.getElementById('teachgrademodal');
var teachmodgen = document.getElementById('teachgendermodal');
var teachmodpass=document.getElementById('teachpassmodal');
var teachmodage=document.getElementById('teachexpmodal');
 
// var teachbtadd= document.getElementById('teachaddmodal');
// var teachbtup=document.getElementById('teachupdatemodal');
// var teachbtdel=document.getElementById('teachdelmodal');
var btadd = document.getElementById('addmodal');
var btup = document.getElementById('updatemodal');
var btdel = document.getElementById('delmodal');
var ab = 0;
function fillrowstd(index) {
    let newroll=Math.max(...arrroll)
    if (index == null) {
        modname.value = " "
        modroll.value =++newroll
        modroll.disabled = true
        modsec.value = " "
        modgen.value = " "
        modage.value=" "
        modpass.value=" "
        btadd.style.display = "inline-block"
        btup.style.display = "none"
        btdel.style.display = "none"

    }
    else {

        --index;
        ab = index
        modname.value = stdlist[index][0]
        modroll.value = stdlist[index][1]
        modgen.value = stdlist[index][2]
        modsec.value = stdlist[index][3]
        modpass.value=stdlist[index][4]
        modage.value=stdlist[index][5]
        
        modroll.disabled = true
  

        btadd.style.display = "none"
        btup.style.display = "inline-block"
        btdel.style.display = "inline-block"

    }

}
function teachaddrec() {
    firebase.database().ref("teacher/" + teachmodid.value).set(
        {
            NameofTeacher: teachmodname.value,
            id: teachmodid.value,
            grade: teachmodgrade.value,
            gender: teachmodgen.value,
            password: teachmodpass.value,
            experience:teachmodage.value

        },
        (error) => {
            if (error) {
                alert("record added failed")
            }
            else {
                location.reload()
                alert("record added")
                teaselectall()
                $("#exampleModalCenter").modal('hide')
            }
        }
    )
}

function addrecstd() {
    firebase.database().ref("teacher/" + teachmodid.value).set(
        {
            NameofStudent: modname.value,
            roll: modroll.value,
            section: modsec.value,
            gender: modgen.value,
            password: modpass.value,
            age:modage.value

        },
        (error) => {
            if (error) {
                alert("record added failed")
            }
            else {
                // location.reload()
                alert("record added")
                stdselectall()
                $("#exampleModalCenter").modal('hide')
            }
        }
    )
}
function teachupdrec() {
    firebase.database().ref("teacher/" + teachmodid.value).update(
        {
            NameofTeacher: teachmodname.value,
            id: teachmodid.value,
            grade: teachmodgrade.value,
            gender: teachmodgen.value,
            password: teachmodpass.value,
            experience:teachmodage.value
        },
        (error) => {
            if (error) {
                alert("record updated failed")
            }
            else {
                location.reload()
                 alert("record updated")
               
            
                $("#exampleModalCenter").modal('hide')
                location.reload=stdselectall()
            }
        }
    )
}

function updrecstd() {
    firebase.database().ref("student/" + modroll.value).update(
        {
            NameofStudent: modname.value,
            roll: modroll.value,
            section: modsec.value,
            gender: modgen.value,
            password: modpass.value,
            age:modage.value

        },
        (error) => {
            if (error) {
                alert("record updated failed")
            }
            else {
                location.reload()
                 alert("record updated")
               
            
                $("#exampleModalCenter").modal('hide')
                location.reload=stdselectall()
            }
        }
    )
}
function teachdelrec() {
    firebase.database().ref("teacher/" + teachmodid.value).remove().then(
        function () {
            alert("record deleted ")
            teachselectall()
            $("#exampleModalCenter").modal('hide')

        }
    )
}
function delrecstd() {
    firebase.database().ref("student/" + modroll.value).remove().then(
        function () {
            alert("record deleted ")
            stdselectall()
            $("#exampleModalCenter").modal('hide')

        }
    )
}

var searchbar = document.getElementById('searchbar')
var searchbtn = document.getElementById('searchbtn')
var category = document.getElementById("categoryselector")
var tbody = document.getElementById('tbody1')
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

var found;
var searchbar2 = document.getElementById('searchbar2')
var searchbtn2=document.getElementById('searchbtn2')
var category2 = document.getElementById("categoryselector2")
function searching(Category) {
    var filter = searchbar.value.toUpperCase()
    var tr = tbody.getElementsByTagName("tr")
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

searchbtn.onclick = function () {
    if (searchbar.value == "");
    else if (category.value == 1) {
        searching("namefield")
    }
    else if (category.value == 2) {
        searching("rollfield")
    }
    else if (category.value == 3) {
        searching("secfield")
    }
    else if (category.value == 4) {
        searching("genfield")
    }
}
var teachmain=document.getElementById('teach')

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


    let show = function() {
        window.onload=stdselectall()
    };
    
    show();
 var assignmentsload=document.getElementById('assignements')
    loadteach.onclick=function(){
    
        stdmain.style.display='none'
        assignmentsload.style.display='none'
        
        teachmain.style.display='block'
        teachselectall()
        // then(
        //     message =>console.log('done')
        // )
     
        }
      window.onload = function () {
   loadstd.onclick= () => {
    // location.reload()
    assignmentsload.style.display='none'
    teachmain.style.display='none'
    stdmain.style.display='block'

stdselectall()
// then(

//     message =>console.log('done')
// )


}      
   }
// window.onload = function () {
var stdbtn=document.getElementById('study')
stdbtn.onclick=()=>{
    stdmain.style.display='none'
    teachmain.style.display='none'
 assignmentsload.style.display='block'

}
// }