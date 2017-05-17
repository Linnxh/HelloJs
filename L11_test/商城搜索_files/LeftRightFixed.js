/**
  * Created by heyalong on 2016/11/16.
  */
var activtydomain = 'http://static.zhanghetianxia.com/';/*域名URL*/
var newactivtydomain = 'http://newstatic.zhanghetianxia.com/';/*域名URL*/
var isOpenTopActivty = true;

$(function () {
    //控制情人节专题入口--2017年1月11日17:55:55 刘鹏
    if ($("#hidIsOpenChocolate").val() == "1") {
        isOpenTopActivty = true;
    }
    //控制情人节专题入口结束--2017年1月11日17:55:55 刘鹏
    //左下角 调用开关
    leftFixedFn({
        str: 'fzp',
        off: false
    });
    //右下角 调用开关
    RightFixedFn({
        str: 'zjd',
        off: false
    });
    //顶部菜单活动入口 调用开关
    topActivtyEnter({
        //活动连接
        _link: 'http://chaoshi.zhanghetianxia.com/_818room/MainActivityHallspring',
        //图片路径		
        imgSrc: 'http://static.zhanghetianxia.com/pc/web/cs/images/818/chunleiGIF.gif',
        //开关
        off: false
    });
    //右上角活动连接
    topRightEnter({
        off: false
    });
    //banner轮播背景   调用开关
    bannerBg({
        off: true
    })
});
 /*左侧活动入口*/

 function leftFixedFn(obj) {
     var LeftImgUrlBg = '';
     var LeftImgUrlSm = '';
     var _link = '';
     switch (obj.str) {
         case 'dzp':    //活动大转盘
             LeftImgUrlBg = activtydomain + 'images/images/zp.gif';   //大图路径
             LeftImgUrlSm = activtydomain + 'images/images/zp-p.png';   //小图路径
             _link = "https://www.baidu.com";          //连接地址
             break;
         case 'fzp':      //翻纸牌
             LeftImgUrlBg = activtydomain + 'images/images/fzp-open.gif';   //大图路径
             LeftImgUrlSm = activtydomain + 'images/images/fzp.png';         //小图路径
             _link = "https://www.baidu.com";                //连接地址
             break;
         case 'zjd':        //砸金蛋
             LeftImgUrlBg = activtydomain + 'images/images/zk-open.gif';     //大图路径
             LeftImgUrlSm = activtydomain + 'images/images/zk.png';         //小图路径
             _link = "https://www.baidu.com";                 //连接地址
             break;
         case 'lhj':         //老虎机
             LeftImgUrlBg = activtydomain + 'images/images/enter1.gif';     //大图路径
             LeftImgUrlSm = activtydomain + 'images/images/zk1.png';           //小图路径
             _link = "https://www.baidu.com";                  //连接地址
             break;
     }
     if (obj.off) {
         $leftFixed = $('<div class="left-fixed"><div class="JsCon"><a href=' + _link + '><img src=' + LeftImgUrlBg + ' class="fixedImg"></a><span class="btn activityBtn">收起</span><img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/close.png" class="close-fixed"></div> <div class="JsCon" style="display:none;"><a href=' + _link + '><img src=' + LeftImgUrlSm + ' class="fixedImgSm"></a><span class="btn activityBtn">展开</span><img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/close.png" class="close-fixed"></div></div>');
         $('body').append($leftFixed);
         closeFixed();
     }
 }
 function RightFixedFn(obj) {
     var RightImgUrlBg = '';
     var RightImgUrlSm = '';
     var _link = '';
     switch (obj.str) {
         case 'dzp':    //活动大转盘
             RightImgUrlBg = activtydomain + 'pc/web/cs/images/818/enter2.gif';               //大图路径
             RightImgUrlSm = activtydomain + '"pc/web/cs/images/818/enter2_s.png';             //小图路径
             _link = "http://chaoshi.zhanghetianxia.com/Prize/FwzRoll";                       //连接地址
             break;
         case 'fzp':      //翻纸牌
             RightImgUrlBg = activtydomain + 'pc/web/cs/images/818/enter3.gif';        //大图路径
             RightImgUrlSm = activtydomain + 'pc/web/cs/images/818/enter3_s.png';            //小图路径
             _link = "http://chaoshi.zhanghetianxia.com/Prize/FwzCard";                    //连接地址
             break;
         case 'zjd':        //砸金蛋
             RightImgUrlBg = activtydomain + 'pc/web/cs/images/818/enter1.gif';      //大图路径
             RightImgUrlSm = activtydomain + 'pc/web/cs/images/818/enter1_s.png';         //小图路径
             _link = "http://chaoshi.zhanghetianxia.com/Prize/NewFwzegg";                //连接地址
             break;
         case 'lhj':         //老虎机
             RightImgUrlBg = activtydomain + 'images/images/enter1.gif';     //大图路径
             RightImgUrlSm = activtydomain + 'images/images/zk1.png';        //小图路径
             _link = "https://www.baidu.com";              //连接地址
             break;
     }
     if (obj.off) {
         $rightFixed = $('<div class="right-fixed"><div class="JsCon"><a href=' + _link + '><img src=' + RightImgUrlBg + ' class="fixedImg"></a><span class="btn activityBtn">收起</span><img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/close.png" class="close-fixed"></div><div class="JsCon" style="display:none;"><a href=' + _link + '><img src=' + RightImgUrlSm + ' class="fixedImgSm"></a><span class="btn activityBtn">展开</span><img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/close.png" class="close-fixed"></div></div>');
         $('body').append($rightFixed);
         closeFixed();
     }
 }
 //关闭收起展开按钮方法
 function closeFixed() {
     $(".close-fixed").live('click', function (event) {
         $(this).parents(".JsCon").hide();
         event.stopPropagation();
     });
     $(".activityBtn").live("click",
         function () {
             $(this).parents(".JsCon").hide().siblings().show();
         });
 };
 function topActivtyEnter(obj) {
     if (obj.off) {
         var $topActivtyEnter = $('<a class="_menu_right" href=' + obj._link + ' target="_blank"><img src=' + obj.imgSrc + '></a>');
         if ($('.zh-nav-list').length > 0) {
             $('.zh-nav-list').after($topActivtyEnter);
         }
         else {
             $('.global-menuWarp .w1190').append($topActivtyEnter);
         }
     };
 }
 function topRightEnter(obj) {
     var rightBar_2 = $('.global-right-fixed').length;
     var rightBar_4 = $('.bar_mask').length;
     var off2 = false;
     if (rightBar_2 > 0 || rightBar_4 > 0) {
         off2 = true;
     }
     if (obj.off && off2) {
         var $topRightEnter = $('<div class="entrance_rightBar">' +
             '<ul>' +
             '<li class="mainEntrance"><a href="http://chaoshi.zhanghetianxia.com/_818room/MainActivityHallSpring"><img src="http://newstatic.zhanghetianxia.com/pc/web/cs/images/active12/TopRarea.png"></a></li>' +
             '</ul> ' +
             '</div>');
         $('body').append($topRightEnter);
     }
 }
 function bannerBg(obj) {
     if (obj.off) {
         return;
     } else {
         $('.indexScreenWarp').css({ 'background': '#fff' });
     }
 }
