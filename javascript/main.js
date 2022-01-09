//瀏覽器的控制台 列印語法 console.log(顯示資料)
/* 雙引號（"）和單引號（'）為字串 */

// TestCode();

TimeYear();

function TimeYear(){
    // 日期函數 Date 產生新的 Date
    var year = new Date().getFullYear();
    // var now = new Date();
    // var year = now.getFullYear();

    // 年份變數
    // var Year = "2022";
    // 由 html 顯示資料
    document.getElementById('Year').textContent = year;

};




// 設計 方法 function name(參數或空白){程式}
function TestCode() {
    // 變數 命名：英文開頭，英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
    // es5版本 var；es6版本 let（變數） const（常數）
    // 宣告變數 全域變數
        var one;
        var ONE;
    
        // 賦予 值
        one = 1;
        ONE = "01";
        console.log(one);
        console.log(ONE);
        console.log("02");
    
        // 條件判斷 if...else 單一條件
        var NumBer = 12;
        // 顯示條件成立，執行的資料
        if ( NumBer < 5) {
            console.log("數字小於 5");
        } 
    
        if ( NumBer > 10 ) console.log("數字大於 10");
    
        if ( NumBer > 10 )
            console.log("數字為：" + NumBer);
    
        // 顯示條件成立，執行的資料，或是不成立時，執行的資料
        var Num = 8;
        if ( NumBer < Num) 
            console.log("NumBer < Num ");
        else 
            console.log("NumBer < Num 不成立");

        // 多條件判斷式 if(條件){程式} else if(條件二）{程式}else{程式}
        // 全域變數
        let Num_One = 2;
        let Num_Two = 1;
        // == 等於（比較）
        if ( Num_One == Num_Two) {
            console.log("兩個變數相等")
        } else if ( Num_Two > Num_One ) {
            console.log(Num_Two + " 大於 " + Num_One);
        } else {
            console.log("不成立");
        };
}

// 全域變數
var a = 3;
let b = 2;

function Var_LetCode() {
    // 區域變數
    var a = 3;
    let b = 4;

    console.log( a + b);
}

// Var_LetCode();

function Var_LetCode () {
    // var 與 let 的差別；暗藍色表示找不到變數，var 的作用域會在 function 內才會區分「全域或區域」的差別；let 的作用域包含了全部，例：function {...} if(){...} 等等
    // 全域變數
    var A = 4, C = 1;
    let x = 5, y = 6;
    {
        var d = A + C;
        let z = x + y;
    }
    console.log(d);
    // 呼叫不到 z
    console.log(z);

    function NumCal() {
        var d = A + C;
        let z = x + y;
    }
}

// 迴圈 for(宣告變數起始值; 條件; 執行後增加或減少的次數){程式}
let i;
for ( i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

login();

function login() {
    // 變數；承接使用者輸入的資料
    // 帳號
    let User;
    // 密碼
    let Number;

    // 可輸入訊息的對話視窗
    User = window.prompt('請輸入帳號');

    // 假設，網站有連接資料庫，帳號與密碼都由資料庫帶出
    let UserName = 'shan';
    let UserNum = '12345';

    if ( User == UserName ) {

        Number = window.prompt('請輸入密碼');

        if ( Number == UserNum ) {
            console.log("歡迎登入！");
        } else {
            console.log("帳號與密碼有誤！");
        }

    } else {
        console.log("帳號與密碼有誤！");
    }
}
