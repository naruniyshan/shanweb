WebPage();
function WebPage() {
    $('header').load("header.html");
    $('footer').load("footer.html");
}
let DClass = ['Images', 'LName', 'Brief'];
LimitedCon(8);
// 新增 限量商品 的內容
function LimitedCon(Number) {
    for (let i = 0; i < Number; i++) {
        // 新增標籤 section
        let sec = document.createElement('section');

        // 在 LimCon 內新增 section
        let SE = document.getElementById('LimCon');

        // 建立 section 框架
        SE.appendChild(sec);

        // 給予 class
        sec.setAttribute("class", 'Commodity');

        /* ======== 第一層 ul id=TitleBox；class=TitleBox =======*/

        // 新增標籤 ul
        let ul = document.createElement('ul');
        // 在 Commodity 內新增 ul
        // let CO = document.querySelector('.Commodity');

        // 利用 class 物件的索引編號，判讀為哪一個 class 物件
        let CO = document.getElementsByClassName('Commodity')[i];
        // 建立 ul 框架
        CO.appendChild(ul);

        // 給予 id 名稱 class 名稱
        ul.setAttribute("id", "TitleBox");
        ul.setAttribute("class", "TitleBox");

            /* ======== TitleBox 內的資料 ======== */
            // 設計迴圈
            // li 在 TitleBox 框架內產生，宣告 TitleBox 的變數
            let TB = document.getElementsByClassName('TitleBox')[i];

            // 宣告 li 的 class 名稱 array（陣列）
            let LiClass = ['Title', 'Number', 'Text'];

            // 宣告 li 的內容
            let LiCon = ['限量特賣', '庫存', '數量有限，售完為止'];

            ForLi(LiClass, TB, LiCon);
            // // for 迴圈 增加 LiClass 與 LiCon 的資料
            // for (let i = 0; i < LiClass.length; i++) {
            //     // 建立 li
            //     let li = document.createElement('li');

            //     // 在 TitleBox（宣告在 147 行）
            //     TB.appendChild(li);

            //     // 新增 class 屬性
            //     li.setAttribute("class", LiClass[i]);

            //     // 置入 內容
            //     li.innerText = LiCon[i];
            // }

            // 建立 class 的變數 建立庫存數量
            // let Number = TB.getElementsByClassName('Number')[0];
            // querySelector() 在文件匹配指定 css 選擇器
            // let Number = document.querySelector('.Number');
            let Number = TB.querySelector('.Number');

            // 建立 span 標籤
            let SP = document.createElement('span');

            // 在 Number 建立 span
            Number.appendChild(SP);

            SP.innerText = '1';

        /* ======== 
        ul id=TitleBox 同一層
        div class=Images  div class=LName  div class=Brief  建立三個 div 框架  
        =======*/
        

        for (let i = 0; i < DClass.length; i++) {
            // 新增 div 的框架，宣告變數
            let Div = document.createElement('div');

            // 在 Commodity（宣告在 138 行）
            CO.appendChild(Div);

            // 新增屬性
            Div.setAttribute("class", DClass[i]);
        }

            // Images 內新增資料
            let A = document.createElement('a');
            // 新增 連結 屬性
            A.setAttribute("href", "javascript:;");
            // 宣告 指定 class 的變數
            let Images = CO.querySelector('.Images');
            // let Images =CO.getElementsByClassName('Images')[i];
            // 在 Images 內新增
            Images.appendChild(A);

            // Images > a 內新增資料
            let Img = document.createElement('img');
            // 屬性
            Img.setAttribute("src", "../images/Merchandise/001.jpg");
            // 在 a 內新增
            A.appendChild(Img);

            // 在 LName 新增資料 h3 li
            let H3 = document.createElement('h3');
            let Li = document.createElement('li');
            // 屬性
            Li.setAttribute("class", "Love");
            // 在 LName 新增；CO 在 Commodity（宣告在 141 行）
            let LName = CO.querySelector('.LName');
            LName.appendChild(H3).innerText = "商品名稱";
            LName.appendChild(Li).innerText = "我的最愛";

            // 在 Brief 內新增 html 資料；CO 在 Commodity（宣告在 141 行）
            let Brief = CO.querySelector('.Brief');
            Brief.innerHTML = "商品簡介，文字字數超過26個字數（ <mark>英文與阿拉伯數字為26個字數，中文為13個字數</mark> ），會利用 ...... 設計";

        /* ===========   價格    ================== */
        // 新增標籤 ul ；CO 在 Commodity（宣告在 141 行）
        ul = document.createElement('ul');
        ul.setAttribute("id", "PriceBox");
        ul.setAttribute("class", "PriceBox");
        // 建立 ul
        CO.appendChild(ul);
        let PriceBox = document.getElementsByClassName('PriceBox')[i];
        // 陣列 class
        let PBLi = ['OriginalPrice', 'BarginPrice', 'Car'];
        // 內容
        let PBLiCon = ['原價<span><s>1,000</s></span>元', '特價<span>800</span>元', '購物車'];

        ForLi(PBLi, PriceBox, PBLiCon);
    }

    // 方法
    function ForLi(Class, Name, Con) {
        for (let i = 0; i < Class.length; i++) {
            // 建立 li
            let li = document.createElement('li');
    
            // 在 Name（自訂名稱）框架之內建立
            Name.appendChild(li);
    
            // 新增 class 屬性
            li.setAttribute("class", Class[i]);
    
            // 置入 HTML的內容，可以讀取 HTML 的標籤
            li.innerHTML = Con[i];
        }
        // 終止方式（函式）執行
        return;
    }
}
