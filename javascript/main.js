

// MenuNav();
// 行動裝置 選單
function MenuNav() {
    let MenuNav = document.getElementById('MenuNav');
    // 隱藏 手機版選單
    MenuNav.style.display = "none";
}

// PhoneMenushow();

// menu 手機版按鈕
function PhoneMenushow() {
    let Navber = document.getElementById('Navber');
    // Navber.getElementsByClassName('MenuBtn')[0].style.display = "";
    let MenuBtn = Navber.getElementsByClassName('MenuBtn');

    // // 顯示 手機版選單內容
    for (let i = 0; i < MenuBtn.length; i++) {
        MenuBtn[i].style.display = "";
    }
}



Pageload();
function Pageload() {
    $('header').load("web/header.html");
    $('footer').load("web/footer.html");
}