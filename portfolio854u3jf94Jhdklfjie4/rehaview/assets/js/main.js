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
  var position = target.offset().top - adjust;
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

$(document).on('click', '.open-options', function(event) {
  event.preventDefault();
  $('#modal01').iziModal('open');
});
$('.iziModal').iziModal({
  headerColor: '#26A69A', //ヘッダー部分の色
  width: '40%', //横幅
  overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
  fullscreen: true, //全画面表示
  transitionIn: 'fadeInUp', //表示される時のアニメーション
  transitionOut: 'fadeOutDown' //非表示になる時のアニメーション
});
