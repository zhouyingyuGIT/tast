$(function () {

    var level="2";
    var num;
    var correctanswerset=[];
    var radioset=[];
    var timeset=[];
    var buttonset=[];
    var daan;
    var mix=[0,1,2,3,4,5,6,7,8,9];
    var max=[2,3,4,5,6,7,8];
    var beginTime;
    var endTime;
    var time;
    var gx=false;
    var ent=false;
    var spacer=false;

    /*题目显示的时间长度（单位秒）*/
    var timer=10;

    var stage=1;
    var t1=[];
    var t2=[];
    var t3=[];
    var t4=[];
    var t5=[];
    var t6=[];
    $("#levelBox").on("click",".level",function(event){
        var target = $(event.target);
        $("#levelBox .level").removeClass("active");
        target.addClass("active");
        level=target.text();
    });

    $("#btn").on("click",function () {
        $("#stage").text(stage);
        for(var i=0;i<level;i++){
            if(i==0){
                num=(max[Math.floor(Math.random()*max.length)]).toString()
            }else {
                num += (mix[Math.floor(Math.random()*mix.length)]).toString()
            }
        };

        beadFun(1,num);
        correctanswerset.push(num);
        buttonset.push(stage);
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

    $("#btn2").on("click",function () {
        ent=false;
        $("#gx").css({
            opacity: 0
        });
        daan=$.trim($("#input1").val());
        // $("#num1").text(num);
        beadFun(2,num);
        $("#num2").text(daan);
        radioset.push(daan);
        endTime=new Date().getTime();
        time=(endTime-beginTime).toFixed(0);
        timeset.push(time);
        // console.log(num)
        // console.log(daan)
        if(daan == num){
            $("#dc").text("答对了");
            if(stage ==1){
                t1.push(1)
            }else if(stage ==2){
                t2.push(1)
            }else if(stage ==3){
                t3.push(1)
            }else if(stage ==4){
                t4.push(1)
            }else if(stage ==5){
                t5.push(1)
            }else if(stage ==6){
                t6.push(1)
            }
        }else {
            $("#dc").text("答错了");
            if(stage ==1){
                t1.push(0)
            }else if(stage ==2){
                t2.push(0)
            }else if(stage ==3){
                t3.push(0)
            }else if(stage ==4){
                t4.push(0)
            }else if(stage ==5){
                t5.push(0)
            }else if(stage ==6){
                t6.push(0)
            }
        };
        if(stage ==1){
            if(t1.length == 2){
                if(t1[0]==1 &&t1[1]==1){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
            if(t1.length == 12){
                var count=0;
                for(var t=0;t<t1.length;t++){
                    if(t1[t] == 1){
                        count++
                    }
                }
                if(count/t1.length >0.8){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
        }else if(stage ==2){

            if(t2.length == 2){
                if(t2[0]==1 &&t2[1]==1){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
            if(t2.length == 12){
                var count=0;
                for(var t=0;t<t2.length;t++){
                    if(t2[t] == 1){
                        count++
                    }
                }
                if(count/t2.length >0.8){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }

        }else if(stage ==3){
            if(t3.length == 2){
                if(t3[0]==1 &&t3[1]==1){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
            if(t3.length == 12){
                var count=0;
                for(var t=0;t<t3.length;t++){
                    if(t3[t] == 1){
                        count++
                    }
                }
                if(count/t3.length >0.8){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }

        }else if(stage ==4){
            if(t4.length == 2){
                if(t4[0]==1 &&t4[1]==1){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
            if(t4.length == 12){
                var count=0;
                for(var t=0;t<t4.length;t++){
                    if(t4[t] == 1){
                        count++
                    }
                }
                if(count/t4.length >0.8){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
        }else if(stage ==5){
            if(t5.length == 2){
                if(t5[0]==1 &&t5[1]==1){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }
            if(t5.length == 12){
                var count=0;
                for(var t=0;t<t5.length;t++){
                    if(t5[t] == 1){
                        count++
                    }
                }
                if(count/t5.length >0.8){
                    $("#gx").css({
                        opacity: 1
                    });
                }
            }

        }

        $("#time").text(time);

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
    });

    $(document).keydown(function (event) {
        var e = event || window.event;
        var k = e.keyCode || e.which;
        if(k==13){
            if(ent){
                ent=false;
                $("#gx").css({
                    opacity: 0
                });
                daan=$.trim($("#input1").val());
                // $("#num1").text(num);
                beadFun(2,num);
                $("#num2").text(daan);
                radioset.push(daan);
                endTime=new Date().getTime();
                time=(endTime-beginTime).toFixed(0);
                timeset.push(time);
                // console.log(num)
                // console.log(daan)
                if(daan == num){
                    $("#dc").text("答对了");
                    if(stage ==1){
                        t1.push(1)
                    }else if(stage ==2){
                        t2.push(1)
                    }else if(stage ==3){
                        t3.push(1)
                    }else if(stage ==4){
                        t4.push(1)
                    }else if(stage ==5){
                        t5.push(1)
                    }else if(stage ==6){
                        t6.push(1)
                    }
                }else {
                    $("#dc").text("答错了");
                    if(stage ==1){
                        t1.push(0)
                    }else if(stage ==2){
                        t2.push(0)
                    }else if(stage ==3){
                        t3.push(0)
                    }else if(stage ==4){
                        t4.push(0)
                    }else if(stage ==5){
                        t5.push(0)
                    }else if(stage ==6){
                        t6.push(0)
                    }
                };
                if(stage ==1){
                    if(t1.length == 2){
                        if(t1[0]==1 &&t1[1]==1){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                    if(t1.length == 12){
                        var count=0;
                        for(var t=0;t<t1.length;t++){
                            if(t1[t] == 1){
                                count++
                            }
                        }
                        if(count/t1.length >0.8){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                }else if(stage ==2){

                    if(t2.length == 2){
                        if(t2[0]==1 &&t2[1]==1){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                    if(t2.length == 12){
                        var count=0;
                        for(var t=0;t<t2.length;t++){
                            if(t2[t] == 1){
                                count++
                            }
                        }
                        if(count/t2.length >0.8){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }

                }else if(stage ==3){
                    if(t3.length == 2){
                        if(t3[0]==1 &&t3[1]==1){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                    if(t3.length == 12){
                        var count=0;
                        for(var t=0;t<t3.length;t++){
                            if(t3[t] == 1){
                                count++
                            }
                        }
                        if(count/t3.length >0.8){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }

                }else if(stage ==4){
                    if(t4.length == 2){
                        if(t4[0]==1 &&t4[1]==1){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                    if(t4.length == 12){
                        var count=0;
                        for(var t=0;t<t4.length;t++){
                            if(t4[t] == 1){
                                count++
                            }
                        }
                        if(count/t4.length >0.8){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                }else if(stage ==5){
                    if(t5.length == 2){
                        if(t5[0]==1 &&t5[1]==1){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }
                    if(t5.length == 12){
                        var count=0;
                        for(var t=0;t<t5.length;t++){
                            if(t5[t] == 1){
                                count++
                            }
                        }
                        if(count/t5.length >0.8){
                            $("#gx").css({
                                opacity: 1
                            });
                        }
                    }

                }

                $("#time").text(time);

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

        if(k == 32){
            if(spacer){
                if(stage ==1){

                    if(t1.length == 2){
                        if(t1[0]==1 &&t1[1]==1){
                            stage++;
                            timer--;

                        }
                    }
                    if(t1.length == 12){
                        var count=0;
                        for(var t=0;t<t1.length;t++){
                            if(t1[t] == 1){
                                count++
                            }
                        }
                        if(count/t1.length >0.8){
                            stage++;
                            timer--;
                        }else {
                            alert("结束训练");
                            return;
                            // console.log(t1);
                        }
                    }
                }else if(stage ==2){

                    if(t2.length == 2){
                        if(t2[0]==1 &&t2[1]==1){
                            stage++;
                            timer--;
                        }
                    }
                    if(t2.length == 12){
                        var count=0;
                        for(var t=0;t<t2.length;t++){
                            if(t2[t] == 1){
                                count++
                            }
                        }
                        if(count/t2.length >0.8){
                            stage++;
                            timer--;
                        }else {
                            alert("结束训练");
                            return;
                        }
                    }

                }else if(stage ==3){
                    if(t3.length == 2){
                        if(t3[0]==1 &&t3[1]==1){
                            stage++;
                            timer--;
                        }
                    }
                    if(t3.length == 12){
                        var count=0;
                        for(var t=0;t<t3.length;t++){
                            if(t3[t] == 1){
                                count++
                            }
                        }
                        if(count/t3.length >0.8){
                            stage++;
                            timer--;
                        }else {
                            alert("结束训练");
                            return;
                        }
                    }

                }else if(stage ==4){
                    if(t4.length == 2){
                        if(t4[0]==1 &&t4[1]==1){
                            stage++;
                            timer--;
                        }
                    }
                    if(t4.length == 12){
                        var count=0;
                        for(var t=0;t<t4.length;t++){
                            if(t4[t] == 1){
                                count++
                            }
                        }
                        if(count/t4.length >0.8){
                            stage++;
                            timer--;
                        }else {
                            alert("结束训练");
                            return;
                        }
                    }
                }else if(stage ==5){
                    if(t5.length == 2){
                        if(t5[0]==1 &&t5[1]==1){
                            stage++;
                            timer--;
                        }
                    }
                    if(t5.length == 12){
                        var count=0;
                        for(var t=0;t<t5.length;t++){
                            if(t5[t] == 1){
                                count++
                            }
                        }
                        if(count/t5.length >0.8){
                            stage++;
                            timer--;
                        }else {
                            alert("结束训练");
                            return;
                        }
                    }

                }else if(stage ==6){
                    if(t6.length == 2){
                        if(t6[0]==1 &&t6[1]==1){
                            alert("结束训练");
                            return;
                        }
                    }
                    if(t6.length == 12){
                        alert("结束训练");
                        return;
                    }
                }


                $("#stage").text(stage);
                spacer=false;
                $("#input1").val("");
                for(var i=0;i<level;i++){
                    if(i==0){
                        num=(max[Math.floor(Math.random()*max.length)]).toString()
                    }else {
                        num += (mix[Math.floor(Math.random()*mix.length)]).toString()
                    }
                };

                beadFun(1,num);

                correctanswerset.push(num);
                buttonset.push(stage);

                $("#step1").css({
                    "display": "none"
                });

                $("#step2").css({
                    "display": "block"
                });
                $("#step3").css({
                    "display": "none"
                });
                $("#pa_1").css({
                    "display": "block"
                });
                ent=true;
                $("#input1").focus();
                beginTime=new Date().getTime();
                resetTime(timer,1);


            }

        }

    });




    $("#next").on("click",function () {
        if(stage ==1){

            if(t1.length == 2){
                if(t1[0]==1 &&t1[1]==1){
                    stage++;
                    timer--;
                }
            }
            if(t1.length == 12){
                var count=0;
                for(var t=0;t<t1.length;t++){
                    if(t1[t] == 1){
                        count++
                    }
                }
                if(count/t1.length >0.8){
                    stage++;
                    timer--;
                }else {
                    alert("结束训练");
                    return;
                    // console.log(t1);
                }
            }
        }else if(stage ==2){

            if(t2.length == 2){
                if(t2[0]==1 &&t2[1]==1){
                    stage++;
                    timer--;
                }
            }
            if(t2.length == 12){
                var count=0;
                for(var t=0;t<t2.length;t++){
                    if(t2[t] == 1){
                        count++
                    }
                }
                if(count/t2.length >0.8){
                    stage++;
                    timer--;
                }else {
                    alert("结束训练");
                    return;
                }
            }

        }else if(stage ==3){
            if(t3.length == 2){
                if(t3[0]==1 &&t3[1]==1){
                    stage++;
                    timer--;
                }
            }
            if(t3.length == 12){
                var count=0;
                for(var t=0;t<t3.length;t++){
                    if(t3[t] == 1){
                        count++
                    }
                }
                if(count/t3.length >0.8){
                    stage++;
                    timer--;
                }else {
                    alert("结束训练");
                    return;
                }
            }

        }else if(stage ==4){
            if(t4.length == 2){
                if(t4[0]==1 &&t4[1]==1){
                    stage++;
                    timer--;
                }
            }
            if(t4.length == 12){
                var count=0;
                for(var t=0;t<t4.length;t++){
                    if(t4[t] == 1){
                        count++
                    }
                }
                if(count/t4.length >0.8){
                    stage++;
                    timer--;
                }else {
                    alert("结束训练");
                    return;
                }
            }
        }else if(stage ==5){
            if(t5.length == 2){
                if(t5[0]==1 &&t5[1]==1){
                    stage++;
                    timer--;
                }
            }
            if(t5.length == 12){
                var count=0;
                for(var t=0;t<t5.length;t++){
                    if(t5[t] == 1){
                        count++
                    }
                }
                if(count/t5.length >0.8){
                    stage++;
                    timer--;
                }else {
                    alert("结束训练");
                    return;
                }
            }

        }else if(stage ==6){
            if(t6.length == 2){
                if(t6[0]==1 &&t6[1]==1){
                    alert("结束训练");
                    return;
                }
            }
            if(t6.length == 12){
                alert("结束训练");
                return;
            }
        }


        $("#stage").text(stage);
        spacer=false;
        $("#input1").val("");
        for(var i=0;i<level;i++){
            if(i==0){
                num=(max[Math.floor(Math.random()*max.length)]).toString()
            }else {
                num += (mix[Math.floor(Math.random()*mix.length)]).toString()
            }
        };

        beadFun(1,num);

        correctanswerset.push(num);
        buttonset.push(stage);

        $("#step1").css({
            "display": "none"
        });

        $("#step2").css({
            "display": "block"
        });
        $("#step3").css({
            "display": "none"
        });
        $("#pa_1").css({
            "display": "block"
        });
        ent=true;
        $("#input1").focus();
        beginTime=new Date().getTime();
        resetTime(timer,1);


    });




















/*
// console.log($("#pa1 .bead:nth-child(1)").text());
    beadFun(1,"545054040");
    console.log(Math.random());
    console.log(Math.floor(Math.random()*(90)+10));
    console.log(parseInt(Math.random()*100));*/

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