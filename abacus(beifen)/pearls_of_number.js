$(function(){
    var level="2";
    var num;
    var dui=[1,-2,2,-1];
    var duiNum;
    var cuo=[3,-4,4,-3];
    var cuoNum;
    var mix=[0,1,2,3,4,5,6,7,8,9];
    var max=[2,3,4,5,6,7,8];
    var beginTime;
    var endTime;
    var time;
    var spacer=false;
    var xuan=false;
    /*arr数组的序号*/
    var a=0;
    var arr = ["Q", "P","Q", "Q", "P","Q", "P","Q", "P", "P"];
    var timeset=[];
    var radioset=[];
    arr.sort(randomsort);
    $("#levelBox").on("click",".level",function(event){
        var target = $(event.target);
        $("#levelBox .level").removeClass("active");
        target.addClass("active");
        level=target.text();
    });
    $("#btn").on("click",function () {
        xuan=true;
        for(var i=0;i<level;i++){
            if(i==0){
                num=(max[Math.floor(Math.random()*max.length)]).toString()
            }else {
                num += (mix[Math.floor(Math.random()*mix.length)]).toString()
            }
        }
        beadFun(1,num);

        duiNum=(parseInt(num)+dui[Math.floor(Math.random()*dui.length)]).toString();
        cuoNum=(parseInt(num)+cuo[Math.floor(Math.random()*cuo.length)]).toString();

        if(arr[a]=="Q"){
            $("#dui").text(duiNum);
            $("#cuo").text(cuoNum);
        }else {
            $("#dui").text(cuoNum);
            $("#cuo").text(duiNum);
        }

        $("#selectBox").css({
            "display": "none"
        });
        $("#titleBox").css({
            "display": "block"
        });


        beginTime=new Date().getTime();
    });


    $(document).keydown(function(event){

        var e = event || window.event;

        var k = e.keyCode || e.which;
            if(k == 81){
                if(xuan){
                    radioset.push("Q");
                    if(arr[a]=="Q"){
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#res").text("答对了");
                        $("#time").text(time);
                        $("#selectBox").css({
                            "display": "none"
                        });
                        $("#titleBox").css({
                            "display": "none"
                        });
                        $("#resultBox").css({
                            "display": "block"
                        });
                    }else {
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#res").text("答错了");
                        $("#time").text(time);
                        $("#selectBox").css({
                            "display": "none"
                        });
                        $("#titleBox").css({
                            "display": "none"
                        });
                        $("#resultBox").css({
                            "display": "block"
                        });
                    }
                    spacer=true;
                    xuan=false;
                    console.log(spacer);
                    console.log(xuan)
                }
            }
            if(k == 80){

                if(xuan){
                    radioset.push("P");
                    if(arr[a]=="Q"){
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#res").text("答错了");
                        $("#time").text(time);
                        $("#selectBox").css({
                            "display": "none"
                        });
                        $("#titleBox").css({
                            "display": "none"
                        });
                        $("#resultBox").css({
                            "display": "block"
                        });
                    }else {
                        endTime=new Date().getTime();
                        time=(endTime-beginTime).toFixed(0);
                        timeset.push(time);
                        $("#res").text("答对了");
                        $("#time").text(time);
                        $("#selectBox").css({
                            "display": "none"
                        });
                        $("#titleBox").css({
                            "display": "none"
                        });
                        $("#resultBox").css({
                            "display": "block"
                        });
                    }
                    spacer=true;
                    xuan=false;
                    console.log(spacer)
                    console.log(xuan)
                }

            }

                if(k == 32){
                    if(spacer){
                        if(a<9){
                            a++;

                            for(var i=0;i<level;i++){
                                if(i==0){
                                    num=(max[Math.floor(Math.random()*max.length)]).toString()
                                }else {
                                    num += (mix[Math.floor(Math.random()*mix.length)]).toString()
                                }
                            }
                            beadFun(1,num);

                            duiNum=(parseInt(num)+dui[Math.floor(Math.random()*dui.length)]).toString();
                            cuoNum=(parseInt(num)+cuo[Math.floor(Math.random()*cuo.length)]).toString();

                            if(arr[a]=="Q"){
                                $("#dui").text(duiNum);
                                $("#cuo").text(cuoNum);
                            }else {
                                $("#dui").text(cuoNum);
                                $("#cuo").text(duiNum);
                            }

                            $("#selectBox").css({
                                "display": "none"
                            });
                            $("#titleBox").css({
                                "display": "block"
                            });
                            $("#resultBox").css({
                                "display": "none"
                            });

                            beginTime=new Date().getTime();
                            spacer=false;
                            xuan=true;
                        }else {
                            alert("训练结束")
                        }

                    }
                }
        return false;

    });


    $("#next").on("click",function () {

        if(a<9){
            a++;

            for(var i=0;i<level;i++){
                if(i==0){
                    num=(max[Math.floor(Math.random()*max.length)]).toString()
                }else {
                    num += (mix[Math.floor(Math.random()*mix.length)]).toString()
                }
            }
            beadFun(1,num);

            duiNum=(parseInt(num)+dui[Math.floor(Math.random()*dui.length)]).toString();
            cuoNum=(parseInt(num)+cuo[Math.floor(Math.random()*cuo.length)]).toString();

            if(arr[a]=="Q"){
                $("#dui").text(duiNum);
                $("#cuo").text(cuoNum);
            }else {
                $("#dui").text(cuoNum);
                $("#cuo").text(duiNum);
            }

            $("#selectBox").css({
                "display": "none"
            });
            $("#titleBox").css({
                "display": "block"
            });
            ;
            $("#resultBox").css({
                "display": "none"
            });

            beginTime=new Date().getTime();
            xuan=true;
            spacer=false;
        }else {
            alert("训练结束")
        }






    });




    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }


/*算盘*/
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