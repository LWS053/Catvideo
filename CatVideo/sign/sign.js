console.log("sign.js引入成功");
window.onload = function(){
    var signName = this.document.getElementById("signName");
    var signPassword = this.document.getElementById("newPassword");
    var againPassword = this.document.getElementById("againPassword");
    var signBtn = this.document.getElementById("buttonSign");
    //为按钮添加点击事件
    signBtn.onclick = function(){
        var name =  signName.value; //获取登录输入框的文本
        var newpw = signPassword.value; //获取密码输入框的密码
        var againpw= againPassword.value;
        console.log(newpw+againpw);
        //判断是否有账号 ,两次的密码有没有不一样
        //1创建一个xhr对象
        var xhr = new XMLHttpRequest();

        //5.监听
        xhr.onreadystatechange = function(){
            if(name =='' || newpw=='' || againpw == ''){
                alert("账号或密码不能为空");
                return;
            }
            if(xhr.readyState !=4){
                return;
            }
            if(xhr.status >= 200 && xhr.status <=300){ //q请求成功
                console.log(xhr.responseText);
                var resp = JSON.parse(xhr.responseText);   //获取请求的结果
                if(resp.exist){
                    alert("用户已存在");
                    return ;
                }
                if(resp.result){
                    alert("注册成功");
                    //写入数据库
                    location.href = "../login/login.html";
                    // window.localStorage.setItem("loginn",name);//将成功的账号和密码存入window里
                    // window.localStorage.setItem("loginpw",newpw);
                }else{
                    alert("两次密码输入不一样");
                    signPassword.value = "";
                    againPassword.value = "";
                }
            }else{
                console.log("请求失败");
            }
        }
        //2配置这个对象
        xhr.open('post','./sign.php',true);
        //3设定请求头，指定是哪种格式
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //4发送
        xhr.send("name="+name+"&"+"newpassword="+newpw+"&"+"againpassword="+againpw);
        
    }
}