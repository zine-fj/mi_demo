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