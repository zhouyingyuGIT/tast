$(function () {

    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }
    var arr = ["Q", "P","Q", "Q", "P","Q", "P","Q", "P", "P"];
    // var arr = ["Q", "V", "F", "G", "R","E", "S", "P"];
    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.sort(randomsort);
    console.log(arr);


    $("#btn").on("click",function () {
        var p=$("#text").val() ;
        beadFunX(7,p)
    });



    // beadFunX(2,"345");




    function beadFunX(n,num) {
        var digit;
        digit=num.toString().length;
        /*算盘复位*/
        for(var k=1;k<10;k++){
            $("#paX_"+n+"_"+k+" .bead:nth-child(1)").css({
                "display": "none"
            });
            $("#paX_"+n+"_"+k+" .bead:nth-child(2)").css({
                "display": "none"
            });
            $("#paX_"+n+"_"+k+" .bead:nth-child(3)").css({
                "display": "none"
            });
            $("#paX_"+n+"_"+k+" .bead:nth-child(4)").css({
                "display": "none"
            });
            $("#paX_"+n+"_"+k+" .bead:nth-child(5)").css({
                "display": "none"
            });
        }

        /*个位*/
        if(digit>0){
            var b1=num.slice(digit-1);
            if(b1>=5){
                $("#paX_"+n+"_1"+" .bead:nth-child(1)").css({
                    "display": "block"
                });
                if((b1-5)>0){
                    $("#paX_"+n+"_1"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_1"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_1"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_1"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_1"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_1"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_1"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_1"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }

        /*十位*/

        if(digit>1){
            var b1 = num.slice(digit-2,digit-1);
            if(b1>=5){
                $("#paX_"+n+"_2"+" .bead:nth-child(1)").css({"display": "block"})

                if((b1-5)>0){
                    $("#paX_"+n+"_2"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_2"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_2"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_2"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_2"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_2"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_2"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_2"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }

        /*百位*/
        if(digit>2){
            var b1=num.slice(digit-3,digit-2);
            if(b1>=5){
                $("#paX_"+n+"_3"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_3"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_3"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_3"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_3"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_3"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_3"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_3"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_3"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }

        /*千位*/
        if(digit>3){
            var b1=num.slice(digit-4,digit-3);
            if(b1>=5){
                $("#paX_"+n+"_4"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_4"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_4"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_4"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_4"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_4"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_4"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_4"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_4"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }

        /*万位*/
        if(digit>4){
            var b1=num.slice(digit-5,digit-4);
            if(b1>=5){
                $("#paX_"+n+"_5"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_5"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_5"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_5"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_5"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_5"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_5"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_5"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_5"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }
        /*十万位*/
        if(digit>5){
            var b1=num.slice(digit-6,digit-5);
            if(b1>=5){
                $("#paX_"+n+"_6"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_6"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_6"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_6"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_6"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_6"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_6"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_6"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_6"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }
        /*百万位*/
        if(digit>6){
            var b1=num.slice(digit-7,digit-6);
            if(b1>=5){
                $("#paX_"+n+"_7"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_7"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_7"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_7"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_7"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_7"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_7"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_7"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_7"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }
        /*千万位*/
        if(digit>7){
            var b1=num.slice(digit-8,digit-7);
            if(b1>=5){
                $("#paX_"+n+"_8"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_8"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_8"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_8"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_8"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_8"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_8"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_8"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_8"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }
        /*亿位*/
        if(digit>8){
            var b1=num.slice(digit-9,digit-8);
            if(b1>=5){
                $("#paX_"+n+"_9"+" .bead:nth-child(1)").css({"display": "block"})
                ;
                if((b1-5)>0){
                    $("#paX_"+n+"_9"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>1){
                    $("#paX_"+n+"_9"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>2){
                    $("#paX_"+n+"_9"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1-5)>3){
                    $("#paX_"+n+"_9"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }else {
                if((b1)>0){
                    $("#paX_"+n+"_9"+" .bead:nth-child(2)").css({
                        "display": "block"
                    });
                }
                if((b1)>1){
                    $("#paX_"+n+"_9"+" .bead:nth-child(3)").css({
                        "display": "block"
                    });
                }
                if((b1)>2){
                    $("#paX_"+n+"_9"+" .bead:nth-child(4)").css({
                        "display": "block"
                    });
                }
                if((b1)>3){
                    $("#paX_"+n+"_9"+" .bead:nth-child(5)").css({
                        "display": "block"
                    });
                }
            }
        }
    }

});