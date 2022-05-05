var name=document.getElementById('firstname').value
var phone =document.getElementById('phone').value
var age = document.getElementById('age').value







var pass1=document.getElementById('password').value
var email = document.getElementById('email').value





var maleradio=document.getElementById('maleradio').value
var pass2=document.getElementById('confirmpassword').value
var femaleradio=document.getElementById('femaleradio').value
var defined=document.getElementById('undefined').value




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