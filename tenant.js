// Lấy element từ DOM
const roomInfoEl = document.getElementById('room-info');

// Hàm gọi API 
async function callAPI(endpoint) {
  // Code gọi API
}

// Lấy thông tin phòng của khách thuê
async function getRoomInfo() {

  // Lấy id khách thuê từ localStorage
  const tenantId = localStorage.getItem('tenantId');

  // Gọi API lấy thông tin phòng
  const room = await callAPI(`/api/tenants/${tenantId}/room`);

  // Render thông tin phòng lên giao diện
  renderRoomInfo(room);

}

// Hàm render thông tin phòng
function renderRoomInfo(room) {

  let html = `
    <h3>Thông tin phòng</h3>

    <p>Tên phòng: ${room.name}</p>
    <p>Diện tích: ${room.area} m2</p>
    <p>Giá tiền: $${room.rent} / tháng</p>
  `;

  roomInfoEl.innerHTML = html;

}

// Gọi hàm khi trang load
getRoomInfo();