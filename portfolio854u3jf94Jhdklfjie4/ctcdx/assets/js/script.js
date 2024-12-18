//vwのスクロールバー分マイナス
const setVw = function() {
  const vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
window.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);



var tel = function tel(){
  var ua = navigator.userAgent.toLowerCase();
  var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);
  if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
      e.preventDefault();
    });
  }
}

var smooth = function smooth(a){
  $(a).click(function() {
    var adjust = $('#header').innerHeight();
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    if(href === '#concept'){
      var logoh = $('#content_logo').height();
      $('body,html').animate({
        scrollTop: position - logoh
      }, speed, 'swing');
      return false;
    }
    else {
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    }
  });
}

$(function(){
  tel();
  smooth('a[href^="#"]');
});

const swiper1 = new Swiper('.blog_swiper', {
  speed: 600, // スライドの切り替えスピード
  slidesPerView: 1.8, // スライドを複数枚表示する
  spaceBetween: 20,
  // loop: true, // ループさせる
  centeredSlides: true,
  pagination: {
    el: '#swiper-pagination-blog',
  },
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    768: {
      slidesPerView: 3,
      centeredSlides: false,
      // spaceBetween: 100,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.member_slider', {
  speed: 600, // スライドの切り替えスピード
  loop: true, // ループさせる
  slidesPerView: 1.7, // スライドを複数枚表示する
  centeredSlides: true,  // スライドを中央寄せにする
  spaceBetween: 70, // スライド間の余白
  pagination: {
    el: '.swiper-pagination-member',
  },
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    768: {
      slidesPerView: 1.640,
      spaceBetween: 100,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let service_num = $('.service_list li').length;
if(service_num == 1) {
  $('.service_list').addClass('num1');
  const swiper3 = new Swiper('.service_swiper', {
    speed: 600, // スライドの切り替えスピード
    slidesPerView: 1.8, // スライドを複数枚表示する
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination-service',
    },
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      768: {
        slidesPerView: 1,
        centeredSlides: true,
        // spaceBetween: 100,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
else if (service_num == 2) {
  const swiper3 = new Swiper('.service_swiper', {
    speed: 600, // スライドの切り替えスピード
    slidesPerView: 1.8, // スライドを複数枚表示する
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination-service',
    },
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        // spaceBetween: 100,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
else if (service_num >= 3) {
  $('.service_list').addClass('num3');
  const swiper3 = new Swiper('.service_swiper', {
    speed: 600, // スライドの切り替えスピード
    slidesPerView: 1.8, // スライドを複数枚表示する
    spaceBetween: 20,
    // loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination-service',
    },
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
        // spaceBetween: 100,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

//news
/* ここには、表示するリストの数を指定します。 */
var moreNum = 3;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.news_box:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.viewmore').on('click', function() {
  $('.news_box.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.news_box.is-hidden').length == 0) {
    $('.viewmore').fadeOut();
  }
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".news_list li").length;
    if (list < moreNum) {
      $('.viewmore').addClass('is-btn-hidden');
  }
});
