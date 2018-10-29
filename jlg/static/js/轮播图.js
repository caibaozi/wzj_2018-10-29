$(function(){
	var list1=$("#list1");
	var list2=$("#list2");
	var li1=$("#list1 li" );
	var li2=$("#list2 li" );
	//克隆第一张图片加至第五张
	li1.eq(0).clone().appendTo(list1);
	var size=$("#list1 li" ).length;
	//设置定时器
	var index=0;
	var timer=setInterval(function(){
		index++;
		move();
//		console.log(index);
	},3000)
	//图片轮播动画函数
	function move(){
		if(index>size-1){
			list1.css("left",0);
			index=1;
		}
		//移动效果
		list1.stop().animate({left:-index*li1.eq(0).width()},500)
		//按钮改变效果
		li2.eq(index).removeClass("change").addClass("change").siblings("li").
		removeClass("change");
		if(index==size-1){
			li2.eq(0).removeClass("change").addClass("change").siblings("li").
			removeClass("change");
		}
	}
	//点击按钮切换图片
	li2.click(function(){
		index=$(this).index();
		move();
	})
	
})
