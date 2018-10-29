$(function(){
	
	//点击分类切换
	(function(){
		$(".kind").find("a").click(function(){
			$(this).addClass("active").siblings("a").removeClass("active");
		})
	})();
	(function(){
		//用json获得商品列表
		$(function(){
			$.getJSON("json/product.json",function(data){
				for(var i=0;i<data.length;i++){
					var obj=data[i];
		//			console.log(i)
					var img = $("<img class='json_img_1' src=imgs/content/" + obj.img + ".jpg />");
					var p=$("<p class='json_p_1'><a class='json_a1'>"+obj.name+"</a></p>");
					var span=$("<span class='json_span_1'>￥"+obj.price+"</span>");
					var span2=$("<span class='json_span_2'>"+obj.id+"</span>")
					$("._product").eq(i).append(img,p,span,span2)
				}
				$(".json_a1").click(function(){
					
					var id=$(this).parents("._product").find(".json_span_2").html();
					console.log("-- " + $(this).parents("._product").find(".json_span_2"));
					console.log("-- " + id);
					location.href = "product.html?id="+id;
				})
			})
		
		})
	})();
	
	
	//点击切换导航栏
	(function(){
		$(".TV a").mouseover(function(){
			$(this).addClass("active").siblings("a").removeClass();
		})
		$(".TV a").mouseout(function(){
			$(this).removeClass();
		})
	})();
})
