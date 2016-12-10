var aNode = document.querySelectorAll('.oareim-dateForm-primary .blue')
var aText = document.querySelector('.xiangqing-onclick')
var aClose = document.querySelector('.close')
	//aNode.onclick=function(){
	//	aText.style.display="block";
	//}
for(var i = 0; i < aNode.length; i++) {
	aNode[i].onclick = function(e) {
		aText.style.display = "block";
		console.log(e)
		var btnX= e.clientX - 249;
		var btnY = e.clientY + 100;
		
		aText.style.left = btnX + 'px ';
		aText.style.top = btnY + 'px';
		
	
		console.log(aText.style.left);
		return false;
	}
}
aClose.onclick = function() {
	aText.style.display = "none"
	return false;
}