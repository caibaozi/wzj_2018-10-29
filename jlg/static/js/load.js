$(function(){
	$(".free").click(function(){
		location.href="register.html";
	})
	//引入验证码
	$.idcode.setCode();
	
	
	//判断是否存在该用户(匹配用户名和密码是否都一致)
	$("#_load").click(function(){
		var users=$.cookie("users");
		var _phone=$("#username").val();
		var _pwd=$("#pwd").val();
		var _txtidcode=$("Txtidcode").val();
		var IsBy = $.idcode.validateCode() ;
		users=JSON.parse(users);
//		var isExists=false;
		if(users){
			if(!IsBy){
				$("._div3").show();
				$("._div3").html("验证码错误，请重新输入")
			}
			else{
				var isTrue=false;//匹配是否成功
				for(var i=0;i<users.length;i++){
					if(users[i].phone==_phone && users[i].pwd==_pwd){
						isTrue=true;
						location.href="index.html";
						console.log(".register");
					}
				}
				if(!isTrue){
						$("._div2").show();
						$("._div2").html("用户名或密码错误，请重新输入")
					}
			}
			
			
		}
		else{
			$("._div1").show();
			$("._div1").html("该用户名不存在，请重新输入")
		}
		
		
	})
})
