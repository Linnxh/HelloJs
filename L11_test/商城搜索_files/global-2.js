// JavaScript Document
$(function(){
	indeRkDown();
	orderListDown();//功能:进货单下拉
	topFixed(200);
	
	FixedorderListDown();
	shopConDown();
	ghsProHover();
	rightBar();/////右侧bar
	/*修改 bar_fill 高度 update:2016-11-23  author:liuhuanhuan start*/
	var entrance_rightBar=$(".entrance_rightBar").height()+30;
	
	if(entrance_rightBar<($(window).height()-(45*4+130))/2)
	{
		entrance_rightBar=($(window).height()-(45*4+130))/2;
	}
	
	
	$('.bar_fill').css('height',entrance_rightBar+"px");
	/*修改 bar_fill 高度 update:2016-11-23  author:liuhuanhuan end*/

	/*author:heyalong/增加左右下角活动入口关闭按钮/2016-08-24*/
	$('.left-fixed .JsCon').append('<img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/close.png" class="close-fixed">');
	$('.right-fixed .JsCon').append('<img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/close.png" class="close-fixed">');
	$(".close-fixed").click(function(event){
		$(this).parents(".JsCon").hide();
		event.stopPropagation();
	});
	/*遮罩 liuhuanhuan  2016/08/24*/
	$("._mskg").width($(document).width());
	 $('.zht-search-tab>li').on('click',function (){
		var itop = $(window).scrollTop();
		$(this).addClass('cur').siblings().removeClass('cur');
		/*update 20-16-6-27*/
		if($('.zht-search-tab .cur').text() == "供货商"){
				$('.zh-search-input').hide();
				$('#txtShopKW').show()
			}
			else if($('.zht-search-tab .cur').text() == "商品")
			{
				$('.zh-search-input').hide();
				$('#txtKW').show();
			}
			else
			{
				$('.zh-search-input').hide();
				$('#txtProductTXM').show();
			}
		if(itop>200){
			$('.zht-search-tab .cur').show().siblings().hide();
			if($(this).index()>0){
				$(this).insertBefore($('.zht-search-tab li').eq(0));
			}
		}
		
	});


	$('.zht-search-tab').hover(function (){
		var itop = $(window).scrollTop();
		if(itop>200){
			$(this).find('li').show();
		}
	},function (){
		var itop = $(window).scrollTop();
		if(itop>200){
			$(this).find('.cur').siblings().hide();
			
		}
	})
	
	
	
});

//创建时间:2015-4-2
//创建人:刘欢欢
//功能:我的掌合下拉
function  indeRkDown()
{
	$("#myZhrkLink").hover(function()
	{
		$(this).addClass("menu_bgH");
		$("#indexRkDown").show();
	},function(){
		$(this).removeClass("menu_bgH");
		$("#indexRkDown").fadeOut(100);	
	})
	
}

//创建时间:2015-3-31
//创建人:刘欢欢
//功能:进货单下拉
function  orderListDown()
{
	$("#orderBtn").hover(function()
	{
		$(this).addClass("menu_bgH");
		$(".order-listBox").show();
	},function(){
		$(this).removeClass("menu_bgH");
		$(".order-listBox").fadeOut(100);	
	})
	
}
//创建时间:2015-4-4
//创建人:刘欢欢
//功能:搜索框切换



//创建人；刘欢欢
//时间:2015-4-4
//头部固定
function topFixed(height1)
{
	//头部固定代码处理
	$(".zhTopFixed #zht-search-tab li.li").hide();
	 $(window).scroll(function () {
        if ($(window).scrollTop() > height1) {
					/*update 20-16-6-27*/
			if($('.zht-search-tab .cur').text() == "供货商"){
				$('.zh-search-input').hide();
				$('#txtShopKW').show()
			}
			else if($('.zht-search-tab .cur').text() == "商品")
			{
				$('.zh-search-input').hide();
				$('#txtKW').show();
			}
			else
			{
				$('.zh-search-input').hide();
				$('#txtProductTXM').show();
			}
			
			$('.zht-search-tab .cur').show().siblings().hide();
			//改变结构
			$(".topNav").css({"position":"fixed","top":"0px",'z-index':'999999'});
			$("#head").find(".zh-logo").hide();
			$("#head").find(".zh-head-conter").addClass("zhTopFixed").removeClass("zh-head-conter");
			$("#head").find(".zh-search").addClass("zhFixTop").removeClass("zh-search");
			
			
			
			$(".zh-search-form").siblings().hide();
			$(".zh-saom").hide();
			$("#head .down").show();
			if($('.zht-search-tab .cur').index()>0){
				$('.zht-search-tab .cur').insertBefore($('.zht-search-tab li').eq(0));
				$('.zht-search-tab .cur').show().siblings().hide()
        	}
		} else {
			$(".topNav").css({"position":"static"});
			//改变结构
			$("#head").find(".zh-logo").show();
			$("#head").find(".zhTopFixed").addClass("zh-head-conter").removeClass("zhTopFixed");
			$("#head").find(".zhFixTop").addClass("zh-search").removeClass("zhFixTop");
			
			
			$(".zh-search-form").siblings().show();
			$(".zh-saom").show();
			$("#head >.down").hide();
			$('.zht-search-tab li').show()
        }
    });
}


