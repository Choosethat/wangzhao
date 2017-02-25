function ajax(method, url, data){
	//1、创建ajax对象
	var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	}catch(error){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(method == "get" && data){
		url += "?" + data;
	}
	xhr.open(method, url, true);
	if(method == "get"){
		xhr.send();
	}else{
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				//alert(xhr.responseText);
				//数据是在这个地方下载到的。
				/*var arr = JSON.parse(xhr.responseText);
				alert(arr.length)*/
				//{"username":"leo","age":32}
				var obj = JSON.parse(xhr.responseText);
				alert(obj.username);
			}else{
				alert("出错了:Err:" + xhr.status);
			}
		}
	}
}












