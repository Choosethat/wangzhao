$(function(){
	//----菜单--------------------------------------------------------------------------------------
	var a = true;
	$("#all").find("i").click(function(){
		$(this).attr("class","iconfont icon-shangla");
		if(a == true){
			$("#all").find("ul").css("display","block");
			a = false;
			$(this).attr("class","iconfont icon-shangla");
		}else{
			$("#all").find("ul").css("display","");
			a = true;
			$(this).attr("class","iconfont icon-xiala");
		}
	});
	//-----二维码---------------------------------------------------------------------------------------
	var ma1 = document.getElementsByClassName("ma1")[0];
	var ma2 = document.getElementsByClassName("ma2")[0];
	var wei = document.getElementsByClassName("wei")[0];
	var shou = document.getElementsByClassName("shou")[0];
	
	wei.iHeight = wei.offsetHeight;
	wei.style.height = 0;
	shou.iHeight = shou.offsetHeight;
	shou.style.height = 0;
	
	
	ma1.onmouseover = function(){
		startMove(wei, {height: wei.iHeight, opacity: 100});
	}
	ma1.onmouseout = function(){
		startMove(wei, {opacity: 0, height: 0});
	}
	ma2.onmouseover = function(){
		startMove(shou, {height: shou.iHeight, opacity: 100});
	}
	ma2.onmouseout = function(){
		startMove(shou, {opacity: 0, height: 0});
	}
});
