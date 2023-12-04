<?php

// Thông tin kết nối CSDL
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'motel_manager');

// Kết nối CSDL
function connect() {
  global $conn;
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  if(!$conn){
    die("Kết nối CSDL thất bại: " . mysqli_connect_error());
  }

  return $conn;
}

// Truy vấn CSDL
function query($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);
  return $result;
}

// Bắt đầu phiên làm việc
function init(){
  return connect();
}

// Kết thúc phiên làm việc
function close(){
  global $conn;

  if($conn){
    mysqli_close($conn);
  }
}

?>