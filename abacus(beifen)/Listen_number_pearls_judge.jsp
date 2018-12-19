<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page language="java" import="com.lattice.entity.*" %>
<%@ page language="java" import="com.lattice.dao.*,java.util.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>听数译珠（判断题）</title>
    <style>
        .box{
            width: 1000px;
            margin: 30px auto;
            position: relative;
            height: 400px;
            /*border: 1px solid #5e5e5e;*/
            /*border-radius: 5px;*/
        }
        .boxBeam{
            height: 170px;
            width: 386px;
            border: 2px solid #000;
            border-radius: 5px;
            position: relative;
            margin: 0px auto;
        }
        .clearfix:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .clearfix {
            *zoom: 1;
        }
        .beam{
            border: 0px;height: 100%;position: absolute;top:-8px;background-color: #000;width: 4px
        }
        .beadBox{
            width: 30px;height: 100%;position: absolute;top: 0px;
        }
        .bead{
            width: 28px; height: 16px;border: 1px solid #000;border-radius: 100px;position: absolute;background-color: #0ad845
        }
        .titleBox{
            width: 100%;
            position: absolute;
            bottom: 0px;
            height: 120px;
        }
        .btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #fff;
            background-color: #337ab7;
            border-color: #2e6da4;
        }
        input{
            width: 100%;
            height: 28px;
            line-height: 28px;
            border-radius: 5px;
        }
        .step1{
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
        }
        .step2{
            display: none;
        }
        .step3{
            width: 100%;
            height: 100%;
            display: none;
            position: absolute;
            top: 0px;
            /*background-color: #00b0f0;*/
        }
        .level{
            display: inline-block;
            width: 60px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            margin: 16px 20px;
            font-size: 38px;
            font-weight: 800;
            border: 1px solid #eee;
            cursor: pointer;
        }
        .active{
            border: 1px solid #00b0f0;
        }
        #gx{
            opacity: 0;
        }
        .levelBox{

            text-align: center;
        }
    </style>
    <SCRIPT src="/lattice/js/Statistics/Statistics.js" type=text/javascript></SCRIPT>
    <script src="/lattice/js/oneui/opes_post_result_util.js"></script>
</head>
<%
Users u=(Users)request.getSession().getAttribute("cu");
int uid=u.getUserid();
int taskid=Integer.parseInt(request.getParameter("taskid"));
String lan=request.getParameter("lan");
String targetpagename=request.getParameter("targetpagename");

int projectid=0;
if (!(request.getParameter("projectid")==null)) {
projectid=Integer.parseInt(request.getParameter("projectid"));
}

int codematerial=0;
if (!(request.getParameter("codematerial")==null)) {
codematerial=Integer.parseInt(request.getParameter("codematerial"));
}

int sumitcoids=u.getCoid();


Vector
<OPES_Task> ots=OPES_TaskDAO.getOPES_aTask(Integer.parseInt(request.getParameter("taskid")),lan);
    if (ots.size()==0)
    {
    response.sendRedirect("/lattice/"+targetpagename);
    return;
    }
    ots.get(0).setProjectid(Integer.parseInt(request.getParameter("projectid")));
    request.getSession().setAttribute("ot",ots.get(0));

    %>
