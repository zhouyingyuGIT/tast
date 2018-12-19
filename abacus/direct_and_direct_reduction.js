$(function () {
    var digit="1";
    var pens="3";
    var answer;
    var numExcessive;
    var num;
    var time;
    var maxtime =120;
    var beginTime;
    var endTime;
    var spacer=false;
    var enter=false;
    var a=0;
    var numArr=[1,4,7,2,5,8,6,3,9];
    var num1;
    var num2;
    var num3;
    var num4;
    var num5;
    var num6;
    var num7;

    function CountDown() {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "距离结束还有" + minutes + "分" + seconds + "秒";
            $("#tir").text(msg)
            --maxtime;
        } else{
            clearInterval(timer);
            alert("时间到，结束!");
        }
    }
    function taskidFun(taskid) {
        if(taskid == "5494"){
            digit="1";

        }else if(taskid == "5495"){
            digit="2";
        }else if(taskid == "5496"){
            digit="3";
        }else if(taskid == "5499"){
            digit="4";
        }

        for (var i=1;i<8;i++){
            if(digit == i){
                console.log("digit");
                $("#digitBox .le:nth-child("+i+")").addClass("active");
            }else {
                $("#digitBox .le:nth-child("+i+")").removeClass("digit");
                $("#digitBox .le:nth-child("+i+")").removeClass("active");
                $("#digitBox .le:nth-child("+i+")").css({
                    "background-color": "#eee"
                });
            }
        }
    }
    $("#digitBox").on("click",".digit",function(event){
        var target = $(event.target);
        $("#digitBox .digit").removeClass("active");
        target.addClass("active");
        digit=target.text();
        console.log(digit)
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
                var numArr1 = [1,2,3,5];
                numA += (numArr1[Math.floor(Math.random() * numArr1.length)]).toString();
                continue;
            } else if (arr1[i] == "2") {
                var numArr2 = [1,2,5];
                numA += (numArr2[Math.floor(Math.random() * numArr2.length)]).toString();
                continue;
            } else if (arr1[i] == "3") {
                var numArr3 = [1,5];
                numA += (numArr3[Math.floor(Math.random() * numArr3.length)]).toString();
                continue;
            } else if (arr1[i] == "4") {
                var numArr4 = [5];
                numA += (numArr4[Math.floor(Math.random() * numArr4.length)]).toString();
                continue;
            } else if (arr1[i] == "5") {
                var numArr5 = [4, 2, 1, 3];
                numA += (numArr5[Math.floor(Math.random() * numArr5.length)]).toString();
                continue;
            } else if (arr1[i] == "6") {
                var numArr6 = [2, 1, 3];
                numA += (numArr6[Math.floor(Math.random() * numArr6.length)]).toString();
                continue;
            } else if (arr1[i] == "7") {
                var numArr7 = [2, 1];
                numA += (numArr7[Math.floor(Math.random() * numArr7.length)]).toString();
                continue;
            } else if (arr1[i] == "8") {
                var numArr8 = [1];
                numA += (numArr8[Math.floor(Math.random() * numArr8.length)]).toString();
                continue;
            } else if (arr1[i] == "9") {
                var numArr9 = [0];
                numA += (numArr9[Math.floor(Math.random() * numArr9.length)]).toString();
                continue;
            } else if (arr1[i] == "0") {
                var numArr9 = [1,2,3,4,5];
                numA += (numArr9[Math.floor(Math.random() * numArr9.length)]).toString();
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
            if(arr2[i] == "1"){
                var numArr1=[1];
                numB += (numArr1[Math.floor(Math.random()*numArr1.length)]).toString();
                continue;
            }else if(arr2[i] == "2"){
                var numArr2=[1,2];
                numB += (numArr2[Math.floor(Math.random()*numArr2.length)]).toString();
                continue;
            }else if(arr2[i] == "3"){
                var numArr3=[1,3,2];
                numB += (numArr3[Math.floor(Math.random()*numArr3.length)]).toString();
                continue;
            }else if(arr2[i] == "4"){
                var numArr4=[1,3,2,4];
                numB += (numArr4[Math.floor(Math.random()*numArr4.length)]).toString();
                continue;
            }else if(arr2[i] == "5"){
                var numArr5=[5];
                numB += (numArr5[Math.floor(Math.random()*numArr5.length)]).toString();
                continue;
            }else if(arr2[i] == "6"){
                var numArr6=[5,1];
                numB += (numArr6[Math.floor(Math.random()*numArr6.length)]).toString();
                continue;
            }else if(arr2[i] == "7"){
                var numArr7=[2,1,5];
                numB += (numArr7[Math.floor(Math.random()*numArr7.length)]).toString();
                continue;
            }else if(arr2[i] == "8"){
                var numArr8=[1,3,2,5];
                numB += (numArr8[Math.floor(Math.random()*numArr8.length)]).toString();
                continue;
            }else if(arr2[i] == "9"){
                var numArr9=[1,2,3,4,5];
                numB += (numArr9[Math.floor(Math.random()*numArr9.length)]).toString();
                continue;
            }else if(arr2[i] == "0"){
                var numArr9=[0];
                numB += (numArr9[Math.floor(Math.random()*numArr9.length)]).toString();
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
        var h;
        showHideFun(pens);
        switch(digit)
        {
            case "1":
                h=6;
                break;
            case "2":
                h=60;
                break;
            case "3":
                h=600;
                break;
            case "4":
                h=6000;
                break;
            case "5":
                h=60000;
                break;
            case "6":
                h=600000;
                break;
            default:
                h=6000000;
        }
        $("#t1").text(num1);
        for(var i=0;i<=pens;i++){





        }
        if(pens == "3"){
            if((parseInt(num1)-h)>=0){
                num2=subtractionFun(num1);
                $("#t2").text(-num2);
                numExcessive=(parseInt(num1)-parseInt(num2)).toString();
                num3=additionFun(numExcessive);
                $("#t3").text(num3);
                num=(parseInt(numExcessive)+parseInt(num3)).toString()
            }else {
                num2=additionFun(num1);
                numExcessive=(parseInt(num1)+parseInt(num2)).toString();
                $("#t2").text(num2);
                if((parseInt(numExcessive)-h)>=0){
                    num3=subtractionFun(numExcessive);
                    $("#t3").text(-num3);
                    num=(parseInt(numExcessive)-parseInt(num3)).toString()
                }else {
                    num3=additionFun(numExcessive);
                    $("#t3").text(num3);
                    num=(parseInt(numExcessive)+parseInt(num3)).toString()
                }
            }
        }else if(pens == "4"){
            if((parseInt(num1)-h)>=0){
                num2=subtractionFun(num1);
                $("#t2").text(-num2);
                numExcessive=(parseInt(num1)-parseInt(num2)).toString();
                num3=additionFun(numExcessive);
                $("#t3").text(num3);
                numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                if((parseInt(numExcessive)-h)>=0){
                    num4=subtractionFun(numExcessive);
                    $("#t4").text(-num4);
                    num=(parseInt(numExcessive)-parseInt(num4)).toString()
                }else {
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    num=(parseInt(numExcessive)+parseInt(num4)).toString()
                }
            }else {
                num2=additionFun(num1);
                numExcessive=(parseInt(num1)+parseInt(num2)).toString();
                $("#t2").text(num2);
                if((parseInt(numExcessive)-h)>=0){
                    num3=subtractionFun(numExcessive);
                    $("#t3").text(-num3);
                    numExcessive =(parseInt(numExcessive)-parseInt(num3)).toString();
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    num=(parseInt(numExcessive)+parseInt(num4)).toString()

                }else {
                    num3=additionFun(numExcessive);
                    $("#t3").text(num3);
                    numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num4=subtractionFun(numExcessive);
                        $("#t4").text(-num4);
                        num=(parseInt(numExcessive)-parseInt(num4)).toString()
                    }else {
                        num4=additionFun(numExcessive);
                        $("#t4").text(num4);
                        num=(parseInt(numExcessive)+parseInt(num4)).toString()
                    }
                }
            }
        }else if(pens == "5"){
            if((parseInt(num1)-h)>=0){
                num2=subtractionFun(num1);
                $("#t2").text(-num2);
                numExcessive=(parseInt(num1)-parseInt(num2)).toString();
                num3=additionFun(numExcessive);
                $("#t3").text(num3);
                numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                if((parseInt(numExcessive)-h)>=0){
                    num4=subtractionFun(numExcessive);
                    $("#t4").text(-num4);
                    numExcessive =(parseInt(numExcessive)-parseInt(num4)).toString();
                    num5=additionFun(numExcessive);
                    $("#t5").text(num5);
                    num=(parseInt(numExcessive)+parseInt(num5)).toString()
                }else {
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num5=subtractionFun(numExcessive);
                        $("#t5").text(-num5);
                        num=(parseInt(numExcessive)-parseInt(num5)).toString()
                    }else {
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        num=(parseInt(numExcessive)+parseInt(num5)).toString()
                    }
                }
            }else {
                num2=additionFun(num1);
                numExcessive=(parseInt(num1)+parseInt(num2)).toString();
                $("#t2").text(num2);
                if((parseInt(numExcessive)-h)>=0){
                    num3=subtractionFun(numExcessive);
                    $("#t3").text(-num3);
                    numExcessive =(parseInt(numExcessive)-parseInt(num3)).toString();
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num5=subtractionFun(numExcessive);
                        $("#t5").text(-num5);
                        num=(parseInt(numExcessive)-parseInt(num5)).toString()
                    }else {
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        num=(parseInt(numExcessive)+parseInt(num5)).toString()
                    }

                }else {
                    num3=additionFun(numExcessive);
                    $("#t3").text(num3);
                    numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num4=subtractionFun(numExcessive);
                        $("#t4").text(-num4);
                        numExcessive =(parseInt(numExcessive)-parseInt(num4)).toString();
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        num=(parseInt(numExcessive)+parseInt(num5)).toString()
                    }else {
                        num4=additionFun(numExcessive);
                        $("#t4").text(num4);
                        numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num5=subtractionFun(numExcessive);
                            $("#t5").text(-num5);
                            num=(parseInt(numExcessive)-parseInt(num5)).toString()
                        }else {
                            num5=additionFun(numExcessive);
                            $("#t5").text(num5);
                            num=(parseInt(numExcessive)+parseInt(num5)).toString()
                        }
                    }
                }
            }
        }else if(pens == "6"){
            if((parseInt(num1)-h)>=0){
                num2=subtractionFun(num1);
                $("#t2").text(-num2);
                numExcessive=(parseInt(num1)-parseInt(num2)).toString();
                num3=additionFun(numExcessive);
                $("#t3").text(num3);
                numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                if((parseInt(numExcessive)-h)>=0){
                    num4=subtractionFun(numExcessive);
                    $("#t4").text(-num4);
                    numExcessive =(parseInt(numExcessive)-parseInt(num4)).toString();
                    num5=additionFun(numExcessive);
                    $("#t5").text(num5);
                    numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num6=subtractionFun(numExcessive);
                        $("#t6").text(-num6);
                        num=(parseInt(numExcessive)-parseInt(num6)).toString()
                    }else {
                        num6=additionFun(numExcessive);
                        $("#t6").text(num6);
                        num=(parseInt(numExcessive)+parseInt(num6)).toString()
                    }


                }else {
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num5=subtractionFun(numExcessive);
                        $("#t5").text(-num5);
                        numExcessive =(parseInt(numExcessive)-parseInt(num5)).toString();
                        num6=additionFun(numExcessive);
                        $("#t6").text(num6);
                        num=(parseInt(numExcessive)+parseInt(num6)).toString()
                    }else {
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num6=subtractionFun(numExcessive);
                            $("#t6").text(-num6);
                            num=(parseInt(numExcessive)-parseInt(num6)).toString()
                        }else {
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            num=(parseInt(numExcessive)+parseInt(num6)).toString()
                        }
                    }
                }
            }else {
                num2=additionFun(num1);
                numExcessive=(parseInt(num1)+parseInt(num2)).toString();
                $("#t2").text(num2);
                if((parseInt(numExcessive)-h)>=0){
                    num3=subtractionFun(numExcessive);
                    $("#t3").text(-num3);
                    numExcessive =(parseInt(numExcessive)-parseInt(num3)).toString();
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num5=subtractionFun(numExcessive);
                        $("#t5").text(-num5);
                        numExcessive =(parseInt(numExcessive)-parseInt(num5)).toString();
                        num6=additionFun(numExcessive);
                        $("#t6").text(num6);
                        num=(parseInt(numExcessive)+parseInt(num6)).toString()
                    }else {
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num6=subtractionFun(numExcessive);
                            $("#t6").text(-num6);
                            num=(parseInt(numExcessive)-parseInt(num6)).toString()
                        }else {
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            num=(parseInt(numExcessive)+parseInt(num6)).toString()
                        }
                    }

                }else {
                    num3=additionFun(numExcessive);
                    $("#t3").text(num3);
                    numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num4=subtractionFun(numExcessive);
                        $("#t4").text(-num4);
                        numExcessive =(parseInt(numExcessive)-parseInt(num4)).toString();
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num6=subtractionFun(numExcessive);
                            $("#t6").text(-num6);
                            num=(parseInt(numExcessive)-parseInt(num6)).toString()
                        }else {
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            num=(parseInt(numExcessive)+parseInt(num6)).toString()
                        }
                    }else {
                        num4=additionFun(numExcessive);
                        $("#t4").text(num4);
                        numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num5=subtractionFun(numExcessive);
                            $("#t5").text(-num5);
                            numExcessive =(parseInt(numExcessive)-parseInt(num5)).toString();
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            num=(parseInt(numExcessive)+parseInt(num6)).toString()
                        }else {
                            num5=additionFun(numExcessive);
                            $("#t5").text(num5);
                            numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                            if((parseInt(numExcessive)-h)>=0){
                                num6=subtractionFun(numExcessive);
                                $("#t6").text(-num6);
                                num=(parseInt(numExcessive)-parseInt(num6)).toString()
                            }else {
                                num6=additionFun(numExcessive);
                                $("#t6").text(num6);
                                num=(parseInt(numExcessive)+parseInt(num6)).toString()
                            }
                        }
                    }
                }
            }
        }else if(pens == "7"){
            if((parseInt(num1)-h)>=0){
                num2=subtractionFun(num1);
                $("#t2").text(-num2);
                numExcessive=(parseInt(num1)-parseInt(num2)).toString();
                num3=additionFun(numExcessive);
                $("#t3").text(num3);
                numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                if((parseInt(numExcessive)-h)>=0){
                    num4=subtractionFun(numExcessive);
                    $("#t4").text(-num4);
                    numExcessive =(parseInt(numExcessive)-parseInt(num4)).toString();
                    num5=additionFun(numExcessive);
                    $("#t5").text(num5);
                    numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num6=subtractionFun(numExcessive);
                        $("#t6").text(-num6);
                        numExcessive =(parseInt(numExcessive)-parseInt(num6)).toString();
                        num7=additionFun(numExcessive);
                        $("#t7").text(num7);
                        num=(parseInt(numExcessive)+parseInt(num7)).toString()
                    }else {
                        num6=additionFun(numExcessive);
                        $("#t6").text(num6);
                        numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num7=subtractionFun(numExcessive);
                            $("#t7").text(-num7);
                            num=(parseInt(numExcessive)-parseInt(num7)).toString()
                        }else {
                            num7=additionFun(numExcessive);
                            $("#t7").text(num7);
                            num=(parseInt(numExcessive)+parseInt(num7)).toString()
                        }
                    }


                }else {
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num5=subtractionFun(numExcessive);
                        $("#t5").text(-num5);
                        numExcessive =(parseInt(numExcessive)-parseInt(num5)).toString();
                        num6=additionFun(numExcessive);
                        $("#t6").text(num6);
                        numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num7=subtractionFun(numExcessive);
                            $("#t7").text(-num7);
                            num=(parseInt(numExcessive)-parseInt(num7)).toString()
                        }else {
                            num7=additionFun(numExcessive);
                            $("#t7").text(num7);
                            num=(parseInt(numExcessive)+parseInt(num7)).toString()
                        }
                    }else {
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num6=subtractionFun(numExcessive);
                            $("#t6").text(-num6);
                            numExcessive =(parseInt(numExcessive)-parseInt(num6)).toString();
                            num7=additionFun(numExcessive);
                            $("#t7").text(num7);
                            num=(parseInt(numExcessive)+parseInt(num7)).toString()
                        }else {
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                            if((parseInt(numExcessive)-h)>=0){
                                num7=subtractionFun(numExcessive);
                                $("#t7").text(-num7);
                                num=(parseInt(numExcessive)-parseInt(num7)).toString()
                            }else {
                                num7=additionFun(numExcessive);
                                $("#t7").text(num7);
                                num=(parseInt(numExcessive)+parseInt(num7)).toString()
                            }
                        }
                    }
                }
            }else {
                num2=additionFun(num1);
                numExcessive=(parseInt(num1)+parseInt(num2)).toString();
                $("#t2").text(num2);
                if((parseInt(numExcessive)-h)>=0){
                    num3=subtractionFun(numExcessive);
                    $("#t3").text(-num3);
                    numExcessive =(parseInt(numExcessive)-parseInt(num3)).toString();
                    num4=additionFun(numExcessive);
                    $("#t4").text(num4);
                    numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num5=subtractionFun(numExcessive);
                        $("#t5").text(-num5);
                        numExcessive =(parseInt(numExcessive)-parseInt(num5)).toString();
                        num6=additionFun(numExcessive);
                        $("#t6").text(num6);
                        numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num7=subtractionFun(numExcessive);
                            $("#t7").text(-num7);
                            num=(parseInt(numExcessive)-parseInt(num7)).toString()
                        }else {
                            num7=additionFun(numExcessive);
                            $("#t7").text(num7);
                            num=(parseInt(numExcessive)+parseInt(num7)).toString()
                        }
                    }else {
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num6=subtractionFun(numExcessive);
                            $("#t6").text(-num6);
                            numExcessive =(parseInt(numExcessive)-parseInt(num6)).toString();
                            num7=additionFun(numExcessive);
                            $("#t7").text(num7);
                            num=(parseInt(numExcessive)+parseInt(num7)).toString()
                        }else {
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                            if((parseInt(numExcessive)-h)>=0){
                                num7=subtractionFun(numExcessive);
                                $("#t7").text(-num7);
                                num=(parseInt(numExcessive)-parseInt(num7)).toString()
                            }else {
                                num7=additionFun(numExcessive);
                                $("#t7").text(num7);
                                num=(parseInt(numExcessive)+parseInt(num7)).toString()
                            }
                        }
                    }

                }else {
                    num3=additionFun(numExcessive);
                    $("#t3").text(num3);
                    numExcessive =(parseInt(numExcessive)+parseInt(num3)).toString();
                    if((parseInt(numExcessive)-h)>=0){
                        num4=subtractionFun(numExcessive);
                        $("#t4").text(-num4);
                        numExcessive =(parseInt(numExcessive)-parseInt(num4)).toString();
                        num5=additionFun(numExcessive);
                        $("#t5").text(num5);
                        numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num6=subtractionFun(numExcessive);
                            $("#t6").text(-num6);
                            numExcessive =(parseInt(numExcessive)-parseInt(num6)).toString();
                            num7=additionFun(numExcessive);
                            $("#t7").text(num7);
                            num=(parseInt(numExcessive)+parseInt(num7)).toString()
                        }else {
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                            if((parseInt(numExcessive)-h)>=0){
                                num7=subtractionFun(numExcessive);
                                $("#t7").text(-num7);
                                num=(parseInt(numExcessive)-parseInt(num7)).toString()
                            }else {
                                num7=additionFun(numExcessive);
                                $("#t7").text(num7);
                                num=(parseInt(numExcessive)+parseInt(num7)).toString()
                            }
                        }
                    }else {
                        num4=additionFun(numExcessive);
                        $("#t4").text(num4);
                        numExcessive =(parseInt(numExcessive)+parseInt(num4)).toString();
                        if((parseInt(numExcessive)-h)>=0){
                            num5=subtractionFun(numExcessive);
                            $("#t5").text(-num5);
                            numExcessive =(parseInt(numExcessive)-parseInt(num5)).toString();
                            num6=additionFun(numExcessive);
                            $("#t6").text(num6);
                            numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                            if((parseInt(numExcessive)-h)>=0){
                                num7=subtractionFun(numExcessive);
                                $("#t7").text(-num7);
                                num=(parseInt(numExcessive)-parseInt(num7)).toString()
                            }else {
                                num7=additionFun(numExcessive);
                                $("#t7").text(num7);
                                num=(parseInt(numExcessive)+parseInt(num7)).toString()
                            }
                        }else {
                            num5=additionFun(numExcessive);
                            $("#t5").text(num5);
                            numExcessive =(parseInt(numExcessive)+parseInt(num5)).toString();
                            if((parseInt(numExcessive)-h)>=0){
                                num6=subtractionFun(numExcessive);
                                $("#t6").text(-num6);
                                numExcessive =(parseInt(numExcessive)-parseInt(num6)).toString();
                                num7=additionFun(numExcessive);
                                $("#t7").text(num7);
                                num=(parseInt(numExcessive)+parseInt(num7)).toString()
                            }else {
                                num6=additionFun(numExcessive);
                                $("#t6").text(num6);
                                numExcessive =(parseInt(numExcessive)+parseInt(num6)).toString();
                                if((parseInt(numExcessive)-h)>=0){
                                    num7=subtractionFun(numExcessive);
                                    $("#t7").text(-num7);
                                    num=(parseInt(numExcessive)-parseInt(num7)).toString()
                                }else {
                                    num7=additionFun(numExcessive);
                                    $("#t7").text(num7);
                                    num=(parseInt(numExcessive)+parseInt(num7)).toString()
                                }
                            }
                        }
                    }
                }
            }
        }

    }

    $("#stepBtn1").on("click",function () {
        timer = setInterval(function () {
            CountDown();
        }, 1000);
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



