/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(document).ready(function(){
    $(".qq").click(function(){
        if(!$("#showImgP")[0]){
            var height = ($(window).height()-518)/2;
            var width = ($(window).width()-378)/2;
            // alert(height);
            // alert(width);
            var boarddiv = "<div id='showImgP' style='background:rgba(196,18,54,0.4);width:100%;height:100%;z-index:998;position:fixed;top:0;'><img id='showImg' src='img/qqlink.jpg' style='width: 378px;height: 518px;position: fixed;padding: "+height+"px "+width+"px;'></div>";
            $(document.body).append(boarddiv);
            $("#showImgP").click(function(){
                $("#showImgP").hide();
            });
        }else{
            $("#showImgP").show();
        };
    });
});