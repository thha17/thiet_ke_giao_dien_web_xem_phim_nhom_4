document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.querySelector('button[name="sign_in"]');
    const registerBtn = document.querySelector('button[name="sign_up"]');

    const loginForm = document.querySelector('.khung_dang_nhap');
    const registerForm = document.querySelector('.khung_dang_ky');
    const overlay = document.getElementById('overlay');

    loginBtn.onclick = () => {
        overlay.style.display = 'block';
        loginForm.style.display = 'block';
    };

    registerBtn.onclick = () => {
        overlay.style.display = 'block';
        registerForm.style.display = 'block';
    };

    overlay.onclick = () => {
        overlay.style.display = 'none';
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
    };

});

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
//khi quên mật khẩu
document.querySelector('.quen_mk a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Vui lòng liên hệ tkwNhom4@gmail.com để được hỗ trợ!');
});