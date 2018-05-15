/**
 * Created by Administrator on 2016/4/8.
 */
var cookie={
	 getCookie:function(name){//name 你调用的时候传进去的参数

    var value = "";//你要获取到的一个值

    var str = document.cookie;
    var arr1 = str.split("; ");
    //console.log(arr1);

    for(var i=0;i<arr1.length;i++){
        console.log(arr1[i]);
        var arr2 = arr1[i].split("=");
        console.log(arr2);
        if(arr2[0]==name){
            value=arr2[1]
        }

    }

    return value;
    //最后把获取到的值返回出去
},


setCookie:function (name,value,day){
    //name 要设置cookie的name
    //value 要设置cookie的value
    console.log(day);//几天以后过期

    var last = "";/*初始不设置过期时间*/
    if(day){/*如果 要设置过期时间*/
        var  data = new Date();
        data.setDate(data.getDate()+day);
        last = ";expires="+data;/*设置过期时间*/
    }

    //var date = new Date();
    //date.setDate(date.getDate()-1);
    document.cookie=""+name+"="+value+last;
},


deleteCookie:function (name){
    var date = new Date();
    date.setDate(date.getDate()-1);
    document.cookie=""+name+"= ;expires="+date;
}

}




/*
var cookie={
    getCookie:function(name) {//name 你调用的时候传进去的参数

        var value = "";//你要获取到的一个值

        var str = document.cookie;
        var arr1 = str.split("; ");
        //console.log(arr1);

        for (var i = 0; i < arr1.length; i++) {
            console.log(arr1[i]);
            var arr2 = arr1[i].split("=");
            console.log(arr2);
            if (arr2[0] == name) {
                value = arr2[1]
            }

        }
    }
};*/
