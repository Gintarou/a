!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});


$(window).on('load',function(){
let num = 1;
  $('#main-first').on('inview', function(event, isInView) {
  		if (isInView) {
        if (num == 1) {
          setTimeout(() => {
            $("#main-first-heading2").addClass('appear');
          }, 800);
          setTimeout(() => {
            $("#main-first-heading2").removeClass('appear');
          }, 2300);
          num++;
        }
  			setTimeout(() => {
  				$("#main-first-heading").addClass('appear');
  			}, 2500);
        setTimeout(() => {
          $("#header-text").addClass('appear');
        }, 3300);
        setTimeout(() => {
          $(".openbtn").addClass('appear');
        }, 3300);
        setTimeout(() => {
          $(".scrolldown").addClass('appear');
        }, 3300);
      } else {
      //表示領域から出た時
      }
  	});

  $('#main-concept-text').on('inview', function(event, isInView) {
		if (isInView) {
			setTimeout(() => {
				$("#main-concept-heading1").addClass('appear');
			}, 300);
			setTimeout(() => {
				$("#main-concept-heading2").addClass('appear');
			}, 500);
			setTimeout(() => {
				$("#main-concept-text").addClass('appear');
			}, 800);
			setTimeout(() => {
				$("#main-concept-sp-image").addClass('appear');
				$("#main-concept-image").addClass('appear');
			}, 900);
			setTimeout(() => {
				$("#sample").addClass('appear');
			}, 1300);
    } else {
    //表示領域から出た時
    }
	});

  $('#main-kuraroom-heading').on('inview', function(event, isInView) {
    if (isInView) {
      setTimeout(() => {
        $("#main-kuraroom").addClass('appear-kuraroom');
      }, 300);
    } else {
    }
  });

  $('#main-online-heading').on('inview', function(event, isInView) {
    if (isInView) {
      setTimeout(() => {
        $("#main-online").addClass('appear-online');
      }, 300);
    } else {

    }
  });
});