//创建时间:2015-3-31
//创建人:刘欢欢
//功能:头部固定进货单下拉2
function  FixedorderListDown()
{
	$("#order_jhd1").mouseover(function()
	{
		$(this).addClass("active");
		$(this).find(".order-listBox").show();
	});
	
	$("#order_jhd1").mouseleave(function()
	{
		$(this).removeClass("active");
		$("#order_jhd1 .order-listBox").hide();
		
	})
}

//创建时间:2015-3-31
//创建人:刘欢欢
//功能:店家下拉
function  shopConDown()
{
	$(".top2-shop").hover(function()
	{
		$(this).find(".upIco").addClass("downIco").removeClass("upIco");
		$(".shopWarp").show();
	},function()
	{
		$(".shopWarp").hide();
		$(this).find(".downIco").addClass("upIco").removeClass("downIco");
	});
	
}


//创建人；刘欢欢
//时间:2015-3-12
//供货商
function ghsProHover()
{
	$('.Countdown-goods-1 .I-ghsBoxW:gt(4)').css({'top':'-1px'});
	$(".I-ghsBox").hover(function()
	{	
			$(this).addClass("I-ghsBoxH");
			$(this).siblings(".bg1-hover").show();
			$(this).parents(".I-ghsBoxW").css({"z-index":"99"});
			$(this).parents(".I-ghsBoxW").siblings(".I-ghsBoxW").css({"z-index":"9"});
		
		if($(this).siblings(".bg1-hover").hasClass("bg5"))
		{
			$(this).width(240);	
			$(this).siblings(".bg1-hover").css({"left":"-240px"});	
		}
		
	},function()
	{
		$(this).siblings(".sanIco").remove();
		$(this).siblings(".bg1-hover").hide();	
		$(this).removeClass("I-ghsBoxH");
		
	})	
}



function rightBar(){
	//设置样式
	$('.bar_mask').css('height',$(window).height());
	//$('.bar_fill').css('height',($(window).height()-(45*4+130))/2);
	/*修改 bar_fill 高度 update:2016-11-23  author:liuhuanhuan start*/
	var entrance_rightBar=$(".entrance_rightBar").height()+30;
	//console.log(entrance_rightBar);
	if(entrance_rightBar<($(window).height()-(45*4+130))/2)
	{
		entrance_rightBar=($(window).height()-(45*4+130))/2;
	}
	//console.log(($(window).height()-(45*4+130))/2);

		$('.bar_fill').css('height',entrance_rightBar);
	/*修改 bar_fill 高度 update:2016-11-23  author:liuhuanhuan end*/
	

	$('.bar_right_menu').hover(function (){			
			$(this).find('.i_tip').css('right','70px');
			$(this).find('.i_tip').show().stop(true).animate({'right':'35px','opacity':'1'})
			
	},function (){
		var c = $(this).find('.i_tip');
			$(this).find('.i_tip').animate({'right':'70px','opacity':'0'},function (){
				$(c).hide()
			})
		
	});
	
	
	
	$('.bar_maskbg .rightMenuHover').hover(function (){
		$(this).css({'background':'#fff'}).find('span').css({'color':'#fff'});
	},function (){
		$(this).css('background','#333').find('span').css({'color':'#ac0b15'});
	});
	

	
	
	$('.bar4').click(function (){
		 $('body,html').animate({scrollTop:0},1000);  
	})

}












	