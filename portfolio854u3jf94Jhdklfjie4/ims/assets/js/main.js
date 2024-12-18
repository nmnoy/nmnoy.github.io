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

//メールアドレス暗号化
function converter(M){
var str="", str_as="";
for(var i=0;i<M.length;i++){
str_as = M.charCodeAt(i);
str += String.fromCharCode(str_as + 1);
}
return str;
}
var ad = converter(String.fromCharCode(104,109,101,110,63,104,108,114,44,98)+String.fromCharCode(110,113,111,110,113,96,115,104,110,109,45,105,111));

$('.contact_btn').attr('href',"mailto:" + ad);
// document.write("<a href=\"mai"+"lto:"+ad+"\">"+ad+"<\/a>");

$('.hamburger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.nav').removeClass('active');
    $('.nav_list').removeClass('active');
    $('#header_logo').removeClass('active');
    $('body').css('overflow','visible');
  }
  else {
    $(this).addClass('active');
    $('.nav').addClass('active');
    $('.nav_list').addClass('active');
    $('#header_logo').addClass('active');
    $('body').css('overflow','hidden');
  }
});

$('.nav_list a').on('click',function(){
  $('.hamburger').removeClass('active');
  $('.nav').removeClass('active');
  $('.nav_list').removeClass('active');
  $('#header_logo').removeClass('active');
  $('body').css('overflow','visible');
});

$(window).on('load',function(){
  $('.movie').addClass('active');
});


$(window).on("load scroll", function(){
  sc('fade_in',300);
  sc('fade_up',300);
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
