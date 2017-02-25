
window.onload = function(){
	/*--------------------电话--------------------*/
	var phone = document.getElementById("phone");
	var p1 = document.getElementsByClassName("p1")[0];
	phone.onblur = function(){
		if(phone.value == ""){
			phone.style.boxShadow = "0 0 2px #df0a0f";
			phone.style.border = "1px solid red";
			p1.style.opacity = 1;
		}
	}
	/*------------------短信验证码----------------*/
	var ma = document.getElementById("ma");
	var p2 = document.getElementsByClassName("p2")[0];
	ma.onblur = function(){
		if(ma.value == ""){
			ma.style.boxShadow = "0 0 2px #df0a0f";
			ma.style.border = "1px solid red";
			p2.style.opacity = 1;
		}
	}
	/*------------------密码----------------*/
	var pwd = document.getElementById("pwd");
	var p3 = document.getElementsByClassName("p3")[0];
	var mi = /^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[A-Z]).*$/;
	var con = pwd.value;
	pwd.onblur = function(){
		if(pwd.value == ""){
			pwd.style.boxShadow = "0 0 2px #df0a0f";
			pwd.style.border = "1px solid red";
			p3.style.opacity = 1;
		}
	}
	pwd.onfocus = function(){
		if(mi.test(con)){
			return true;
		}else{
			p3.innerHTML = "密码至少为6位, 并且至少包含 一个大写<br>字母和一个小写字母";
			pwd.style.boxShadow = "0 0 2px #df0a0f";
			pwd.style.border = "1px solid red";
		}
	}
	/*--------------确认密码----------------*/
	var pwd2 = document.getElementById("pwd2");
	var p4 = document.getElementsByClassName("p4")[0];
	var con2 = pwd2.value;
	pwd2.onblur = function(){
		if(con != con2){
			p4.innerHTML = "请确保密码匹配。";
			pwd2.style.boxShadow = "0 0 2px #df0a0f";
			pwd2.style.border = "1px solid red";
		}
	}
	/*-----------------名字-----------------*/
	var name = document.getElementById("name");
	var p5 = document.getElementsByClassName("p5")[0];
	name.onblur = function(){
		if(name.value == ""){
			p5.style.opacity = 1;
			name.style.boxShadow = "0 0 2px #df0a0f";
			name.style.border = "1px solid red";
		}
	}
}