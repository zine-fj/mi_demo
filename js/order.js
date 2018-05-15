// JavaScript Document
var oOrRi=$('order_right_p1');
var aOrRi=$('order_right_p1 a');

var oMijian=$("#mi_jian");
var oMitxt=$("#mi_txt");
var oMijia=$("#mi_jia");
var oMida=$("#mi_dj");
var oMizj=$("#mi_zj");
oMizj.html(parseInt(oMida.html()));
  oMijian.click(function(){
	  if(parseInt(oMitxt.val())>1){
		  oMitxt.val(parseInt(oMitxt.val())-1);
		  }
	 oMizj.html(parseInt(oMitxt.val())*parseInt(oMida.html()));	  
	  
	  })

  oMijia.click(function(){
	  oMitxt.val(parseInt(oMitxt.val())+1);
	  oMizj.html(parseInt(oMitxt.val())*parseInt(oMida.html()));
	  })



   











