
/********�¸��׷��ֲ�*******/
var as=$("#slider-bottom>a");//小圆点遍历
for(var i=0;i<as.length;i++){
    as[i].addEventListener("click",function(e){
        e.preventDefault();
    });
}
$("#slider-bottom>a").click(function(){//小圆点绑定单击事件
    var $slider=$("#slider>li");//li图片部分{含文字}
    var href=$(this).attr("href").slice(1); //当前点击值的href 链接li的ID
    var id='#'+href;// 当前点击完整的id
    $slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
    $slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
    $(id).attr("class","show");//当前点击完整的id对应的li部分class改为显示
    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点变为深颜色
    $(this).css("background","#fff");//当前的小圆点变为白色
    index=href;//当前点击值的href 链接li的ID 复制给下标
});
var index=1;//下标初始值为1
function task(){
    var $slider=$("#slider>li");//定义变量 li图片部分{含文字}
    $slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
    $slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
    index++;    //下标自增
    if(index>4){index=1}//当下标大于4时 ，恢复为1 
    var id="#"+index; //定义当前变量id值
    $(id).attr("class","show"); //当前id对应的li部分class改为显示
    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点为深色
    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//当前的小圆点变为白色
}
var timer=setInterval(task,4000);//定义变量定时器
$("span.left").click(function(){//左箭头绑定单击事件
    var $slider=$("#slider>li");////定义变量 所有li图片部分{含文字}
    $slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
    index--;//下标自减
    index<1&&(index=4);//下标小于1时恢复为4
    var id="#"+index;//定义当前变量id值
    $(id).attr("class","show");//当前id对应的li部分class改为显示
    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点为深色
    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//当前的小圆点变为白色
});
$("span.right").click(function(){//为右箭头绑定单击事件
    var $slider=$("#slider>li");////定义变量 所有li图片部分{含文字}
    $slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
    index++;//下标自减
    index>4&&(index=1);//下标大于4时恢复为1
    var id="#"+index;//定义当前变量id值
    $(id).attr("class","show");//当前id对应的li部分class改为显示
    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点为深色
    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//当前的小圆点变为白色

});
function stop(){
    clearInterval(timer);//清除定时器
    timer=null;
}
function start(){
    timer=setInterval(task,4000);//启动定时器
}
$("#new-songs span").bind("mousemove",stop);//左右箭头清除定时器
$("#new-songs span").bind("mouseout",start);//左右箭头启动定时器
$("#slider-bottom>a").bind("mousemove",stop);//左右箭头清除定时器
$("#slider-bottom>a").bind("mouseout",start);//左右箭头启动定时器

/********精彩推荐轮播********/

var $a=$(".buttons a");
var $s=$(".buttons span");
var cla=["s7","s6","s5","s4","s3","s2","s1"];
var n=0;
function nextimg(){
    /****ͷβ����****/
    cla.push(cla[0]);
    cla.shift();
    $("#recommend .parent li").each(function(i,e){
        $(e).removeClass().addClass(cla[i]);
    });
    n++;
    n>6&&(n=0);
    show();
}
function previmg(){
    cla.unshift(cla[6]);
    cla.pop();
    $("#recommend .parent li").each(function(i,e){
        $(e).removeClass().addClass(cla[i]);
    });
    n--;
    n<0&&(n=7);
    show();
}
$(".right-jt").click(function(){nextimg();});
$(".left-jt").click(function(){previmg();});
/*********�ı���°�ť��ɫ********/
function show(){
    $($s).eq(n).removeClass("focus");
    $($s).eq(n).addClass("focus")
        .parent().siblings().children().removeClass("focus");
}
for(var i=0;i<$a.length;i++){
    $a[i].addEventListener("click",function(e){
        e.preventDefault();
    })
}
$a.each(function(){
    $(this).click(function(){
        var thisIndex=$(this).index();
        var s=thisIndex-n;
        if(s==0){
            return null;
        }
        else if(s>0){
            var newarr=cla.splice(0,s);
            cla=$.merge(cla,newarr);
            $("#recommend .parent li").each(function(i,e){
                $(e).removeClass().addClass(cla[i]);
            });
            n=thisIndex;
            show();
        }
        else if(s<0){
            cla.reverse();
            var oldarr=cla.splice(0,-s);
            cla=$.merge(cla,oldarr);
            cla.reverse();
            $("#recommend .parent li").each(function(i,e){
                $(e).removeClass().addClass(cla[i]);
            });
            n=thisIndex;
            show();
        }
    });
});
var timer=setInterval(nextimg,4000);
function start2(){
    timer=setInterval(nextimg,4000);
}
$a.bind("mouseover",stop);
$a.bind("mouseout",start2);
$("#recommend>span").bind("mouseover",stop);
$("#recommend>span").bind("mouseout",start2);

/*******���Ҽ�ͷ********/
$("#recommend").mouseout(function(){//鼠标移出透明度为0 
    $("#recommend>span").css("opacity","0");
});
$("#recommend").mouseover(function(){//鼠标移入透明度为1
    $("#recommend>span").css("opacity","1");
});

/*固定栏*/
var Top=document.querySelector("ul#fixed>li:first-child");
window.onscroll= function(){
    if(document.body.scrollTop>500)
        Top.className="";
    else
       Top.className="none";
    /**********���Ÿ���ɢ���ſ�***********/
    if(document.body.scrollTop>2200){
        $(".class1").animate({top:150,left:0},2000);
        $(".class2").animate({top:150,left:310},2000);
        $(".class3").animate({top:150,left:620},2000);
        $(".class4").animate({top:150,left:930},2000);
        $(".class5").animate({top:680,left:0},2000);
        $(".class6").animate({top:680,left:310},2000);
        $(".class7").animate({top:680,left:620},2000);
        $(".class8").animate({top:680,left:930},2000);
    }
};