function TimeYear() {
    var year = new Date().getFullYear();
    document.getElementById('Year').textContent = year;
};

// 利用 javascript 渲染框架及內容
function CopyRightContent() {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數 在哪個 html 標籤之內新增 div
    let Footer = document.getElementById('Footer');

    // 在 footer 內，新增 div 子元素
    Footer.appendChild(div);

    // html語法 若要寫入 id or class ，最外層需要用 單引號 包覆
    div.innerHTML = ' 芸豆嬰幼兒用品版權宣告&copy;2020 - <span id="Year"></span> ';

    TimeYear();

    // 調整 框架 位置

    let Address = document.getElementById('Address');

    // 3. 在被選取的元素之前插入內容 before() 置入被選取元素標籤之前
    Address.before(div);

}