// --- KHO DỮ LIỆU 16 BỘ PHIM ---
const danhSachPhim = [
    {
        id: 0,
        ten: "Ánh Dương Của Mẹ",
        anh: "anhduongcuame.jpg",
        theLoai: "Tâm lý, Tình cảm",
        thoiLuong: "135 phút",
        daoDien: "Gavin Lin",
        noiDung: "Một bé gái sinh ra trong nhà tù đã gắn kết những nữ tù nhân. Khi em mắc bệnh hiểm nghèo, họ lập dàn đồng ca để tạo nên ký ức cuối cùng."
    },
    {
        id: 1,
        ten: "Cô Bé Coraline",
        anh: "cobecoraline.jpg",
        theLoai: "Hoạt hình, Kỳ ảo",
        thoiLuong: "100 phút",
        daoDien: "Henry Selick",
        noiDung: "Coraline tình cờ phát hiện ra một thế giới song song lý tưởng ẩn sau cánh cửa bí mật trong nhà. Nhưng nơi đó lại ẩn chứa một bí mật đen tối."
    },
    {
        id: 2,
        ten: "Cú Nhảy Kỳ Diệu",
        anh: "cunhaykydieu.jpg",
        theLoai: "Hoạt hình, Phiêu lưu",
        thoiLuong: "105 phút",
        daoDien: "Daniel Chong",
        noiDung: "Chuyến phiêu lưu kỳ thú vào thế giới tự nhiên của các loài động vật thông qua một chú hải ly robot có khả năng chuyển đổi ý thức."
    },
    {
        id: 3,
        ten: "Đại Tiệc Trăng Máu",
        anh: "daitiectrangmau.jpg",
        theLoai: "Hài, Tâm lý",
        thoiLuong: "118 phút",
        daoDien: "Phan Gia Nhật Linh",
        noiDung: "Buổi hội ngộ của hội bạn thân bỗng trở thành thảm họa khi họ chơi trò công khai toàn bộ tin nhắn, cuộc gọi trên điện thoại."
    },
    {
        id: 4,
        ten: "Đêm Ngày Xa Mẹ",
        anh: "demngayxame.jpg",
        theLoai: "Tâm lý, Gia đình",
        thoiLuong: "105 phút",
        daoDien: "Chưa cập nhật",
        noiDung: "Người con trai có khả năng kỳ lạ nhìn thấy hạn định cuộc đời của mẹ mình qua mỗi bữa cơm. Một câu chuyện rơi nước mắt về tình mẫu tử."
    },
    {
        id: 5,
        ten: "Hẹn Em Ngày Nhật Thực",
        anh: "henemngaynhatthuc.jpg",
        theLoai: "Lãng mạn, Tình cảm",
        thoiLuong: "118 phút",
        daoDien: "Lê Thiện Viễn",
        noiDung: "Năm 1995, Ân trở lại thôn Trà Mây tìm Thiên – mối tình đầu. Cuộc gặp định mệnh dần hé lộ bí mật năm xưa, buộc cô phải đưa ra lựa chọn."
    },
    {
        id: 6,
        ten: "Phim Super Mario Thiên Hà",
        anh: "mariothienha.jpg",
        theLoai: "Hoạt hình, Phiêu lưu",
        thoiLuong: "100 phút",
        daoDien: "Aaron Horvath",
        noiDung: "Mario và Luigi du hành vượt không gian để đối đầu với Bowser và Bowser Jr., bảo vệ vương quốc Nấm và dải ngân hà."
    },
    {
        id: 7,
        ten: "Mắt Biếc",
        anh: "matbiec.jpg",
        theLoai: "Tình cảm, Tâm lý",
        thoiLuong: "117 phút",
        daoDien: "Victor Vũ",
        noiDung: "Chuyện tình đơn phương và buồn bã kéo dài nhiều thập kỷ của Ngạn dành cho Hà Lan - cô bạn thanh mai trúc mã có đôi mắt biếc."
    },
    {
        id: 8,
        ten: "Mặt Nạ Da Người",
        anh: "matnadanguoi.png",
        theLoai: "Kinh dị, Hồi hộp",
        thoiLuong: "86 phút",
        daoDien: "Agus Riyanto",
        noiDung: "Một nữ ca sĩ hát truyền thống vô tình rơi vào vòng xoáy của một giáo phái tà ác, nơi chuyên hiến tế để làm mặt nạ rối từ da người."
    },
    {
        id: 9,
        ten: "Mùi Phở",
        anh: "muipho.jpg",
        theLoai: "Hài, Gia đình",
        thoiLuong: "110 phút",
        daoDien: "Minh Beta",
        noiDung: "Những câu chuyện bi hài và ấm áp vào dịp Tết Nguyên Đán xoay quanh một đại gia đình có truyền thống làm phở lâu đời."
    },
    {
        id: 10,
        ten: "Quỷ Nhập Tràng 2",
        anh: "quynhaptrang2.jpg",
        theLoai: "Kinh dị, Tâm linh",
        thoiLuong: "110 phút",
        daoDien: "Pom Nguyễn",
        noiDung: "Một chương kinh hoàng mới mở ra khi hiện tượng quỷ nhập tràng tái diễn. Những người sống sót phải tìm cách phá giải lời nguyền oan nghiệt để sinh tồn."
    },
    {
        id: 11,
        ten: "Song Hỷ Lâm Nguy",
        anh: "songhylamnguy.jpg",
        theLoai: "Hài, Hành động",
        thoiLuong: "105 phút",
        daoDien: "Ngô",
        noiDung: "Một đám cưới tưởng chừng viên mãn bỗng chốc biến thành mớ hỗn độn khi những vị khách không mời mang theo những bí mật động trời xuất hiện."
    },
    {
        id: 12,
        ten: "Tài",
        anh: "tai.jpg",
        theLoai: "Hành động, Tâm lý",
        thoiLuong: "120 phút",
        daoDien: "Mai Tài Phến",
        noiDung: "Câu chuyện về những con người gai góc làm việc ở bến cảng, đấu tranh sinh tồn giữa vòng xoáy giang hồ, quyền lực và tình người sâu sắc."
    },
    {
        id: 13,
        ten: "Thở Ơi!!",
        anh: "thooi.jpg",
        theLoai: "Hài, Tâm lý",
        thoiLuong: "125 phút",
        daoDien: "Trấn Thành",
        noiDung: "Những tình huống dở khóc dở cười và không kém phần bí ẩn diễn ra trong một bữa tiệc quy tụ dàn khách mời lạ lùng mang mặt nạ."
    },
    {
        id: 14,
        ten: "Tiếng Thét 7",
        anh: "tiengthet.jpg",
        theLoai: "Kinh dị, Giật gân",
        thoiLuong: "115 phút",
        daoDien: "Christopher Landon",
        noiDung: "Tên sát nhân Ghostface tái xuất với những thủ đoạn tàn độc và tinh vi hơn, nhắm vào những người sống sót để hoàn thành bộ phim kinh dị đẫm máu của hắn."
    },
    {
        id: 15,
        ten: "Vùng Đất Luân Hồi",
        anh: "vungdatluanhoi.jpg",
        theLoai: "Hoạt hình, Kỳ ảo",
        thoiLuong: "100 phút",
        daoDien: "Đang cập nhật",
        noiDung: "Cuộc hành trình kỳ lạ của những linh hồn trong thế giới cõi âm hư ảo, nơi họ phải vượt qua các thử thách để tìm lại ký ức và cơ hội luân hồi."
    }
];

