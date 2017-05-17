// 浏览器滚动发生改变
//$(function () {
//    /*判断浏览器滚动发生改变 huanhuan2014-07-07*/
//    $(".zh-index-sy").hide();
//    /*供货商 列表liuhuanhuan 2014-07-09*/
//    var lengg = $(".floor_wrap .ghsItem").length;//获取个数
//    if (lengg % 4 == 0)//判断当个数被4整除后右边距消失
//    {
//        for (var i = 3; i <= lengg - 1; i = i + 4) {
//            $(".floor_wrap .ghsItem").eq(i).css("margin-right", "0px");
//        }
//    }
//	//刘欢欢  
//	//创建时间 2015-3-27
//	//头部固定
//	if(!$(".red_envelpe").is(":hidden"))
//	{
//		navfixed(200);
//	}
//	else
//	{
//		setTimeout("navfixed(260)",4000);
//	}
//	ghsProHover();
//})

//刘欢欢  
//创建时间 2015-3-27
//头部固定
//function  navfixed(height1)
//{
	
//	//头部固定代码处理
//	$(".zhTopFixed #zht-search-tab li.li").hide();
//	 $(window).scroll(function () {
//        if ($(window).scrollTop() > height1) {
//			$(".zhTopFixed").slideDown(200);
//			$('.topNav').css('position','fixed')
			
//        } else {
//			$('.zh-head-conter').show();
//			$('.topNav').css('position','static')
//			//$(".zhTopFixed").hide();
           
//        }
//    });
//}

