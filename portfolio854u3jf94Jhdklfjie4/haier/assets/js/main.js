//vwのスクロールバー分マイナス
const setVw = function() {
  const vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
window.addEventListener('DOMContentLoaded', setVw);
window.addEventListener('resize', setVw);

//smoothscroll
var smooth = function smooth(a){
  $(a).click(function() {
    var adjust = $('header').innerHeight();
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position - adjust
    }, speed, 'swing');
    $(".btn_toggle").removeClass("is-active");
    $("header").removeClass("is-active");
	  $("header nav").removeClass("is-active");
    return false;
  });
}

//tel
var tel = function tel(){
  var ua = navigator.userAgent.toLowerCase();
  var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);
  if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
      e.preventDefault();
    });
  }
}


$(window).on("load scroll", function(){
  sc('section',200);
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


////