// --- KHỞI TẠO DANH SÁCH ---
window.onload = function() {
    hienThiDanhSachPhim();
};

function hienThiDanhSachPhim() {
    const container = document.getElementById('vung_danh_sach_phim');
    container.innerHTML = '';
    
    danhSachPhim.forEach(phim => {
        let card = document.createElement('div');
        card.className = 'card_phim';
        card.onclick = function() { moChiTietPhim(phim.id); };
        
        card.innerHTML = `
            <img src="${phim.anh}" alt="${phim.ten}">
            <div class="card_info">
                <h4>${phim.ten}</h4>
                <button class="btn_dat_ve_nhanh">Mua Vé</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- CHUYỂN ĐỔI GIỮA DANH SÁCH VÀ ĐẶT VÉ ---
function moChiTietPhim(idPhim) {
    document.getElementById('danh_sach_phim_section').style.display = 'none';
    document.getElementById('chi_tiet_dat_ve_section').style.display = 'block';
    window.scrollTo(0, 0); 
    
    let phim = danhSachPhim.find(p => p.id === idPhim);
    document.getElementById('anh_poster_chitiet').src = phim.anh;
    document.getElementById('ten_phim_chitiet').innerText = phim.ten;
    document.getElementById('the_loai_chitiet').innerText = phim.theLoai;
    document.getElementById('thoi_luong_chitiet').innerText = phim.thoiLuong;
    document.getElementById('dao_dien_chitiet').innerText = phim.daoDien;
    document.getElementById('noi_dung_chitiet').innerText = phim.noiDung;
    
    taoLichChieuNgauNhien();
    taoSuatChieuNgauNhien();
    taoSoDoGhe(9, 6); // 9 Hàng x 6 Cột
}

function quayLaiDanhSach() {
    document.getElementById('chi_tiet_dat_ve_section').style.display = 'none';
    document.getElementById('danh_sach_phim_section').style.display = 'block';
}

// --- TẠO LỊCH CHIẾU VÀ SUẤT CHIẾU NGẪU NHIÊN ---
function taoLichChieuNgauNhien() {
    const vungChuaNgay = document.getElementById('vung_chua_ngay');
    vungChuaNgay.innerHTML = ''; 
    
    const thuTrongTuan = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    let homNay = new Date();
    let offsetStart = Math.floor(Math.random() * 3); 
    
    for(let i = 0; i < 4; i++) {
        let d = new Date(homNay);
        d.setDate(homNay.getDate() + offsetStart + i);
        
        let labelThu = thuTrongTuan[d.getDay()];
        if (d.getDate() === homNay.getDate()) labelThu = "Hôm nay";
        if (d.getDate() === homNay.getDate() + 1) labelThu = "Ngày mai";

        let ngayThang = d.getDate().toString().padStart(2, '0') + '/' + (d.getMonth() + 1).toString().padStart(2, '0');

        let btn = document.createElement('div');
        btn.className = 'btn_ngay' + (i === 0 ? ' active' : '');
        btn.innerHTML = `${labelThu}<span>${ngayThang}</span>`;
        
        btn.onclick = function() {
            chonNgay(this);
            taoSuatChieuNgauNhien();
            taoSoDoGhe(9, 6);
        };
        
        vungChuaNgay.appendChild(btn);
    }
}

function taoSuatChieuNgauNhien() {
    const vungChuaSuat = document.getElementById('vung_chua_suat');
    vungChuaSuat.innerHTML = ''; 

    const tatCaSuat = ["08:30", "09:15", "10:45", "12:30", "13:15", "14:45", "16:00", "17:30", "19:00", "20:15", "21:30", "22:45"];
    let soLuongSuat = Math.floor(Math.random() * 4) + 3; // Ngẫu nhiên 3 - 6 suất/ngày
    let suatDuocChon = tatCaSuat.sort(() => 0.5 - Math.random()).slice(0, soLuongSuat).sort();

    for (let i = 0; i < suatDuocChon.length; i++) {
        let btn = document.createElement('button');
        btn.className = 'btn_suat' + (i === 0 ? ' active' : '');
        btn.innerText = suatDuocChon[i];
        
        btn.onclick = function() { chonSuat(this); };
        vungChuaSuat.appendChild(btn);
    }
}

// --- TẠO SƠ ĐỒ GHẾ (9 HÀNG x 6 CỘT) ---
function taoSoDoGhe(soHang, soCot) {
    const vungChuaGhe = document.getElementById('vung_chua_ghe');
    vungChuaGhe.innerHTML = ''; 
    
    const tenHang = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; 
    
    for (let h = 0; h < soHang; h++) {
        let hangDiv = document.createElement('div');
        hangDiv.className = 'hang_ghe';
        
        let spanNhãn = document.createElement('span');
        spanNhãn.style.width = '20px';
        spanNhãn.style.lineHeight = '40px';
        spanNhãn.style.fontWeight = 'bold';
        spanNhãn.innerText = tenHang[h];
        
        let laGheVIP = (h >= 6); 
        if (laGheVIP) spanNhãn.style.color = '#ffb703';

        hangDiv.appendChild(spanNhãn);

        for (let c = 1; c <= soCot; c++) {
            let gheDiv = document.createElement('div');
            gheDiv.className = 'ghe';
            gheDiv.innerText = c;
            
            if (laGheVIP) {
                gheDiv.style.borderBottom = '3px solid #ffb703';
            }

            if (Math.random() < 0.3) {
                gheDiv.classList.add('da_dat');
            } else {
                gheDiv.onclick = function() { chonGhe(this); };
            }

            hangDiv.appendChild(gheDiv);
        }
        vungChuaGhe.appendChild(hangDiv);
    }
    tinhTien();
}

// --- CÁC HÀM XỬ LÝ SỰ KIỆN ---
function chonNgay(element) {
    let siblings = element.parentElement.children;
    for (let el of siblings) el.classList.remove('active');
    element.classList.add('active');
}

function chonSuat(element) {
    let siblings = element.parentElement.children;
    for (let el of siblings) el.classList.remove('active');
    element.classList.add('active');
    taoSoDoGhe(9, 6);
}

function chonGhe(element) {
    if (!element.classList.contains('da_dat')) {
        element.classList.toggle('dang_chon');
        tinhTien();
    }
}

function tinhTien() {
    let gheDangChon = document.querySelectorAll('.ghe.dang_chon');
    let tongTien = 0;
    
    gheDangChon.forEach(ghe => {
        if(ghe.style.borderBottom.includes('rgb(255, 183, 3)')) {
            tongTien += 105000;
        } else {
            tongTien += 85000;
        }
    });

    let tienFormat = tongTien.toLocaleString('vi-VN');
    let btnThanhToan = document.querySelector('.btn_thanh_toan');
    
    if (tongTien === 0) {
        btnThanhToan.innerText = "VUI LÒNG CHỌN GHẾ";
        btnThanhToan.style.opacity = "0.5";
    } else {
        btnThanhToan.innerText = `TIẾP TỤC: THANH TOÁN ${tienFormat} VND`;
        btnThanhToan.style.opacity = "1";
    }
}