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
