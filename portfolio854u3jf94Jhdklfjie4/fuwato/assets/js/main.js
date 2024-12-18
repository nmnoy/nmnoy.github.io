//vwのスクロールバー分マイナス
let setVw = function() {
  let vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
window.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);

//スムーズスクロール
$('a[href*="#"]').click(function () {
  let adjust = $('header').innerHeight();
  var target = $(this.hash === '' ? 'html' : this.hash);
  var position = target.offset().top;
  if (target.length) {
    $('html, body').animate({scrollTop:position}, 400, 'swing');
    return false;
  }
});


//tel
let tel = function tel(){
  let ua = navigator.userAgent.toLowerCase();
  let isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);
  if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
      e.preventDefault();
    });
  }
}

let acc1 = function acc(a,b,c,d){
  $(a).on("click", function(){
    if($(a).hasClass("is-active")){
      $(this).removeClass("is-active");
      $(this).parents().find(b).removeClass("is-active");
      $('body').removeClass("hidden");
      $(d).removeClass("is-active");
    }
    else {
      $(this).addClass("is-active");
      $(this).parents().find(b).addClass("is-active");
      $('body').addClass("hidden");
      $(d).addClass("is-active");
    }
	});
  $(c).on("click", function(){
    $(a).removeClass("is-active");
    $(a).parents().find(b).removeClass("is-active");
    $('body').removeClass("hidden");
    $(d).removeClass("is-active");
	});
  $(d).on("click", function(){
    $(a).removeClass("is-active");
    $(a).parents().find(b).removeClass("is-active");
    $('body').removeClass("hidden");
    $(d).removeClass("is-active");
	});
}

$(function(){
  acc1('#js_ham','#js_sp_nav','.sp_nav a','.overlay');//共通ヘッダー
});



// $(document).ready(function(){
//   $('.f05_slide').slick({
//     arrows: false,
//     centerMode: true,
//     slidesToShow: slidesToShowNum,
//     dots: true,
//   });
// });

function checkBreakPoint_f04() {
	w = $(window).width();
	if (w <= 767) {
    $('.f04_slide').slick({
      arrows: false,
      centerMode: true,
      dots: true,
    });
	} else {
		$('.f04_slide.slick-initialized').slick('unslick');
	}
}

function checkBreakPoint_f05_01() {
  let slidesToShowNum = 3; //slidesToShowに設定したい値
  /* slidesToShowより投稿が少ない場合の処理を記述 */
  let item = $('.f05_slide_01 .slide').length; //スライド内の画像の個数を取得
  if (item <= slidesToShowNum) {
    for (i = 0; i <= slidesToShowNum + 1 - item; i++) { //足りていない要素数分、後ろに複製
    $('.f05_slide_01 .slide:nth-child(' + i + ')').clone().appendTo('.f05_slide_01');
    }
  }
	w = $(window).width();
  $('.f05_slide_01.slick-initialized').slick('unslick');
	if (w <= 767) {
    $('.f05_slide_01').slick({
      arrows: false,
      centerMode: true,
      slidesToShow: 1,
      dots: true,
    });
	} else {
    $('.f05_slide_01.slick-initialized').slick('unslick');
    // $('.f05_slide_01').slick({
    //   arrows: false,
    //   centerMode: true,
    //   centerPadding: "15%",
    //   slidesToShow: slidesToShowNum,
    //   dots: true,
    // });
	}
}

function checkBreakPoint_f05_02() {
  let slidesToShowNum = 3; //slidesToShowに設定したい値
  /* slidesToShowより投稿が少ない場合の処理を記述 */
  let item = $('.f05_slide_02 .slide').length; //スライド内の画像の個数を取得
  if (item <= slidesToShowNum) {
    for (i = 0; i <= slidesToShowNum + 1 - item; i++) { //足りていない要素数分、後ろに複製
    $('.f05_slide_02 .slide:nth-child(' + i + ')').clone().appendTo('.f05_slide_02');
    }
  }
	w = $(window).width();
  $('.f05_slide_02.slick-initialized').slick('unslick');
	if (w <= 767) {
    $('.f05_slide_02').slick({
      arrows: false,
      centerMode: true,
      slidesToShow: 1,
      dots: true,
    });
	} else {
    $('.f05_slide_02.slick-initialized').slick('unslick');
    // $('.f05_slide_02').slick({
    //   arrows: false,
    //   centerMode: true,
    //   centerPadding: "15%",
    //   slidesToShow: slidesToShowNum,
    //   dots: true,
    // });
	}
}
// ウインドウがリサイズする度にチェック
$(window).resize(function(){
	checkBreakPoint_f04();
  checkBreakPoint_f05_01();
  checkBreakPoint_f05_02();
});
// 初回チェック
checkBreakPoint_f04();
checkBreakPoint_f05_01();
checkBreakPoint_f05_02();
