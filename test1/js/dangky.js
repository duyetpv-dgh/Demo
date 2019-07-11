let at = the_email.indexOf("@");
let dot = the_email.lastIndexOf(".");
let space = the_email.indexOf(" ");

function register(){
    let dangky = [];

    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let pass = document.getElementById('pass').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    if( name == ""){
        document.getElementById('errorname').innerHTML = "Chưa nhập Tên.";
    }else{
        dangky[0] = name;
    }

    if( password == ""){
        document.getElementById('errorpassword').innerHTML = "Chưa nhập mật khẩu.";
    }else if(password.length < 8){
        document.getElementById('errorpassword').innerHTML = "Mật khẩu phải trên 8 ký tự.";
    }else{
        dangky[1] = password;
    }

    if( pass == ""){
        document.getElementById('errorpass').innerHTML = "Chưa nhập lại mật khẩu.";
    }else if( pass != password){
        document.getElementById('errorpass').innerHTML = "Mật khẩu không chùng.";
    }
    if( phone == ""){
        document.getElementById('errorphone').innerHTML = "Chưa nhập số điện thoại.";
    }else if(phone <= 8 && phone >= 12){
        document.getElementById('errorphone').innerHTML = "Số điện thoại sai";
    }else{
        dangky[2] = phone;
    }
    if( email == ""){
        document.getElementById('erroremail').innerHTML = "Chưa nhập Email.";
    }else{
        dangky[3] = email;
    }
    if( name  && password && pass &&  phone && email ){
        alert("đăng ký Thành công.")
    }
} 