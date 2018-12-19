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
    var a=0;
    var numExcessive;
    var numArr=[1,4,2,3];
    var num1;
    var num2;
    var num3;
    var num4;
    var num5;
    var num6;
    var num7;


    $("#digitBox").on("click",".digit",function(event){
        var target = $(event.target);
        $("#digitBox .digit").removeClass("active");
        target.addClass("active");
        digit=target.text();
    });

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
    // 生成加数
    function additionFun(data) {
        var arr1 = data.split('');
        var numA = "";
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] == "1") {
                var numArr1 = [4];
                numA += (numArr1[Math.floor(Math.random() * numArr1.length)]).toString();
                continue;
            } else if (arr1[i] == "2") {
                var numArr2 = [3,4];
                numA += (numArr2[Math.floor(Math.random() * numArr2.length)]).toString();
                continue;
            } else if (arr1[i] == "3") {
                var numArr3 = [3,2,4];
                numA += (numArr3[Math.floor(Math.random() * numArr3.length)]).toString();
                continue;
            } else if (arr1[i] == "4") {
                var numArr4 = [3,2,4,1];
                numA += (numArr4[Math.floor(Math.random() * numArr4.length)]).toString();
                continue;
            }
        }

        return numA
    }
    // 生成减数
    function subtractionFun(data) {
        var arr2=data.split('');
        var numB = "";
        for (var i = 0; i < arr2.length; i++) {
            if(arr2[i] == "5"){
                var numArr1=[1,3,2,4];
                numB += (numArr1[Math.floor(Math.random()*numArr1.length)]).toString();
                continue;
            }else if(arr2[i] == "6"){
                var numArr2=[3,2,4];
                numB += (numArr2[Math.floor(Math.random()*numArr2.length)]).toString();
                continue;
            }else if(arr2[i] == "7"){
                var numArr3=[3,4];
                numB += (numArr3[Math.floor(Math.random()*numArr3.length)]).toString();
                continue;
            }else if(arr2[i] == "8"){
                var numArr4=[4];
                numB += (numArr4[Math.floor(Math.random()*numArr4.length)]).toString();
                continue;
            }
        }
        return numB
    }

    function pensFun(pens,digit) {
        num1=num1Fun(digit);
        num2="";
        num3="";
        num4="";
        num5="";
        num6="";
        num7="";
        showHideFun(pens);
        /*num2=additionFun(num1);
        numExcessive=(parseInt(num1)+parseInt(num2)).toString();
        num3=subtractionFun(numExcessive);
        $("#t1").text(num1);
        $("#t2").text(num2);
        $("#t3").text(-num3);*/
        if(pens == "3"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            $("#t1").text(num1);
            $("#t2").text(num2);
            $("#t3").text(-num3);
            num=(parseInt(numExcessive)-parseInt(num3)).toString();
        }else if(pens == "4"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            $("#t1").text(num1);
            $("#t2").text(num2);
            $("#t3").text(-num3);
            $("#t4").text(num4);
            num=(parseInt(numExcessive)+parseInt(num4)).toString();
        }else if(pens == "5"){
            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num4)).toString();
            num5=subtractionFun(numExcessive);
            $("#t1").text(num1);
            $("#t2").text(num2);
            $("#t3").text(-num3);
            $("#t4").text(num4);
            $("#t5").text(-num5);
            num=(parseInt(numExcessive)-parseInt(num5)).toString();
        }else if(pens == "6"){

            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num4)).toString();
            num5=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num5)).toString();
            num6=additionFun(numExcessive);
            $("#t1").text(num1);
            $("#t2").text(num2);
            $("#t3").text(-num3);
            $("#t4").text(num4);
            $("#t5").text(-num5);
            $("#t6").text(num6);
            num=(parseInt(numExcessive)+parseInt(num6)).toString();
        }else if(pens == "7"){

            num2=additionFun(num1);
            numExcessive=(parseInt(num1)+parseInt(num2)).toString();
            num3=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num3)).toString();
            num4=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num4)).toString();
            num5=subtractionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)-parseInt(num5)).toString();
            num6=additionFun(numExcessive);
            numExcessive=(parseInt(numExcessive)+parseInt(num6)).toString();
            num7=subtractionFun(numExcessive);
            $("#t1").text(num1);
            $("#t2").text(num2);
            $("#t3").text(-num3);
            $("#t4").text(num4);
            $("#t5").text(-num5);
            $("#t6").text(num6);
            $("#t7").text(-num7);
            num=(parseInt(numExcessive)-parseInt(num7)).toString();
        }

    }

    $("#stepBtn1").on("click",function () {
        pensFun(pens,digit);
        a++;
        $("#answer").val("");
        $("input").focus();
        $("#step1").css({
            "display": "none"
        });

        $("#step2").css({
            "display": "block"
        });
        $("#step3").css({
            "display": "none"
        });
        beginTime=new Date().getTime();
        enter=true;

    });

    $("#stepBtn2").on("click",function () {
        enter=false;
        spacer=true;
        // num=(parseInt(num1)+parseInt(num2)-parseInt(num3)).toString();
        answer=$.trim($("#answer").val());
        if(num == answer){
            $("#yesNo").text("答对了")
        }else {
            $("#yesNo").text("答错了")
        }
        beadFun(1,num);
        endTime=new Date().getTime();
        time=(endTime-beginTime).toFixed(0);
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
    });

    $("#stepBtn3").on("click",function () {
        if(a<10){
            a++;
            pensFun(pens,digit);
            $("#answer").val("");
            $("input").focus();
            $("#step1").css({
                "display": "none"
            });

            $("#step2").css({
                "display": "block"
            });
            $("#step3").css({
                "display": "none"
            });
            beginTime=new Date().getTime();
        }else {
            alert("训练结束")
        }

    });

    $(document).keydown(function (event) {
        var e = event || window.event;
        var k = e.keyCode || e.which;

        console.log(k);
        if(k == 13){
            if(enter){
                enter=false;
                spacer=true;
                // num=(parseInt(num1)+parseInt(num2)-parseInt(num3)).toString();
                answer=$.trim($("#answer").val());
                if(num == answer){
                    $("#yesNo").text("答对了")
                }else {
                    $("#yesNo").text("答错了")
                }
                beadFun(1,num);
                endTime=new Date().getTime();
                time=(endTime-beginTime).toFixed(0);
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
            }
        }




        if(k == 32){
            if(spacer){
                spacer=false;
                enter=true;
                if(a<10){
                    a++;
                    pensFun(pens,digit);
                    $("#answer").val("");
                    $("input").focus();
                    $("#step1").css({
                        "display": "none"
                    });

                    $("#step2").css({
                        "display": "block"
                    });
                    $("#step3").css({
                        "display": "none"
                    });
                    beginTime=new Date().getTime();
                }else {
                    alert("训练结束")
                }
            }
        }
    });

    function showHideFun(data) {
        if(data == "3"){
            $("#t1").css({
                "display": "block"
            });
            $("#t2").css({
                "display": "block"
            });
            $("#t3").css({
                "display": "block"
            });
            $("#t4").css({
                "display": "none"
            });
            $("#t5").css({
                "display": "none"
            });
            $("#t6").css({
                "display": "none"
            });
            $("#t7").css({
                "display": "none"
            });
        }else if(data == "4"){

            $("#t1").css({
                "display": "block"
            });
            $("#t2").css({
                "display": "block"
            });
            $("#t3").css({
                "display": "block"
            });
            $("#t4").css({
                "display": "block"
            });
            $("#t5").css({
                "display": "none"
            });
            $("#t6").css({
                "display": "none"
            });
            $("#t7").css({
                "display": "none"
            });
        }else if(data == "5"){

            $("#t1").css({
                "display": "block"
            });
            $("#t2").css({
                "display": "block"
            });
            $("#t3").css({
                "display": "block"
            });
            $("#t4").css({
                "display": "block"
            });
            $("#t5").css({
                "display": "block"
            });
            $("#t6").css({
                "display": "none"
            });
            $("#t7").css({
                "display": "none"
            });
        }else if(data == "6"){

            $("#t1").css({
                "display": "block"
            });
            $("#t2").css({
                "display": "block"
            });
            $("#t3").css({
                "display": "block"
            });
            $("#t4").css({
                "display": "block"
            });
            $("#t5").css({
                "display": "block"
            });
            $("#t6").css({
                "display": "block"
            });
            $("#t7").css({
                "display": "none"
            });
        }else if(data == "7"){

            $("#t1").css({
                "display": "block"
            });
            $("#t2").css({
                "display": "block"
            });
            $("#t3").css({
                "display": "block"
            });
            $("#t4").css({
                "display": "block"
            });
            $("#t5").css({
                "display": "block"
            });
            $("#t6").css({
                "display": "block"
            });
            $("#t7").css({
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



