// 指定圖片路徑 陣列
// 電腦版
let Pimages =['images/Banner/pimg001.jpg', 'images/Banner/pimg002.jpg', 'images/Banner/pimg003.jpg', 'images/Banner/pimg004.jpg', 'images/Banner/pimg005.jpg'];

// 平版
let Timages =['images/Banner/t/timg001.jpg', 'images/Banner/t/timg002.jpg', 'images/Banner/t/timg003.jpg', 'images/Banner/t/timg004.jpg', 'images/Banner/t/timg005.jpg'];

// 手機
let Simages =['images/Banner/s/simg001.jpg', 'images/Banner/s/simg002.jpg', 'images/Banner/s/simg003.jpg', 'images/Banner/s/simg004.jpg', 'images/Banner/s/simg005.jpg'];

// 變數 記錄目前正在顯示第幾張圖片，儲存著圖片對應的索引編號。
let current = 0;

// 方法 宣告變數，將執行方法直接寫入變數中
let ChangeImage = function(num) {
    // 判斷式 條件 -- 索引編號 + 自訂參數值 >=0 和 索引編號 + 自訂參數值 < 圖片陣列的長度，同時成立時

    current = ( current + num + Pimages.length ) % Pimages.length;
    // img 預設圖
    document.getElementById('Bannerimg').src = Pimages[current];

    // 電腦版
    document.getElementById('Pimg').srcset = Pimages[current];

    // 平版
    document.getElementById('Timg').srcset = Timages[current];

    // 手機
    document.getElementById('Simg').srcset = Simages[current];

    // current += num;

    // 不循環寫法
    // if( current < 0) {
    //     current = 0
    // } else if ( current > images.length - 1 ){
    //     current = images.length -1 
    // }

    // 循環寫法
    // if( current < 0) {
    //     current = images.length -1 
    // } else if ( current > images.length - 1 ){
    //     current = 0
    // }

    
    
    // if( current + num >= 0 && current + num < images.length ) {
    //     // 索引變數 = 索引變數 + 自訂參數值  current = current + num;
    //     current += num;
    //     // 轉場動畫
    //     // 更改 圖片的連結檔案
    //     document.getElementById('Bannerimg').src = images[current];
        
    // } else {
    //     current = -1;
    // }
    // document.getElementById('Bannerimg').src = images[current];
    // console.log(current);
    
}

// 按鈕執行 方法
document.getElementById('prev').onclick = function() {
    ChangeImage(-1);
}

document.getElementById('next').onclick = function() {
    ChangeImage(1);
}

// 自動播放
// let Timer = setInterval(() => {
//     if ( current < images.length ) {
//         ChangeImage(1);
//         console.log(current);
//     }
// }, 3000);