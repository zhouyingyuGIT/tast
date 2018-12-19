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




