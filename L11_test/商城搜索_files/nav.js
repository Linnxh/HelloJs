//导航效果（兼容IE6）
$(document).ready(function(){
	$(".minicart_box").hover(function(){
		$(this).find(".minicart_list").show();
	},function(){
		$(this).find(".minicart_list").hide();
	});
	$("title").after("<link href='images/logo64.ico' rel='shortcut icon' type='image/x-icon' />");
})

$(document).ready(function(){
	$(".change-ordershow").hover(function(){
		$(this).next(".minicart_list").show();
	},function(){
		$(this).next(".minicart_list").hide();
	});
	
})

$(document).ready(function(){
	$(".change-order-show").hover(function(){
		$(this).next(".minicart_list").show();
	},function(){
		$(this).next(".minicart_list").hide();
	});
	
})

var scrollTop=function(){
	
	/*var top=document.documentElement.scrollTop || document.body.scrollTop;
	if(top>165){
		document.getElementById("seller-nav").style.display="block";
		document.getElementById("seller-nav").className=""
		
	}	else{
		document.getElementById("seller-nav").style.display="none";	
	}*/
}
window.onscroll=scrollTop;
$(function(){
	$('span.readall').click(function(){  
				$(this)
				.hide() 
				.next("span.showall").show()
				.next("span.sqall").show();  
	})
})

$(function(){
	$('span.sqall').click(function(){   
				$(this)
				.hide()  
				.prev("span.showall").hide()
				.prev("span.readall").show();  
	})
})



