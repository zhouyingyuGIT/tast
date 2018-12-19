    <%@ page contentType="text/html; charset=UTF-8" %>
        <%@ page language="java" import="com.lattice.entity.*" %>
        <%@ page language="java" import="com.lattice.dao.*,java.util.*" %>
        <%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>五子棋</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
            <%
Users u=(Users)request.getSession().getAttribute("cu");
int uid=u.getUserid();
int taskid=Integer.parseInt(request.getParameter("taskid"));
String lan=request.getParameter("lan");
String targetpagename=request.getParameter("targetpagename");

int projectid=0;
if (!(request.getParameter("projectid")==null)) {
projectid=Integer.parseInt(request.getParameter("projectid"));
}

int codematerial=0;
if (!(request.getParameter("codematerial")==null)) {
codematerial=Integer.parseInt(request.getParameter("codematerial"));
}

int sumitcoids=u.getCoid();


Vector
<OPES_Task> ots=OPES_TaskDAO.getOPES_aTask(Integer.parseInt(request.getParameter("taskid")),lan);
    if (ots.size()==0)
    {
    response.sendRedirect("/lattice/"+targetpagename);
    return;
    }
    ots.get(0).setProjectid(Integer.parseInt(request.getParameter("projectid")));
    request.getSession().setAttribute("ot",ots.get(0));

    %>
