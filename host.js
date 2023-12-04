// Lấy element từ DOM
const motelListEl = document.getElementById('motel-list');

// Hàm gọi API
async function callAPI(endpoint) {
  const res = await fetch(endpoint);
  return res.json(); 
}

// Render danh sách khu trọ của chủ trọ
async function renderMotelList() {

  // Lấy id chủ trọ đăng nhập từ localStorage
  const hostId = localStorage.getItem('hostId');

  // Gọi API lấy danh sách khu trọ của chủ trọ
  const motels = await callAPI(`/api/hosts/${hostId}/motels`);

  let listHtml = '';
  motels.forEach(motel => {
    listHtml += `
      <div class="motel-item">
        <h3>${motel.name}</h3>
        <p>Địa chỉ: ${motel.address}</p>

        <a href="motel.html?id=${motel.id}" class="btn">Quản lý</a>
      </div>
    `;
  });

  motelListEl.innerHTML = listHtml;

}

// Gọi hàm render khi trang load  
renderMotelList();