// JavaScript Document
var oGow=$('#gwc');
var aGow=$('#gwc a span')
var oLjgm=$('#ljgm');
var iNow=0;
aGow.hide();
aGow.eq(0).show()
 oLjgm.click(function(){
	 iNow++
	 console.log(iNow)
	 aGow.eq(iNow).show().siblings().hide();
	 if(iNow==4){
		 alert('最多只能购买三个！！')
		 }
	 })















var oPhoto=document.getElementById("photo");
var aPhoto=oPhoto.getElementsByTagName('li');
var aPhoto=$('#photo li');
var aPhotoe=$('#photo li em');
var aPhotos=$('#photo li span');
 aPhotoe.hide()
 aPhotos.hide()
 
  aPhoto.hover(function(){
	  var iNow=$(this).index();
	 aPhotoe.eq(iNow).fadeIn()
	 aPhotos.eq(iNow).fadeIn()
	  },function(){
     aPhotoe.fadeOut()
	 aPhotos.fadeOut()  
		  })
	//相机 over   









var aMi5_bb_li=$('.mi5_bb_list1 li')
var aMi5_bb_li_po=$('.mi5_bb_list1_point li');
aMi5_bb_li.eq(0).show().siblings().hide()
aMi5_bb_li_po.eq(0).addClass('mi5_bb_list3_point_act').siblings().removeClass('mi5_bb_list3_point_act')
  aMi5_bb_li_po.click(function(){
	  var iNow=$(this).index();
	  aMi5_bb_li.eq(iNow).fadeIn().siblings().fadeOut()
	  aMi5_bb_li_po.eq(iNow).addClass('mi5_bb_list3_point_act').siblings().removeClass('mi5_bb_list3_point_act')
	  })
var aMi5_bb_li2=$('.mi5_bb_list2 li')
var aMi5_bb_li2_po=$('.mi5_bb_list2_point li');
aMi5_bb_li2.eq(1).show().siblings().hide()
aMi5_bb_li2_po.eq(1).addClass('mi5_bb_list3_point_act').siblings().removeClass('mi5_bb_list3_point_act')

  aMi5_bb_li2_po.click(function(){
	  var iNow=$(this).index();
	  aMi5_bb_li2.eq(iNow).fadeIn().siblings().fadeOut()
	  aMi5_bb_li2_po.eq(iNow).addClass('mi5_bb_list3_point_act').siblings().removeClass('mi5_bb_list3_point_act')
	  })
var aMi5_bb_li3=$('.mi5_bb_list3 li')
var aMi5_bb_li3_po=$('.mi5_bb_list3_point li');
aMi5_bb_li3.eq(0).show().siblings().hide()
aMi5_bb_li3_po.eq(0).addClass('mi5_bb_list3_point_act').siblings().removeClass('mi5_bb_list3_point_act')
  aMi5_bb_li3_po.click(function(){
	  var iNow=$(this).index();
	  aMi5_bb_li3.eq(iNow).fadeIn().siblings().fadeOut();
	  aMi5_bb_li3_po.eq(iNow).addClass('mi5_bb_list3_point_act').siblings().removeClass('mi5_bb_list3_point_act')
	  })
  /*------------ 版本选择 over ----------*/
  
  
var oMilt=$('.mi5_lt '); 
var aMilt=$('.mi5_lt li'); 
var oMiltt=$('.mi5_ltt '); 
var aMiltt=$('.mi5_ltt li'); 
var iNow=0;
 aMilt.hide()
 aMiltt.hover(function(){
	 iNow=$(this).index();
	 aMiltt.eq(iNow).addClass('mi5_lt_act');
	 aMilt.eq(iNow).show().fadeIn();
	 },function(){
	aMiltt.eq(iNow).removeClass('mi5_lt_act');
	aMilt.eq(iNow).hide() 
		 })
  
  
  //楼梯
  aMiltt.eq(0).click(function(){
	 $('body,html').animate({'scrollTop':0})
	 $('body,html').animate({'scrollTop':200})
	  })
  aMiltt.eq(1).click(function(){
	 $('body,html').animate({'scrollTop':900})
	  })
   aMiltt.eq(2).click(function(){
	 $('body,html').animate({'scrollTop':1700})
	  })
  aMiltt.eq(3).click(function(){
	 $('body,html').animate({'scrollTop':2500})
	  })
  aMiltt.eq(4).click(function(){
	 $('body,html').animate({'scrollTop':3300})
	  })
  aMiltt.eq(5).click(function(){
	 $('body,html').animate({'scrollTop':4100})
	  })
  aMiltt.eq(6).click(function(){
	 $('body,html').animate({'scrollTop':4900})
	  })
  aMiltt.eq(7).click(function(){
	 $('body,html').animate({'scrollTop':5700})
	  })
  aMiltt.eq(8).click(function(){
	 $('body,html').animate({'scrollTop':6500})
	  })
  
$(window).scroll(function() {
var $t = $(this).scrollTop();

if($t>0&&$t<700){
	 aMiltt.eq(0).addClass('mi5_lt_act');
	 aMilt.eq(0).show().fadeIn();
	}else if($t>700&&$t<1500){
	aMiltt.eq(1).addClass('mi5_lt_act');
	 aMilt.eq(1).show().fadeIn().siblings().fadeOut();
		}else if($t>1500&&$t<2300){
	aMiltt.eq(2).addClass('mi5_lt_act');
	 aMilt.eq(2).show().fadeIn().siblings().fadeOut();
		}else if($t>2300&&$t<3100){
	aMiltt.eq(3).addClass('mi5_lt_act');
	 aMilt.eq(3).show().fadeIn().siblings().fadeOut();
		}else if($t>3100&&$t<3800){
	aMiltt.eq(4).addClass('mi5_lt_act');
	 aMilt.eq(4).show().fadeIn().siblings().fadeOut();
		}else if($t>3800&&$t<4500){
	aMiltt.eq(5).addClass('mi5_lt_act');
	 aMilt.eq(5).show().fadeIn().siblings().fadeOut();
		}else if($t>4500&&$t<5300){
	aMiltt.eq(6).addClass('mi5_lt_act');
	 aMilt.eq(6).show().fadeIn().siblings().fadeOut();
		}else if($t>5300&&$t<6000){
	aMiltt.eq(7).addClass('mi5_lt_act');
	 aMilt.eq(7).show().fadeIn().siblings().fadeOut();
		}else if($t>6000&&$t<6800){
	aMiltt.eq(8).addClass('mi5_lt_act');
	 aMilt.eq(8).show().fadeIn().siblings().fadeOut();
		}else if($t>6800){
	 aMilt.fadeOut();
		}

})
   
  
  
  
  
  
  
  
  
  