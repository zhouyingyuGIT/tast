<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page language="java" import="com.lattice.entity.*" %>
<%@ page language="java" import="com.lattice.dao.*,java.util.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定数连减</title>
    <link rel="stylesheet" href="practice.css">
    <style>
        #title{
            display: none;
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
        <h3>定数连减练习，请选择一个数练习</h3>
        <div id="levelBox" class="levelBox">
            <span class="level active">1</span>
            <span class="level">2</span>
            <span class="level">3</span>
            <span class="level">4</span>
            <span class="level">5</span>
            <span class="level">6</span>
            <span class="level">7</span>
            <span class="level">8</span>
            <span class="level">9</span>
        </div>
        <div>
            <button style="margin-top: 120px" class="btn" id="btn">开始练习</button>
        </div>
    </div>

    <div id="title">
        <div class="topicBox">
            <div id="topic" class="topic">
                <h3>本次练习为实际拨珠/虚拟拨珠</h3>

                <h1>请计算 <span id="num1"></span> 每次减 <span id="num2"></span> 连减 30 次的结果</h1>

                <h4 id="ti" style="color: #555">准备好了吗？准备好了就点击开始计时</h4>

                <div style="margin-top: 100px;text-align: center;width: 100%">
                    <input onkeyup="this.value=this.value.replace(/\D/g,'')" id="inputAnswer" type="text" placeholder="请输入您的计算结果">
                </div>
            </div>



        </div>



        <div class="buttonBox">
            <button class="btn" id="startBtn">开始计时</button>
            <button class="btn" id="endBtn">结束计时</button>
        </div>
    </div>

    <div id="result" class="result">
        <h1 style="margin: 0px">这题答案为：<span id="answerA">125</span></h1>

        <div id="pa_1" class="boxBeam" style="margin: 0px auto">
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


        <div style="margin: 0px"><h1 style="margin: 0px">您的答案为：<spam id="answerB">5050</spam></h1></div>
        <h1 style="margin: 0px" id="antonym"></h1>
        <h1 style="margin: 0px">您本次用时 <spam id="answerTime"></spam>毫秒</h1>
        <div class="buttonBox" style="height: 70px">
            <button class="btn" id="finishExercise">结束练习</button>
        </div>

    </div>
</div>
</body>
<script src="jquery.js"></script>
<!--<script src="subtraction.js"></script>-->

<script>
    $(function () {
        var beginTime;
        var endTime;
        var time;
        var even;
        var min=270;
        var max=300;
        var n;
        var level="1";
        var inputAnswer;
        var startBtn=true;
        var endBtn=false;
        $("#levelBox").on("click",".level",function(event){
            var target = $(event.target);
            $("#levelBox .level").removeClass("active");
            target.addClass("active");
            level=target.text();
        });

        $("#btn").on("click",function () {
            n=(Math.ceil(Math.random()*(max-min)+min)).toString();
            $("#num1").text(n);
            $("#num2").text(level);
            $("#title").css({
                display: "block"
            });
            $("#step1").css({
                display: "none"
            });
        });



        $("#startBtn").on("click",function () {
            if(startBtn){
                $("#startBtn").css({
                    "background-color": "#aaa",
                    "border-color": "#aaa"
                });
                $("#ti").css({
                    opacity: 0
                });
                console.log("23242");
                beginTime=new Date().getTime();
                startBtn=false;
                endBtn=true;
            };
        });

        $("#endBtn").on("click",function () {
            if(endBtn){
                endTime=new Date().getTime();
                $("#title").css({
                    display: "none"
                });
                $("#result").css({
                    display: "block"
                });
                $("#answerB").text($("#inputAnswer").val());
                even=(n-(level*30)).toString();
                $("#answerA").text(even);
                beadFun(1,even);
                if(even == $("#answerB").text()){
                    $("#antonym").text("答对了")
                }else {
                    $("#antonym").text("答错了")
                }
                inputAnswer=$("#inputAnswer").val();
                time=(endTime-beginTime).toFixed(0);
                $("#answerTime").text(time);
                // timeOut()
            }

        });

        $("#finishExercise").on("click",function () {
            post_result();
        })

        function timeOut() {
            setTimeout(function () {
                post_result();
            }, 2000);
        }

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
            opes_result_data.type4set = level;
            opes_result_data.stimidset = "0";
            opes_result_data.correctanswerset = even;
            opes_result_data.time = "0";
            opes_result_data.level = "";

            opes_result_data.timeset = time;
            opes_result_data.radioset = "0";
            opes_result_data.buttonset = "0";
            opes_result_data.commentset = "请计算 "+n+" 每次减 "+level+" 连减 30 次的结果";
            console.log(opes_result_data);
            opes_result_data.numset = inputAnswer;
            console.log(opes_result_data);
            opes_post_result_util_js_opes_post_result(opes_result_data);
            return;


        }


        function result_format(result) {
            var msg = "";
            var obj = result;
            for (var name in obj) {
                msg += obj[name] + "{" + name + "};";
            }


            ;
            msg = (msg.slice(msg.length - 1) == ';') ? msg.slice(0, -1) : msg;
            return msg;
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


        /*function timeFu(s) {
            var t;
            if(s > -1){
                var hour = Math.floor(s/3600);
                var min = Math.floor(s/60) % 60;
                var sec = s % 60;
                if(hour >=0) {
                    t = hour + "时";
                }
                if(min >=0){t += min + "分";}

                if(sec >=0){t += sec+ "秒";}

            }
            //console.log(hour);
            //console.log(min);
            //console.log(sec);
            return t;

        }*/

    });
</script>

</html>