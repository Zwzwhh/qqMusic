/********歌单推荐*******/
(()=>{
//	var as=$(".circles>a");//小圆点遍历
//for(var i=0;i<as.length;i++){
//    as[i].addEventListener("click",function(e){
//        e.preventDefault();
//    });
//}
$(".qqImg1").mouseover(function(){
		$("#qqImg").removeClass("qqImg");
		$("#qqImg").addClass("qqImg2");

	});
	$(".qqImg1").mouseleave(function(){
		$("#qqImg").removeClass("qqImg2");
		$("#qqImg").addClass("qqImg");

	});
$(".circles>a").click(function(){//小圆点绑定单击事件
    var $slider=$(".mod-play>li");//li图片部分{含文字}
    var href=$(this).attr("href").slice(1); //当前点击值的href 链接li的ID
    var id='#'+href;// 当前点击完整的id
//	console.log(id);
    $slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
    $slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
    $(id).attr("class","show");//当前点击完整的id对应的li部分class改为显示
    $(".circles>a").css("background-color","#e6e6e6");//所有的小圆点变为浅色
    $(this).css("background-color","#B2B2B2");//当前的小圆点变为深色
    index=href;//当前点击值的href 链接li的ID 复制给下标
});
var index=1;//下标初始值为1
function task(){
    var $slider=$(".mod-play>li");//定义变量 li图片部分{含文字}
    $slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
    $slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
    index++;    //下标自增
    if(index>4){index=1}//当下标大于4时 ，恢复为1 
    var id="#"+index; //定义当前变量id值
    $(id).attr("class","show"); //当前id对应的li部分class改为显示
    $(".circles>a").css("background-color","#e6e6e6");//所有的小圆点为深色
    $(".circles>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//当前的小圆点变为白色
}
var timer=setInterval(task,2000);//定义变量定时器
$(".leftIcon").click(function(){//左箭头绑定单击事件
//	$ul.stop(true);
//	e.preventDefault();
    var $slider=$(".mod-play>li");////定义变量 所有li图片部分{含文字}
    $slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
    index--;//下标自减
    index<1&&(index=4);//下标小于1时恢复为4
    var id="#"+index;//定义当前变量id值
    $(id).attr("class","show");//当前id对应的li部分class改为显示
    $(".circles>a").css("background-color","#e6e6e6");//所有的小圆点为深色
    $(".circles>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//当前的小圆点变为白色
});
$(".rightIcon").click(function(){//为右箭头绑定单击事件
    var $slider=$(".mod-play>li");////定义变量 所有li图片部分{含文字}
    $slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
    index++;//下标自减
    index>4&&(index=1);//下标大于4时恢复为1
    var id="#"+index;//定义当前变量id值
    $(id).attr("class","show");//当前id对应的li部分class改为显示
    $(".circles>a").css("background-color","#e6e6e6");//所有的小圆点为深色
    $(".circles>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//当前的小圆点变为白色

});
function stop(){
    clearInterval(timer);//清除定时器
    timer=null;
}
function start(){
    timer=setInterval(task,2000);//启动定时器
}
$(".recommend-inner span").bind("mousemove",stop);//左右箭头清除定时器
$(".recommend-inner span").bind("mouseout",start);//左右箭头启动定时器
$(".circles>a").bind("mousemove",stop);//左右箭头清除定时器
$(".circles>a").bind("mouseout",start);//左右箭头启动定时器
//鼠标移入移出事件
$(".mod-play dt a img").mouseout(function(){//鼠标移出 

});
$(".mod-play dt a img").mouseover(function(){//鼠标移入

});
})();

/***************************精彩推荐*******************************/
//(()=>{
////	var as=$(".circles2>a");//小圆点遍历
////	for(var i=0;i<as.length;i++){
////		as[i].addEventListener("click",function(e){
////			e.preventDefault();
////		});
////	}
//	$(".circles2>a").click(function(){//小圆点绑定单击事件
//		var $slider=$(".menu_recommend_inner ul");//li图片部分{含文字}
//		var href=$(this).attr("href").slice(1); //当前点击值的href 链接li的ID
//		var id='#'+href;// 当前点击完整的id
//		console.log(id);
//		$slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
//		$slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
//		$(id).attr("class","carousel show");//当前点击完整的id对应的li部分class改为显示
//		$(".circles2>a").css("background-color","#e6e6e6");//所有的小圆点变为浅色
//		$(this).css("background-color","#B2B2B2");//当前的小圆点变为深色
//		index=href;//当前点击值的href 链接li的ID 复制给下标
//	});
//	var index=1;//下标初始值为1
//	function task(){
//		var $slider=$(".menu_recommend_inner ul");//定义变量 li图片部分{含文字}
//		$slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
//		$slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
//		index++;    //下标自增
//		if(index>4){index=1}//当下标大于4时 ，恢复为1 
//		var id="#"+index; //定义当前变量id值
//		$(id).attr("class","carousel show"); //当前id对应的li部分class改为显示
//		$(".circles2>a").css("background-color","#e6e6e6");//所有的小圆点为深色
//		$(".circles2>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//当前的小圆点变为白色
//	}
//	var timer=setInterval(task,2000);//定义变量定时器
//	$(".leftIcon2").click(function(){//左箭头绑定单击事件
//		var $slider=$(".menu_recommend_inner ul");////定义变量 所有li图片部分{含文字}
//		$slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
//		index--;//下标自减
//		index<1&&(index=4);//下标小于1时恢复为4
//		var id="#"+index;//定义当前变量id值
//		$(id).attr("class","carousel show");//当前id对应的li部分class改为显示
//		$(".circles2>a").css("background-color","#e6e6e6");//所有的小圆点为深色
//		$(".circles2>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//当前的小圆点变为白色
//	});
//	$(".rightIcon2").click(function(){//为右箭头绑定单击事件
//		var $slider=$(".menu_recommend_inner ul");////定义变量 所有li图片部分{含文字}
//		$slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
//		index++;//下标自减
//		index>4&&(index=1);//下标大于4时恢复为1
//		var id="#"+index;//定义当前变量id值
//		$(id).attr("class","carousel show");//当前id对应的li部分class改为显示
//		$(".circles2>a").css("background-color","#e6e6e6");//所有的小圆点为深色
//		$(".circles2>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//当前的小圆点变为白色
//
//	});
//	function stop1(){
//		clearInterval(timer);//清除定时器
//		timer=null;
//	}
//	function start1(){
//		timer=setInterval(task,2000);//启动定时器
//	}
//	$(".menu_recommend_inner span").bind("mousemove",stop1);//左右箭头清除定时器
//	$(".menu_recommend_inner span").bind("mouseout",start1);//左右箭头启动定时器
//	$(".circles2>a").bind("mousemove",stop1);//左右箭头清除定时器
//	$(".circles2>a").bind("mouseout",start1);//左右箭头启动定时器
//	//鼠标移入移出事件
//	$(".").mouseout(function(){//鼠标移出 
//
//	});
//	$(".").mouseover(function(){//鼠标移入
//
//	});
//})();
