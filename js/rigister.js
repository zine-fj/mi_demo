// JavaScript Document
var aInput=document.getElementsByTagName('input');

var oRiPo=$('.rigi_phone');
var aRiPo=$('.rigi_phone p');
console.log(aRiPo.eq(0))
//正则
   var oYzm=$('#idcode');
   var rePo= /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;//电话
   var reYz=/\w{4}/;//验证码
   var reMm=/^[a-z0-9_-]{6,18}$///密码
    aRiPo.hide() 
	aInput[0].onblur=function(){
		aRiPo.eq(0).show()
		aRiPo.eq(1).hide()
		if(aInput[0].value.search(rePo)!=-1){
		  aRiPo.eq(0).hide()
		  aRiPo.eq(1).hide()
		} else{
			aRiPo.eq(0).hide()
			aRiPo.eq(1).show()
			}
		}
   aInput[0].onfocus=function(){
	   if(aInput[0].value.search(rePo)!=-1){
		  aRiPo.eq(0).hide()
		  aRiPo.eq(1).hide()
		}
	  aRiPo.eq(0).show();
	   aRiPo.eq(1).hide();
	   }//电话验证 over
	
var oRiMa=$('.rigi_ma');
var aRiMa=$('.rigi_ma p');	

var oRiPa=document.getElementById('rigi_pa');
var oRiPaa=document.getElementById('rigi_paa');

	 aRiMa.hide() 
	aInput[3].onblur=function(){
		aRiMa.eq(0).show()
		aRiMa.eq(1).hide()
		if(aInput[3].value.search(reMm)!=-1){
		  aRiMa.eq(0).hide()
		  aRiMa.eq(1).hide()
		} else{
			aRiMa.eq(0).hide()
			aRiMa.eq(1).show()
			}
		}
   aInput[3].onfocus=function(){
	   if(aInput[3].value.search(rePo)!=-1){
		  aRiMa.eq(0).hide()
		 aRiMa.eq(1).hide()
		}
	  aRiMa.eq(0).show();
	  aRiMa.eq(1).hide();
	   }//密码验证 over
	
var oRiMaa=$('.rigi_maa');
var aRiMaa=$('.rigi_maa p');	
	
	 aRiMaa.hide() 
	aInput[4].onblur=function(){
		aRiMaa.eq(0).show()
		aRiMaa.eq(1).hide()
		if(aInput[4].value.search(reMm)!=-1){
		  aRiMaa.eq(0).hide()
		  aRiMaa.eq(1).hide()
			 
		} else{
			aRiMaa.eq(0).hide()
			aRiMaa.eq(1).show()
			
			}
			if(oRiPa.value!=oRiPaa.value){
			alert("两次输入密码不一致")
			}	
		}
	
   aInput[4].onfocus=function(){
	   if(aInput[4].value.search(rePo)!=-1){
		  aRiMaa.eq(0).hide()
		 aRiMaa.eq(1).hide()
		}
	  aRiMaa.eq(0).show();
	  aRiMaa.eq(1).hide();
	   }//密码验证 over
		
	
	
	
var oRiYzm=$('.rigi_yzm');
var aRiYzm=$('.rigi_yzm p');	
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];
	var oRiyz=document.getElementById('rigi_yz');
	var oYzm=document.getElementById('yzm');
	
	oYzm.onclick=function(){
		var str='';
		while(str.length<4){
			var iNum=parseInt(Math.random()*100)
			while(iNum>36){
				iNum=parseInt(Math.random()*100)
			}
			str+=arr[iNum];
		}
		oYzm.value=str.toUpperCase();
	}
   aRiYzm.hide()
   aInput[1].onblur=function(){
	  
	   if(oRiyz.value==oYzm.value){
		aRiYzm.hide()
		}else{
			aRiYzm.eq(1).show()
			aRiYzm.eq(0).hide()
			}
	   }
   aInput[1].onfocus=function(){
	  aRiYzm.eq(0).show();
	   aRiYzm.eq(1).hide();
	    if(oRiyz.value==oYzm.value){
		aRiYzm.hide()
		}
	   } 


   //判断是否都输入
 /* var oRiSu=$('#rigi_but');
     aInput[3].onclick=function(){
       
           // console.log(aInput[i].test)
	   if(aInput[0]!=""&&aInput[1]!=""){
				
                if(aInput[0].test&&aInput[1].test){//只要有一个没有没有通过验证就不能提交
                    aInput[0].focus()||aInput[1].focus();
					//让输入框获取焦点
                 return false
                }
            }
      
        // alert("请重新输入")
       
    };*/



     //cookie
	   var oRiPhone=document.getElementById("rigi_text");
       var oRiPass=document.getElementById("rigi_pa");
  
	 aInput[5].onclick=function(){
	   var value=aInput[0].value;
	   var value1=aInput[3].value;
	  if(value==""){
	     alert("请输入内容")
		 return false;
	   }else{
	 cookie.setCookie("rigi_text",oRiPhone.value,2);	
	   cookie.setCookie("rigi_pa",oRiPass.value,2);	 	  
		   //alert(value)
		// var date=new Date();
		 //date.setDate(date.getDate()+7);
	    // document.cookie=""+value+";expires=";
		 //document.cookie=""+value1;
		// document.cookie="width="+200;
		// document.cookie="height="+100;		 
	   }
	  
	 }
	
    
 /*
	 function getCookie(name){
		 var value="";
	 var str=document.cookie;
	 var arr=str.split("; ");
	 for(var i=0;i<arr.length;i++){
	   console.log(arr);
	   var arr1=arr[i].split("=");
	   console.log(arr1);

	   if(arr1[0]==name){
	     value=arr1[1];
	   }
	 }
	 return value;
	 }
	oRiPhone.value=getCookie("name");*/





