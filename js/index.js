// JavaScript Document
 
var oLoli=$("#logo_list");
var aLoli=$('#logo_list li')
var oLoli_xm=$("#logo_list_xm");
var aLoli_xm=$("#logo_list_xm li");//小米
var oLoli_hm=$('#logo_list_hm');
var aLoli_hm=$('#logo_list_hm li');//红米
var oLoli_pb=$('#logo_list_pb');
var aLoli_pb=$('#logo_list_pb li'); //平板
var oLoli_ds=$('#logo_list_ds');
var aLoli_ds=$('#logt_list_ds li');//电视
var oLoli_hz=$('#logo_list_hz');
var aLoli_hz=$('#logt_list_hz li');//盒子  
var oLoli_ly=$('#logo_list_ly');
var aLoli_ly=$('#logt_list_ly li');//路由器
var oLoli_zn=$('#logo_list_zn');
var aLoli_zn=$('#logt_list_zn li');//智能硬件  
    aLoli.eq(0).hover(function(){
		oLoli_xm.show().animate({'height':234},600)},function(){
			oLoli_xm.hide()
			oLoli_xm.hover(function(){
				oLoli_xm.show().animate({'height':234},600)
				},function(){
					oLoli_xm.hide().animate({'height':0},600)
					})
			})	
    aLoli.eq(1).hover(function(){
		oLoli_hm.show().animate({'height':234},600)},function(){
			oLoli_hm.hide()
			oLoli_hm.hover(function(){
				oLoli_hm.show().animate({'height':234},600)
				},function(){
				oLoli_hm.hide().animate({'height':0},600)
				})
			
			})	
	aLoli.eq(2).hover(function(){
		oLoli_pb.show().animate({'height':234},600)},function(){
			oLoli_pb.hide()
			oLoli_pb.hover(function(){
				oLoli_pb.show().animate({'height':234},600)},function(){
				oLoli_pb.hide().animate({'height':0},600)
				})
			
			})	
	aLoli.eq(3).hover(function(){
		oLoli_ds.show().animate({'height':234},600)},function(){
			oLoli_ds.hide()
			oLoli_ds.hover(function(){
				oLoli_ds.show().animate({'height':234},600)},function(){
				oLoli_ds.hide().animate({'height':0},600)})
			})	
   aLoli.eq(4).hover(function(){
		oLoli_hz.show().animate({'height':234},600)},function(){
			oLoli_hz.hide()
			oLoli_hz.hover(function(){
				oLoli_hz.show().animate({'height':234},600)},function(){
				oLoli_hz.hide().animate({'height':0},600)})
			})
	aLoli.eq(5).hover(function(){
		oLoli_ly.show().animate({'height':234},600)},function(){
			oLoli_ly.hide()
			oLoli_ly.hover(function(){
				oLoli_ly.show().animate({'height':234},600)},function(){
				oLoli_ly.hide().animate({'height':0},600)})
			})
	aLoli.eq(6).hover(function(){
		oLoli_zn.show().animate({'height':234},600)},function(){
			oLoli_zn.hide()
			oLoli_zn.hover(function(){
				oLoli_zn.show().animate({'height':234},600)},function(){
				oLoli_zn.hide().animate({'height':0},600)})
			})
/*-------------logo 一 二级菜单---------------*/	
var oSearch_text=$('.text');
var oSearch_input=$('.search input');
var oSearch_=$('.search_');
var aSearch_=$('.search_ li');
  
  oSearch_text.click(function(){
	  oSearch_.show();
	  oSearch_input.addClass('active');
	  
	  });
  $(oSearch_text).hover(function(){
	  
	  },function(){
	  	oSearch_.hide();
	  }); 
	$(oSearch_).hover(function(){
	  oSearch_.show();
	  },function(){
	  	oSearch_.hide();
	  });   
	  
/*------------logo over-----------*/
var oBanLi=$('.banner_list');
var aBanLi=$('.banner_list li');
var oBanLe=$('.banner_left');//左按钮
var oBanRi=$('.banner_right');//右按钮
var oBanPo=$('.banner_point');
var aBanPo=$('.banner_point li');
var len=aBanLi.size();
var iW=aBanLi.width();
var iNow=0;
var timer=null;
aBanLi.eq(0).show()
   /*oBanLi.css({'width':2*iW*len})
   oBanLi.html(oBanLi.html()+oBanLi.html())
   aBanPo.click(function(){
	   iNow=$(this).index()
	   fnBanner() 
	   })
   oBanLe.click(function(){ //点击左键时
	   iNow--;
	   if(iNow==-1){
		  oBanLi.css({'left':-iW*len})
		  iNow=len-1; 
		   }
	    fnBanner()
	   })
   oBanRi.click(function(){//点击右键时
	   iNow++;
	   if(iNow==2*len){
		   oBanLi.css({'left':-iW*(len-1)})
		   iNow=len
		   }
		 fnBanner();  
	   })
	 BanPlay() //让其自动运动
	function BanPlay(){//封装函数让其自动运动
		clearInterval(timer);
		timer=setInterval(function(){
			iNow++;
	   if(iNow==2*len){
		   oBanLi.css({'left':-iW*(len-1)})
		   iNow=len
		   }
		 fnBanner();
			},2000)
		} 
	 oBanLi.hover(function(){//鼠标移入banner和移出banner的效果
		 clearInterval(timer)
		 },function(){
			 BanPlay()
			 })	  	   
   function fnBanner(){//封装banner函数
	   aBanPo.removeClass('banner_point_active').eq(iNow%len).addClass('banner_point_active')
	   oBanLi.stop().animate({'left':-iW*iNow})
	   }*/
	 /*---------图片轮播 无缝滚动 over---------*/
    aBanPo.click(function(){
	  iNow=$(this).index();
	 fnBanner()
	   }) 	
    oBanLe.click(function(){
		iNow--;
		if(iNow==-1){
			iNow=len-1
			}
		fnBanner()
		})
	oBanRi.click(function(){
		iNow++;
		iNow%=len;
		fnBanner()	
		})
	BanPlay()//自动轮播	
	function BanPlay(){
		clearInterval(timer);
		timer=setInterval(function(){
		++iNow;
		iNow%=len;
		fnBanner()
			},3000)
		}
	oBanLi.hover(function(){//鼠标移入移出时效果
		clearInterval(timer)
		},function(){
			BanPlay()
			})		
	function fnBanner(){
	  aBanPo.removeClass('banner_point_active').eq(iNow).addClass('banner_point_active');
	  aBanLi.fadeOut().eq(iNow).fadeIn() 
		}	 
	 /*----------图片轮播 渐隐渐显 over-------*/
	 
	 //整个左边导航
