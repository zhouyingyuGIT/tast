$(function () {
    var tab;
    /*实拨时间*/
    var real_time;
    /*虚拨时间*/
    var dump_time;
    var start_time;
    var end_time;
    /*控制按键点击是否有效*/
    var if_btn1=true;
    var if_btn2=false;
    var if_btn3=false;
    /*用户输入结果*/
    var result_val;


    $("#type1").on("click",function () {
        tab=1;
        showHideFun(tab);
        $("#title").text("打百子/阶段一");
    });
    $("#type2").on("click",function () {
        tab=2;
        showHideFun(tab);
        $("#title").text("打百子/阶段二");
    });
    $("#type3").on("click",function () {
        tab=3;
        showHideFun(tab);
        $("#title").text("打百子/阶段三");
    });
    $("#type4").on("click",function () {
        tab=4;
        showHideFun(tab);
        $("#title").text("打百子/阶段四");
    });
    $("#type5").on("click",function () {
        tab=5;
        showHideFun(tab);
        $("#title").text("打百子/阶段五");
    });


    $("#stepBtn1").on("click",function () {
        alert("结束训练")
    });

    $("#step2Btn1").on("click",function () {
        if(if_btn1){
            if_btn1=false;
            start_time=new Date().getTime();
            $("#step2Btn1").css({
                "background-color": "#aaa",
                "border-color": "#aaa"
            });
            if_btn2=true;
        }
    });

    $("#step2Btn2").on("click",function () {
        if(if_btn2){
            if_btn2=false;
            end_time=new Date().getTime();
            real_time=(end_time-start_time).toFixed(0);
            $("#step2Btn2").css({
                "background-color": "#aaa",
                "border-color": "#aaa"
            });
            start_time=new Date().getTime();
            if_btn3=true;
        }
    });

    $("#step2Btn3").on("click",function () {
        if(if_btn3){
            if_btn3=false;
            end_time=new Date().getTime();
            dump_time=(end_time-start_time).toFixed(0);
            $("#step2Btn3").css({
                "background-color": "#aaa",
                "border-color": "#aaa"
            });
            $("#step1").css({
                display: "none"
            });
            $("#step2").css({
                display: "none"
            });
            $("#step3").css({
                display: "block"
            });
            $("#realTime").text(real_time);
            $("#dumpTime").text(dump_time);

        }
    });

    $("#step3Btn1").on("click",function () {
        if_btn1=true;
        if_btn2=false;
        if_btn3=false;
        $("#step2Btn1").css({
            "background-color": "#337ab7",
            "border-color": "#2e6da4"
        });
        $("#step2Btn2").css({
            "background-color": "#337ab7",
            "border-color": "#2e6da4"
        });
        $("#step2Btn3").css({
            "background-color": "#337ab7",
            "border-color": "#2e6da4"
        });


        $("#step1").css({
            display: "block"
        });
        $("#step2").css({
            display: "none"
        });
        $("#step3").css({
            display: "none"
        });
    });


    function resultFun(tab) {
        result_val=$.trim($("#result").val());
        if(tab == 1){
            if(result_val == "210"){
                console.log("答对了")
            }else {
                console.log("答错了")
            }
        }else {
            if(result_val == "0"){
                console.log("答对了")
            }else {
                console.log("答错了")
            }
        }
    }

    function showHideFun(tab){
        $("#result").val("");
        for(var i=1; i<6;i++){
            if(tab == i){
                $("#tab"+i).css({
                    display: "block"
                })
            }else {
                $("#tab"+i).css({
                    display: "none"
                })
            }

        };
        $("#step1").css({
            display: "none"
        });
        $("#step2").css({
            display: "block"
        });
        $("#step3").css({
            display: "none"
        });
    }




});