$(function(){
	//nav部分
	//鼠标移动到nav下的a标签改版颜色
	$(".TV a").mouseover(function(){
		$(this).addClass("active").siblings("a").removeClass();
	})
	$(".TV a").mouseout(function(){
		$(this).removeClass();
	})
	//banner部分
	$("#goods li").not("#first_li").not("#second_li").hover(function(){
		$(this).css("background","white").siblings("li").not("#first_li").css("background","#3b2c33")
		$(this).children("a").css("color","black").parents("li").siblings().css("color","white");
		$(this).find(".div").show().parents("li").siblings(".div").hide();
	},
	function(){
		$(this).css("background","#3b2c33");
		$(this).children("a").css("color","white");
		$(this).find(".div").hide();
	})
	$("#second_li").hover(function(){
		$(this).css("background","white").siblings("li").not("#first_li").css("background","#3b2c33")
		$(this).find("a").css("color","black").parents("li").siblings().css("color","white")
	},
	function(){
		$(this).css("background","#3b2c33");
		$(this).find("a").css("color","white");
		
	})
	//Hot部分
	$(".box_1").mouseover(function(){
		$(this).find("._left").show();
		$(this).find("._right").show();
	})
	$(".box_1").mouseout(function(){
		$(this).find("._left").hide();
		$(this).find("._right").hide();
	})
	//切换轮播图
		var box=$(".box_1");
		var index=0;
		$("._left").click(function(){
			$(this).parent().hide();
			index--;
			if(index<0){
				index=3;
			}
			$(box).eq(index).show();
		})
		$("._right").click(function(){
			console.log(index);
			$(this).parent().hide();
			index++;
			if(index>3){
				index=0;
			}
			$(box).eq(index).show();
			
		})
		
		//点击登录
		$(".loads").click(function(){
			location.href="load.html";
		})
		//点击注册
		$(".register").click(function(){
			location.href="register.html";
		});
		
		//点击购物车
		(function(){
			$(".shopping").click(function(){
				location.href="cart.html"
			})
		})();
		//关闭fix()
		(function(){
			$(".close").click(function(){
				$(".fix").hide();
			})
		})();
	
})
