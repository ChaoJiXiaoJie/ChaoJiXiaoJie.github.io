/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(document).ready(function(){
    $(".qq").click(function(){
        if($("#showImgP")[0]){
            $("#showImgP").remove();
        }
        var height = ($(window).height()-518)/2>0?($(window).height()-518)/2:0;
        var width = ($(window).width()-378)/2>0?($(window).width()-378)/2:0;
        var boarddiv = "<div id='showImgP' style='background:rgba(196,18,54,0.4);width:100%;height:100%;z-index:999;position:fixed;top:0;'><img id='showImg' src='img/qqlink.jpg' style='width: 378px;height: 518px;position: fixed;padding: "+height+"px "+width+"px;'></div>";
        $(document.body).append(boarddiv);
        $("#showImgP").click(function(){
            $("#showImgP").hide();
        });
    });
    $(".weChat").click(function(){
        if($("#showImgPwe")[0]){
            $("#showImgPwe").remove();
        }
        var height = ($(window).height()-512)/2>0?($(window).height()-512)/2:0;
        var width = ($(window).width()-512)/2>0?($(window).width()-512)/2:0;
        var boarddiv = "<div id='showImgPwe' style='background:rgba(196,18,54,0.4);width:100%;height:100%;z-index:998;position:fixed;top:0;'><img id='showImgwe' src='img/WeChatLink.png' style='width: 512px;height: 512px;position: fixed;padding: "+height+"px "+width+"px;'></div>";
        $(document.body).append(boarddiv);
        $("#showImgPwe").click(function(){
            $("#showImgPwe").hide();
        });
    });
});