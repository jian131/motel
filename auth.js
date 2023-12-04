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

// Xử lý sự kiện submit form
registerForm.addEventListener('submit', async e => {

  e.preventDefault();

  // Lấy dữ liệu từ form
  const name = registerForm.name.value;
  const email = registerForm.email.value; 
  const password = registerForm.password.value;

  // Gọi API đăng ký người dùng
  const response = await callAPI('/register', {
    name,
    email,
    password
  });

  if(response.ok) {
    // Đăng ký thành công
    alert('Đăng ký thành công');
    window.location.href = '/';
  } else {
    // Đăng ký thất bại
    alert('Đăng ký thất bại');
  }

});

// Hàm gọi API
async function callAPI(endpoint, data) {

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });

  return response;

}