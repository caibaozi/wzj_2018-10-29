$(function(){
	
	//更换内容
	(function(){
		var q1=location.search;
		var q1=parseInt(q1.substring(4));
		console.log(q1);
		console.log(typeof(q1));
		//获取json
		$.getJSON("json/product.json",function(data){
			for(var i=0; i<data.length;i++){
				var obj=data[i];
				
				if(obj.id==q1){
					$("#pidai").find("img").eq(0).attr("src","imgs/content/"+obj.img+".jpg/");
					$(".bigArea").find("img").eq(0).attr("src","imgs/content/"+obj.img+".jpg/");
					$("#small").find("img").eq(0).attr("src","imgs/content/"+obj.img+".jpg/");
					$("._p1 a").html(obj.name);
					$(".pa2").text(obj.price);
				}
			}
		})
	})();
	//nav部分
	//鼠标移动到nav下的a标签改版颜色
	(function(){
		$(".TV a").mouseover(function(){
			$(this).addClass("active").siblings("a").removeClass();
		})
		$(".TV a").mouseout(function(){
			$(this).removeClass();
		})
	})();
	//点击小皮带切换对应的大皮带
	(function(){
		$(".pidai").click(function(){
			var index=$(this).index();
			console.log(index);
			$("#pidai").find("li").removeClass("active");
			$("#pidai").find("li").eq(index).addClass("active");
			$(".bigArea").find("li").removeClass("disp");
			$(".bigArea").find("li").eq(index).addClass("disp");
		})
	})();
	//点击按钮增减数量
	(function(){
		var num=$(".fang").val();
		var add=$(".yuan2");
		var sub=$(".yuan1");
		$(".fang").change(function(){
			var i=$(".fang").val();
			if(i>=20){
			alert("您的订单超过上限，请直接联系客服");
			i=20;
			$(".fang").val(i);
			}
			console.log(i);
			
			num=i;
		})
		$(add).click(function(){
			num++;
			$(".fang").val(num);
			if(num>19){
				num=19
				alert("您的订单满足团购条件，请直接联系客服");
				$(".fang").val(20);
				return;
			}
		});
		$(sub).click(function(){
			if(num<=1){
				alert("订单数量不能小于1");
				$(".fang").val(1);
				return;
			}
			num--;
			$(".fang").val(num);
			
			
		})
	})();
	//放大镜效果
	(function(){
		var small=$(".smallArea");
		var big=$(".bigArea");
		var div=$("#pidai");
		var bigimg=$(".bigimg");
		div.mousemove(function(e){
			small.show();
			big.show();
			//小区域跟随鼠标移动
			var x=e.pageX-div.offset().left-small.width()/2;
			var y=e.pageY-div.offset().top-small.height()/2;
			//判断x不超出左右边界
			if(x<0){x=0};
			if(x>div.width()-small.width()){
				x=div.width()-small.width()
			}
			//判断y不超出上下边界
			if(y<0){y=0};
			if(y>div.height()-small.height()){
				y=div.height()-small.height()
			}
			small.css({left:x,top:y});
			bigimg.css({left:-2*x,top:-2*y})
		})
		div.mouseleave(function(){
			small.hide();
			big.hide();
		})
	})();
	//点击立即购买按钮
	(function(){
		$(".buying").click(function(){
			location.href="load.html";
		})
	})();
	
	
})