<body>
<div class="box">
    <div id="step1" class="step1">
        <h3>听数译珠练习，请选择一个位数练习</h3>
        <div>在规定时间内看清算盘代表的数字（题目显示时间为一秒）并结合听到的数字选择是否正确</div>
        <div id="levelBox" class="levelBox">
            <span class="level active">2</span>
            <span class="level">3</span>
            <span class="level">4</span>
            <span class="level">5</span>
            <span class="level">6</span>
            <span class="level">7</span>
            <span class="level">8</span>
            <span class="level">9</span>
        </div>
        <div>
            <button style="margin-top: 170px" class="btn" id="btn">开始练习</button>
        </div>
    </div>

    <div id="step2" class="step2">
        <div id="fayin"></div>
        <h1 style="text-align: center;opacity: 0;">第<span id="stage"></span>阶段</h1>
        <h2 style="text-align: center">请判断下图与听到的数字大小是否一致</h2>

        <div id="pa_1" class="boxBeam">
            <hr style="border: 0px;height: 16px;position: absolute;top: 40px;background-color: #000;width: 100%">


            <div style="position: absolute;height: 16px;color: #fff;top: 47px;font-size: 10px;line-height: 16px;width: 100%;z-index: 999999;">
                <div style="position: absolute;right: 20px">个</div>
                <div style="position: absolute;right: 62px">十</div>
                <div style="position: absolute;right: 104px">百</div>
                <div style="position: absolute;right: 146px">千</div>
                <div style="position: absolute;right: 188px">万</div>
                <div style="position: absolute;right: 225px">十万</div>
                <div style="position: absolute;right: 267px">百万</div>
                <div style="position: absolute;right: 309px">千万</div>
                <div style="position: absolute;right: 356px">亿</div>
            </div>

            <hr class="beam ge" style="right: 24px">
            <hr class="beam shi" style="right: 66px;">
            <hr class="beam bai" style="right: 108px;">
            <hr class="beam qian" style="right: 150px;">
            <hr class="beam wan" style="right: 192px;">
            <hr class="beam shiwan" style="right: 234px;">
            <hr class="beam baiwan" style="right: 276px;">
            <hr class="beam qianwan" style="right: 318px;">
            <hr class="beam yi" style="right: 360px;">


            <div id="pa_1_1" class="beadBox" style="right: 10px;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_2" class="beadBox" style="right: 52px ;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_3" class="beadBox" style="right: 94px ;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_4" class="beadBox" style="right: 136px ;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_5" class="beadBox" style="right: 178px;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_6" class="beadBox" style="right: 220px;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_7" class="beadBox" style="right: 262px;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_8" class="beadBox" style="right: 304px;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>

            <div id="pa_1_9" class="beadBox" style="right: 346px;">
                <div class="bead" style="top: 0px;"></div>

                <div class="bead" style="bottom: 54px;"></div>
                <div class="bead" style="bottom: 36px;"></div>
                <div class="bead" style="bottom: 18px;"></div>
                <div class="bead" style="bottom: 0px;"></div>
            </div>
        </div>


        <div class="titleBox">
            <div style="width: 42%;margin: 0px auto">
                <div class="clearfix" style="width: 100%">
                    <div style="float: left;font-size: 38px;font-weight: 700;line-height: 100px">Q(是)</div>
                    <div style="float: right;font-size: 38px;font-weight: 700;line-height: 100px">P(否)</div>
                </div>
                <!--<div style="text-align: center">
                    <button class="btn" id="btn2">提交</button>
                </div>
                <div style="text-align: center"><span>(可以按enter /回车键)</span></div>-->
            </div>
        </div>
    </div>
    <div id="step3" class="step3">
        <h1 style="text-align: center;margin: 0px;opacity: 0;" id="gx">恭喜过关,进入下一阶段练习</h1>


        <div style="width: 80%;padding: 12px;text-align: center;margin: 0px auto">



            <div id="dc" class="dc" style="font-size: 30px;font-weight: 700;padding: 16px"></div>
            <div class="dc" style="font-size: 30px;font-weight: 700;padding: 16px">本题用时<span id="time"></span>秒</div>


            <div style="margin:162px;">
                <button class="btn" id="next">下一题(空格键)</button>

            </div>
        </div>
    </div>

</div>

