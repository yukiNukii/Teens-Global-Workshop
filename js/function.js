$(window).on("load",function(){
    
   $(".main-visual").bgswitcher({
       images:["img/thinking.JPG","img/event-tag01.JPG","img/difference.JPG","img/event-Schedule.JPG","img/movie.JPG" ],
       interval:3000,
       effect:"drop"
    //   effect:"fade" //好みかも
   }); 
  
//   フェードイン＆動き
    
    $('.content-move').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('move');
		}
		else{
			$(this).stop().removeClass('move');
		}
	});
// scheduleのアコーディオン

//   $('.schedule-detail').hide();
   $('.ready').click(function(){
      $(this).next('tr').slideToggle();
    //   $(this).next('tr').siblings('tr').slideUp();
   });
  
// scheduleのhover  randomで
　$('.ready').hover(function(){
　    $(this).css('background',"#2E9AFE");
　    $(this).css('color','white')
　} , function(){
　    $(this).css('background','');
　})
   
// FAQのアコーディオン

   $('.FAQ-accordion dd').hide();
   $('.FAQ-accordion dt').click(function(){
    //   $(this).next(".tgl").color("pink");
      $(this).next('dd').slideToggle();
      $(this).next('dd').siblings('dd').slideUp();
   });
    

})