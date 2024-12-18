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

//スライダー_slick
// var slider = $('.slider');
// var ini = $('.slick-initialized');
// slider.slick({
//   vertical: true,
//   autoplay: true,
//   autoplaySpeed: 1200,
//   speed: 800,
//   dots: true,
//   arrows: false,
//   pauseOnHover: false,
//   responsive: [ {
//         breakpoint: 768,
//         settings: 'unslick'
//     } ]
// });
// $(window).on('resize orientationchange', function() {
//   slider.slick('resize');
// });
//
// $('body').on('wheel','.slick-initialized', function(e) {
//   e.preventDefault();
//
//   if (!($('.slick-initialized').hasClass('js-slick-moving'))) {
//     if (e.originalEvent.deltaY < 0) {
//       $(this).slick('slickPrev');
//     } else {
//       $(this).slick('slickNext');
//     }
//   }
// })
//
// $('body').on('beforeChange','.slick-initialized', function(){
//   $('.slick-initialized').addClass('js-slick-moving');
// });
//
// $('body').on('afterChange','.slick-initialized', function(){
//   $('.slick-initialized').removeClass('js-slick-moving');
// });



$('.hamburger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.profile').removeClass('active');
    $('.copy').removeClass('active');
    $('.logo').removeClass('active');
    $('.sns').removeClass('active');
    $('body').css('overflow','visible');
  }
  else {
    $(this).addClass('active');
    $('.profile').addClass('active');
    $('.copy').addClass('active');
    $('.logo').addClass('active');
    $('.sns').addClass('active');
    $('body').css('overflow','hidden');
  }
});


$(window).on('resize load', function() {
  let wh = $(window).height();
  let txth = $('.profile .txt').height();
  if(txth > wh){
    $('.profile_l').addClass('active');
    $('.profile_r').addClass('active');
  }
  else {
    $('.profile_l').removeClass('active');
    $('.profile_r').removeClass('active');
  }
});



let swiperTest
let swiperStatus

window.addEventListener('load', () => {
  if (window.innerWidth > 767) {
  swiperCreate()
    swiperStatus = true
  } else {
    swiperStatus = false
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 767 && swiperStatus) {
    swiperTest.destroy(false, true)
    swiperStatus = false
  } else if (window.innerWidth > 767 && !swiperStatus) {
    swiperCreate()
    swiperStatus = true
  }
})

const swiperCreate = () => {
  swiperTest = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true, // ループさせる
    parallax: true, // パララックスさせる
    allowTouchMove: false, // マウスでのスワイプを禁止
    speed: 1500, // 少しゆっくり(デフォルトは300)
    autoplay: { // 自動再生
      delay: 2000, // 2秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})
}


// const swiper = new Swiper(".swiper", {
//   direction: 'vertical',
//   loop: true, // ループさせる
//   parallax: true, // パララックスさせる
//   allowTouchMove: false, // マウスでのスワイプを禁止
//   speed: 1500, // 少しゆっくり(デフォルトは300)
//   autoplay: { // 自動再生
//     delay: 2000, // 2秒後に次のスライド
//     disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
//   },
//   // ページネーション
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // 前後の矢印
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
