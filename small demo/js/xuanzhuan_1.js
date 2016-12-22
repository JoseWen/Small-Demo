var z_box=document.getElementById("z_box");
var z_setting=document.getElementById("z_setting");
var z_bottom=document.getElementById("z_bottom");
var z_posi=document.getElementById("z_posi");
var z_btn=document.getElementById("z_btn");
var z_btn1=document.getElementById("z_btn1");
var wei=z_posi.getElementsByClassName("wei");
var tu=z_posi.getElementsByClassName("tu");
var z_onoff=0;
var onofff=true;
var z_x1;
var z_y1;
var z_num=0;
var a=150;
var c=0;
var z_onoff1=true;
var d=850;
var b=0;
//var time=true;
//var shijian;
function dingwei(){ //初始定位
	for(var i=0;i<wei.length;i++){
		wei[i].style.transition="2s";
		wei[i].style.left="0px";
		wei[i].style.top="0px";
	}
}
function X_initial(){//X初始位置
	z_posi.style.transform="rotateX(0deg)";
	wei[0].style.transform="translateZ(0px) rotateY(0deg)";
	wei[1].style.transform="translateX(-435px) translateZ(-250px) rotateY(0deg)";
	wei[2].style.transform="translateX(-435px) translateZ(-750px) rotateY(0deg)";
	wei[3].style.transform="translateZ(-1000px) rotateY(0deg)";
	wei[4].style.transform="translateX(435px) translateZ(-750px) rotateY(0deg)";
	wei[5].style.transform="translateX(435px) translateZ(-250px) rotateY(0deg)";
}
function Y_initial(){//Y初始位置
	z_posi.style.transform="rotateY(0deg)";
	wei[0].style.transform="translateZ(-150px) scale(0.8)";
	wei[1].style.transform="translateY(-305px) translateZ(-325px)  scale(0.8)";
	wei[2].style.transform="translateY(-305px) translateZ(-675px)  scale(0.8)";
	wei[3].style.transform="translateZ(-850px)  scale(0.8)";
	wei[4].style.transform="translateY(305px) translateZ(-675px)  scale(0.8)";
	wei[5].style.transform="translateY(305px) translateZ(-325px)  scale(0.8)";
}
function zhuan(){//X轴
	wei[0].style.transform="translateZ(0px) rotateY("+(-z_num)+"deg)";
	wei[1].style.transform="translateX(-435px) translateZ(-250px) rotateY("+(-z_num)+"deg)";
	wei[2].style.transform="translateX(-435px) translateZ(-750px) rotateY("+(-z_num)+"deg)";
	wei[3].style.transform="translateZ(-1000px) rotateY("+(-z_num)+"deg)";
	wei[4].style.transform="translateX(435px) translateZ(-750px) rotateY("+(-z_num)+"deg)";
	wei[5].style.transform="translateX(435px) translateZ(-250px) rotateY("+(-z_num)+"deg)";
}
function zhuan1(){//Y轴
	wei[0].style.transform="translateZ(-150px) rotateX("+(-z_num)+"deg)  scale(0.8)";
	wei[1].style.transform="translateY(-305px) translateZ(-325px) rotateX("+(-z_num)+"deg)  scale(0.8)";
	wei[2].style.transform="translateY(-305px) translateZ(-675px) rotateX("+(-z_num)+"deg)  scale(0.8)";
	wei[3].style.transform="translateZ(-850px) rotateX("+(-z_num)+"deg)  scale(0.8)";
	wei[4].style.transform="translateY(305px) translateZ(-675px) rotateX("+(-z_num)+"deg)  scale(0.8)";
	wei[5].style.transform="translateY(305px) translateZ(-325px) rotateX("+(-z_num)+"deg)  scale(0.8)";
}
document.onmousedown=function(e){
//	clearInterval(shijian);
	var x=e.clientX;
	var y=e.clientY;
	z_x1=x;
	z_y1=y;
	for(var i=0;i<wei.length;i++){
		wei[i].style.transition="";
	}
	document.onmousemove=function(e){
			console.log("进入");
			if(z_onoff==1){//横向旋转
				if(e.clientX-z_x1>0){
					console.log("+");
					z_num+=1;
				}else{
					console.log("-");
					z_num-=1;
				}
				z_posi.style.transform="rotateY("+z_num+"deg)";
				zhuan();
			}
			if(z_onoff==2){//纵向旋转
				console.log(1);
				if(e.clientY-z_y1>0){
					z_num+=1;
				}else{
					z_num-=1;
				}
				z_posi.style.transform="rotateX("+z_num+"deg)";
				zhuan1();
			}
			z_x1=e.clientX;
			z_y1=e.clientY;
			return false;
	}
	document.onmouseup=function(){
		document.onmousemove=null;
//		time=true;
	}
}


//function setInt(){
//	console.log(time);
//	if(time){
//		time=false;
//		setTimeout(function(){
//			
//			for(var i=0;i<wei.length;i++){
//				wei[i].style.transition="";
//			}
//			shijian=setInterval(function(){
//				z_num+=1;
//				if(z_onoff==1){
//					z_posi.style.transform="rotateY("+z_num+"deg)";
//					zhuan();
//				}
//				if(z_onoff==2){
//					z_posi.style.transform="rotateX("+z_num+"deg)";
//					zhuan1();
//				}
//			},18)
//		},1500)
//	}
//}


z_btn.onclick=function(){ //X轴旋转
//	clearTimeout(shijian);
	dingwei();
	z_onoff=1;
	X_initial();
	z_num=0;
//	setInt();
//	event.cancelBubble=true;
}
z_btn1.onclick=function(){ //Y轴旋转
//	clearTimeout(shijian);
	dingwei();
	z_onoff=2;
	Y_initial();
	z_num=0;
//	setInt();
//	event.cancelBubble=true;
}


function quse(){
	if(onofff){
		onofff=false;
		var z_time=setInterval(function(){
//			console.log(a);
			if(c==0){
				a--;
				if(a<1){
					clearInterval(z_time);
					a=0;
					c=1;
					onofff=true;
				}
			}else{
				a++;
				if(a>150){
					clearInterval(z_time);
					a=150;
					c=0;
					onofff=true;
				}
			}
			for(var i=0;i<tu.length;i++){
				tu[i].style.width=a+"px";
			}
		},30)
	}
}
function fn(){
	if(z_onoff1){
		z_onoff1=false;
		var z_time=setInterval(function(){
			console.log(d);
			if(b==0){
				d--;
				if(d<1){
					clearInterval(z_time);
					d=0;
					b=1;
					z_onoff1=true;
				}
			}else{
				d++;
				if(d>850){
					clearInterval(z_time);
					d=850;
					b=0;
					z_onoff1=true;
				}
			}
			for(var i=0;i<tu.length;i++){
				z_setting.style.height=d+"px";
			}
		},10)
	}
	event.stopPropagation();
}
document.oncontextmenu=function(){
	quse();
	return false;
}
document.addEventListener("dblclick",fn);