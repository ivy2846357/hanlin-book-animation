var winWidth = $(window).width();
var ratio = winWidth / 1920;
var posX = Math.max(80 * ratio, 30);

$(".front:not(.last)").click(function(event) {
  let target = $(event.target)
  if(target.is('.open-pdf')){
    retuen
  }
  $(".book").addClass("open").addClass("openbook")
  $(this).parent(".paper").addClass("open");
});

$(".back").click(function(event) {
  let target = $(event.target)
  if(target.is('.open-pdf')){
    retuen
  }
  if ($(this).parent(".paper").index() == 0){
    $(".book").removeClass("open").removeClass("openbook");
    $(this).parent(".paper").removeClass("open");
  }else{
    $(this).parent(".paper").removeClass("open");
  }
});
