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
$(function(){

});

$(function() {
  $('.kv_slide').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 8000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 2.2, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
  $('.men_slide,.women_slide').slick({
    centerMode: true,
    slidesToShow: 2, // 表示するスライドの数
    arrows: true, // 矢印非表示
    responsive: [
      {
        centerMode: false,
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
  // const bs_length = $('.bnr_slide .bn_slide_item').length;
  // if(bs_length >= 1){
  //   $('.bnr_slide').slick({
  //     arrows: true,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //     speed: 400
  //   });
  // }
  // else {
  //   $('.bnr_slide').slick({
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //     speed: 400
  //   });
  // }

});

$(window).on("load scroll", function(){
  // sc('section01',300);
});

var sc = function sc(a,b){
// var scrollAnimationClass = 'artist_img';
  var scrollAnimationClass = a;
  var scrollAnimationShowClass = 'is-active';
  var triggerMarginDefault = b;//画面内XXXpxスクロール後発火
  // var triggerMarginDefault = b;//画面内XXXpxスクロール後発火

  var scrollAnimationElm = document.querySelectorAll('.' + scrollAnimationClass);
  var scrollAnimationFunc = function() {
    var dataMargin = scrollAnimationClass + '_margin';
    var dataTrigger = scrollAnimationClass + '_trigger';
    var dataDelay = scrollAnimationClass + '_delay';
    for(var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = triggerMarginDefault;
      var elm = scrollAnimationElm[i];
      var showPos = 0;
      if(elm.dataset[dataMargin] != null) {
        triggerMargin = parseInt(elm.dataset[dataMargin]);
      }
      if(elm.dataset[dataTrigger]) {
        showPos = document.querySelector(elm.dataset[dataTrigger]).getBoundingClientRect().top + triggerMargin;
      } else {
        showPos = elm.getBoundingClientRect().top + triggerMargin;
      }
      if (window.innerHeight > showPos) {
        var delay = (elm.dataset[dataDelay])? elm.dataset[dataDelay] : 0;
        setTimeout(function(index) {
          scrollAnimationElm[index].classList.add('is-active');
        }.bind(null, i), delay);
      }
    }
  }
  scrollAnimationFunc();
}
