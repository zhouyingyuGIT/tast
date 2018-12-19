$(function () {
    var digit="1";
    var pens="3";
    var answer;
    var num;
    var time;
    var beginTime;
    var endTime;
    var spacer=false;
    var enter=false;
    var numExcessive;
    var numArr=[1,4,7,2,5,8,6,3,9];
    var num1;
    var num2;
    var num3;
    var num4;
    var num5;
    var num6;
    var num7;
    var topicTime=3;
    var timer=null;
    var timer1=null;
    var NexTime=1;
    var topicNum=0;
    var maxtime =30;
    var topicNumT =900;
    var arrT=[];
    var correctanswerset=[];
    var numset=[];
    var timeset=[];
    var type4set=[];
    var commentset=[];
    var stimidset=[];
    var radioset=[];

    $("#digitBox").on("click",".digit",function(event){
        var target = $(event.target);
        $("#digitBox .digit").removeClass("active");
        target.addClass("active");
        digit=target.text();
    });
    function CountDown() {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "距离结束还有" + minutes + "分" + seconds + "秒";
            $("#tir").text(msg);
            --maxtime;
        } else{
            clearInterval(timer1);
            console.log(correctanswerset);
            console.log(numset);
            console.log(timeset);
            console.log(type4set);
            console.log(commentset);
            console.log(stimidset);
            console.log(radioset);
            post_result()
        }
    }
    $("#pensBox").on("click",".pens",function(event){
        var target = $(event.target);
        $("#pensBox .pens").removeClass("active");
        target.addClass("active");
        pens=target.text();
    });
    // 随机生成第一位数
    function num1Fun(digit) {
        var num = "";
        for (var i = 0; i < digit; i++) {
            num += (numArr[Math.floor(Math.random()*numArr.length)]).toString()
        }
        return num;
    };
    function NumTopic() {

    }
    // 生成加数
    function additionFun(data) {
        var arr1 = data.split('');
        // console.log(arr1);
        arr1.reverse();
        var numA = "";
        var dl=parseInt(digit)-1;
        for (var i = dl; i>=0; i--) {
            if (arr1[i] == "1") {
                var numArr1 = [9];
                numA += (numArr1[Math.floor(Math.random() * numArr1.length)]).toString();
                continue;
            } else if (arr1[i] == "2") {
                var numArr2 = [8,9];
                numA += (numArr2[Math.floor(Math.random() * numArr2.length)]).toString();
                continue;
            } else if (arr1[i] == "3") {
                var numArr3 = [8,9,7];
                numA += (numArr3[Math.floor(Math.random() * numArr3.length)]).toString();
                continue;
            } else if (arr1[i] == "4") {
                var numArr4 = [8,6,7,9];
                numA += (numArr4[Math.floor(Math.random() * numArr4.length)]).toString();
                continue;
            } else if (arr1[i] == "5") {
                var numArr5 = [6,5,9,8,7];
                numA += (numArr5[Math.floor(Math.random() * numArr5.length)]).toString();
                continue;
            } else if (arr1[i] == "6") {
                var numArr6 = [6,8,5,4,9,7];
                numA += (numArr6[Math.floor(Math.random() * numArr6.length)]).toString();
                continue;
            } else if (arr1[i] == "7") {
                var numArr7 = [5,3,4,6,9,8,7];
                numA += (numArr7[Math.floor(Math.random() * numArr7.length)]).toString();
                continue;
            } else if (arr1[i] == "8") {
                var numArr8 = [5,2,3,6,4,7,8,9];
                numA += (numArr8[Math.floor(Math.random() * numArr8.length)]).toString();
                continue;
            } else if (arr1[i] == "9") {
                var numArr9 = [3,2,1,6,5,4,9,8,7];
                numA += (numArr9[Math.floor(Math.random() * numArr9.length)]).toString();
                continue;
            } else if (arr1[i] == "0") {
                var numArr9 = [3,2,1,6,5,4,7];
                numA += (numArr9[Math.floor(Math.random() * numArr9.length)]).toString();
                continue;
            }else {
                var numArr9 = [3,2,1,6,5,4,7];
                numA += (numArr9[Math.floor(Math.random() * numArr9.length)]).toString();
                continue;
            }
        }
        return numA.split("").reverse().join("");
    }
    // 生成减数
    function subtractionFun(data) {
        var arr2=data.split('');
        arr2.reverse();
        var numB = "";
        var dl=parseInt(digit)-1;
        for (var i = dl; i >= 0; i--) {
            if(arr2[i] == "1"){
                var numArr1=[2,3,4,5,6,7,8,9];
                numB += (numArr1[Math.floor(Math.random()*numArr1.length)]).toString();
                continue;
            }else if(arr2[i] == "2"){
                var numArr2=[3,4,5,6,7,8,9];
                numB += (numArr2[Math.floor(Math.random()*numArr2.length)]).toString();
                continue;
            }else if(arr2[i] == "3"){
                var numArr3=[4,5,6,7,8,9];
                numB += (numArr3[Math.floor(Math.random()*numArr3.length)]).toString();
                continue;
            }else if(arr2[i] == "4"){
                var numArr4=[5,6,7,8,9];
                numB += (numArr4[Math.floor(Math.random()*numArr4.length)]).toString();
                continue;
            }else if(arr2[i] == "5"){
                var numArr5=[6,7,8,9];
                numB += (numArr5[Math.floor(Math.random()*numArr5.length)]).toString();
                continue;
            }else if(arr2[i] == "6"){
                var numArr6=[7,8,9];
                numB += (numArr6[Math.floor(Math.random()*numArr6.length)]).toString();
                continue;
            }else if(arr2[i] == "7"){
                var numArr7=[8,9];
                numB += (numArr7[Math.floor(Math.random()*numArr7.length)]).toString();
                continue;
            }else if(arr2[i] == "8"){
                var numArr8=[9];
                numB += (numArr8[Math.floor(Math.random()*numArr8.length)]).toString();
                continue;
            }else if(arr2[i] == "9"){
                var numArr9=[1,2,3,4,5,6,7,8];
                numB += (numArr9[Math.floor(Math.random()*numArr9.length)]).toString();
                continue;
            }else if(arr2[i] == "0"){
                var numArr9=[3,4,5,6,7,8];
                numB += (numArr9[Math.floor(Math.random()*numArr9.length)]).toString();
                continue;
            }
        }
        if(data>(numB.split("").reverse().join(""))){
            return numB.split("").reverse().join("");
        }else{
            return numB
        }

    }

    function pensFun(pens) {
        num1=num1Fun(digit);
        num2="";
        num3="";
        num4="";
        num5="";
        num6="";
        num7="";
        arrT=[];
        // showHideFun(pens);
        if(pens == "3"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            topicTime=5;
            arrT.push(num1);
            arrT.push(num2);
            arrT.push(-num3);
            timer = setInterval(function () {
                if(topicTime==5){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num1);
                }else if(topicTime==3){
                    $("#numFC").addClass("numActive");$("#numFC").text("");$("#numFC").text(num2);
                }else if(topicTime==1){
                    $("#numFC").removeClass("numActive");$("#numFC").text("");$("#numFC").text(-num3);
                }else if(topicTime==0){
                    $("#numFC").text("");
                    clearInterval(timer);
                }else {
                    $("#numFC").text("");
                }
                topicTime--
            }, topicNumT);
            // $("#numFC").text(num1);
            // $("#t1").text(num1);
            // $("#t2").text(num2);
            // $("#t3").text(-num3);
            num=(parseInt(numExcessive)-parseInt(num3)).toString();
        }else if(pens == "4"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num3)).toString();
            num4=subtractionFun(numExcessive);
            topicTime=7;
            arrT.push(num1);
            arrT.push(num2);
            arrT.push(num3);
            arrT.push(-num4);
            timer = setInterval(function () {
                if(topicTime==7){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num1);
                }else if(topicTime==5){
                    $("#numFC").addClass("numActive");$("#numFC").text("");$("#numFC").text(num2);
                }else if(topicTime==3){
                    $("#numFC").removeClass("numActive");$("#numFC").text("");$("#numFC").text(num3);
                }else if(topicTime==1){
                    $("#numFC").addClass("numActive");$("#numFC").text(-num4);
                }else if(topicTime==0){
                    $("#numFC").text("");
                    clearInterval(timer);
                }else {
                    $("#numFC").text("");
                }
                topicTime--
            }, topicNumT);
            num=(parseInt(numExcessive)-parseInt(num4)).toString();
        }else if(pens == "5"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num4)).toString();
            num5=additionFun(numExcessive);
            topicTime=9;
            arrT.push(num1);
            arrT.push(num2);
            arrT.push(-num3);
            arrT.push(num4);
            arrT.push(num5);
            timer = setInterval(function () {
                if(topicTime==9){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num1);
                }else if(topicTime==7){
                    $("#numFC").addClass("numActive");$("#numFC").text("");$("#numFC").text(num2);
                }else if(topicTime==5){
                    $("#numFC").removeClass("numActive");$("#numFC").text("");$("#numFC").text(-num3);
                }else if(topicTime==3){
                    $("#numFC").addClass("numActive");$("#numFC").text(num4);
                }else if(topicTime==1){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num5);
                }else if(topicTime==0){
                    $("#numFC").text("");
                    clearInterval(timer);
                }else {
                    $("#numFC").text("");
                }
                topicTime--
            }, topicNumT);

            num=(parseInt(numExcessive)+parseInt(num5)).toString();
        }else if(pens == "6"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num4)).toString();
            num5=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num5)).toString();
            num6=subtractionFun(numExcessive);
            topicTime=11;
            arrT.push(num1);
            arrT.push(num2);
            arrT.push(-num3);
            arrT.push(num4);
            arrT.push(num5);
            arrT.push(-num6);
            timer = setInterval(function () {
                if(topicTime==11){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num1);
                }else if(topicTime==9){
                    $("#numFC").addClass("numActive");$("#numFC").text("");$("#numFC").text(num2);
                }else if(topicTime==7){
                    $("#numFC").removeClass("numActive");$("#numFC").text("");$("#numFC").text(-num3);
                }else if(topicTime==5){
                    $("#numFC").addClass("numActive");$("#numFC").text(num4);
                }else if(topicTime==3){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num5);
                }else if(topicTime==1){
                    $("#numFC").addClass("numActive");$("#numFC").text(-num6);
                }else if(topicTime==0){
                    $("#numFC").text("");
                    clearInterval(timer);
                }else {
                    $("#numFC").text("");
                }
                topicTime--
            }, topicNumT);
            num=(parseInt(numExcessive)-parseInt(num6)).toString();
        }else if(pens == "7"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num4)).toString();
            num5=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num5)).toString();
            num6=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num6)).toString();
            num7=additionFun(numExcessive);
            topicTime=13;
            arrT.push(num1);
            arrT.push(num2);
            arrT.push(-num3);
            arrT.push(num4);
            arrT.push(num5);
            arrT.push(-num6);
            arrT.push(num7);
            timer = setInterval(function () {
                if(topicTime==13){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num1);
                }else if(topicTime==11){
                    $("#numFC").addClass("numActive");$("#numFC").text("");$("#numFC").text(num2);
                }else if(topicTime==9){
                    $("#numFC").removeClass("numActive");$("#numFC").text("");$("#numFC").text(-num3);
                }else if(topicTime==7){
                    $("#numFC").addClass("numActive");$("#numFC").text(num4);
                }else if(topicTime==5){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num5);
                }else if(topicTime==3){
                    $("#numFC").addClass("numActive");$("#numFC").text(-num6);
                }else if(topicTime==1){
                    $("#numFC").removeClass("numActive");$("#numFC").text(num7);
                }else if(topicTime==0){
                    $("#numFC").text("");
                    clearInterval(timer);
                }else {
                    $("#numFC").text("");
                }
                topicTime--
            }, topicNumT);

            num=(parseInt(numExcessive)+parseInt(num7)).toString();
        }

    }

    $("#stepBtn1").on("click",function () {
        timer1 = setInterval(function () {
            CountDown();
        }, 1000);
        pensFun(pens);
        topicNum++;
        $("#step1").css({
            "display": "none"
        });

        $("#step2").css({
            "display": "block"
        });
        $("#step3").css({
            "display": "none"
        });
        $("#answer").val("");
        $("input").focus();
        beginTime=new Date().getTime();
        enter=true;

    });
    function setpBtn2Fun() {
        enter=false;
        spacer=true;
        endTime=new Date().getTime();
        time=(endTime-beginTime).toFixed(0);
        timeset.push(time);
        answer=$.trim($("#answer").val());
        stimidset.push(topicNum);
        type4set.push(digit);
        correctanswerset.push(num);
        numset.push(answer);
        radioset.push((22-parseInt(topicNumT/100)));
        commentset.push(arrT.join(","));
        beadFun(1,num);
        $("#time").text(time);
        if(num == answer){
            $("#yesNo").text("答对了");
            if(topicNumT <= 100){
                topicNumT=100
            }else {
                topicNumT=topicNumT-200;
            }

        }else {
            $("#yesNo").text("答错了");
            if(topicNumT >=2100){
                topicNumT =2100
            }else {
                topicNumT=topicNumT+200
            }

        }

        $("#step1").css({
            "display": "none"
        });

        $("#step2").css({
            "display": "none"
        });
        $("#step3").css({
            "display": "block"
        });
        $("#numFC").text("");
        topicTime=0;
        clearInterval(timer);
        NexTimer=setInterval(function () {
            NextFun();
        }, 1000);
    }
    $("#stepBtn2").on("click",function () {
        setpBtn2Fun();
    });

    $("#stepBtn3").on("click",function () {
        pensFun(pens);
        spacer=false;
        enter=true;
        $("#step1").css({
            "display": "none"
        });

        $("#step2").css({
            "display": "block"
        });
        $("#step3").css({
            "display": "none"
        });
        $("#answer").val("");
        $("input").focus();
        beginTime=new Date().getTime();

    });

    function NextFun() {
        if (NexTime > 0) {
            --NexTime;
        } else{
            clearInterval(NexTimer);
            NexTime=1;
            topicNum++;
            spacer=false;
            enter=true;
            pensFun(pens);
            $("#step1").css({
                "display": "none"
            });

            $("#step2").css({
                "display": "block"
            });
            $("#step3").css({
                "display": "none"
            });
            $("#answer").val("");
            $("input").focus();
            beginTime=new Date().getTime();
        }
    }
    $(document).keydown(function (event) {
        var e = event || window.event;
        var k = e.keyCode || e.which;
        if(k == 13){
            if(enter){
                setpBtn2Fun()
            }
        }
    });
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



