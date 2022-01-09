//瀏覽器的控制台 列印語法 console.log(顯示資料)
/* 雙引號（"）和單引號（'）為字串 */

// 變數 命名：英文開頭，英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
// es5版本 var
// 宣告變數 全域變數
var one;
var ONE;
var One;
var O_ne;
var O_01ne;

// 賦予 值
one = 1;
ONE = "01";
console.log(one);
console.log(ONE);
console.log("02");


// 日期函數 Date 產生新的 Date
var year = new Date().getFullYear();
// var now = new Date();
// var year = now.getFullYear();

// 年份變數
// var Year = "2022";
// 由 html 顯示資料
document.getElementById('Year').textContent = year;

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
// if () {

// } else {

// }