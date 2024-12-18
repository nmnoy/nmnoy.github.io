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

// $('.js-movie').on('click', function(){
//   var youtubeId = $(this).attr('data-video');
//   var play = $(this).next('.movie-player');
//   var player = new YT.Player(play, {
//     height: '100%',
//     width: '100%',
//     playerVars: {
//       autoplay: 1,
//       rel: 0,
//       playsinline: 1
//     },
//     videoId: youtubeId
//   });
//   document.querySelectorAll('.js-movie').forEach(function(movie) {
//     movie.style.display = 'none';
//   });
// });



$('.close').on('click',function(){
  $(this).parent().fadeOut();
});

$(window).on("load scroll", function(){
  sc('up',300);
  sc('line',200);
  sc('kageanime',300);
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



// 要素が画面内に表示されているか確認する関数
function isElementInViewport(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // 要素の一部が画面内に入っているかどうかを判定
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

function checkElementsInViewport() {
    var $wrapper = $('#wrap');
    var elements = [
      { id: '#target1', classToAdd: 'is-pink' },
      { id: '#target2', classToAdd: 'is-blue' },
      { id: '#target3', classToAdd: 'is-pink' },
      { id: '#target4', classToAdd: 'is-pink' }
    ];
    var addedClass = null; // 現在追加されているクラスを追跡
    elements.forEach(function(item) {
        var $target = $(item.id);
        if (isElementInViewport($target)) {
            addedClass = item.classToAdd; // 要素が画面内にあった場合、そのクラスを追加する
        }
    });
    $wrapper.removeClass('is-pink is-blue');
    if (addedClass) {
        $wrapper.addClass(addedClass);
    }
}

if($('body').hasClass('home')) {
  $(window).on('scroll resize load', function() {
      checkElementsInViewport();
  });
}



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// YouTube IFrame APIを非同期で読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = [];

// YouTube APIが読み込まれたら呼び出される関数
function onYouTubeIframeAPIReady() {
  document.querySelectorAll('.video-container').forEach((container, index) => {
    const videoId = container.getAttribute('data-video-id');
    const thumbnail = container.querySelector('img');

    // サムネイルクリック時にiframeを生成し動画を再生
    thumbnail.addEventListener('click', function () {
      container.innerHTML = ''; // サムネイルを削除

      const iframe = document.createElement('div');
      iframe.id = `player-${index}`;
      container.appendChild(iframe);

      // YouTubeプレイヤーを生成して自動再生
      players[index] = new YT.Player(`player-${index}`, {
        videoId: videoId,
        playerVars: {
          'autoplay': 1, // 自動再生を有効化
        },
        events: {
          'onStateChange': onPlayerStateChange(index, container, thumbnail)
        }
      });
    });
  });
}

// プレイヤーの状態が変わったときに呼び出される関数
function onPlayerStateChange(index, container, thumbnail) {
  return function (event) {
    if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
      // 動画が停止したらiframeを削除しサムネイルを再表示
      players[index].destroy(); // プレイヤーを削除
      container.innerHTML = ''; // iframeを削除
      container.appendChild(thumbnail); // サムネイルを再追加
    }
  };
}





$(document).ready(function() {
    // 最後の質問のラジオボタンが変更された時に診断結果を表示する
    $('input[name="q9"]').change(function() {
        // 各質問の回答を取得
        var q1 = $('input[name="q1"]:checked').val();
        var q2 = $('input[name="q2"]:checked').val();
        var q3 = $('input[name="q3"]:checked').val();
        var q4 = $('input[name="q4"]:checked').val();
        var q5 = $('input[name="q5"]:checked').val();
        var q6 = $('input[name="q6"]:checked').val();
        var q7 = $('input[name="q7"]:checked').val();
        var q8 = $('input[name="q8"]:checked').val();
        var q9 = $('input[name="q9"]:checked').val();

        // 全ての質問に回答しているか確認
        if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9) {
            alert("全ての質問に答えてください");
            return;
        }

        // 各質問の点数を数値に変換して合計を計算
        var score = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9);

        if (score <= 13) {
          $('.result').removeClass('is-active');
            $('#result3').addClass('is-active');
        } else if (score <= 19) {
          $('.result').removeClass('is-active');
            $('#result2').addClass('is-active');
        } else if (score <= 24) {
          $('.result').removeClass('is-active');
            $('#result1').addClass('is-active');
        } else {
            alert('なし');
        }
    });
});

$('.shindan_sec input').change(function() {
  var target = $(this).closest('.shindan_sec').next('.shindan_sec');
  var position = target.offset().top;
  target.addClass('is-active');
  $('html, body').animate({scrollTop:position}, 400, 'swing');
  return false;
  // $(this).closest('.shindan_sec').next('.shindan_sec').addClass('is-active');
});

$(function(){
  $('.start_ov').fadeOut(500);
});
