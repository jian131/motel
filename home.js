// Lấy element từ DOM
const motelListEl = document.getElementById('motel-list');
const roomListEl = document.getElementById('room-list'); 
const announcementEl = document.getElementById('announcement');

// Hàm gọi API
async function callAPI(endpoint) {
  const res = await fetch(endpoint);
  return res.json();
}

// Render danh sách khu trọ
async function renderMotelList() {

  // Gọi API lấy danh sách khu trọ
  const motels = await callAPI('/api/motels');  

  let listHtml = '';
  motels.forEach(motel => {
    listHtml += `
      <div class="motel-item">
        <h3>${motel.name}</h3>
        <p>Địa chỉ: ${motel.address}</p>
      </div>
    `;
  });

  motelListEl.innerHTML = listHtml;

}

// Render danh sách phòng
async function renderRoomList() {

  // Code render danh sách phòng

}

// Render thông báo
async function renderAnnouncement() {

  // Code render thông báo

}

// Gọi các hàm render khi trang load
renderMotelList();
renderRoomList();
renderAnnouncement();