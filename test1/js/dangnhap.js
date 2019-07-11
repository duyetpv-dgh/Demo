let use = "duyet";
let pass = "0000";
function button(){
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    if(name == ""){
        document.getElementById('errorname').innerHTML = "Chưa nhập Tên.";
    }else if(password != use){
        document.getElementById('errorname').innerHTML = "Mật khẩu sai.";
    }
    if(password == ""){
        document.getElementById('errorpassword').innerHTML = "Chưa nhập mật khẩu.";
    }else if( name != pass){
        document.getElementById('errorpassword').innerHTML = "Tên đăng nhập sai.";
    }
    if(name == use && password == pass){
        alert("đăng nhập thành công.")
    }
}