var oMiLoqb=$('.mi_logo_qb ');
var oBanNav=$('#banner_nav');
oBanNav.hide()
   oMiLoqb.hover(function(){
	   oBanNav.show()
	   },function(){
		   oBanNav.hide()
		   oBanNavLe.hover(function(){
			   oBanNav.show()
			   },function(){
				  oBanNav.hide()
				   oBanNavRi.hover(function(){
					   oBanNav.show()
					   },function(){
						   oBanNav.hide() 
						   })
				   })
		   })
var oBanNavLe=$('.banner_nav_left');	 
var aBanNavLe=$('.banner_nav_left li');
var oBanNavRi=$('.banner_nav_right');	 
var oBanNavRi1=$('.banner_nav_right1');	 
var aBanNavRi1=$('.banner_nav_right1 li');	 
	 aBanNavLe.eq(0).hover(function(){
		 oBanNavRi1.show();
		 },function(){
			 oBanNavRi1.hide();
			oBanNavRi1.hover(function(){
				oBanNavRi1.show();
				},function(){
					oBanNavRi1.hide();
					});
			 })
		/*---nav1 over----*/
var oBanNavRi2=$('.banner_nav_right2');	 
var aBanNavRi2=$('.banner_nav_right2 li');
	 aBanNavLe.eq(1).hover(function(){
		 oBanNavRi2 .show();
		 },function(){
		  oBanNavRi2.hide();
		   oBanNavRi2.hover(function(){
			   oBanNavRi2.show();
			   },function(){
			oBanNavRi2.hide();
				   })
			 })
	  /*---nav2 over----*/
var oBanNavRi3=$('.banner_nav_right3');	 
var aBanNavRi3=$('.banner_nav_right3 li');
	 aBanNavLe.eq(2).hover(function(){
		 oBanNavRi3.show();
		 },function(){
		  oBanNavRi3.hide();
		   oBanNavRi3.hover(function(){
			   oBanNavRi3.show();
			   },function(){
			oBanNavRi3.hide();
				   })
			 })	  
	 	/*---nav3 over----*/
var oBanNavRi4=$('.banner_nav_right4');	 
var aBanNavRi4=$('.banner_nav_right4 li');
	 aBanNavLe.eq(3).hover(function(){
		 oBanNavRi4.show();
		 },function(){
		  oBanNavRi4.hide();
		   oBanNavRi4.hover(function(){
			   oBanNavRi4.show();
			   },function(){
			oBanNavRi4.hide();
				   })
			 })	  
	 	/*---nav4 over----*/
var oBanNavRi5=$('.banner_nav_right5');	 
var aBanNavRi5=$('.banner_nav_right5 li');
	 aBanNavLe.eq(4).hover(function(){
		 oBanNavRi5.show();
		 },function(){
		  oBanNavRi5.hide();
		   oBanNavRi5.hover(function(){
			   oBanNavRi5.show();
			   },function(){
			oBanNavRi5.hide();
				   })
			 })		
		/*---nav5 over----*/	
var oBanNavRi6=$('.banner_nav_right6');	 
var aBanNavRi6=$('.banner_nav_right6 li');
	 aBanNavLe.eq(5).hover(function(){
		 oBanNavRi6.show();
		 },function(){
		  oBanNavRi6.hide();
		   oBanNavRi6.hover(function(){
			   oBanNavRi6.show();
			   },function(){
			oBanNavRi6.hide();
				   })
			 })		
		/*---nav6 over----*/		
var oBanNavRi7=$('.banner_nav_right7');	 
var aBanNavRi7=$('.banner_nav_right7 li');
	 aBanNavLe.eq(6).hover(function(){
		 oBanNavRi7.show();
		 },function(){
		  oBanNavRi7.hide();
		   oBanNavRi7.hover(function(){
			   oBanNavRi7.show();
			   },function(){
			oBanNavRi7.hide();
				   })
			 })		
		/*---nav7 over----*/		
var oBanNavRi8=$('.banner_nav_right8');	 
var aBanNavRi8=$('.banner_nav_right8 li');
	 aBanNavLe.eq(7).hover(function(){
		 oBanNavRi8.show();
		 },function(){
		  oBanNavRi8.hide();
		   oBanNavRi8.hover(function(){
			   oBanNavRi8.show();
			   },function(){
			oBanNavRi8.hide();
				   })
			 })		
		/*---nav8 over----*/		
var oBanNavRi9=$('.banner_nav_right9');	 
var aBanNavRi9=$('.banner_nav_right9 li');
	 aBanNavLe.eq(8).hover(function(){
		 oBanNavRi9.show();
		 },function(){
		  oBanNavRi9.hide();
		   oBanNavRi9.hover(function(){
			   oBanNavRi9.show();
			   },function(){
			oBanNavRi9.hide();
				   })
			 })		
		/*---nav9 over----*/				
var oBanNavRi10=$('.banner_nav_right10');	 
var aBanNavRi10=$('.banner_nav_right10 li');
	 aBanNavLe.eq(9).hover(function(){
		 oBanNavRi10.show();
		 },function(){
		  oBanNavRi10.hide();
		   oBanNavRi10.hover(function(){
			   oBanNavRi10.show();
			   },function(){
			oBanNavRi10.hide();
				   })
			 })		
		/*---nav10 over----*/	
		   //整个左边导航over	
	 /*-----二级导航 over---------*/
	 
var aBan_img_zh1=$('.banner_img_zh1 dt');
   aBan_img_zh1.eq(0).show();
aBan_img_zh1.hover(function(){
	var iNow=$(this).index();
	aBan_img_zh1.eq(0).hide().siblings(iNow).show();
	},function(){
	aBan_img_zh1.eq(1).hide().siblings(iNow).show();	
		})
var aBan_img_zh2=$('.banner_img_zh2 dt');
   aBan_img_zh2.eq(0).show();
