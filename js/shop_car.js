// JavaScript Document
var oShCar=$('.shop_car_logo');
var oShCar_=$('.shop_car_logo_');
var aShCar=$('.shop_car_logo_ a');
	aShCar.eq(0).show().siblings().hide()
	oShCar.hover(function(){
		aShCar.eq(1).show().fadeIn();
		},function(){
			aShCar.eq(1).hide().fadeOut();
			})





























