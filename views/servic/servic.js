var parentCls=document.getElementsByClassName('center-paly');
var itemCls=document.getElementsByClassName('center-paly-content');
for (var i=0; i<itemCls.length;i++) {
	parentCls[i].onmouseover=function(){
		for (var j=0; j<itemCls.length;j++) {
			if(parentCls[j]==this){
				itemCls[j].style.display="block";
			}
			else{
				itemCls[j].style.display="none";
			}
		}
	}
}
