WebPage();
function WebPage() {
    $('header').load("header.html");
    $('footer').load("footer.html");
}
let DClass = ['Images', 'LName', 'Brief'];

ShareCon(8);
// 新增 好物分享 的內容
function ShareCon(Number) {
    // 在同一頁面中，會將相同 名稱 的 class，累加編號
    for( let i = 0; i < Number; i++){

        New_ID_Tag( 'ShareCon', 'section', 'Class', 'Commodity');
        New_Class_Tag( 'Commodity', 'p', 'Class', 'Null', i);

        for( let b = 0; b < DClass.length; b++) {
            New_Class_Tag( 'Commodity', 'div', 'Class', DClass[b], i);
            
        }

        let CO = document.getElementsByClassName('Commodity')[i];
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
        Img.setAttribute("src", "../../images/Merchandise/001.jpg");
        // 在 a 內新增
        A.appendChild(Img);

        let H3Name = ['商品名稱1','商品名稱2', '商品名稱3', '商品名稱4', '商品名稱5', '商品名稱6', '商品名稱7', '商品名稱8'];

        New_ClassTagContent( 'LName', 'h3', i, H3Name);
        New_Class_TagContent( 'LName', 'li', 'class', 'LineId', i, '聯絡客服');

        document.getElementsByClassName('Brief')[i].innerHTML = "商品簡介，文字字數超過36個字數（ <mark>英文與阿拉伯數字為36個字數，中文為18個字數</mark> ），會利用 ...... 設計";

    }
    return;
}

// 只渲染框架
function New_IDTag(IdName,NewTagName) {
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementById(IdName);

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    BoxTag.appendChild(TagName);
}

// 只渲染框架
function New_ClassTag(ClassName,NewTagName,i) {
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    BoxTag.appendChild(TagName);
}

// 渲染框架給予資料內容
function New_ClassTagContent(ClassName,NewTagName,i,Content) {
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    // BoxTag.appendChild(TagName).innerHTML = Content;

    BoxTag.appendChild(TagName).innerHTML = Content[ i ];
}

// 給予 渲染框架 一個 ID 屬性
function New_ID_Tag( IdName, NewTagName, IdClass, IdClassName){
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementById(IdName);

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    BoxTag.appendChild(TagName);

    // 給予屬性
    TagName.setAttribute(IdClass, IdClassName);
}

// 給予 渲染框架 一個 class 屬性
function New_Class_Tag( ClassName, NewTagName, IdClass, IdClassName, i){
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    BoxTag.appendChild(TagName);

    // 給予屬性
    TagName.setAttribute(IdClass, IdClassName);
}

// 給予 渲染框架 一個 class 屬性 給予內容
function New_Class_TagContent( ClassName, NewTagName, IdClass, IdClassName, i, Content){
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    BoxTag.appendChild(TagName).innerHTML = Content;

    // 給予屬性
    TagName.setAttribute(IdClass, IdClassName);
}

// 給予 兩個屬性
function New_Class_Tag2( ClassName, NewTagName, IdClass, IdClassName, IdClass2, IdClassName2, i){
    // 指定在 框架（自訂） 內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);

    // 在 框架 內建立 標籤
    BoxTag.appendChild(TagName);

    // 給予屬性
    TagName.setAttribute(IdClass, IdClassName);
    TagName.setAttribute(IdClass2, IdClassName2);
}

// 圖片連結應用
function AImg( COName, ClassName, LinkPath, PhotoPath, i) {
    let CO = document.getElementsByClassName(COName)[i];
    // Images 內新增資料
    let A = document.createElement('a');
    // 新增 連結 屬性
    A.setAttribute("href", LinkPath);
    // 宣告 指定 class 的變數
    let Images = CO.querySelector(ClassName);
    // let Images =CO.getElementsByClassName('Images')[i];
    // 在 Images 內新增
    Images.appendChild(A);

    // Images > a 內新增資料
    let Img = document.createElement('img');
    // 屬性
    Img.setAttribute("src", PhotoPath);
    // 在 a 內新增
    A.appendChild(Img);
}