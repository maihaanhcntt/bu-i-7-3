// Hàm đoán số theo chế độ được chọn
function doanSo(kieu) {
    let soNgauNhien;
    let nhap;

    if (kieu === "0-1") {
        soNgauNhien = Math.floor(Math.random() * 2); // 0 hoặc 1
        do {
            nhap = parseInt(prompt("Đoán số (0 hoặc 1):"));
        } while (nhap !== soNgauNhien);

    } else if (kieu === "1-10") {
        soNgauNhien = Math.floor(Math.random() * 10) + 1; // 1 đến 10
        do {
            nhap = parseInt(prompt("Đoán số (1 đến 10):"));
        } while (nhap !== soNgauNhien);
    }

    alert("🎉 Chính xác! Bạn đã đoán đúng số: " + soNgauNhien);
}

// Hỏi người chơi muốn chơi kiểu nào
let luaChon = prompt("Chọn chế độ chơi:\n1 - Đoán số (0 hoặc 1)\n2 - Đoán số (1 đến 10)");

if (luaChon === "1") {
    doanSo("0-1");
} else if (luaChon === "2") {
    doanSo("1-10");
} else {
    alert("Bạn chọn sai rồi 😅. Vui lòng tải lại trang để chơi.");
}
