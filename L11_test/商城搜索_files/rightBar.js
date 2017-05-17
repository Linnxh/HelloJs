///右侧bar
$(function (){

		////设置样式
	$('.bar_mask').css('height',$(window).height());
	//$('.bar_fill').css('height',($(window).height()-(45*4+130))/2);
	$('.bar_right_menu').hover(function (){
		
			
			$(this).find('.i_tip').css('right','70px');
			$(this).find('.i_tip').show().stop(true).animate({'right':'35px','opacity':'1'})
			
	},function (){
		var c = $(this).find('.i_tip');
			$(this).find('.i_tip').animate({'right':'70px','opacity':'0'},function (){
				$(c).hide()
			})
		
	})
	
	
	
	$('.bar_maskbg .rightMenuHover').hover(function (){
		$(this).css({'background':'#fff'}).find('span').css({'color':'#fff'});
	},function (){
		$(this).css('background','#333').find('span').css({'color':'#ac0b15'});
	})
	

	
	
	$('.bar4').click(function (){
		 $('body,html').animate({scrollTop:0},1000);  
	})

})