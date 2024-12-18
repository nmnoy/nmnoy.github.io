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
