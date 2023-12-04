<?php

// Kết nối CSDL
require 'db.php';

// Hàm đăng ký tài khoản
function register($data) {

  // Lấy dữ liệu
  $name = $data['name'];
  $email = $data['email'];
  $password = password_hash($data['password'], PASSWORD_DEFAULT);

  // Truy vấn SQL đăng ký
  $sql = "INSERT INTO users VALUES (null, '$name', '$email', '$password')";

  // Thực thi SQL
  global $conn;
  $result = mysqli_query($conn, $sql);

  // Trả về kết quả
  return $result;

}

// Hàm đăng nhập
function login($data) {

  // Lấy dữ liệu
  $email = $data['email'];
  $password = $data['password'];

  // Truy vấn SQL lấy thông tin người dùng
  $sql = "SELECT * FROM users WHERE email='$email'";

  // Thực thi SQL
  global $conn;
  $result = mysqli_query($conn, $sql);

  // Kiểm tra đăng nhập
  if(mysqli_num_rows($result) == 1){

    $user = mysqli_fetch_assoc($result);

    if(password_verify($password, $user['password'])){
      return $user;
    }

  }

  return false;

}


?>