function signup(){
    var email = document.getElementById('exampleInputEmail1').value
    var pass = document.getElementById('exampleInputPassword1').value
    localStorage.setItem('email',email)
    localStorage.setItem('pass',pass)
    alert('Data inserted Successfully')
    location.href = './signin.html'
 }
 
 function signin(){
     var email = document.getElementById('exampleInputEmail1').value
     var pass = document.getElementById('exampleInputPassword1').value
     var getemail = localStorage.getItem('email')
     var getpass = localStorage.getItem('pass')
     if(email === getemail && pass === getpass ){
         alert('Login Success')
         location.href = './welcome.html'
     }
     else{
         alert('User not found please signup')
         location.href = './signup.html'
     }
 }