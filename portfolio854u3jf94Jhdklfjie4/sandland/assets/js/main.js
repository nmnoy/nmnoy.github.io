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


$(window).on('load resize',function(){
  let l_img = $('header .left_wrap img').width();
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('header .left_wrap').css('width','auto');
  }
  else {
    $('header .left_wrap').width(l_img);
    var hh = $('header').outerHeight();
    if($('.bnr_area').length){
      var bh = $('.bnr_area').outerHeight();
    }
    else {
      var bh = 0;
    }
    var fh = $('footer').outerHeight();
    var mixh = hh + bh + fh;
    var wh = $(window).height();
    var h = wh - mixh;
    $('.news_index').css('min-height',h);
    $('.news_article').css('min-height',h);
    $('.filmbddvd_sec').css('min-height',h);
  }
});


$(function() {
  const bs_length = $('.bnr_slide .bn_slide_item').length;
  if(bs_length >= 1){
    $('.bnr_slide').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 400
    });
  }
  else {
    $('.bnr_slide').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 400
    });
  }

});

$(window).on("load scroll", function(){
  sc('section01',300);
  sc('section02',300);
  sc('section03',300);
  sc('section04',300);

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

$(function () {
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $("#page-top").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    let vw10 = $(window).width();
    if (window.matchMedia("(max-width: 768px)").matches) {
      if (scrollHeight - scrollPosition <= footHeight) {
        $("#page-top").css({
          position: "absolute",
          bottom: footHeight - (vw10  * 0.06) + "px",
        });
      } else {
        $("#page-top").css({
          position: "fixed",
          bottom: (vw10  * 0.06) + "px",
        });
      }
    }
    else {
      if (scrollHeight - scrollPosition <= footHeight) {
        $("#page-top").css({
          position: "absolute",
          bottom: footHeight - (vw10  * 0.015) + "px",
        });
      } else {
        $("#page-top").css({
          position: "fixed",
          bottom: "20px",
        });
      }
    }
  });
});


$(function(){
  const thum01 = $('.fb_slide_thum01 li').length;
  const thum02 = $('.fb_slide_thum02 li').length;
  const thum03 = $('.fb_slide_thum03 li').length;
  const thum04 = $('.fb_slide_thum04 li').length;
  $('.fb_slide_view01').slick({
    autoplay: false,
    arrows: false,
    asNavFor: '.fb_slide_thum01'
  });
  $('.fb_slide_thum01').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: thum01,
    focusOnSelect: true,
    asNavFor: '.fb_slide_view01',
  });
  $('.fb_slide_view02').slick({
    autoplay: false,
    arrows: false,
    asNavFor: '.fb_slide_thum02'
  });
  $('.fb_slide_thum02').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: thum02,
    focusOnSelect: true,
    asNavFor: '.fb_slide_view02',
  });
  $('.fb_slide_view03').slick({
    autoplay: false,
    arrows: false,
    asNavFor: '.fb_slide_thum03'
  });
  $('.fb_slide_thum03').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: thum03,
    focusOnSelect: true,
    asNavFor: '.fb_slide_view03',
  });
  $('.fb_slide_view04').slick({
    autoplay: false,
    arrows: false,
    asNavFor: '.fb_slide_thum04'
  });
  $('.fb_slide_thum04').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: thum04,
    focusOnSelect: true,
    asNavFor: '.fb_slide_view04',
  });
  $('.fd_tab li button').on('click',function(){
    var num = $(this).parent('li').index();
    $('.fd_tab li button').removeClass('is-active');
    $(this).addClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').removeClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').eq(num).addClass('is-active');
    if(num == 0){
      $('.fb_slide_view01').slick('setPosition');
      $('.fb_slide_thum01').slick('setPosition');
    }
    else if (num == 1) {
      $('.fb_slide_view02').slick('setPosition');
      $('.fb_slide_thum02').slick('setPosition');
    }
    else if (num == 2) {
      $('.fb_slide_view03').slick('setPosition');
      $('.fb_slide_thum03').slick('setPosition');
    }
    else {
      $('.fb_slide_view04').slick('setPosition');
      $('.fb_slide_thum04').slick('setPosition');
    }
  });
});

