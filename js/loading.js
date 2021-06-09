// ページが完全に読み込み終了した後の処理
$(window).on('load',function(){
  $("#splash").delay(100).fadeOut('slow');
  $("#splash_logo").fadeOut();
});
