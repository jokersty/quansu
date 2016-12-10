var parentCls = document.getElementById('office-img-list');
var itemCls = document.getElementsByClassName('office-img-item');
var imgBotton=document.querySelectorAll('.office-img-bottom li')
parentCls.style.width=1920*itemCls.length+'px';
var index = 0;
var imgIndex=0;
imgBotton[0].style.backgroundPosition="0 -34px";
var timer = setInterval(function(){
	run();
	for (imgIndex=0; imgIndex<imgBotton.length; imgIndex++) {
		if(imgIndex==index+1){
			imgBotton[imgIndex].style.backgroundPosition="0 -34px";
		}else{
			imgBotton[imgIndex].style.backgroundPosition="-28px -34px";
		}
	}
//	for (var i=0; i<imgBotton.length; i++) {
//		imgBotton[i].onclick=function(){
//			for(var j=0;j<imgBotton.length; i++){
//				if(successBottonItem[j]==this){
//					this.style.backgroundPosition="0 -34px";
//					parentCls.style.left=-1920*j;
//				}
//			}	
//		}
//	}
	index++;
	if(index >= imgBotton.length){
		index=0;
		imgBotton[0].style.backgroundPosition="0 -34px";
	}
},3000);
var currentIndex = 0;
var runTimer;
function run(){
	var speed = 1920 / 60;
	var currentLeft = parseInt(parentCls.style.left)||0;
	runTimer = setTimeout(function(){
		if(-currentLeft==1920*(itemCls.length-1)){
			parentCls.style.left = 0 +'px';
		}else{
			parentCls.style.left = currentLeft - speed + 'px';
			currentIndex++;	
		}
		if(currentIndex!=60){
			run();
		}else{
			currentIndex=0;
		}
	},20);
}


///////////成功案例
var successBottonItem=document.querySelectorAll('.success-button a');
var successBodyItem=document.getElementsByClassName('success-body');
for (var successIndex=0; successIndex<successBottonItem.length;successIndex++) {
	successBottonItem[successIndex].onclick=function(){
		for(var i=0;i<successBottonItem.length;i++){
			if(successBottonItem[i]==this){
				this.className="success-button-current";
				successBodyItem[i].style.display="block";
			}else{
				successBottonItem[i].className="";
				successBodyItem[i].style.display="none";
			}
		}	
	}
}


var addressBottonItem=document.querySelectorAll('.address-city a');
var addressBodyItem=document.getElementsByClassName('hangzhou-details');
for (var addressIndex=0; addressIndex<addressBottonItem.length;addressIndex++) {
	addressBottonItem[addressIndex].onmouseover=function(){
		for(var i=0;i<addressBottonItem.length;i++){
			if(addressBottonItem[i]==this){
				this.className="address-city-hangzhou";
				addressBodyItem[i].style.display="block";
			}else{
				addressBottonItem[i].className="";
				addressBodyItem[i].style.display="none";
			}
		}	
	}
}




//////////最新动态
var newsItem=document.querySelectorAll('.news-body li');
var leftBotton=document.getElementById('news-left-botton');
var rightBotton=document.getElementById('news-right-botton');
var newsItemArrary=[];
for(var i=0;i<newsItem.length;i++){
	newsItemArrary.push(newsItem[i].getAttribute('class'));
}
leftBotton.onclick=function(){
	newsItemArrary=newsItemArrary.unshift(newsItemArrary.pop());
	console.log(newsItemArrary.pop());
	for(var i=0;i<newsItem.length;i++){
		newsItem[i].className=newsItemArrary[i];
	}
}
rightBotton.onclick=function(){
	newsItemArrary=newsItemArrary.concat(newsItemArrary.splice(0,1));
	console.log(newsItemArrary);
	for(var i=0;i<newsItem.length;i++){
		newsItem[i].className=newsItemArrary[i];
	}
}




