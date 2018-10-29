$(function(){
	$.getJSON("json/product.json",function(data){
		for(var i=0;i<data.length;i++){
			var obj=data[i];
//			console.log(i)
			var img = $("<img class='json_img' src=imgs/content/" + obj.img + ".jpg />");
			var p=$("<p class='json_p'><a class='json_a'>"+obj.name+"</a></p>");
			var span=$("<span class='json_span'>￥"+obj.price+"</span>");
			var span2=$("<span class='json_span2'>"+obj.id+"</span>")
			$(".con_product0").eq(i).append(img,p,span,span2)
		}
		$(".json_a").click(function(){
				var id=$(this).parents(".con_product0").find(".json_span2").html();
				var j_name=$(this).parents(".con_product0").find(".json_a").html();
				console.log(id);
				console.log(j_name);
				location.href = "product.html?id="+id;
		})
	})
		
	
})
