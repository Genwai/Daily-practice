window.onload=function  () {
	var cartTable=document.getElementById('cartTable');
	var tr =cartTable.rows;
	var checkinputs =document.getElementsByClassName("check");
	var checkinputsall =document.getElementsByClassName("check-all");
	var checkinputone =document.getElementsByClassName('check-one');
	
	for (var i=0,len=checkinputs.length;i<len;i++) {
		checkinputs[i].onclick=function  () {
//			if(this.className === "check-all check"){
//			for (var j=0,len=checkinputs.length;j<len;j++) {
//				checkinputs[j].checked=this.checked;
//			}
//			}
//			if (this.checked ==false) {
//				for (var k=0 ,len=checkinputsall.length;k<len;k++) {
//					checkinputsall[k].checked =this.checked;
//				}
//			}
//		
//			
//				for (var n=0,len=checkinputone.length;n<len;n++) {
//					if(this.checked[n] ==true){
//					for (var m=0 ,len=checkinputsall.length;m<len;m++) {
//					checkinputsall[m].checked =this.checked;
//				}
//					}
//				}
//		
		for (var j=0,len=checkinputone.length;j<len;j++) {
			if (this.checked) {
				for (var k=0 ,len=checkinputsall.length;k<len;k++) {
					checkinputsall[k].checked =this.checked;
				}
			}
		}
		}
	
	}
	
	
}