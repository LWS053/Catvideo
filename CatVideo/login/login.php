<?php
    $user = $_POST['user'];
    $password = $_POST['password'];
    //从数据库获取
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = 'root';

    //连接数据库
    $conn = mysqli_connect($dbhost,$dbuser,$dbpass);
    if(!$conn){
        die('连接失败：'.mysqli_error($conn));
    }else{
        //echo "连接成功";
    }
    //设置编码，防止出来中文乱码
    mysqli_query($conn,"set names utf8");

    //查找的数据库内容命令---得到数据库video中videoup表中的name和password
    $sql = 'SELECT name,password FROM videoup';

    //选择数据库
    mysqli_select_db($conn,'video');
    $retval = mysqli_query($conn,$sql);
    if(!$retval){
        die('无法读取数据'.mysqli_error($conn));
    }else{
        //echo "读取成功";
    }
    $result = false;
    //通过mysqli_fetch_array(),来获取
    while($row = mysqli_fetch_array($retval,MYSQLI_ASSOC)){
        //进行用户验证
        if($user == $row['name']){ //用户名对了，才会核对密码
            if($password == $row['password']){
                $result = true;
            }   
        }
    }
    if($result){
        echo '{"result":true}';
    }else{
        echo '{"result":false}';
    }
    // $name1 = $_POST['name1'];
    // $password1 = $_POST['password1'];//一定要加分号

    
?>