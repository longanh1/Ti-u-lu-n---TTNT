function phanCong() {
  const nhanVien = ["A", "B", "C", "D", "E"];
  const congViec = ["Kế toán", "Bán hàng", "Marketing", "Kho", "IT"];
  const trangThai = ["Hoàn thành", "Đang làm", "Chưa làm"];

  let ketQuaHTML = "<h3>Kết quả phân công</h3><ul>";
  for (let i = 0; i < nhanVien.length; i++) {
    let idxCV = Math.floor(Math.random() * congViec.length);
    let idxTT = Math.floor(Math.random() * trangThai.length);

    let statusClass = "";
    if (trangThai[idxTT] === "Hoàn thành") statusClass = "status-hoanthanh";
    else if (trangThai[idxTT] === "Đang làm") statusClass = "status-danglam";
    else statusClass = "status-chualam";

    ketQuaHTML += `<li>${nhanVien[i]} → ${congViec[idxCV]} 
      <span class="${statusClass}">(${trangThai[idxTT]})</span></li>`;
  }
  ketQuaHTML += "</ul>";
  document.getElementById("ketqua").innerHTML = ketQuaHTML;

  // Mô phỏng 50 lần chạy (độ chính xác giả định)
  let data = [];
  for (let i = 0; i < 50; i++) {
    data.push(Math.floor(Math.random() * 100));
  }

  // Vẽ biểu đồ bằng Chart.js
  const ctx = document.getElementById("bieudo").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from({ length: 50 }, (_, i) => i + 1),
      datasets: [{
        label: "Độ chính xác (%)",
        data: data,
        borderColor: "blue",
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          min: 0,
          max: 100
        }
      }
    }
  });
}
