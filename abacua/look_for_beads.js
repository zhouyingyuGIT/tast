$(function () {
    var topicNum=0;
    var daan;
    var speed=5;
    var digit="2";
    var num;
    var ti;
    var gw=[1,2,3,4,5,6,7,8,9];
    var dw=[1,2,3,0,4,5,6,7,8,9];
    var dui=[1,-2,2,-1];
    var cuo=[3,-4,4,-3];
    var duiNum;
    var cuoNum;
    var beginTime;
    var endTime;
    var time;
    var topicArr=["Q","P","Q","P","Q","P","Q","P"];
    var arr=[];
    var arrT=[];
    var PQ;
    var correctanswerset=[];
    var buttonset=[];
    var timeset=[];
    var type4set=[];
    var commentset=[];
    var stimidset=[];
    var maxtime =180;
    var pqKEY=false;
    var spacer=false;
    beadFun(1,"3456");
    $("#digitBox").on("click",".digit",function(event){
        var target = $(event.target);
        $("#digitBox .digit").removeClass("active");
        target.addClass("active");
        digit=target.text();
    });


    $("#step1Btn").on("click",function () {
        timer = setInterval(function () {
            CountDown();
        }, 1000);
        topicNum++;
        for(var i=0;i<digit;i++){
            if(i==0){
                num=(gw[Math.floor(Math.random()*gw.length)]).toString()
            }else {
                num += (dw[Math.floor(Math.random()*dw.length)]).toString()
            }
        }
        PQ=topicArr[Math.floor(Math.random()*topicArr.length)];
        arr.push(PQ);
        arrT.push(num);
        $("#numR").text(num);
        duiNum=numFun(digit,dui,num);
        cuoNum=numFun(digit,cuo,num);
        if(arr[topicNum-1]=="Q"){
            beadFun(1,duiNum);
            beadFun(2,cuoNum);
            arrT.push(duiNum);
            arrT.push(cuoNum);
        }else {
            beadFun(1,cuoNum);
            beadFun(2,duiNum);
            arrT.push(cuoNum);
            arrT.push(duiNum);
        }
        stepFun(2);
        beginTime=new Date().getTime();
        pqKEY=true;
    });

    $("#step3Btn").on("click",function () {
        topicNum++;
        for(var i=0;i<digit;i++){
            if(i==0){
                num=(gw[Math.floor(Math.random()*gw.length)]).toString()
            }else {
                num += (dw[Math.floor(Math.random()*dw.length)]).toString()
            }
        }
        PQ=topicArr[Math.floor(Math.random()*topicArr.length)];
        arr.push(PQ);
        arrT.push(num);
        $("#numR").text(num);
        duiNum=numFun(digit,dui,num);
        cuoNum=numFun(digit,cuo,num);
        if(arr[topicNum-1]=="Q"){
            beadFun(1,duiNum);
            beadFun(2,cuoNum);
            arrT.push(duiNum);
            arrT.push(cuoNum);
        }else {
            beadFun(1,cuoNum);
            beadFun(2,duiNum);
            arrT.push(cuoNum);
            arrT.push(duiNum);
        }
        stepFun(2);
        beginTime=new Date().getTime();
        pqKEY=true;
    });


    $(document).keydown(function (event) {
        var e = event || window.event;
        var k = e.keyCode || e.which;
        if (k == 81) {
            if (pqKEY) {
                endTime = new Date().getTime();
                time = (endTime - beginTime).toFixed(0);
                $("#t2").text(time);
                timeset.push(time);
                correctanswerset=arr;
                commentset.push(arrT.join(","));
                type4set.push(digit);
                stimidset.push(topicNum);
                buttonset.push("Q");
                if (arr[topicNum-1] == "Q") {
                    $("#t1").text("答对了");
                } else {
                    $("#t1").text("答错了");
                }
                stepFun(3);
                pqKEY=false;
                spacer=true;
            }
        }
        if (k == 80) {
            if (pqKEY) {
                endTime = new Date().getTime();
                time = (endTime - beginTime).toFixed(0);
                $("#t2").text(time);
                timeset.push(time);
                correctanswerset=arr;
                commentset.push(arrT.join(","));
                type4set.push(digit);
                stimidset.push(topicNum);
                buttonset.push("P");
                if (arr[topicNum-1] == "Q") {
                    $("#t1").text("答错了");
                } else {
                    $("#t1").text("答对了");
                }
                stepFun(3);
                pqKEY=false;
                spacer=true;
            }
        }

        if(k == 32){
            if(spacer){
                topicNum++;
                for(var i=0;i<digit;i++){
                    if(i==0){
                        num=(gw[Math.floor(Math.random()*gw.length)]).toString()
                    }else {
                        num += (dw[Math.floor(Math.random()*dw.length)]).toString()
                    }
                }
                PQ=topicArr[Math.floor(Math.random()*topicArr.length)];
                arr.push(PQ);
                arrT.push(num);
                $("#numR").text(num);
                duiNum=numFun(digit,dui,num);
                cuoNum=numFun(digit,cuo,num);
                if(arr[topicNum-1]=="Q"){
                    beadFun(1,duiNum);
                    beadFun(2,cuoNum);
                    arrT.push(duiNum);
                    arrT.push(cuoNum);
                }else {
                    beadFun(1,cuoNum);
                    beadFun(2,duiNum);
                    arrT.push(cuoNum);
                    arrT.push(duiNum);
                }
                stepFun(2);
                beginTime=new Date().getTime();
                spacer=false;
                pqKEY=true;
            }
        }
    });


    function CountDown() {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "距离结束还有" + minutes + "分" + seconds + "秒";
            $("#tir").text(msg);
            --maxtime;
        } else{
            clearInterval(timer);
            // post_result()
        }
    }




    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    function numFun(data,arr,num) {
        var dcnum;
        var t="1";
        for(var i=0;i<(data-2);i++){
            t+="0";
        }

        dcnum=(parseInt(num)+(arr[Math.floor(Math.random()*arr.length)])*t).toString();
        return dcnum
    }




    function fayin(str,speed){
        var str_code=encodeURI(str);
        var str_fayin='';
        $("#fayin").html('');
        var str_fayin="<audio id='music' autoplay='autoplay'><source src='http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd="+speed+"&text="+str_code+"' type='audio/mpeg'></audio>";
        $("#fayin").html(str_fayin);

    }




    /*拼接播放语音*/
    function splicingFun(num) {
        var splicing;
        var voice="";
        splicing=num.toString().length;
        for (var i=0;i<splicing;i++){
            var n;
            n=num.slice(i,i+1);
            if(n == 0){
                continue;
            }

            switch(splicing-i){
                case 1:
                    voice +="个位上";
                    break;
                case 2:
                    voice +="十位上";
                    break;
                case 3:
                    voice +="百位上";
                    break;
                case 4:
                    voice +="千位上";
                    break;
                case 5:
                    voice +="万位上";
                    break;
                case 6:
                    voice +="十万位上";
                    break;
                case 7:
                    voice +="百万位上";
                    break;
                case 8:
                    voice +="千万位上";
                    break;
                case 9:
                    voice +="亿位上";
                    break;
                default:
                    break;
            }

            if(n<5){
                voice += n+"个下珠;";
                continue;
            }else if(n == 5){
                voice += "1个上珠;";
                continue;
            }else if(n>5){
                voice += "1个上珠"+","+(n-5)+"个下珠;";
                continue;
            }
        }
        console.log(voice);
        return voice;

    }


    function stepFun(n) {
        if(n == 1){
            $("#step1").css({
                "display": "block"
            });
            $("#step2").css({
                "display": "none"
            });
            $("#step3").css({
                "display": "none"
            });
        }else if(n == 2){
            $("#step1").css({
                "display": "none"
            });
            $("#step2").css({
                "display": "block"
            });
            $("#step3").css({
                "display": "none"
            });
        }else if(n == 3){
            $("#step1").css({
                "display": "none"
            });
            $("#step2").css({
                "display": "none"
            });
            $("#step3").css({
                "display": "block"
            });
        }

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