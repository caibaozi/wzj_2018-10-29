$(function(){
	$(".register").click(function(){
		location.href="register.html";
	})
	$(".yiyou").click(function(){
		location.href="load.html";
	})
	//注册用户
	$("#btn").click(function(){
		//注册
//		var users=$.cookie("users")?JSON.parse($.cookie("users")):[];
		var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
		var _phone=$("#phone").val();
		var _pwd=$("#pwd").val();
		var _pwd2=$("#pwd2").val();
		//若存在相同对象
		for(var i=0;i<users.length;i++){
			if(users[i].phone==$("#phone").val()){
				$(".div1").show()
				$(".div1").html("该用户已存在，请重新注册");
				return;
			}
		}
		//存储对象
		var user={
			phone:$("#phone").val(),
			pwd:$("#pwd").val(),
			pwd2:$("#pwd2").val()
		}
		users.push(user); 
		//设置cookie
		
		
		//正则匹配
		var re=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
		var re2=/^[a-zA-Z]\w{5,15}$/
		if(re.test(_phone)==false){
			$(".div1").show()
			$(".div1").html("手机号码错误，请重新注册");
			return;
		}
		if(re2.test(_pwd)==false){
			$(".div2").show()
			$(".div2").html("请以字母开头，输入6-16位字符");
			return;
		}
		if(_pwd!=_pwd2){
			$(".div3").show()
			$(".div3").html("两次输入的密码不一致，请重新输入");
			return;
		}
		if($(".checked").prop("checked")==false){
			alert("请同意《嘉丽购物网服务条款》")
		}
		
		else{
			$.cookie("users",JSON.stringify(users),{expires:30,path:"/"})
			console.log($.cookie("users"));
			alert("恭喜您，注册成功");
			location.href="index.html";
		}
	});
	
	
})
