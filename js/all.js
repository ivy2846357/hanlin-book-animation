// 自定義屬性
var winWidth = $(window).width();
var ratio = winWidth / 1920;
var posX = Math.max(80 * ratio, 30);

// 進下一頁
$(".front:not(.last)").click(function (event) {
  // 點擊放大鏡打開 PDF 不要進下一頁
  let target = $(event.target)
  if (target.is('.open-pdf')) {
    retuen
  }
  // 進下一頁
  $(".book").addClass("open").addClass("openbook")
  $(this).parent(".paper").addClass("open");
  $('.openbook').css('left', '50%');
});

// 回上一頁
$(".back").click(function (event) {
  // 點擊放大鏡打開 PDF 不要回下一頁
  let target = $(event.target)
  if (target.is('.open-pdf')) {
    retuen
  }
  // 回翻時，如果點擊回第一頁的動作
  if ($(this).parent(".paper").index() == 0) {
    $(".book").removeClass("open").removeClass("openbook");
    $(this).parent(".paper").removeClass("open");
  } else {
    // 回上一頁
    $(this).parent(".paper").removeClass("open");
  }
});

$('.teams-page-2').click(function () {
  $('.openbook').css('left', '33%');
})

// // 點擊至最後一頁
// $('.teams-page-27').click(function (e) {
//   $('.openbook').css('left', '66%');
// })

// // 從最後一頁翻回來
// $('.teams-page-28').click(function () {
//   $('.openbook').css('left', '50%');
// })

// 全螢幕設定
let fullscreen;
let eBook = document.querySelector('#container');
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    // document.documentElement.requestFullscreen();
    eBook.requestFullscreen();
    $('.book').css({
      'transform': 'scale(1.5) translateY(-13%)',
      'height': '100vh'
    });
    fsEnter.innerHTML = "Exit Fullscreen";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    $('.book').css({
      'transform': 'scale(1) translateY(-44%)',
      'height': '80vh'
    });
    fsEnter.innerHTML = "Go Fullscreen";
  }
});