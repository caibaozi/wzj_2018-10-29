$(function() {
	//注册登录部分
	(function() {
		//点击登录
		$(".loads").click(function() {
				location.href = "load.html";
			})
			//点击注册
		$(".register").click(function() {
			location.href = "register.html";
		})
	})();
	//获取cookie;
	function getCookie() {
		var goodlist = $.cookie("cart");
		//		console.log(goodlist);
		
		if(goodlist) {
			goodlist = JSON.parse(goodlist);
			for(var i = 0; i < goodlist.length; i++) {
				
				var goods = goodlist[i];
				//创建节点
				var div = $("<div class='cart_div fl'></div>");
				var img = $("<img class='cart_img'  src=" + goods.img + "/>")
					//				var div=$("<div>"+goods.price+"</div>");
				var div1 = $("<div class='cart_div1 fl'></div>");
				var div2 = $("<div class='cart_div2 fl'></div>");
				var div3 = $("<div class='cart_div3 fl'></div>");
				var div4 = $("<div class='cart_div4 fl'></div>");
				var div5 = $("<div class='cart_div5 fl'></div>");
				var span1 = $("<span class='cart_span1'>" + goods.price + "</span>")
				var span2 = $("<span class='cart_span2'>-</span>");
				var span3 = $("<span class='cart_span3' >" + goods.num + "</span>")
				var span4 = $("<span class='cart_span4' >+</span>")
				var span5 = $("<span class='cart_span5'>" + goods.price + "</span>")
				var span6 = $("<span class='cart_span6'>加入收藏夹</span>")
				var span7 = $("<span class='cart_span7'>删除</span>")
				var input = $("<input type='checkbox' checked='checked' class='_true' />")
				var p = $("<p class='cart_p1'>" + goods.name + "</p>");
				var p2 = $("<p class='cart_p2'>货号:20119845</p>");
				var p3 = $("<p class='cart_p2'>颜色/尺码:</p>");
				$(".main").eq(i).show();
				div.appendTo($(".main").eq(i));
				img.appendTo($(".main").eq(i));
				$(".main").eq(i).append(div1, div2, div3, div4, div5);
				div.append(input)
				div1.append(p, p2, p3);
				div2.append(span1);
				div3.append(span2, span3, span4);
				div4.append(span5);
				div5.append(span6, span7);

			}
			//计算商品总金额
			sum();
			//删除某件商品
			$(".cart_span7").click(function() {
					alert("确定要删除所选商品吗");
					var good=$(this).parents(".main").find(".cart_p1").html();
					console.log(good);
					$(this).parents(".main").remove();
					sum();
					var index3=goodlist.length
					for(var i=0;i<index3;i++){
						if(good==goodlist[i].name){
							
							console.log(goodlist.splice(i,1));
							console.log(goodlist)
							$.cookie("cart","",{expires:0,path:"/"});
							$.cookie("cart",JSON.stringify(goodlist),{expires:30,path:"/"});
						}
					}
					
					
			});
			$("#delete").click(function() {
				alert("确定要删除所选商品吗");
				var good = $("._true").filter(':checked').parents(".main").find(".cart_p1").html();
				console.log(good);
				$("._true").filter(":checked").parents(".main").remove();
				var index9=$("._true").filter(":checked").parents(".main").length;
				sum();
				var index3=goodlist.length;
				for(var i=0;i<index3;i++){
					if(good==goodlist[i].name){
						console.log(goodlist.splice(i,index9));
						console.log(goodlist)
						$.cookie("cart","",{expires:0,path:"/"});
						$.cookie("cart",JSON.stringify(goodlist),{expires:30,path:"/"});
					}
				}
				
				
			})
					

		} else {
			$(".first-main").show();
			$(".c_head").remove();
			$(".c_footer").remove();
			var box = $("<div class='b_box'>购物车还是空的</div>");
			$(".first-main").append(box);
		}
	}
	getCookie();
	//全选
	$("#checkall").click(function() {
			$("._true").prop("checked", this.checked)
		})
		//复选框的状态
	$("._true").click(function() {
			var $checked = $("._true").filter(':checked');
			$("#checkall").prop('checked', $checked.length == $("._true").length);
		})

		//收藏某件商品
	$(".cart_span6").click(function() {
			alert("请先登录");
			location.href = "load.html";
	})
		//清空购物车
	$("#clear").click(function() {
		alert("确定清空购物车吗");
		$.cookie("cart", "", {
			expires: 0,
			path: "/"
		});
		location.reload();
	});
	//结算
	$("#calculate").click(function() {
		alert("请先登录");
		location.href = "load.html";
	})
	//点击+-按钮，数量增加减
	$(".cart_span4").click(function() {
		var _num = $(this).prev("span").html();
		_num++;
		$(this).prev("span").html(_num);
		sum();
	});
	$(".cart_span2").click(function() {
		var _num = $(this).next("span").html();
		if(_num <= 1) {
			return
		}
		_num--;
		$(this).next("span").html(_num);
		sum();
	});
	//计算金额的函数
	function sum(){
				var c_index=$(".cart_span1").length;
				var arr = [];
				for(var i=0;i<$(".cart_span1").length;i++){
					var pri = $(".cart_span1").eq(i).text();
					var pri1 = pri.substring(1);
					var pri = parseInt(pri1);
					var _shuliang=$(".cart_span3").eq(i).html();
					var money = _shuliang * pri;
					arr.push(money);
				}
				var summoney = 0;
				for(var i = 0; i < arr.length; i++) {
					summoney += arr[i];
				}
				$(".money").html(summoney);
				$("._all").html(summoney);
			}
})