<body>
<canvas id="chess" width="450px" height="450px"></canvas>
<script type="text/javascript">
    var chess = document.getElementById("chess");
    var context = chess.getContext('2d');

    var me = true ;
    var chessBoard = [] ;
    var over = false ;
    //  AI 赢法的数组
    var wins = [];
    // 赢法的统计数组
    var myWin = [] ;  //  我方
    var computerWin = [];  //计算机方

    for(var i = 0 ; i < 15 ;i++){
        chessBoard[i] = [];
        for(var j = 0 ; j < 15 ; j++){
            chessBoard[i][j] = 0 ;
        }
    }

    for(var i = 0 ; i < 15 ; i++)
    {
        wins[i] = [];
        for(var j = 0 ; j < 15 ; j++) {
            wins[i][j] = [];
        }
    }

    // 赢法总类的索引
    var count = 0 ;
    // 初始化所有的横线
    for(var i = 0 ; i < 15 ; i++)
    {
        for(var j = 0 ; j < 11 ; j++)
        {
            // 第0种赢法
            //wins[0][0][0] = true
            //wins[0][1][0] = true
            //wins[0][2][0] = true
            //wins[0][3][0] = true
            //wins[0][4][0] = true
            // 第0种赢法
            //wins[0][1][1] = true
            //wins[0][2][1] = true
            //wins[0][3][1] = true
            //wins[0][4][1] = true
            //wins[0][5][1] = true
            for(var k = 0 ; k < 5 ; k++){
                wins[i][j+k][count] = true ;
            }
            count++ ;
        }
    }

    // 统计所有的竖线
    for(var i = 0 ; i < 15 ; i++)
    {
        for(var j = 0 ; j < 11 ; j++)
        {
            for(var k = 0 ; k < 5 ; k++){
                wins[j+k][i][count] = true ;
            }
            count++ ;
        }
    }

    // 统计所有的斜线
    for(var i = 0 ; i < 11 ; i++)
    {
        for(var j = 0 ; j < 11 ; j++)
        {
            for(var k = 0 ; k < 5 ; k++){
                wins[i+k][j+k][count] = true ;
            }
            count++ ;
        }
    }


    // 统计所有的反斜线
    for(var i = 0 ; i < 11 ; i++)
    {
        for(var j = 14 ; j > 3 ; j--)
        {
            for(var k = 0 ; k < 5 ; k++){
                wins[i+k][j-k][count] = true ;
            }
            count++ ;
        }
    }

    console.log("count:"+count);

    for(var i = 0 ; i < count ; i++)
    {
        myWin[i]  = 0 ;
        computerWin[i] = 0 ;
    }

    context.strokeStyle = "#000";

    var logo = new Image();
    logo.src = "logo.jpg";
    logo.onload = function(){
        context.drawImage(logo , 0 , 0 , 450 , 450);
        drawChessBoard();
    }

    var drawChessBoard = function(){
        for(var i = 0 ; i < 15 ; i++){
            context.moveTo(15 + i * 30 , 15);
            context.lineTo(15 + i * 30 , 435) ;
            context.stroke();
            context.moveTo(15 , 15 + i * 30);
            context.lineTo(435 , 15 + i * 30);
            context.stroke();
        }
    }

    var oneStep = function(i , j, me){
        context.beginPath();
        context.arc(15 + i*30,15 + j*30,13,0 ,2 * Math.PI);
        context.closePath();
        var gradient = context.createRadialGradient(15 + i*30 + 2,15 + j*30 - 2,13,15 + i*30 + 2,15 + j*30 - 2,0);
        if(me){
            gradient.addColorStop(0,"#000");
            gradient.addColorStop(1,"#000");
        } else {
            gradient.addColorStop(0,"#eee");
            gradient.addColorStop(1,"#fff");
        }

        context.fillStyle = gradient;
        context.fill();
    }

    chess.onclick = function(e){
        if(over)
            return ;
        if(!me)
            return ;
        var x = e.offsetX ;
        var y = e.offsetY ;
        var i = Math.floor(x/30);
        var j = Math.floor(y/30);
        if(chessBoard[i][j] == 0)
        {
            oneStep(i,j,me);
            chessBoard[i][j] = 1 ;
            for(var k = 0 ; k < count ; k++){
                if(wins[i][j][k]){
                    myWin[k]++ ;
                    computerWin[k] = 6;  // 表示计算机在第k种赢法种类上不可能赢
                    if(myWin[k] == 5){
                        window.alert("你赢了");
                        over = true ;
                    }
                }
            }
            if(!over)
            {
                me = !me ;
                computerAI();
            }
        }
    }

    var computerAI = function()
    {
        var myScore = [] ;
        var computerScore = [];
        var max = 0 ; // 保存最高的分数
        var u = 0 , v = 0 ; //保存最高分点的坐标
        for(var i = 0 ; i < 15 ; i++)
        {
            myScore[i] = [];
            computerScore[i] = [];
            for(var j = 0 ; j < 15 ; j++)
            {
                myScore[i][j] = 0 ;
                computerScore[i][j] = 0 ;
            }
        }

        for(var i = 0 ; i < 15 ; i++)
        {
            for(var j = 0 ; j < 15 ; j++)
            {
                if(chessBoard[i][j] == 0)
                {
                    for(var k = 0 ; k < count ;k++)
                    {
                        if(wins[i][j][k] )
                        {
                            if(myWin[k] == 1)
                            {
                                myScore[i][j] += 200 ;
                            }
                            else if(myWin[k] == 2)
                            {
                                myScore[i][j] += 400;
                            }
                            else if(myWin[k] == 3)
                            {
                                myScore[i][j] += 800;
                            }
                            else if(myWin[k] == 4)
                            {
                                myScore[i][j] += 1000;
                            }

                            if(computerWin[k] == 1)
                            {
                                computerScore[i][j] += 220;
                            }
                            else if(computerWin[k] == 2)
                            {
                                computerScore[i][j] +=420 ;
                            }
                            else if(computerWin[k] == 3)
                            {
                                computerScore[i][j] +=820
                            }
                            else if(computerWin[k] == 4)
                            {
                                computerScore[i][j] +=2000;
                            }
                        }
                    }
                    if(myScore[i][j] > max)
                    {
                        max = myScore[i][j];
                        u = i ;
                        v = j ;
                    }
                    else if(myScore[i][j] == max)
                    {
                        if(computerScore[i][j] > computerScore[u][v])
                        {
                            u = i ;
                            v = j ;
                        }
                    }

                    if(computerScore[i][j] > max)
                    {
                        max = computerScore[i][j];
                        u = i ;
                        v = j ;
                    }
                    else if(computerScore[i][j] == max)
                    {
                        if(myScore[i][j] > myScore[u][v])
                        {
                            u = i ;
                            v = j ;
                        }
                    }
                }
            }
        }
        oneStep(u,v,false);
        chessBoard[u][v] = 2 ;

        for(var k = 0 ; k < count ; k++){
            if(wins[u][v][k]){
                computerWin[k]++ ;
                myWin[k] = 6;  // 表示计算机在第k种赢法种类上不可能赢
                if(computerWin[k] == 5){
                    window.alert("计算机赢了");
        console.log("myScore="+myScore);
        console.log("computerScore="+computerScore)
                    over = true ;
                }
            }
        }
        if(!over)
        {
            me = !me ;
        }
    }
</script>
</body>
</html>