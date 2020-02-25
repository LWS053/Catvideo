console.log("login.js引入成功");
window.onload = function(){
    var loginName = this.document.getElementById("loginName");
    var loginPassword = this.document.getElementById("loginPassword");
    var loginBtn = this.document.getElementById("buttonLogin");
    var signBtn = this.document.getElementById("buttonSign");
    //为按钮添加点击事件

    // var name1 = window.localStorage.getItem("loginn");
    // var password1 = window.localStorage.getItem("loginpw");
    // this.console.log(name1+password1);

    loginBtn.onclick = function(){
        var name =  loginName.value; //获取登录输入框的文本
        var password = loginPassword.value; //获取密码输入框的密码
       // console.log(typeof(name),name,password)
        if(name =='' || password==''){
            alert("账号或密码不能为空");
            return;
        }
        //1创建一个xhr对象
        var xhr = new XMLHttpRequest();

        //5.监听
        xhr.onreadystatechange = function(){
            if(xhr.readyState !=4){
                return;
            }
            if(xhr.status >= 200 && xhr.status <=300){ //q请求成功
                console.log(xhr.responseText);
                var resp = JSON.parse(xhr.responseText);   //获取请求的结果
                
                console.log(resp);
                if(resp.result){
                    alert("登录成功");
                    location.href = "../../CatVideo.html";
                    window.localStorage.setItem("loginName",name);
                }else{
                    alert("账号或密码错误,请重新输入密码");
                    loginName.value = "";
                    loginPassword.value = "";
                }
            }else{
                console.log("请求失败");
            }
        }
        //2配置这个对象
        xhr.open('post','./login.php',true);
        //3设定请求头，指定是哪种格式
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //4发送
        xhr.send("user="+name+"&"+"password="+password);
        
    }
    signBtn.onclick = function(){
        location.href = "../sign/sign.html"
    }
}