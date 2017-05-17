// JavaScript Document

$(document).ready(function(){
	$(".pulldown-nav").hover(function(){
		$(this).find(".account-msg, .fuwu").addClass("hover");
		$(this).find(".pulldown").show();
	},function(){
		$(this).find(".pulldown").hide();
		$(this).find(".account-msg, .fuwu").removeClass("hover");
	});
	
})
/*李鑫鑫-遮罩关闭*/
$(function(){
	$(".popup_bg_box .off_popup,.popup_bg_box .text_bg .abtnzdl a").click(function(){
		$(this).parents(".popup_bg_box").hide();
		$("#BgDiv").hide();	
	})
})
















