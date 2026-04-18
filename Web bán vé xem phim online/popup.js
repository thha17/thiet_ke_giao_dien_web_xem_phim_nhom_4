document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.querySelector('button[name="sign_in"]');
    const registerBtn = document.querySelector('button[name="sign_up"]');
    const loginForm = document.querySelector('.khung_dang_nhap');
    const registerForm = document.querySelector('.khung_dang_ky');
    const overlay = document.getElementById('overlay');

    function updateLoginUI() {
        const sign_in_up = document.querySelector('.sign_in_up');
        let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn && sign_in_up) {
            let userName = sessionStorage.getItem('userName') || 'Khách';
            sign_in_up.innerHTML = `
                <div style="display:flex; align-items:center; gap: 15px;">
                    <span style="font-weight:bold; color:#fff; font-size:15px; text-shadow: 2px 2px 5px #000;">Xin chào, <span style="color:#ffb703;">${userName}</span></span>
                    <button id="btn_my_tickets" style="border-radius: 100px; text-align: center; padding: 8px 15px; border: none; font-weight: bold; cursor: pointer; background: #c1121f; color: white;">Vé của tôi</button>
                    <button id="btn_logout" style="border-radius: 100px; text-align: center; padding: 8px 15px; border: none; font-weight: bold; cursor: pointer; background: #333; color: white;">Đăng xuất</button>
                </div>
            `;
            document.getElementById('btn_logout').onclick = () => {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('userName');
                location.reload();
            };
            
            document.getElementById('btn_my_tickets').onclick = hienThiVeCuaToi;
        }
    }
    
    updateLoginUI();

    if (loginBtn) {
        loginBtn.onclick = () => {
            overlay.style.display = 'block';
            loginForm.style.display = 'block';
        };
    }

    if (registerBtn) {
        registerBtn.onclick = () => {
            overlay.style.display = 'block';
            registerForm.style.display = 'block';
        };
    }

    overlay.onclick = () => {
        overlay.style.display = 'none';
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'none';
        
        let paymentModal = document.getElementById('payment_modal');
        let successModal = document.getElementById('success_modal');
        let myTicketsModal = document.getElementById('my_tickets_modal');
        if (paymentModal) paymentModal.style.display = 'none';
        if (successModal) successModal.style.display = 'none';
        if (myTicketsModal) myTicketsModal.style.display = 'none';
    };

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let name = document.getElementById('ten_dang_nhap') ? document.getElementById('ten_dang_nhap').value : 'Thành viên';
            if(name.trim() === '') name = 'Thành viên';
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userName', name);
            
            overlay.style.display = 'none';
            loginForm.style.display = 'none';
            updateLoginUI();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Kiểm tra định dạng email hoặc SĐT
            let emailSdt = document.getElementById('gmail_sdt') ? document.getElementById('gmail_sdt').value.trim() : '';
            let isEmail = emailSdt.endsWith('@gmail.com');
            let isPhone = /^\d{10}$/.test(emailSdt);

            if (!isEmail && !isPhone) {
                alert('Vui lòng nhập đúng định dạng email (có đuôi @gmail.com) hoặc số điện thoại (gồm 10 chữ số)!');
                return; // chặn không cho đăng ký
            }

            let name = document.getElementById('ten_tai_khoan') ? document.getElementById('ten_tai_khoan').value : 'Thành viên';
            if(name.trim() === '') name = 'Thành viên';
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userName', name);
            
            overlay.style.display = 'none';
            registerForm.style.display = 'none';
            updateLoginUI();
        });
    }
});

