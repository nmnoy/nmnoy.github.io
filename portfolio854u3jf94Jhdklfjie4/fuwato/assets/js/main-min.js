let setVw=function(){let i=document.documentElement.clientWidth/100;document.documentElement.style.setProperty("--vw",`${i}px`)};window.addEventListener("DOMContentLoaded",setVw),window.addEventListener("resize",setVw),$('a[href*="#"]').click((function(){$("header").innerHeight();var i=$(""===this.hash?"html":this.hash),e=i.offset().top;if(i.length)return $("html, body").animate({scrollTop:e},400,"swing"),!1}));let tel=function(){let i=navigator.userAgent.toLowerCase();/iphone/.test(i)||/android(.+)?mobile/.test(i)||$('a[href^="tel:"]').on("click",(function(i){i.preventDefault()}))},acc1=function(i,e,s,t){$(i).on("click",(function(){$(i).hasClass("is-active")?($(this).removeClass("is-active"),$(this).parents().find(e).removeClass("is-active"),$("body").removeClass("hidden"),$(t).removeClass("is-active")):($(this).addClass("is-active"),$(this).parents().find(e).addClass("is-active"),$("body").addClass("hidden"),$(t).addClass("is-active"))})),$(s).on("click",(function(){$(i).removeClass("is-active"),$(i).parents().find(e).removeClass("is-active"),$("body").removeClass("hidden"),$(t).removeClass("is-active")})),$(t).on("click",(function(){$(i).removeClass("is-active"),$(i).parents().find(e).removeClass("is-active"),$("body").removeClass("hidden"),$(t).removeClass("is-active")}))};function checkBreakPoint_f04(){w=$(window).width(),w<=767?$(".f04_slide").slick({arrows:!1,centerMode:!0,dots:!0}):$(".f04_slide.slick-initialized").slick("unslick")}function checkBreakPoint_f05_01(){let e=$(".f05_slide_01 .slide").length;if(e<=3)for(i=0;i<=4-e;i++)$(".f05_slide_01 .slide:nth-child("+i+")").clone().appendTo(".f05_slide_01");w=$(window).width(),$(".f05_slide_01.slick-initialized").slick("unslick"),w<=767?$(".f05_slide_01").slick({arrows:!1,centerMode:!0,slidesToShow:1,dots:!0}):$(".f05_slide_01.slick-initialized").slick("unslick")}function checkBreakPoint_f05_02(){let e=$(".f05_slide_02 .slide").length;if(e<=3)for(i=0;i<=4-e;i++)$(".f05_slide_02 .slide:nth-child("+i+")").clone().appendTo(".f05_slide_02");w=$(window).width(),$(".f05_slide_02.slick-initialized").slick("unslick"),w<=767?$(".f05_slide_02").slick({arrows:!1,centerMode:!0,slidesToShow:1,dots:!0}):$(".f05_slide_02.slick-initialized").slick("unslick")}$((function(){acc1("#js_ham","#js_sp_nav",".sp_nav a",".overlay")})),$(window).resize((function(){checkBreakPoint_f04(),checkBreakPoint_f05_01(),checkBreakPoint_f05_02()})),checkBreakPoint_f04(),checkBreakPoint_f05_01(),checkBreakPoint_f05_02();