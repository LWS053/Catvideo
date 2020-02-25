<?php
    //获取注册用户名及密码
    $name = $_POST['name'];
    $newpassword = $_POST['newpassword'];
    $againpassword = $_POST['againpassword'];

    //判断数据库是否存在这个用户名
    //把用户信息存入数据库

    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = 'root';

    $conn = mysqli_connect($dbhost,$dbuser,$dbpass);//连接数据库

    //创建数据库
    // $sql = "create database video2";
    // $retval = mysqli_query($conn,$sql);
    // if(!$retval){
    //     die('数据表创建失败: ' . mysqli_error($conn));
    // }
    // echo "创建video数据库成功";

    //创建一个表来存储用户名及密码
    // $sql = "CREATE TABLE vedioup( ".
    // "user_id INT NOT NULL AUTO_INCREMENT, ".
    // "name VARCHAR(100) NOT NULL, ".
    // "password VARCHAR(100) NOT NULL, ".
    // "submission_date DATE, ".
    // "PRIMARY KEY ( user_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
    
   
    mysqli_query($conn , "set names utf8"); // 设置编码，防止中文乱码
    mysqli_select_db($conn,'video');//选择数据库

    //验证用户名是否存在
    $sql_read = 'SELECT name,password FROM videoup';
    $retval_read = mysqli_query($conn,$sql_read);
    if(!$retval_read){
        die('无法读取数据'.mysqli_error($conn));
    }
    $result = false;
    while($row = mysqli_fetch_array($retval_read,MYSQLI_ASSOC)){
        //进行用户验证
        if($name == $row['name']){ //用户名对了，才会核对密码    
                $result = true;
        }
    }
    if($result){
        echo '{"exist":true}';
    }else{
        $sql_insert = "INSERT INTO videoup".
                  "(name,password,submission_date)".
                  "VALUES".
                  "('$name','$newpassword',NOW())";
    //验证密码是否一样
    if($newpassword == $againpassword){
        $retval = mysqli_query($conn,$sql_insert);
        if(! $retval )
        {
            die('插入失败: ' . mysqli_error($conn));
        }else{
            //echo "插入成功\n";
        }
        
        mysqli_close($conn);
        echo '{"result":true}';
    }else{
        echo '{"result":false}';
    }
    }
    //往表里插入数据
?>