var index=0;
function middle_telbefore(){
	if(index<=0){
		index=2;
	}else{
		index--;
	}
	document.getElementById("m_img1").src="img/banner"+(index+1)+".jpg";
}
function middle_telafter(){
	if(index>=2){
		index=0;
	}else{
		index++;
	}
	document.getElementById("m_img1").src="img/banner"+(index+1)+".jpg";
}
function middle_li(index){
	document.getElementById("m_img1").src="img/banner"+index+".jpg";
}

function middle4_move1(){
	var p=document.getElementById("middle4_m");
	p.style.top="-200px";
	alert("11");
}
