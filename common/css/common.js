var successBottonItem=document.querySelectorAll('.address-city a');
var successBodyItem=document.getElementsByClassName('hangzhou-details');
for (var successIndex=0; successIndex<successBottonItem.length;successIndex++) {
	successBottonItem[successIndex].onmouseover=function(){
		for(var i=0;i<successBottonItem.length;i++){
			if(successBottonItem[i]==this){
				this.className="address-city-hangzhou";
				successBodyItem[i].style.display="block";
			}else{
				successBottonItem[i].className="";
				successBodyItem[i].style.display="none";
			}
		}	
	}
}

