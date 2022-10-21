let emailid=document.getElementById('reg-email')
let password=document.getElementById('reg-password')
let checkpassword=document.getElementById('check-password')
let register=document.getElementById('reg-btn');


register.addEventListener('click',()=>{

    let email =$('input[id=reg-email').val();
    let password =$('input[id=reg-password]').val();
    let checkpassword =$('input[id=check-password]').val()
    
    // console.log(email)
    // console.log(password)
    // console.log(checkpassword) 
    let userData={email:email,password:password}
    $.ajax({url:"http://localhost/internship_project/php/index.php",type:"POST",data:userData,success:function(response){


    }})

})