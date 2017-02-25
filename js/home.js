$(function(){
	//-------------轮播----------------------------------------------------------------------------------------------
	var oBtn = $("#rel_banner").find("ul").find("li");
	var oOl = $("#rel_banner").find("ol");
	var aLi = oOl.find("li");
	
	//当前被选中的按钮的下标
	var iNow = 0;
	//定时器
	var timer = null; 
	oBtn.click(function(){
		iNow = $(this).index();
		tab();
	});
	
	$("#banner").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 2000);
	})
	
	timer = setInterval(timerInner, 2000);
	
	function timerInner(){
		iNow++;
		tab();
	}
	
	//切换图片的函数
	function tab(){
		oBtn.attr("className", "");
		oBtn.eq(iNow).attr("className", "active");
		//判断是否到最后一张
		if(iNow == aLi.size() - 1){
			oBtn.eq(0).attr("className", "active");
		}
		oOl.animate({left: -1265 * iNow}, function(){
			//当最后一张图片动画执行完成以后,我切回第一张
			if(iNow == aLi.size()){
				iNow = 0;
				oOl.css("left", "0px");
			}
		});
	}
	
	$().extend({size: function(){
		return this.elements.length;
	}});
	
	//----------------------------------------------------------------------------------------------------------------
	//main部分
	$.ajax({
		type:"get",
		url:"js/main.json",
		success:function(data){
			var index = 0;
			var index2 = 0;
			var index3 = 0;
			var index4 = 0;
			var index5 = 0;
			$(".main1").find("dd").find("a").each(function(){
					var img = "<img src='"+data.main1[index].img+"'/>";
					$(this).append(img);
					
					var title = "<p>"+data.main1[index].title+"</p>";
					$(this).append(title);
					
					var js = "<p>"+data.main1[index].js+"</p>";
					$(this).append(js);
					
					var money = "<p>"+data.main1[index].money+"</p>";
					$(this).append(money);
					index++;
			});
			$(".main2").find("dd").find("a").each(function(){
					var img = "<img src='"+data.main2[index2].img+"'/>";
					$(this).append(img);
					
					var title = "<p>"+data.main2[index2].title+"</p>";
					$(this).append(title);
					
					var js = "<p>"+data.main2[index2].js+"</p>";
					$(this).append(js);
					
					var money = "<p>"+data.main2[index2].money+"</p>";
					$(this).append(money);
					index2++;
			});
			$(".main3").find("dd").find("a").each(function(){
					var img = "<img src='"+data.main3[index3].img+"'/>";
					$(this).append(img);
					
					var title = "<p>"+data.main3[index3].title+"</p>";
					$(this).append(title);
					
					var js = "<p>"+data.main3[index3].js+"</p>";
					$(this).append(js);
					
					var money = "<p>"+data.main3[index3].money+"</p>";
					$(this).append(money);
					index3++;
			});
			$(".main4").find("dd").find("a").each(function(){
					var img = "<img src='"+data.main4[index4].img+"'/>";
					$(this).append(img);
					
					var title = "<p>"+data.main4[index4].title+"</p>";
					$(this).append(title);
					
					var js = "<p>"+data.main4[index4].js+"</p>";
					$(this).append(js);
					
					var money = "<p>"+data.main4[index4].money+"</p>";
					$(this).append(money);
					index4++;
			});
			$(".main5").find("dd").find("a").each(function(){
					var img = "<img src='"+data.main5[index5].img+"'/>";
					$(this).append(img);
					
					var title = "<p>"+data.main5[index5].title+"</p>";
					$(this).append(title);
					
					var js = "<p>"+data.main5[index5].js+"</p>";
					$(this).append(js);
					
					var money = "<p>"+data.main5[index5].money+"</p>";
					$(this).append(money);
					index5++;
			});
		}
	});
})