// --- HIỂN THỊ VÉ CỦA TÔI ---
function hienThiVeCuaToi() {
    let tickets = JSON.parse(sessionStorage.getItem('my_tickets')) || [];
    let modal = document.getElementById('my_tickets_modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'my_tickets_modal';
        
        let style = document.createElement('style');
        style.innerHTML = `
            #my_tickets_modal {
                position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                width: 500px; background: #111; border-radius: 15px; z-index: 1002;
                color: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.8); border: 1px solid #333;
                overflow: hidden; display: none; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .mt_header {
                background: linear-gradient(90deg, #1656af, #0d3266); padding: 15px 20px;
                display: flex; justify-content: space-between; align-items: center;
            }
            .mt_header h3 { margin: 0; font-size: 18px; font-weight: bold; }
            .mt_close { font-size: 24px; cursor: pointer; font-weight: bold; transition: 0.3s; }
            .mt_close:hover { color: #ffb703; }
            .mt_body { padding: 20px; max-height: 400px; overflow-y: auto; }
            .mt_body::-webkit-scrollbar { width: 8px; }
            .mt_body::-webkit-scrollbar-thumb { background: #1656af; border-radius: 4px; }
        `;
        document.head.appendChild(style);

        modal.innerHTML = `
            <div class="mt_header">
                <h3>GIỎ VÉ CỦA TÔI</h3>
                <span class="mt_close" id="close_my_tickets">&times;</span>
            </div>
            <div class="mt_body" id="my_tickets_body"></div>
        `;
        document.body.appendChild(modal);

        document.getElementById('close_my_tickets').onclick = () => {
            modal.style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        };
    }
    
    let body = document.getElementById('my_tickets_body');
    if (tickets.length === 0) {
        body.innerHTML = `
            <div style="text-align:center; padding: 40px 0;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" style="width:60px; height:60px; margin-bottom:15px;">
                    <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path>
                    <line x1="14" y1="2" x2="14" y2="22"></line>
                    <line x1="8" y1="2" x2="8" y2="22"></line>
                </svg>
                <p style="color:#bbb; font-size: 16px;">Bạn chưa mua vé phím nào cả!</p>
            </div>
        `;
    } else {
        let html = '';
        tickets.slice().reverse().forEach(t => {
            html += `
                <div style="background: #222; border-left: 4px solid #1656af; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="margin: 0 0 10px 0; color: #ffb703; font-size: 16px; text-transform: uppercase;">${t.phim}</h4>
                    <p style="margin: 5px 0; font-size: 14px; display:flex; justify-content:space-between;">
                        <strong style="color:#aaa;">Lịch chiếu:</strong> <span>${t.lich}</span>
                    </p>
                    <p style="margin: 5px 0; font-size: 14px; display:flex; justify-content:space-between;">
                        <strong style="color:#aaa;">Số ghế:</strong> <span>${t.ghe}</span>
                    </p>
                    <hr style="border: none; border-top: 1px dashed #444; margin: 10px 0;">
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 12px; color: #888;">Giao dịch: ${t.thoiGianMua}</span>
                        <span style="font-weight:bold; color: #28a745; font-size: 16px;">${t.tien}</span>
                    </div>
                </div>
            `;
        });
        body.innerHTML = html;
    }

    let overlay = document.getElementById('overlay');
    if(overlay) overlay.style.display = 'block';
    modal.style.display = 'block';
}

//khi chưa có tài khoản thì ấn vào, chuyển từ đn sang dky
document.getElementById('chuyen_sang_dk').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.khung_dang_nhap').style.display = 'none';
    document.querySelector('.khung_dang_ky').style.display = 'block';
}); 
//khi đã có tài khoản thì chuyển từ dky sang dn
document.getElementById('chuyen_sang_dn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.khung_dang_ky').style.display = 'none';
    document.querySelector('.khung_dang_nhap').style.display = 'block';
});
//Khi người dùng có tk nhưng lại bấm vào đky
document.querySelector('.da_co_tk a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.khung_dang_ky').style.display = 'none';
    document.querySelector('.khung_dang_nhap').style.display = 'block';
});

// --- XỬ LÝ TÌM KIẾM TOÀN CỤC ---
function xuLyTimKiemGlobal(e) {
    if (e.key === 'Enter') {
        let val = document.getElementById('global_search') ? document.getElementById('global_search').value.trim() : '';
        if (val !== '') {
            // Nếu đang không ở trang phim.html, chuyển hướng sang phim.html
            window.location.href = 'phim.html?search=' + encodeURIComponent(val);
        } else {
            // Nếu rỗng và đang ở trang phim, reset lại danh sách
            if (window.location.pathname.includes('phim.html')) {
                window.location.href = 'phim.html';
            }
        }
    }
}
//khi quên mật khẩu
document.querySelector('.quen_mk a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Vui lòng liên hệ tkwNhom4@gmail.com để được hỗ trợ!');
});