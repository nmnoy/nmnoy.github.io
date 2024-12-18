var smooths = function smooths(a){
  $(a).click(function() {
    if(!($(this).hasClass('inline_modal'))){
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    }
    else {
    }
  });
}
$(function(){
  smooths('a[href^="#"]');
});

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    // bfcache発動時の処理
    window.location.reload();
  }
});

$(document).ready(function () {
    $(".sample").imagezoomsl({
      magnifierborder: "2px solid #3bb79a",
      zoomrange: [2.4, 2.4],
   zoomstart: 2.4,
   disablewheel: false,
   loopspeedanimate: 1,
   innerzoommagnifier: true,
   magnifiereffectanimate: "fadeIn",
   // magnifiersize: [300, 300]
    });
});


$(function(){
  $('main > div,main > section').not('.modal_wrap').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass('fadeIn');
      $(this).off('inview');
    }
  });
});


//vwのスクロールバー分マイナス
const setVw = function() {
  const vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
window.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);