var hash = window.location.hash;
if(hash) {
  var tab_num = $('.fd_tab li button').parent('li').index();
  if(hash == '#bd-limited'){
    $('.fd_tab li button').removeClass('is-active');
    $('.fd_tab li').eq(0).find('button').addClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').removeClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').eq(0).addClass('is-active');
  }
  else if (hash == '#bd-normal') {
    $('.fd_tab li button').removeClass('is-active');
    $('.fd_tab li').eq(1).find('button').addClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').removeClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').eq(1).addClass('is-active');
  }
  else if (hash == '#dvd-normal') {
    $('.fd_tab li button').removeClass('is-active');
    $('.fd_tab li').eq(2).find('button').addClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').removeClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').eq(2).addClass('is-active');
  }
  else if(hash == '#benefits') {
    $('.fd_tab li button').removeClass('is-active');
    $('.fd_tab li').eq(3).find('button').addClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').removeClass('is-active');
    $('.filmbddvd_box_wrap .filmbddvd_box').eq(3).addClass('is-active');
  }
}

//リファラー
const ref = document.referrer;

//同期アニメーション
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};


  $(window).on('pageshow', function(event) {
  if($('body').hasClass('home')){

    // if (window.performance.navigation.type === 2) {
    //
    // }
if (window.performance.navigation.type === 2) {
  // alert('test');
  $('.wipe').removeClass('heighta');
  $('.modal_wrap').hide();
  wait(0.8)
  .then(() => {
    $('.wipe').addClass('is-active');
    return wait(0.6);
  })
  .then(() => {
    $('.gnav li').each(function(){
      $('.gnav li').each(function(i){
        $(this).delay(i * 200).queue(function(){
          $(this).addClass('is-active');
        });
      });
    });
    return wait(0.6);
  })
  .then(() => {
    $('.wipe').addClass('heighta');
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
    setTimeout(function() {
      $(".gnav_in").addClass('is-active');
    }, 1400);
  }
  else {
    setTimeout(function() {
      $(".gnav_in").addClass('is-active');
    }, 1600);
  }
}
else {
  wait(0.8)
  .then(() => {
    $('.wipe').addClass('is-active');
    return wait(0.6);
  })
  .then(() => {
    $('.gnav li').each(function(){
      $('.gnav li').each(function(i){
        $(this).delay(i * 200).queue(function(){
          $(this).addClass('is-active');
        });
      });
    });
    return wait(0.6);
  })
  .then(() => {
    $('.wipe').addClass('heighta');
  });

  //ワイプが開かなかった場合
  setTimeout(function() {
    if(!($('.wipe').hasClass('is-active'))) {
      $('.wipe').addClass('is-active');
      $('.gnav li').each(function(){
        $('.gnav li').each(function(i){
          $(this).delay(i * 200).queue(function(){
            $(this).addClass('is-active');
          });
        });
      });
      setTimeout(function() {
        $('.wipe').addClass('heighta');
      },2000);
    }
  },3400);


  if (window.matchMedia("(max-width: 768px)").matches) {
    setTimeout(function() {
      $(".gnav_in").addClass('is-active');
    }, 1400);
  }
  else {
    setTimeout(function() {
      $(".gnav_in").addClass('is-active');
    }, 1600);
  }

  if(ref.indexOf('sandland.jp') !== -1){
    // 同じサイト内からの遷移の場合
    console.log('sandland.jp');
  } else{
    // 最初からTOPの場合モーダル出る
    setTimeout(function() {
      $('.modal_wrap').fadeIn(600);
    },3400);
  }
  if (window.performance.navigation.type === 1) {//リロード時
    console.log('reload');
    setTimeout(function() {
      $('.modal_wrap').fadeIn(600);
    },3400);
  }
}



    //モーダルhover,close
    $('.modal a').hover(function() {
      $(this).parents('.modal').siblings().css('background-color','rgba(0,0,0,0.7)');
    },function(){
      $(this).parents('.modal').siblings().css('background-color','rgba(0,0,0,0.5)');
    });
    $('.modal_overlay,#close').on('click',function(){
      $('.modal_wrap').fadeOut(600);
      $('body').removeClass('hidden');
    });

  }
  });
