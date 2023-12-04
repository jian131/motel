<?php

// Bắt đầu phiên làm việc
session_start();

// Xóa tất cả biến phiên
$_SESSION = array();

// Xóa cookie phiên
if(ini_get("session.use_cookies")){
  $params = session_get_cookie_params();
  setcookie(session_name(), '', time() - 42000,
    $params["path"], $params["domain"],
    $params["secure"], $params["httponly"]
  );
}

// Hủy phiên
session_destroy();

// Chuyển hướng trang về trang chủ
header("Location: /");
exit;

?>