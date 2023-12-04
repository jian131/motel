// Lấy element từ DOM
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Hàm gọi API
function callAPI(endpoint, data, method='POST') {
  return fetch(endpoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

// Xử lý sự kiện submit form đăng nhập  
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Gọi API đăng nhập
  callAPI('/login', {
    username,
    password
  })
  .then(res => {
    if(res.ok) {
      // Đăng nhập thành công
      location.href = '/';
    } else {
      // Đăng nhập thất bại
      alert('Sai tài khoản hoặc mật khẩu');
    }
  });

});

// Xử lý sự kiện submit form đăng ký
registerForm.addEventListener('submit', e => {
  // Code xử lý đăng ký
});