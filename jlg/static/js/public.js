$(function(){
	//点击加入购物车
	(function(){
		$(".addCart").click(function(){
			
			var goodimg=$(this).parent().find("img").attr("src");
			var goodprice=$(this).parent().find("span").html();
			var goodname=$(this).parent().find("a").html();
			
			var goodlist=$.cookie("cart")?JSON.parse($.cookie("cart")):[];
			var sum=1;
			for(var i=0;i<goodlist.length;i++){
				sum+=goodlist[i].num;
				//console.log(sum);
			}
			$(".number").html(sum)
			//判断是否存在相同物品
			var isexists=false;//表式不存在
			for(var i=0;i<goodlist.length;i++){
				if(goodname==goodlist[i].name){
					goodlist[i].num++;
					isexists=true;
				}
			}
			if(isexists==false){
				//储存对象
				var good={
					img:goodimg,
					price:goodprice,
					name:goodname,
					num:1
				}
				goodlist.push(good);
			}
			//设置cookie
			$.cookie("cart",JSON.stringify(goodlist),{expires:30,path:"/"})
			console.log($.cookie("cart"));
	})
		
	})();
	//点击购物车
	(function(){
		$(".shopping").click(function(){
			location.href="cart.html"
			})
		})();
	//获取cookie
		(function(){
			var goodlist = $.cookie("cart");
			if(goodlist){
				goodlist=JSON.parse(goodlist);
				var sum=0;
				for(var i=0;i<goodlist.length;i++){
					sum+=goodlist[i].num;
				}
				$(".number").html(sum)
				}
			
		})();
	//点击收藏
	(function(){
		$(".collect").click(function(){
			location.href="load.html";
		})
	})();
	//注册登录部分
	(function(){
		//点击登录
		$(".loads").click(function(){
			location.href="load.html";
		})
		//点击注册
		$(".register").click(function(){
			location.href="register.html";
		})
	})();
})
