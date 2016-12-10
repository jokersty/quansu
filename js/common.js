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

