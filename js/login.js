var username = document.getElementById("username");
var password = document.getElementById("password");
var verification = document.getElementById("verification");
var btn = document.getElementById("button");
function sub(){
    if(username.value == "" || username.value == null){
        alert("请输入账号！");
        username.focus();
        return false;
    }else if(password.value == "" || username.value == null){
        alert("请输入密码！");
        password.focus();
        return false;
    }else if(verification.value == "" || verification.value == null){
        alert("请输入验证码！");
        verification.focus();
        return false;
    }else{
        alert("登录成功！")
    }
    return true;
}