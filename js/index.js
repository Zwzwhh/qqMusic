/********�赥�Ƽ�*******/
(()=>{
//	var as=$(".circles>a");//СԲ�����
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
$(".circles>a").click(function(){//СԲ��󶨵����¼�
    var $slider=$(".mod-play>li");//liͼƬ����{������}
    var href=$(this).attr("href").slice(1); //��ǰ���ֵ��href ����li��ID
    var id='#'+href;// ��ǰ���������id
//	console.log(id);
    $slider.removeClass("show");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ
    $slider.addClass("hide");	// liͼƬ����{������} ȫ�����������ʽ
    $(id).attr("class","show");//��ǰ���������id��Ӧ��li����class��Ϊ��ʾ
    $(".circles>a").css("background-color","#e6e6e6");//���е�СԲ���Ϊǳɫ
    $(this).css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
    index=href;//��ǰ���ֵ��href ����li��ID ���Ƹ��±�
});
var index=1;//�±��ʼֵΪ1
function task(){
    var $slider=$(".mod-play>li");//������� liͼƬ����{������}
    $slider.removeClass("show");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ
    $slider.addClass("hide");	// liͼƬ����{������} ȫ�����������ʽ
    index++;    //�±�����
    if(index>4){index=1}//���±����4ʱ ���ָ�Ϊ1 
    var id="#"+index; //���嵱ǰ����idֵ
    $(id).attr("class","show"); //��ǰid��Ӧ��li����class��Ϊ��ʾ
    $(".circles>a").css("background-color","#e6e6e6");//���е�СԲ��Ϊ��ɫ
    $(".circles>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
}
var timer=setInterval(task,2000);//���������ʱ��
$(".leftIcon").click(function(){//���ͷ�󶨵����¼�
//	$ul.stop(true);
//	e.preventDefault();
    var $slider=$(".mod-play>li");////������� ����liͼƬ����{������}
    $slider.removeClass("show").addClass("hide");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ ȫ�����������ʽ
    index--;//�±��Լ�
    index<1&&(index=4);//�±�С��1ʱ�ָ�Ϊ4
    var id="#"+index;//���嵱ǰ����idֵ
    $(id).attr("class","show");//��ǰid��Ӧ��li����class��Ϊ��ʾ
    $(".circles>a").css("background-color","#e6e6e6");//���е�СԲ��Ϊ��ɫ
    $(".circles>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
});
$(".rightIcon").click(function(){//Ϊ�Ҽ�ͷ�󶨵����¼�
    var $slider=$(".mod-play>li");////������� ����liͼƬ����{������}
    $slider.removeClass("show").addClass("hide");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ ȫ�����������ʽ
    index++;//�±��Լ�
    index>4&&(index=1);//�±����4ʱ�ָ�Ϊ1
    var id="#"+index;//���嵱ǰ����idֵ
    $(id).attr("class","show");//��ǰid��Ӧ��li����class��Ϊ��ʾ
    $(".circles>a").css("background-color","#e6e6e6");//���е�СԲ��Ϊ��ɫ
    $(".circles>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ

});
function stop(){
    clearInterval(timer);//�����ʱ��
    timer=null;
}
function start(){
    timer=setInterval(task,2000);//������ʱ��
}
$(".recommend-inner span").bind("mousemove",stop);//���Ҽ�ͷ�����ʱ��
$(".recommend-inner span").bind("mouseout",start);//���Ҽ�ͷ������ʱ��
$(".circles>a").bind("mousemove",stop);//���Ҽ�ͷ�����ʱ��
$(".circles>a").bind("mouseout",start);//���Ҽ�ͷ������ʱ��
//��������Ƴ��¼�
$(".mod-play dt a img").mouseout(function(){//����Ƴ� 

});
$(".mod-play dt a img").mouseover(function(){//�������

});
})();

/***************************�����Ƽ�*******************************/
//(()=>{
////	var as=$(".circles2>a");//СԲ�����
////	for(var i=0;i<as.length;i++){
////		as[i].addEventListener("click",function(e){
////			e.preventDefault();
////		});
////	}
//	$(".circles2>a").click(function(){//СԲ��󶨵����¼�
//		var $slider=$(".menu_recommend_inner ul");//liͼƬ����{������}
//		var href=$(this).attr("href").slice(1); //��ǰ���ֵ��href ����li��ID
//		var id='#'+href;// ��ǰ���������id
//		console.log(id);
//		$slider.removeClass("show");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ
//		$slider.addClass("hide");	// liͼƬ����{������} ȫ�����������ʽ
//		$(id).attr("class","carousel show");//��ǰ���������id��Ӧ��li����class��Ϊ��ʾ
//		$(".circles2>a").css("background-color","#e6e6e6");//���е�СԲ���Ϊǳɫ
//		$(this).css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
//		index=href;//��ǰ���ֵ��href ����li��ID ���Ƹ��±�
//	});
//	var index=1;//�±��ʼֵΪ1
//	function task(){
//		var $slider=$(".menu_recommend_inner ul");//������� liͼƬ����{������}
//		$slider.removeClass("show");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ
//		$slider.addClass("hide");	// liͼƬ����{������} ȫ�����������ʽ
//		index++;    //�±�����
//		if(index>4){index=1}//���±����4ʱ ���ָ�Ϊ1 
//		var id="#"+index; //���嵱ǰ����idֵ
//		$(id).attr("class","carousel show"); //��ǰid��Ӧ��li����class��Ϊ��ʾ
//		$(".circles2>a").css("background-color","#e6e6e6");//���е�СԲ��Ϊ��ɫ
//		$(".circles2>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
//	}
//	var timer=setInterval(task,2000);//���������ʱ��
//	$(".leftIcon2").click(function(){//���ͷ�󶨵����¼�
//		var $slider=$(".menu_recommend_inner ul");////������� ����liͼƬ����{������}
//		$slider.removeClass("show").addClass("hide");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ ȫ�����������ʽ
//		index--;//�±��Լ�
//		index<1&&(index=4);//�±�С��1ʱ�ָ�Ϊ4
//		var id="#"+index;//���嵱ǰ����idֵ
//		$(id).attr("class","carousel show");//��ǰid��Ӧ��li����class��Ϊ��ʾ
//		$(".circles2>a").css("background-color","#e6e6e6");//���е�СԲ��Ϊ��ɫ
//		$(".circles2>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
//	});
//	$(".rightIcon2").click(function(){//Ϊ�Ҽ�ͷ�󶨵����¼�
//		var $slider=$(".menu_recommend_inner ul");////������� ����liͼƬ����{������}
//		$slider.removeClass("show").addClass("hide");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ ȫ�����������ʽ
//		index++;//�±��Լ�
//		index>4&&(index=1);//�±����4ʱ�ָ�Ϊ1
//		var id="#"+index;//���嵱ǰ����idֵ
//		$(id).attr("class","carousel show");//��ǰid��Ӧ��li����class��Ϊ��ʾ
//		$(".circles2>a").css("background-color","#e6e6e6");//���е�СԲ��Ϊ��ɫ
//		$(".circles2>a:eq("+(index-1)+")").css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
//
//	});
//	function stop1(){
//		clearInterval(timer);//�����ʱ��
//		timer=null;
//	}
//	function start1(){
//		timer=setInterval(task,2000);//������ʱ��
//	}
//	$(".menu_recommend_inner span").bind("mousemove",stop1);//���Ҽ�ͷ�����ʱ��
//	$(".menu_recommend_inner span").bind("mouseout",start1);//���Ҽ�ͷ������ʱ��
//	$(".circles2>a").bind("mousemove",stop1);//���Ҽ�ͷ�����ʱ��
//	$(".circles2>a").bind("mouseout",start1);//���Ҽ�ͷ������ʱ��
//	//��������Ƴ��¼�
//	$(".").mouseout(function(){//����Ƴ� 
//
//	});
//	$(".").mouseover(function(){//�������
//
//	});
//})();
