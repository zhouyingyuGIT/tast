
$(function () {

    var grade=0;
    var gradeArr1=[3,4,5];
    var gradeArr2=[6,7,8,9,10];
    var gradeArr3=[11,12,13,14,15];
    var gradeArr4=[16,17,18,19,20];
    var gradeArr5=[21,22,23,24,25];
    var gradeArr6=[26,27,28,29,30];
    var totalA,totalB;
    var scoreA,scoreB;
    var deviateA,deviateB;
    var average;
    var btn=document.getElementById("btn");

    var div1=document.getElementById("div1");
    var h1=document.getElementById("h1");
    var h2=document.getElementById("h2");
    var t3=document.getElementById("t3");
    var title=document.getElementById("title");
    var div2=document.getElementById("div2");

    var div12=document.getElementById("div12");
    var h12=document.getElementById("h12");
    var h22=document.getElementById("h22");
    var t32=document.getElementById("t32");
    var title2=document.getElementById("title2");
    var div22=document.getElementById("div22");

    var score1=document.getElementById("score1");
    var score2=document.getElementById("score2");
    var score3=document.getElementById("score3");
    var score4=document.getElementById("score4");
    var score5=document.getElementById("score5");
    var score6=document.getElementById("score6");
    var deviate1=document.getElementById("deviate1");
    var deviate2=document.getElementById("deviate2");
    var deviate3=document.getElementById("deviate3");
    var deviate4=document.getElementById("deviate4");
    var deviate5=document.getElementById("deviate5");
    var deviate6=document.getElementById("deviate6");
    var average1=document.getElementById("average1");
    var average2=document.getElementById("average2");
    var average3=document.getElementById("average3");
    var average4=document.getElementById("average4");
    var average5=document.getElementById("average5");
    var average6=document.getElementById("average6");

    var totalDiv=document.getElementById("totalDiv");



    gradeFun();
    btn.onclick=function () {
        if(grade == 0){
            resultFun();
            // total=totalDiv.offsetWidth;
            // console.log(total);
            // console.log(div1.offsetWidth);
            // console.log(div2.offsetWidth);
            title.innerHTML="第二题";
        }else if(grade == 1){
            resultFun();
            // total=totalDiv.offsetWidth;
            // console.log(total);
            // console.log(div1.offsetWidth);
            // console.log(div2.offsetWidth);
            title.innerHTML="第三题";

        }else if(grade == 2){
            resultFun();
            // total=totalDiv.offsetWidth;
            // console.log(total);
            // console.log(div1.offsetWidth);
            // console.log(div2.offsetWidth);
            title.innerHTML="第四题";
        }else if(grade == 3){
            resultFun();
            // total=totalDiv.offsetWidth;
            // console.log(total);
            // console.log(div1.offsetWidth);
            // console.log(div2.offsetWidth);
            title.innerHTML="第五题";
        }else if(grade == 4){
            resultFun();
            // total=totalDiv.offsetWidth;
            // console.log(total);
            // console.log(div1.offsetWidth);
            // console.log(div2.offsetWidth);
            title.innerHTML="第六题";
            btn.innerHTML="确认";
        }else{
            resultFun();
            // total=totalDiv.offsetWidth;
            // console.log(total);
            // console.log(div1.offsetWidth);
            // console.log(div2.offsetWidth);
            alert("结束训练");
            return;
        }
        console.log($("#c1").width());
        console.log($("#answer1").width());
        console.log($("#c2").width());
        console.log($("#answer2").width());


        grade++;
        gradeFun()

    };
    function toPoint(data,i){
        var str=Number(data*100).toFixed(i);
        str+="%";
        return str;
    }

    function resultFun() {
        totalA=$("#total1").width();
        totalB=$("#total2").width();
        if(grade == 0){
            scoreA=(1-Math.abs($("#c1").width()-$("#answer1").width())/totalA)*5*(grade+1);
            deviateA=(Math.abs($("#c1").width()-$("#answer1").width())/totalA)*100;
            $("#score11").text(scoreA.toFixed(1));
            $("#deviate11").text(deviateA.toFixed(1));

            scoreB=(1-Math.abs($("#c2").width()-$("#answer2").width())/totalB)*5*(grade+1);
            deviateB=(Math.abs($("#c2").width()-$("#answer2").width())/totalB)*100;
            $("#score12").text(scoreB.toFixed(1));
            $("#deviate12").text(deviateB.toFixed(1));

            average=(parseFloat($("#deviate11").text())+parseFloat($("#deviate12").text()))/2;
            $("#average1").text(average.toFixed(1));


            if(average > 40){
                alert("平均偏离值太大提前结束训练")
            }

        }else if(grade == 1){
            scoreA=(1-Math.abs($("#c1").width()-$("#answer1").width())/totalA)*5*(grade+1);
            deviateA=(Math.abs($("#c1").width()-$("#answer1").width())/totalA)*100;
            $("#score21").text(scoreA.toFixed(1));
            $("#deviate21").text(deviateA.toFixed(1));

            scoreB=(1-Math.abs($("#c2").width()-$("#answer2").width())/totalB)*5*(grade+1);
            deviateB=(Math.abs($("#c2").width()-$("#answer2").width())/totalB)*100;
            $("#score22").text(scoreB.toFixed(1));
            $("#deviate22").text(deviateB.toFixed(1));

            average=(parseFloat($("#deviate21").text())+parseFloat($("#deviate22").text()))/2;
            $("#average2").text(average.toFixed(1));


            if(average > 40){
                alert("平均偏离值太大提前结束训练")
            }
        }else if(grade == 2){
            scoreA=(1-Math.abs($("#c1").width()-$("#answer1").width())/totalA)*5*(grade+1);
            deviateA=(Math.abs($("#c1").width()-$("#answer1").width())/totalA)*100;
            $("#score31").text(scoreA.toFixed(1));
            $("#deviate31").text(deviateA.toFixed(1));

            scoreB=(1-Math.abs($("#c2").width()-$("#answer2").width())/totalB)*5*(grade+1);
            deviateB=(Math.abs($("#c2").width()-$("#answer2").width())/totalB)*100;
            $("#score32").text(scoreB.toFixed(1));
            $("#deviate32").text(deviateB.toFixed(1));

            average=(parseFloat($("#deviate31").text())+parseFloat($("#deviate32").text()))/2;
            $("#average3").text(average.toFixed(1));

            if(average > 40){
                alert("平均偏离值太大提前结束训练")
            }
        }else if(grade == 3){
            scoreA=(1-Math.abs($("#c1").width()-$("#answer1").width())/totalA)*5*(grade+1);
            deviateA=(Math.abs($("#c1").width()-$("#answer1").width())/totalA)*100;
            $("#score41").text(scoreA.toFixed(1));
            $("#deviate41").text(deviateA.toFixed(1));

            scoreB=(1-Math.abs($("#c2").width()-$("#answer2").width())/totalB)*5*(grade+1);
            deviateB=(Math.abs($("#c2").width()-$("#answer2").width())/totalB)*100;
            $("#score42").text(scoreB.toFixed(1));
            $("#deviate42").text(deviateB.toFixed(1));

            average=(parseFloat($("#deviate41").text())+parseFloat($("#deviate42").text()))/2;
            $("#average4").text(average.toFixed(1));

            if(average > 40){
                alert("平均偏离值太大提前结束训练")
            }
        }else if(grade == 4){
            scoreA=(1-Math.abs($("#c1").width()-$("#answer1").width())/totalA)*5*(grade+1);
            deviateA=(Math.abs($("#c1").width()-$("#answer1").width())/totalA)*100;
            $("#score51").text(scoreA.toFixed(1));
            $("#deviate51").text(deviateA.toFixed(1));

            scoreB=(1-Math.abs($("#c2").width()-$("#answer2").width())/totalB)*5*(grade+1);
            deviateB=(Math.abs($("#c2").width()-$("#answer2").width())/totalB)*100;
            $("#score52").text(scoreB.toFixed(1));
            $("#deviate52").text(deviateB.toFixed(1));

            average=(parseFloat($("#deviate51").text())+parseFloat($("#deviate52").text()))/2;
            $("#average5").text(average.toFixed(1));
            if(average > 40){
                alert("平均偏离值太大提前结束训练")
            }
        }else{
            scoreA=(1-Math.abs($("#c1").width()-$("#answer1").width())/totalA)*5*(grade+1);
            deviateA=(Math.abs($("#c1").width()-$("#answer1").width())/totalA)*100;
            $("#score61").text(scoreA.toFixed(1));
            $("#deviate61").text(deviateA.toFixed(1));

            scoreB=(1-Math.abs($("#c2").width()-$("#answer2").width())/totalB)*5*(grade+1);
            deviateB=(Math.abs($("#c2").width()-$("#answer2").width())/totalB)*100;
            $("#score62").text(scoreB.toFixed(1));
            $("#deviate62").text(deviateB.toFixed(1));

            average=(parseFloat($("#deviate61").text())+parseFloat($("#deviate62").text()))/2;
            $("#average6").text(average.toFixed(1));
            if(average > 40){
                alert("平均偏离值太大提前结束训练")
            }
        }

    }

    function gradeFun() {
        var retA,retB;
        var index;
        if(grade == 0){
            $("#a1").width(toPoint(1/5,0));
            $("#b1").width(toPoint(2/5,0));
            retA=gradeArr1[Math.floor(Math.random()*gradeArr1.length)];
            $("#t1").text(retA);
            $("#answer1").width(toPoint(retA/5,0));
            $("#c1").width(40);

            index=gradeArr1.indexOf(retA);
            gradeArr1.splice(index,1);

            $("#a2").width(toPoint(1/5,0));
            $("#b2").width(toPoint(2/5,0));
            retB=gradeArr1[Math.floor(Math.random()*gradeArr1.length)];
            $("#t2").text(retB);
            $("#answer2").width(toPoint(retB/5,0));
            $("#c2").width(40);

        }else if(grade == 1){
            $("#a1").width(toPoint(1/10,0));
            $("#b1").width(toPoint(2/10,0));
            retA=gradeArr2[Math.floor(Math.random()*gradeArr2.length)];
            $("#t1").text(retA);
            $("#answer1").width(toPoint(retA/10,0));
            $("#c1").width(40);

            index=gradeArr2.indexOf(retA);
            gradeArr2.splice(index,1);

            $("#a2").width(toPoint(1/10,0));
            $("#b2").width(toPoint(2/10,0));
            retB=gradeArr2[Math.floor(Math.random()*gradeArr2.length)];
            $("#t2").text(retB);
            $("#answer2").width(toPoint(retB/10,0));
            $("#c2").width(40);
        }else if(grade == 2){
            $("#a1").width(toPoint(1/15,0));
            $("#b1").width(toPoint(2/15,0));
            retA=gradeArr3[Math.floor(Math.random()*gradeArr3.length)];
            $("#t1").text(retA);
            $("#answer1").width(toPoint(retA/15,0));
            $("#c1").width(40);

            index=gradeArr3.indexOf(retA);
            gradeArr3.splice(index,1);

            $("#a2").width(toPoint(1/15,0));
            $("#b2").width(toPoint(2/15,0));
            retB=gradeArr3[Math.floor(Math.random()*gradeArr3.length)];
            $("#t2").text(retB);
            $("#answer2").width(toPoint(retB/15,0));
            $("#c2").width(40);
        }else if(grade == 3){
            $("#a1").width(toPoint(1/20,0));
            $("#b1").width(toPoint(2/20,0));
            retA=gradeArr4[Math.floor(Math.random()*gradeArr4.length)];
            $("#t1").text(retA);
            $("#answer1").width(toPoint(retA/20,0));
            $("#c1").width(40);

            index=gradeArr4.indexOf(retA);
            gradeArr4.splice(index,1);

            $("#a2").width(toPoint(1/20,0));
            $("#b2").width(toPoint(2/20,0));
            retB=gradeArr4[Math.floor(Math.random()*gradeArr4.length)];
            $("#t2").text(retB);
            $("#answer2").width(toPoint(retB/20,0));
            $("#c2").width(40);
        }else if(grade == 4){
            $("#a1").width(toPoint(1/25,0));
            $("#b1").width(toPoint(2/25,0));
            retA=gradeArr5[Math.floor(Math.random()*gradeArr5.length)];
            $("#t1").text(retA);
            $("#answer1").width(toPoint(retA/25,0));
            $("#c1").width(40);

            index=gradeArr5.indexOf(retA);
            gradeArr5.splice(index,1);

            $("#a2").width(toPoint(1/25,0));
            $("#b2").width(toPoint(2/25,0));
            retB=gradeArr5[Math.floor(Math.random()*gradeArr5.length)];
            $("#t2").text(retB);
            $("#answer2").width(toPoint(retB/25,0));
            $("#c2").width(40);
        }else if(grade == 5){
            $("#a1").width(toPoint(1/30,0));
            $("#b1").width(toPoint(2/30,0));
            retA=gradeArr6[Math.floor(Math.random()*gradeArr6.length)];
            $("#t1").text(retA);
            $("#answer1").width(toPoint(retA/30,0));
            $("#c1").width(40);

            index=gradeArr6.indexOf(retA);
            gradeArr6.splice(index,1);

            $("#a2").width(toPoint(1/30,0));
            $("#b2").width(toPoint(2/30,0));
            retB=gradeArr6[Math.floor(Math.random()*gradeArr6.length)];
            $("#t2").text(retB);
            $("#answer2").width(toPoint(retB/30,0));
            $("#c2").width(40);
        }
        // console.log($("#a1").width())
        console.log($("#b1").width())
        // console.log($("#a2").width())
        // console.log($("#b2").width())

    }


    $("#ti1").on("click",function (e) {
        var X = e.clientX;
        var Y = e.clientY;
        var g=$("#c1").offset().left;
        $("#c1").width(X-g);
    });
    $("#ti2").on("click",function (e) {
        var X = e.clientX;
        var Y = e.clientY;
        var g=$("#c2").offset().left;
        $("#c2").width(X-g);
    });
    function drag(obj)
    {
        obj.onmousedown = function(e){
            e = e||event;
            var dir = "";  //设置好方向
            var firstX = e.clientX;  //获取第一次点击的横坐标
            var firstY = e.clientY;   //获取第一次点击的纵坐标
            var width = obj.offsetWidth;  //获取到元素的宽度
            var height = obj.offsetHeight;  //获取到元素的高度
            var Left = obj.offsetLeft;   //获取到距离左边的距离
            var Top = obj.offsetTop;   //获取到距离上边的距离
            //下一步判断方向距离左边的距离+元素的宽度减去自己设定的宽度，只要点击的时候大于在这个区间，他就算右边
            if(firstX>Left+width-30)
            {
                dir = "right";
            }
            //判断方向结束
            document.onmousemove = function(e){
                e = e||event;
                switch(dir)
                {
                    case "right":
                        obj.style["width"] = width+(e.clientX-firstX)+"px";
                        break;
                    case "left":
                        obj.style["width"] = width-(e.clientX-firstX)+"px";
                        obj.style["left"] = Left+(e.clientX-firstX)+"px";
                        break;
                    case "top":
                        obj.style["height"] = height-(e.clientY-firstY)+"px";
                        obj.style["top"] = Top+(e.clientY-firstY)+"px";
                        break;
                    case "down":
                        obj.style["height"] = height+(e.clientY-firstY)+"px";
                        break;
                }
            };
            obj.onmouseup = function(){

                document.onmousemove = null;
                document.onmouseup = null;

            };
            obj.onmouseout =function () {
                document.onmousemove = null;
                document.onmouseup = null;

            };

            return false;
        }
    }
    drag(document.getElementById("c1"));
    drag(document.getElementById("c2"));
});