aBan_img_zh2.hover(function(){
	var iNow=$(this).index();
	aBan_img_zh2.eq(0).hide().siblings(iNow).show();
	},function(){
	aBan_img_zh2.eq(1).hide().siblings(iNow).show();	
		})
var aBan_img_zh3=$('.banner_img_zh3 dt');
   aBan_img_zh3.eq(0).show();
aBan_img_zh3.hover(function(){
	var iNow=$(this).index();
	aBan_img_zh3.eq(0).hide().siblings(iNow).show();
	},function(){
	aBan_img_zh3.eq(1).hide().siblings(iNow).show();	
		})
var aBan_img_zh4=$('.banner_img_zh4 dt');
   aBan_img_zh4.eq(0).show();
aBan_img_zh4.hover(function(){
	var iNow=$(this).index();
	aBan_img_zh4.eq(0).hide().siblings(iNow).show();
	},function(){
	aBan_img_zh4.eq(1).hide().siblings(iNow).show();	
		})	
var aBan_img_zh5=$('.banner_img_zh5 dt');
   aBan_img_zh5.eq(0).show();
aBan_img_zh5.hover(function(){
	var iNow=$(this).index();
	aBan_img_zh5.eq(0).hide().siblings(iNow).show();
	},function(){
	aBan_img_zh5.eq(1).hide().siblings(iNow).show();	
		})
var aBan_img_zh6=$('.banner_img_zh6 dt');
   aBan_img_zh6.eq(0).show();
aBan_img_zh6.hover(function(){
	var iNow=$(this).index();
	aBan_img_zh6.eq(0).hide().siblings(iNow).show();
	},function(){
	aBan_img_zh6.eq(1).hide().siblings(iNow).show();	
		})								 
	 /*------banner over*/
	 
var oMxLi=$('.mxdp_list');
var aMxLi=$('.mxdp_list li');
var oMxLe=$('.mxdp_left');
var oMxRi=$('.mxdp_right');
var Mx_iW=aMxLi.width();
console.log()
var Mx_len=aMxLi.size();
console.log(Mx_len)
oMxLi.css({'width':Mx_iW*Mx_len+12*10})
console.log(oMxLi.width())
   oMxRi.click(function(){
	   oMxLi.animate({'left':-1225})
	   })
   oMxLe.click(function(){
	   oMxLi.animate({'left':0})
	   })	   
	Mx_play();
	
   function Mx_play(){
	   clearInterval(timer);
	   timer=setInterval(function(){
		   //oMxLi.animate({'left':-1225});
		   if(oMxLi.position().left==0){

			   oMxLi.animate({'left':-1225});
			   }else if(oMxLi.position().left==-1225){
				oMxLi.animate({'left':0});   
				   }
			   
		   },3000)
	   }
   oMxLi.hover(function(){
	   clearInterval(timer);
	   },function(){
		  Mx_play(); 
		   })	   	
/*-----------明星单品 over-----------*/		

 var oZnLe=$('.znyj_left img');
 oZnLe.hover(function(){
	 oZnLe.addClass('znyj_act')
	 oZnLe.animate({'top':70,},400)
	 },function(){
	 oZnLe.removeClass('znyj_act')	
	 oZnLe.animate({'top':75,},400) 
		 })	
 var oZnRi=$('.znyj_right');
 var aZnRi=$('.znyj_right li');
   iNow=$(this).index();
   aZnRi.hover(function(){
	   iNow=$(this).index();
	   aZnRi.eq(iNow).stop().addClass('znyj_act');
	   aZnRi.eq(iNow).stop().animate({'top':-5})
	   },function(){
		 aZnRi.eq(iNow).removeClass('znyj_act'); 
		  aZnRi.eq(iNow).animate({'top':0}) 
		   })
/*-----------智能硬件 over------------*/
	