</body>
<script src="jquery.js"></script>
<!--<script src="Listen_number_pearls_judge.js"></script>-->
<script>
    $(function () {

        var level="2";
        var num;
        var daan;
        var mix=[0,1,2,3,4,5,6,7,8,9];
        var max=[2,3,4,5,6,7,8];
        var beginTime;
        var endTime;
        var speed="5";
        var time;
        var gx=false;
        var ent=false;
        var spacer=false;
        var arr = ["Q", "P","Q", "Q", "P","Q", "P","Q", "P", "P"];
        arr.sort(randomsort);
        /*题目显示的时间长度（单位秒）*/
        var timer=10;
        var cuoNum;
        var cuo=[1,-2,2,-1];
        var stage=1;
        var timeset=[];
        var radioset=[];
        var stimidset=[];
        var type4set=[];
        var commentset=[];
        var arrT=[];
        var a=0;
        $("#levelBox").on("click",".level",function(event){
            var target = $(event.target);
            $("#levelBox .level").removeClass("active");
            target.addClass("active");
            level=target.text();
        });

        $("#btn").on("click",function () {
            a++;
            stimidset.push(a);
            $("#stage").text(stage);
            for(var i=0;i<level;i++){
                if(i==0){
                    num=(max[Math.floor(Math.random()*max.length)]).toString()
                }else {
                    num += (mix[Math.floor(Math.random()*mix.length)]).toString()
                }
            };
            cuoNum=(parseInt(num)+cuo[Math.floor(Math.random()*cuo.length)]).toString();
            fayin(num,speed);
            arrT.push(num);
            if(arr[a] == "Q"){
                beadFun(1,num);
                arrT.push(num);
            }else {
                beadFun(1,cuoNum);
                arrT.push(cuoNum);
            }


            $("#step1").css({
                "display": "none"
            });
            $("#step3").css({
                "display": "none"
            });
            $("#step2").css({
                "display": "block"
            });
            ent=true;
            $("#input1").focus();
            beginTime=new Date().getTime();
            resetTime(timer,1);


        });

        $(document).keydown(function (event) {
            var e = event || window.event;
            var k = e.keyCode || e.which;

            if(k == 81){
                if(!spacer){
                    radioset.push("Q");
                    type4set.push(level);
                    commentset.push(arrT.join(","));
                    if(arr[a]=="Q"){
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#time").text(time);
                        $("#dc").text("答对了");

                        $("#step1").css({
                            "display": "none"
                        });

                        $("#step2").css({
                            "display": "none"
                        });
                        $("#step3").css({
                            "display": "block"
                        });
                        spacer=true;

                    }else {
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#time").text(time);
                        $("#dc").text("答错了");

                        $("#step1").css({
                            "display": "none"
                        });

                        $("#step2").css({
                            "display": "none"
                        });
                        $("#step3").css({
                            "display": "block"
                        });
                        spacer=true;
                    }
                }

            }


            if(k == 80){
                if(!spacer){
                    radioset.push("P");
                    type4set.push(level);
                    commentset.push(arrT.join(","));
                    if(arr[a]=="P"){
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#time").text(time);
                        $("#dc").text("答对了");

                        $("#step1").css({
                            "display": "none"
                        });

                        $("#step2").css({
                            "display": "none"
                        });
                        $("#step3").css({
                            "display": "block"
                        });
                        spacer=true;

                    }else {
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#time").text(time);
                        $("#dc").text("答错了");

                        $("#step1").css({
                            "display": "none"
                        });

                        $("#step2").css({
                            "display": "none"
                        });
                        $("#step3").css({
                            "display": "block"
                        });
                        spacer=true;
                    }
                }

            }

            if(k == 32){
                if(spacer){
                    spacer=false;
                    if(a<10){
                        a++;
                        stimidset.push(a);
                        $("#stage").text(stage);
                        for(var i=0;i<level;i++){
                            if(i==0){
                                num=(max[Math.floor(Math.random()*max.length)]).toString()
                            }else {
                                num += (mix[Math.floor(Math.random()*mix.length)]).toString()
                            }
                        };
                        cuoNum=(parseInt(num)+cuo[Math.floor(Math.random()*cuo.length)]).toString();
                        fayin(num,speed);
                        arrT.push(num);
                        if(arr[a] == "Q"){
                            beadFun(1,num);
                            arrT.push(num);
                        }else {
                            beadFun(1,cuoNum);
                            arrT.push(cuoNum);
                        }


                        $("#step1").css({
                            "display": "none"
                        });
                        $("#step3").css({
                            "display": "none"
                        });
                        $("#step2").css({
                            "display": "block"
                        });
                        $("#pa_1").css({
                            "display": "block"
                        });
                        ent=true;
                        $("#input1").focus();
                        beginTime=new Date().getTime();
                        resetTime(timer,1);
                    }else {
                        post_result()
                    }


                }

            }

        });




        $("#next").on("click",function () {
            spacer=false;
            if(a<10){
                a++;
                stimidset.push(a);
                $("#stage").text(stage);
                for(var i=0;i<level;i++){
                    if(i==0){
                        num=(max[Math.floor(Math.random()*max.length)]).toString()
                    }else {
                        num += (mix[Math.floor(Math.random()*mix.length)]).toString()
                    }
                };
                cuoNum=(parseInt(num)+cuo[Math.floor(Math.random()*cuo.length)]).toString();
                fayin(num,speed);
                arrT.push(num);
                if(arr[a] == "Q"){
                    beadFun(1,num);
                    arrT.push(num);
                }else {
                    beadFun(1,cuoNum);
                    arrT.push(cuoNum);
                }


                $("#step1").css({
                    "display": "none"
                });
                $("#step3").css({
                    "display": "none"
                });
                $("#step2").css({
                    "display": "block"
                });
                $("#pa_1").css({
                    "display": "block"
                });
                ent=true;
                $("#input1").focus();
                beginTime=new Date().getTime();
                resetTime(timer,1);
            }else {
                post_result()
            }



        });


        function post_result() {
            // var numset=parseInt((100-Math.sqrt(timer/sd.blankNum))*sd.blankNum);
            var opes_result_data = {};

            opes_result_data.taskid =<%= taskid %>;
            opes_result_data.sumitcoids =<%= sumitcoids %>;
            opes_result_data.targetpagename = "<%=targetpagename%>";
            opes_result_data.codematerial =<%= codematerial %>;
            opes_result_data.uid =<%= uid %>;
            opes_result_data.lan = "<%=lan%>";
            opes_result_data.projectid =<%= projectid %>;

            opes_result_data.duration = 0;
            opes_result_data.timeaverage = Math.round(0);

            //以下判断总题数
            opes_result_data.type4set = type4set.join(";");
            opes_result_data.stimidset = stimidset.join(";");
            opes_result_data.correctanswerset = arr.join(";");
            opes_result_data.time = "0";
            opes_result_data.level = "0";

            opes_result_data.timeset = timeset.join(";");
            opes_result_data.radioset = "0";
            opes_result_data.buttonset = radioset.join(";");
            opes_result_data.commentset = commentset.join(";");
            opes_result_data.numset = "0";
            opes_post_result_util_js_opes_post_result(opes_result_data);
            return;


        }


        function result_format(result) {
            var msg = "";
            var obj = result;
            for (var name in obj) {
                msg += obj[name] + "{" + name + "};";
            };
            msg = (msg.slice(msg.length - 1) == ';') ? msg.slice(0, -1) : msg;
            return msg;
        }








        function randomsort(a, b) {
            return Math.random()>.5 ? -1 : 1;
            //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
        }


        function fayin(str,speed){
            var str_code=encodeURI(str);
            var str_fayin='';
            $("#fayin").html('');
            var str_fayin="<audio id='music' autoplay='autoplay'><source src='http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd="+speed+"&text="+str_code+"' type='audio/mpeg'></audio>";
            $("#fayin").html(str_fayin);

        }





        function resetTime(time,n){
            var timer=null;
            var t=time;
            var m=0;
            var s=0;
            m=Math.floor(t/60%60);
            m<10&&(m='0'+m);
            s=Math.floor(t%60);
            function countDown(){
                s--;
                s<10&&(s='0'+s);
                if(s.length>=3){
                    s=59;
                    m="0"+(Number(m)-1);
                }
                if(m.length>=3){
                    m='00';
                    s='00';
                    $("#pa_"+n).css({
                        "display": "none"
                    });
                    clearInterval(timer);
                }
            }
            timer=setInterval(countDown,100);
        }




        function beadFun(n,num) {
            var digit;
            digit=num.toString().length;
            /*算盘复位*/
            for(var k=1;k<10;k++){
                $("#pa_"+n+"_"+k+" .bead:nth-child(1)").css({
                    "top":"0px",
                    "background-color": "#0ad845"
                });
                $("#pa_"+n+"_"+k+" .bead:nth-child(2)").css({
                    "bottom":"54px",
                    "background-color": "#0ad845"
                });
                $("#pa_"+n+"_"+k+" .bead:nth-child(3)").css({
                    "bottom":"36px",
                    "background-color": "#0ad845"
                });
                $("#pa_"+n+"_"+k+" .bead:nth-child(4)").css({
                    "bottom":"18px",
                    "background-color": "#0ad845"
                });
                $("#pa_"+n+"_"+k+" .bead:nth-child(5)").css({
                    "bottom":"0px",
                    "background-color": "#0ad845"
                });
            }

            /*个位*/
            if(digit>0){
                var b1=num.slice(digit-1);
                if(b1>=5){
                    $("#pa_"+n+"_1"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_1"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_1"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_1"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_1"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_1"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_1"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_1"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_1"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }

            /*十位*/

            if(digit>1){
                var b1 = num.slice(digit-2,digit-1);
                if(b1>=5){
                    $("#pa_"+n+"_2"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_2"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_2"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_2"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_2"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_2"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_2"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_2"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_2"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }

            /*百位*/
            if(digit>2){
                var b1=num.slice(digit-3,digit-2);
                if(b1>=5){
                    $("#pa_"+n+"_3"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_3"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_3"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_3"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_3"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_3"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_3"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_3"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_3"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }

            /*千位*/
            if(digit>3){
                var b1=num.slice(digit-4,digit-3);
                if(b1>=5){
                    $("#pa_"+n+"_4"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_4"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_4"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_4"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_4"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_4"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_4"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_4"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_4"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }

            /*万位*/
            if(digit>4){
                var b1=num.slice(digit-5,digit-4);
                if(b1>=5){
                    $("#pa_"+n+"_5"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_5"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_5"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_5"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_5"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_5"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_5"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_5"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_5"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }
            /*十万位*/
            if(digit>5){
                var b1=num.slice(digit-6,digit-5);
                if(b1>=5){
                    $("#pa_"+n+"_6"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_6"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_6"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_6"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_6"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_6"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_6"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_6"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_6"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }
            /*百万位*/
            if(digit>6){
                var b1=num.slice(digit-7,digit-6);
                if(b1>=5){
                    $("#pa_"+n+"_7"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_7"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_7"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_7"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_7"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_7"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_7"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_7"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_7"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }
            /*千万位*/
            if(digit>7){
                var b1=num.slice(digit-8,digit-7);
                if(b1>=5){
                    $("#pa_"+n+"_8"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_8"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_8"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_8"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_8"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_8"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_8"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_8"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_8"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }
            /*亿位*/
            if(digit>8){
                var b1=num.slice(digit-9,digit-8);
                if(b1>=5){
                    $("#pa_"+n+"_9"+" .bead:nth-child(1)").css({
                        "top":"30px",
                        "background-color": "#e10601"
                    });
                    if((b1-5)>0){
                        $("#pa_"+n+"_9"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>1){
                        $("#pa_"+n+"_9"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>2){
                        $("#pa_"+n+"_9"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1-5)>3){
                        $("#pa_"+n+"_9"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }else {
                    if((b1)>0){
                        $("#pa_"+n+"_9"+" .bead:nth-child(2)").css({
                            "bottom":"88px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>1){
                        $("#pa_"+n+"_9"+" .bead:nth-child(3)").css({
                            "bottom":"70px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>2){
                        $("#pa_"+n+"_9"+" .bead:nth-child(4)").css({
                            "bottom":"52px",
                            "background-color": "#e10601"
                        });
                    }
                    if((b1)>3){
                        $("#pa_"+n+"_9"+" .bead:nth-child(5)").css({
                            "bottom":"34px",
                            "background-color": "#e10601"
                        });
                    }
                }
            }
        }

    });
</script>
</html>