var oDpImg=$('.dp_img');
var oDpLi01=$('.dp_list01');
var aDpLi01=$('.dp_list01 li');
var oDpLiLi01=$('.dp_list01_li1');//搭配热门
var oDpLi11=$('.dp_list11');
var aDpLi11=$('.dp_list11 li');
var oDpLiLi11=$('.dp_list11_li1');//搭配耳机音箱
var oDpLi21=$('.dp_list21');
var aDpLi21=$('.dp_list21 li');
var oDpLiLi21=$('.dp_list21_li1');//搭配电源
var oDpLi31=$('.dp_list31');
var aDpLi31=$('.dp_list31 li');
var oDpLiLi31=$('.dp_list31_li1');//搭配电池存储卡
  oDpImg.hover(function(){
	  oDpImg.stop().addClass('znyj_act')
	  oDpImg.stop().animate({'top':-5})
	  },function(){
	  oDpImg.removeClass('znyj_act')
	  oDpImg.animate({'top':0})
		  })
  aDpLi01.hover(function(){
	  iNow=$(this).index();
	  aDpLi01.eq(iNow).stop().addClass('znyj_act')
	  aDpLi01.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi01.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi01.eq(iNow).removeClass('znyj_act')
	  aDpLi01.eq(iNow).animate({'top':0})
	  oDpLiLi01.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//搭配热门
		   
	aDpLi11.hover(function(){
	  iNow=$(this).index();
	  aDpLi11.eq(iNow).stop().addClass('znyj_act')
	  aDpLi11.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi11.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi11.eq(iNow).removeClass('znyj_act')
	  aDpLi11.eq(iNow).animate({'top':0})
	  oDpLiLi11.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//搭配耳机音箱
  	aDpLi21.hover(function(){
	  iNow=$(this).index();
	  aDpLi21.eq(iNow).stop().addClass('znyj_act')
	  aDpLi21.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi21.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi21.eq(iNow).removeClass('znyj_act')
	  aDpLi21.eq(iNow).animate({'top':0})
	  oDpLiLi21.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//搭配电源
    aDpLi31.hover(function(){
	  iNow=$(this).index();
	  aDpLi31.eq(iNow).stop().addClass('znyj_act')
	  aDpLi31.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi31.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi31.eq(iNow).removeClass('znyj_act')
	  aDpLi31.eq(iNow).animate({'top':0})
	  oDpLiLi31.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//搭配电池存储卡		  
var oDpImg1=$('.dp_img1');
var oDpLi02=$('.dp_list02');
var aDpLi02=$('.dp_list02 li');
var oDpLiLi02=$('.dp_list01_li2');//搭配热门
var oDpLi12=$('.dp_list12');
var aDpLi12=$('.dp_list12 li');
var oDpLiLi12=$('.dp_list11_li2');//搭配耳机音箱
var oDpLi22=$('.dp_list22');
var aDpLi22=$('.dp_list22 li');
var oDpLiLi22=$('.dp_list21_li2');//搭配电源
var oDpLi32=$('.dp_list32');
var aDpLi32=$('.dp_list32 li');
var oDpLiLi32=$('.dp_list31_li2');//搭配电池存储卡
var oDpLi02_1=$('.dp_list02_1');
var oDpLi02_2=$('.dp_list02_2');
	oDpImg1.hover(function(){
	  oDpImg1.stop().addClass('znyj_act')
	  oDpImg1.stop().animate({'top':-5})
	  },function(){
	  oDpImg1.removeClass('znyj_act')
	  oDpImg1.animate({'top':0})
		  })
		  
	aDpLi02.hover(function(){
	  iNow=$(this).index();
	  aDpLi02.eq(iNow).stop().addClass('znyj_act')
	  aDpLi02.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi02.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi02.eq(iNow).removeClass('znyj_act')
	  aDpLi02.eq(iNow).animate({'top':0})
	  oDpLiLi02.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })	//搭配热门
	aDpLi12.hover(function(){
	  iNow=$(this).index();
	  aDpLi12.eq(iNow).stop().addClass('znyj_act')
	  aDpLi12.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi12.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi12.eq(iNow).removeClass('znyj_act')
	  aDpLi12.eq(iNow).animate({'top':0})
	  oDpLiLi12.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })	//搭配耳机音箱	  
   aDpLi22.hover(function(){
	  iNow=$(this).index();
	  aDpLi22.eq(iNow).stop().addClass('znyj_act')
	  aDpLi22.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi22.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi22.eq(iNow).removeClass('znyj_act')
	  aDpLi22.eq(iNow).animate({'top':0})
	  oDpLiLi22.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })	//搭配电源
	aDpLi32.hover(function(){
	  iNow=$(this).index();
	  aDpLi32.eq(iNow).stop().addClass('znyj_act')
	  aDpLi32.eq(iNow).stop().animate({'top':-5})
	  oDpLiLi32.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aDpLi32.eq(iNow).removeClass('znyj_act')
	  aDpLi32.eq(iNow).animate({'top':0})
	  oDpLiLi32.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })	//搭配电池存储卡	  
	
	oDpLi02_1.hover(function(){//浏览更多 上面的效果(不变)
	  oDpLi02_1.stop().addClass('znyj_act')
	  oDpLi02_1.stop().animate({'top':-5})
	  },function(){
	  oDpLi02_1.removeClass('znyj_act')
	  oDpLi02_1.animate({'top':0})
		  })	
	oDpLi02_2.hover(function(){//浏览更多 效果(不变)
	  oDpLi02_2.stop().addClass('znyj_act')
	  oDpLi02_2.stop().animate({'top':-5})
	  },function(){
	  oDpLi02_2.removeClass('znyj_act')
	  oDpLi02_2.animate({'top':0})
		  })	
	/*----------搭配 热门 over------------*/	
	var oDpLi=$('.dp_list');
	var aDpLi=$('.dp_list li');
	var oDpRm=$('.dp_rm');
	var oDpEjyx=$('.dp_ejyx');
	var oDpDy=$('.dp_dc');
	var oDpDck=$('.dp_dck');	
	aDpLi.eq(0).addClass('dp_list_act')              
	aDpLi.hover(function(){/*-----鼠标滑过，切换*/
		iNow=$(this).index();
		aDpLi.eq(0).removeClass('dp_list_act')
		aDpLi.eq(iNow).addClass('dp_list_act')
		},function(){
			aDpLi.removeClass('dp_list_act');
			aDpLi.eq(iNow).addClass('dp_list_act');
			})
	aDpLi.eq(0).mouseover(function(){
		oDpRm.show();
		oDpDy.hide();
		oDpDck.hide();
		oDpEjyx.hide();
		})		
	aDpLi.eq(1).mouseover(function(){
		oDpRm.hide();
		oDpDy.hide();
		oDpDck.hide();
		oDpEjyx.show();
		})	
	aDpLi.eq(2).mouseover(function(){
		oDpRm.hide();
		oDpDy.show();
		oDpDck.hide();
		oDpEjyx.hide();
		})	 						
	aDpLi.eq(3).mouseover(function(){
		oDpRm.hide();
		oDpDy.hide();
		oDpDck.show();
		oDpEjyx.hide();
		})
	/*-----------切换over-------------*/
/*---------------搭配 over-------------------------------*/

var oPjImg=$('.pj_img');
var oPjLi01=$('.pj_list01');
var aPjLi01=$('.pj_list01 li');
var oPjLiLi01=$('.pj_list01_li1');//配件热门
var oPjLi11=$('.pj_list11');
var aPjLi11=$('.pj_list11 li');
var oPjLiLi11=$('.pj_list11_li1');//配件保护套
var oPjLi21=$('.pj_list21');
var aPjLi21=$('.pj_list21 li');
var oPjLiLi21=$('.pj_list21_li1');//配件后盖
var oPjLi31=$('.pj_list31');
var aPjLi31=$('.pj_list31 li');
var oPjLiLi31=$('.pj_list31_li1');//配件贴膜
var oPjLi41=$('.pj_list41');
var aPjLi41=$('.pj_list41 li');
var oPjLiLi41=$('.pj_list41_li1');//配件其他
  oPjImg.hover(function(){
	  oPjImg.stop().addClass('znyj_act')
	  oPjImg.stop().animate({'top':-5})
	  },function(){
	  oPjImg.removeClass('znyj_act')
	  oPjImg.animate({'top':0})
		  })
  aPjLi01.hover(function(){
	  iNow=$(this).index();
	  aPjLi01.eq(iNow).stop().addClass('znyj_act')
	  aPjLi01.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi01.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi01.eq(iNow).removeClass('znyj_act')
	  aPjLi01.eq(iNow).animate({'top':0})
	  oPjLiLi01.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件热门
		   
	aPjLi11.hover(function(){
	  iNow=$(this).index();
	  aPjLi11.eq(iNow).stop().addClass('znyj_act')
	  aPjLi11.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi11.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi11.eq(iNow).removeClass('znyj_act')
	  aPjLi11.eq(iNow).animate({'top':0})
	  oPjLiLi11.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件保护套
  	aPjLi21.hover(function(){
	  iNow=$(this).index();
	  aPjLi21.eq(iNow).stop().addClass('znyj_act')
	  aPjLi21.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi21.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi21.eq(iNow).removeClass('znyj_act')
	  aPjLi21.eq(iNow).animate({'top':0})
	  oPjLiLi21.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件后盖
    aPjLi31.hover(function(){
	  iNow=$(this).index();
	  aPjLi31.eq(iNow).stop().addClass('znyj_act')
	  aPjLi31.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi31.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi31.eq(iNow).removeClass('znyj_act')
	  aPjLi31.eq(iNow).animate({'top':0})
	  oPjLiLi31.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件贴膜
	aPjLi41.hover(function(){
	  iNow=$(this).index();
	  aPjLi41.eq(iNow).stop().addClass('znyj_act')
	  aPjLi41.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi41.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi41.eq(iNow).removeClass('znyj_act')
	  aPjLi41.eq(iNow).animate({'top':0})
	  oPjLiLi41.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件其他	  		  
var oPjImg1=$('.pj_img1');
var oPjLi02=$('.pj_list02');
var aPjLi02=$('.pj_list02 li');
var oPjLiLi02=$('.pj_list01_li2');//配件热门
var oPjLi12=$('.pj_list12');
var aPjLi12=$('.pj_list12 li');
var oPjLiLi12=$('.pj_list11_li2');//配件保护套
var oPjLi22=$('.pj_list22');
var aPjLi22=$('.pj_list22 li');
var oPjLiLi22=$('.pj_list21_li2');//配件后盖
var oPjLi32=$('.pj_list32');
var aPjLi32=$('.pj_list32 li');
var oPjLiLi32=$('.pj_list31_li2');//配件贴膜
var oPjLi42=$('.pj_list42');
var aPjLi42=$('.pj_list42 li');
var oPjLiLi42=$('.pj_list41_li2');//配件其他

var oPjLi02_1=$('.pj_list02_1');
var oPjLi02_2=$('.pj_list02_2');
	oPjImg1.hover(function(){
	  oPjImg1.stop().addClass('znyj_act')
	  oPjImg1.stop().animate({'top':-5})
	  },function(){
	  oPjImg1.removeClass('znyj_act')
	  oPjImg1.animate({'top':0})
		  })
		  
	aPjLi02.hover(function(){
	  iNow=$(this).index();
	  aPjLi02.eq(iNow).stop().addClass('znyj_act')
	  aPjLi02.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi02.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi02.eq(iNow).removeClass('znyj_act')
	  aPjLi02.eq(iNow).animate({'top':0})
	  oPjLiLi02.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件热门
	aPjLi12.hover(function(){
	  iNow=$(this).index();
	  aPjLi12.eq(iNow).stop().addClass('znyj_act')
	  aPjLi12.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi12.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi12.eq(iNow).removeClass('znyj_act')
	  aPjLi12.eq(iNow).animate({'top':0})
	  oPjLiLi12.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件保护套  
   aPjLi22.hover(function(){
	  iNow=$(this).index();
	  aPjLi22.eq(iNow).stop().addClass('znyj_act')
	  aPjLi22.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi22.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi22.eq(iNow).removeClass('znyj_act')
	  aPjLi22.eq(iNow).animate({'top':0})
	  oPjLiLi22.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件后盖
	aPjLi32.hover(function(){
	  iNow=$(this).index();
	  aPjLi32.eq(iNow).stop().addClass('znyj_act')
	  aPjLi32.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi32.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi32.eq(iNow).removeClass('znyj_act')
	  aPjLi32.eq(iNow).animate({'top':0})
	  oPjLiLi32.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件贴膜	  
	aPjLi42.hover(function(){
	  iNow=$(this).index();
	  aPjLi42.eq(iNow).stop().addClass('znyj_act')
	  aPjLi42.eq(iNow).stop().animate({'top':-5})
	  oPjLiLi42.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aPjLi42.eq(iNow).removeClass('znyj_act')
	  aPjLi42.eq(iNow).animate({'top':0})
	  oPjLiLi42.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//配件其他
		  
	oPjLi02_1.hover(function(){//浏览更多 上面的效果(不变)
	  oPjLi02_1.stop().addClass('znyj_act')
	  oPjLi02_1.stop().animate({'top':-5})
	  },function(){
	  oPjLi02_1.removeClass('znyj_act')
	  oPjLi02_1.animate({'top':0})
		  })	
	oPjLi02_2.hover(function(){//浏览更多 效果(不变)
	  oPjLi02_2.stop().addClass('znyj_act')
	  oPjLi02_2.stop().animate({'top':-5})
	  },function(){
	  oPjLi02_2.removeClass('znyj_act')
	  oPjLi02_2.animate({'top':0})
		  })	
	/*----------搭配 热门 over------------*/	
	var oPjLi=$('.pj_list');
	var aPjLi=$('.pj_list li');
	var oPjRm=$('.pj_rm');
	var oPjBht=$('.pj_bht');
	var oPjHg=$('.pj_hg');
	var oPjTm=$('.pj_tm');
	var oPjQt=$('.pj_qt');	
	aPjLi.eq(0).addClass('pj_list_act')              
	aPjLi.hover(function(){/*-----鼠标滑过，切换*/
		iNow=$(this).index();
		console.log(iNow)
		aPjLi.eq(0).removeClass('pj_list_act')
		aPjLi.eq(iNow).addClass('pj_list_act')
		},function(){
			aPjLi.removeClass('pj_list_act');
			aPjLi.eq(iNow).addClass('pj_list_act');
			})
	aPjLi.eq(0).mouseover(function(){
		oPjRm.show();
		oPjBht.hide();
		oPjHg.hide();
		oPjTm.hide();
		oPjQt.hide();
		})		
	aPjLi.eq(1).mouseover(function(){
		oPjRm.hide();
		oPjBht.show();
		oPjHg.hide();
		oPjTm.hide();
		oPjQt.hide();
		})	
	aPjLi.eq(2).mouseover(function(){
		oPjRm.hide();
		oPjBht.hide();
		oPjHg.show();
		oPjTm.hide();
		oPjQt.hide();
		})	 						
	aPjLi.eq(3).mouseover(function(){
		oPjRm.hide();
		oPjBht.hide();
		oPjHg.hide();
		oPjTm.show();
		oPjQt.hide();
		})
    aPjLi.eq(4).mouseover(function(){
		oPjRm.hide();
		oPjBht.hide();
		oPjHg.hide();
		oPjTm.hide();
		oPjQt.show();
		})
   /*------------配件 over------------*/

var oZbImg=$('.zb_img');
var oZbLi01=$('.zb_list01');
var aZbLi01=$('.zb_list01 li');
var oZbLiLi01=$('.zb_list01_li1');//周边热门
var oZbLi11=$('.zb_list11');
var aZbLi11=$('.zb_list11 li');
var oZbLiLi11=$('.zb_list11_li1');//周边服装
var oZbLi21=$('.zb_list21');
var aZbLi21=$('.zb_list21 li');
var oZbLiLi21=$('.zb_list21_li1');//周边米兔
var oZbLi31=$('.zb_list31');
var aZbLi31=$('.zb_list31 li');
var oZbLiLi31=$('.zb_list31_li1');//周边生活
var oZbLi41=$('.zb_list41');
var aZbLi41=$('.zb_list41 li');
var oZbLiLi41=$('.zb_list41_li1');//周边箱包
  oZbImg.hover(function(){
	  oZbImg.stop().addClass('znyj_act')
	  oZbImg.stop().animate({'top':-5})
	  },function(){
	  oZbImg.removeClass('znyj_act')
	  oZbImg.animate({'top':0})
		  })
  aZbLi01.hover(function(){
	  iNow=$(this).index();
	  aZbLi01.eq(iNow).stop().addClass('znyj_act')
	  aZbLi01.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi01.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi01.eq(iNow).removeClass('znyj_act')
	  aZbLi01.eq(iNow).animate({'top':0})
	  oZbLiLi01.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边热门
		   
	aZbLi11.hover(function(){
	  iNow=$(this).index();
	  aZbLi11.eq(iNow).stop().addClass('znyj_act')
	  aZbLi11.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi11.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi11.eq(iNow).removeClass('znyj_act')
	  aZbLi11.eq(iNow).animate({'top':0})
	  oZbLiLi11.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边服装
  	aZbLi21.hover(function(){
	  iNow=$(this).index();
	  aZbLi21.eq(iNow).stop().addClass('znyj_act')
	  aZbLi21.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi21.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi21.eq(iNow).removeClass('znyj_act')
	  aZbLi21.eq(iNow).animate({'top':0})
	  oZbLiLi21.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边米兔
    aZbLi31.hover(function(){
	  iNow=$(this).index();
	  aZbLi31.eq(iNow).stop().addClass('znyj_act')
	  aZbLi31.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi31.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi31.eq(iNow).removeClass('znyj_act')
	  aZbLi31.eq(iNow).animate({'top':0})
	  oZbLiLi31.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边生活
	aZbLi41.hover(function(){
	  iNow=$(this).index();
	  aZbLi41.eq(iNow).stop().addClass('znyj_act')
	  aZbLi41.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi41.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi41.eq(iNow).removeClass('znyj_act')
	  aZbLi41.eq(iNow).animate({'top':0})
	  oZbLiLi41.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边箱包	  		  
var oZbImg1=$('.zb_img1');
var oZbLi02=$('.zb_list02');
var aZbLi02=$('.zb_list02 li');
var oZbLiLi02=$('.zb_list01_li2');//周边热门
var oZbLi12=$('.zb_list12');
var aZbLi12=$('.zb_list12 li');
var oZbLiLi12=$('.zb_list11_li2');//周边服装
var oZbLi22=$('.zb_list22');
var aZbLi22=$('.zb_list22 li');
var oZbLiLi22=$('.zb_list21_li2');//周边米兔
var oZbLi32=$('.zb_list32');
var aZbLi32=$('.zb_list32 li');
var oZbLiLi32=$('.zb_list31_li2');//周边生活
var oZbLi42=$('.zb_list42');
var aZbLi42=$('.zb_list42 li');
var oZbLiLi42=$('.zb_list41_li2');//周边箱包

var oZbLi02_1=$('.zb_list02_1');
var oZbLi02_2=$('.zb_list02_2');
	oZbImg1.hover(function(){
	  oZbImg1.stop().addClass('znyj_act')
	  oZbImg1.stop().animate({'top':-5})
	  },function(){
	  oZbImg1.removeClass('znyj_act')
	  oZbImg1.animate({'top':0})
		  })
		  
	aZbLi02.hover(function(){
	  iNow=$(this).index();
	  aZbLi02.eq(iNow).stop().addClass('znyj_act')
	  aZbLi02.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi02.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi02.eq(iNow).removeClass('znyj_act')
	  aZbLi02.eq(iNow).animate({'top':0})
	  oZbLiLi02.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边热门
	aZbLi12.hover(function(){
	  iNow=$(this).index();
	  aZbLi12.eq(iNow).stop().addClass('znyj_act')
	  aZbLi12.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi12.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi12.eq(iNow).removeClass('znyj_act')
	  aZbLi12.eq(iNow).animate({'top':0})
	  oZbLiLi12.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边服装  
   aZbLi22.hover(function(){
	  iNow=$(this).index();
	  aZbLi22.eq(iNow).stop().addClass('znyj_act')
	  aZbLi22.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi22.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi22.eq(iNow).removeClass('znyj_act')
	  aZbLi22.eq(iNow).animate({'top':0})
	  oZbLiLi22.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边米兔
	aZbLi32.hover(function(){
	  iNow=$(this).index();
	  aZbLi32.eq(iNow).stop().addClass('znyj_act')
	  aZbLi32.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi32.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi32.eq(iNow).removeClass('znyj_act')
	  aZbLi32.eq(iNow).animate({'top':0})
	  oZbLiLi32.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边生活	  
	aZbLi42.hover(function(){
	  iNow=$(this).index();
	  aZbLi42.eq(iNow).stop().addClass('znyj_act')
	  aZbLi42.eq(iNow).stop().animate({'top':-5})
	  oZbLiLi42.eq(iNow).stop().show().animate({'height':65,'top':225})
	  },function(){
	  aZbLi42.eq(iNow).removeClass('znyj_act')
	  aZbLi42.eq(iNow).animate({'top':0})
	  oZbLiLi42.eq(iNow).stop().hide().animate({'height':0,'top':285})
		  })//周边箱包
		  
	oZbLi02_1.hover(function(){//浏览更多 上面的效果(不变)
	  oZbLi02_1.stop().addClass('znyj_act')
	  oZbLi02_1.stop().animate({'top':-5})
	  },function(){
	  oZbLi02_1.removeClass('znyj_act')
	  oZbLi02_1.animate({'top':0})
		  })	
	oZbLi02_2.hover(function(){//浏览更多 效果(不变)
	  oZbLi02_2.stop().addClass('znyj_act')
	  oZbLi02_2.stop().animate({'top':-5})
	  },function(){
	  oZbLi02_2.removeClass('znyj_act')
	  oZbLi02_2.animate({'top':0})
		  })	
	/*----------周边  over------------*/	
	
	var oZbLi=$('.zb_list');
	var aZbLi=$('.zb_list li');
	var oZbRm=$('.zb_rm');
	var oZbFz=$('.zb_fz');
	var oZbMt=$('.zb_mt');
	var oZbSh=$('.zb_sh');
	var oZbXb=$('.zb_xb');	
	aZbLi.eq(0).addClass('zb_list_act')              
	aZbLi.hover(function(){/*-----鼠标滑过，切换*/
		iNow=$(this).index();
		console.log(iNow)
		aZbLi.eq(0).removeClass('zb_list_act')
		aZbLi.eq(iNow).addClass('zb_list_act')
		},function(){
			aZbLi.removeClass('zb_list_act');
			aZbLi.eq(iNow).addClass('zb_list_act');
			})
	aZbLi.eq(0).mouseover(function(){
		oZbRm.show();
		oZbFz.hide();
		oZbMt.hide();
		oZbSh.hide();
		oZbXb.hide();
		})		
	aZbLi.eq(1).mouseover(function(){
		oZbRm.hide();
		oZbFz.show();
		oZbMt.hide();
		oZbSh.hide();
		oZbXb.hide();
		})	
	aZbLi.eq(2).mouseover(function(){
		oZbRm.hide();
		oZbFz.hide();
		oZbMt.show();
		oZbSh.hide();
		oZbXb.hide();
		})	 						
	aZbLi.eq(3).mouseover(function(){
		oZbRm.hide();
		oZbFz.hide();
		oZbMt.hide();
		oZbSh.show();
		oZbXb.hide();
		})
    aZbLi.eq(4).mouseover(function(){
		oZbRm.hide();
		oZbFz.hide();
		oZbMt.hide();
		oZbSh.hide();
		oZbXb.show();
		})
   /*------------周边 over------------*/

var oRpLi=$('.rpcp_list');
var aRpLi=$('.rpcp_list li');
 aRpLi.hover(function(){
	 iNow=$(this).index();
	 aRpLi.eq(iNow).animate({'top':-9}).addClass('rpcp_act')
	 },function(){
	  aRpLi.eq(iNow).animate({'top':0}).removeClass('rpcp_act');	 
		 })
  /*------------- 热评产品 over --------*/
var oNrLi1=$('.nr_list1');
var aNrLi1=$('.nr_list1 li');
var oNrPo=$('.nr_list1_point');
var aNrPo=$('.nr_list1_point li');
var oNrLe=$('.nr_left');
var oNrRi=$('.nr_right');
var iW=aNrLi1.width();
var iNow=0;
var aNrLen=aNrLi1.size();
oNrLi1.css({'width':iW*aNrLen+400})
aNrPo.eq(0).addClass('nr_list1_poo');

var oNrLi11=$('.nr_list11');
  oNrLi11.hover(function(){
	   oNrLi11.stop().addClass("nr_list1_po").animate({'top':-10});
	   },function(){
		   oNrLi11.stop().removeClass("nr_list1_po").animate({'top':0});
		   })
  aNrPo.click(function(){
	  iNow=$(this).index();
	 fnNr()
	  })
 	  
  oNrLe.click(function(){
	  
	  if(iNow<=1){
		  iNow=1;
		  }
		  iNow--;
	   fnNr()
	  console.log(iNow)
	  })
  oNrRi.click(function(){
	  
	  if(iNow>=3){
		  iNow=3;
		 return;
		  }
	  iNow++
	  fnNr()
	  })
  
  function fnNr(){
	  aNrPo.eq(iNow).addClass('nr_list1_poo').siblings().removeClass('nr_list1_poo');
	  oNrLi1.animate({'left':-iNow*300})
	  }
   /*------ 内容1 over ---------*/

var oNrLi2=$('.nr_list2');
var aNrLi2=$('.nr_list2 li');
var oNrPo1=$('.nr_list1_point1');/*---  point left right 为1 -----*/
var aNrPo1=$('.nr_list1_point1 li');
var oNrLe1=$('.nr_left1');
var oNrRi1=$('.nr_right1');
var iW2=aNrLi2.width();
var iNow2=0;
var aNrLen2=aNrLi2.size();
aNrPo1.eq(0).addClass('nr_list1_poo');

oNrLi2.css({'width':iW2*aNrLen+400})
var oNrLi12=$('.nr_list12');
  oNrLi12.hover(function(){
	   oNrLi12.stop().addClass("nr_list1_po").animate({'top':-10});
	   },function(){
		   oNrLi12.stop().removeClass("nr_list1_po").animate({'top':0});
		   })
  aNrPo1.click(function(){
	  iNow2=$(this).index();
	 fnNr1()
	  })
   
  oNrLe1.click(function(){
	  
	  if(iNow2<=1){
		  iNow2=1;
		  }
		  iNow2--;
	   fnNr1()
	  console.log(iNow2)
	  })
  oNrRi1.click(function(){
	  
	  if(iNow2>=3){
		  iNow2=3;
		 return;
		  }
	  iNow2++
	  fnNr1()
	  })

  function fnNr1(){
	  aNrPo1.eq(iNow2).addClass('nr_list1_poo').siblings().removeClass('nr_list1_poo');
	  oNrLi2.animate({'left':-iNow2*300})
	  }
   /*------ 内容2 over ---------*/

var oNrLi3=$('.nr_list3');
var aNrLi3=$('.nr_list3 li');
var oNrPo2=$('.nr_list1_point2');/*---  point left right 为2 -----*/
var aNrPo2=$('.nr_list1_point2 li');
var oNrLe2=$('.nr_left2');
var oNrRi2=$('.nr_right2');
var iW3=aNrLi3.width();
var iNow3=0;
var aNrLen3=aNrLi3.size();
aNrPo2.eq(0).addClass('nr_list1_poo');

oNrLi3.css({'width':iW3*aNrLen+400})
  var oNrLi13=$('.nr_list13');
  oNrLi13.hover(function(){
	   oNrLi13.stop().addClass("nr_list1_po").animate({'top':-10});
	   },function(){
		   oNrLi13.stop().removeClass("nr_list1_po").animate({'top':0});
		   })
  aNrPo2.click(function(){
	  iNow3=$(this).index();
	 fnNr2()
	  })
   
  oNrLe2.click(function(){
	  
	  if(iNow3<=1){
		  iNow3=1;
		  }
		  iNow3--;
	   fnNr2()
	  console.log(iNow3)
	  })
  oNrRi2.click(function(){
	  
	  if(iNow3>=3){
		  iNow3=3;
		 return;
		  }
	  iNow3++
	  fnNr2()
	  })

  function fnNr2(){
	  aNrPo2.eq(iNow3).addClass('nr_list1_poo').siblings().removeClass('nr_list1_poo');
	  oNrLi3.animate({'left':-iNow3*300})
	  }
   /*------ 内容3 over ---------*/
var oNrLi4=$('.nr_list4');
var aNrLi4=$('.nr_list4 li');
var oNrPo3=$('.nr_list1_point3');/*---  point left right 为2 -----*/
var aNrPo3=$('.nr_list1_point3 li');
var oNrLe3=$('.nr_left3');
var oNrRi3=$('.nr_right3');
var iW4=aNrLi4.width();
var iNow4=0;
var aNrLen4=aNrLi4.size();
aNrPo3.eq(0).addClass('nr_list1_poo');
oNrLi4.css({'width':iW4*aNrLen+400})
var oNrLi14=$('.nr_list14');
  oNrLi14.hover(function(){
	   oNrLi14.stop().addClass("nr_list1_po").animate({'top':-10});
	   },function(){
		   oNrLi14.stop().removeClass("nr_list1_po").animate({'top':0});
		   })
  aNrPo3.click(function(){
	  iNow4=$(this).index();
	 fnNr3()
	  })
   
  oNrLe3.click(function(){
	  
	  if(iNow4<=1){
		  iNow4=1;
		  }
		  iNow4--;
	   fnNr3()
	  console.log(iNow4)
	  })
  oNrRi3.click(function(){
	  
	  if(iNow4>=3){
		  iNow4=3;
		 return;
		  }
	  iNow4++
	  fnNr3()
	  })

  function fnNr3(){
	  aNrPo3.eq(iNow4).addClass('nr_list1_poo').siblings().removeClass('nr_list1_poo');
	  oNrLi4.animate({'left':-iNow4*300})
	  }
   /*------ 内容4 over ---------*/

var oSpLi=$('.sp_list');
var aSpLi=$('.sp_list li');
var iNow=0;
  aSpLi.hover(function(){
	  iNow=$(this).index();
	  console.log(iNow)
	  aSpLi.eq(iNow).animate({'top':-10}).addClass('sp_list_sjj');
	  },function(){
	  aSpLi.eq(iNow).animate({'top':0}).removeClass('sp_list_sjj');	  
		  })
  /*------视频 over----*/
var oTop1=$('#top1');//返回顶部
oTop1.hide();
$(window).scroll(function() {
var $t = $(this).scrollTop();

if($t>800){
	oTop1.fadeIn()
	}else{
	oTop1.fadeOut()	
		}
})
 oTop1.click(function(){
	 $("body,html").animate({'scrollTop':0}) 
	 })
	 
	   
  
var aFoLia=$('.footer1_list_li1 a');
var aFoLi=$('.footer1_list_li1 img');
    aFoLi.eq(0).show()
    aFoLia.hover(function(){
		aFoLi.eq(1).show()
		aFoLi.eq(0).hide()
		},function(){
		aFoLi.eq(0).show()
		aFoLi.eq(1).hide()
			})
var aFoLia2=$('.footer1_list_li2 a');
var aFoLi2=$('.footer1_list_li2 img');
    aFoLi2.eq(0).show()
    aFoLia2.hover(function(){
		aFoLi2.eq(1).show()
		aFoLi2.eq(0).hide()
		},function(){
		aFoLi2.eq(0).show()
		aFoLi2.eq(1).hide()
			})
var aFoLia3=$('.footer1_list_li3 a');
var aFoLi3=$('.footer1_list_li3 img');
    aFoLi3.eq(0).show()
    aFoLia3.hover(function(){
		aFoLi3.eq(1).show()
		aFoLi3.eq(0).hide()
		},function(){
		aFoLi3.eq(0).show()
		aFoLi3.eq(1).hide()
			})
var aFoLia4=$('.footer1_list_li4 a');
var aFoLi4=$('.footer1_list_li4 img');
    aFoLi4.eq(0).show()
    aFoLia4.hover(function(){
		aFoLi4.eq(1).show()
		aFoLi4.eq(0).hide()
		},function(){
		aFoLi4.eq(0).show()
		aFoLi4.eq(1).hide()
			})
var aFoLia5=$('.footer1_list_li5 a');
var aFoLi5=$('.footer1_list_li5 img');
    aFoLi5.eq(0).show()
    aFoLia5.hover(function(){
		aFoLi5.eq(1).show()
		aFoLi5.eq(0).hide()
		},function(){
		aFoLi5.eq(0).show()
		aFoLi5.eq(1).hide()
			})
/*-------------footer over---------------------*/


