    <%@ page contentType="text/html; charset=UTF-8" %>
        <%@ page language="java" import="com.lattice.entity.*" %>
        <%@ page language="java" import="com.lattice.dao.*,java.util.*" %>
        <%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>JQuery拼图小游戏</title>
    <link rel="stylesheet" href="puzzleGame.css" />
        <SCRIPT src="/lattice/js/Statistics/Statistics.js" type=text/javascript></SCRIPT>
        <script src="/lattice/js/oneui/opes_post_result_util.js"></script>
    <script src="https://cdn.bootcss.com/jquery/2.1.3/jquery.min.js"></script>
    <script src="puzzleGame.js"></script>

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
    <div id="wrap">
        <div id="character">
            <ul>
                <li id="gameRule"> 游戏介绍：
                    <p>1、点击游戏难度以更改</p>
                    <p>2、点击开始游戏，打乱图片</p>
                    <p>3、交换图片位置，复原图片</p>
                </li>
            </ul>
            <ul class="orgimage">
                <img src="zly.png">
            </ul>
        </div>
        <div id="content">
            <ul>
                <li id="start"> <span><button class="button">开始游戏</button></span> </li>
                <li id="level">
                    <span><button class="button">难度选择:</button>
                        <select class="target">
                            <option value='{"row":2,"col":2}'>2 * 2</option>
                            <option value='{"row":3,"col":3}' selected="selected">3 * 3</option>
                            <option value='{"row":4,"col":4}'>4 * 4</option>
                            <option value='{"row":5,"col":5}'>5 * 5</option>
                            <option value='{"row":6,"col":6}'>6 * 6</option>
                            <option value='{"row":7,"col":7}'>7 * 7</option>
                            <option value='{"row":8,"col":8}'>8 * 8</option>
                            <option value='{"row":9,"col":9}'>9 * 9</option>
                        </select>
                    </span>
                </li>
            </ul>
            <div id="imgArea"></div>
        </div>
    </div>
</body>
    <script type="text/javascript">

        $(function() {
            var level=3;
            var beginTime;
            var time;
            var pg = new puzzleGame(
                '#imgArea',
                'zly.png'
            )

            //检测游戏状态
            function checkGameStart(noGame, hasGame) {
                if (pg.getGameStatus()) {
                    //游戏复位
                    if (confirm('已经在游戏中，确定要重新开始？')) {
                        hasGame()
                        beginTime = new Date().getTime();
                    }
                } else {
                    noGame()
                    beginTime = new Date().getTime();
                }
            }

            $("#start").click(function() {
                var $button = $(this).find('button')
                checkGameStart(function() {
                    pg.startGame(function(){
                        time=((new Date().getTime()) - beginTime) / 1000;
                        post_result()

                        alert('真棒，这都没难倒你，恭喜成功完成本次游戏！！！')
                    })
                    $button.text('游戏中')
                }, function() {
                    pg.resetGame()
                    $button.text('游戏开始')
                })
            })

            $('.target').change(function(evt) {
                var $button = $("#start").find('button')
                var $val = $.parseJSON($(this).val())
                level=$.parseJSON($(this).val()).col
                checkGameStart(function() {
                    pg.setGameLevel($val.row, $val.col)
                }, function() {
                    pg.resetGame($val.row, $val.col)
                    $button.text('游戏开始')
                })
            })

            function post_result() {
                var numset=parseInt((100-Math.sqrt(time/level))*level);
                var opes_result_data = {};

                opes_result_data.taskid =<%= taskid %>;
                opes_result_data.sumitcoids =<%= sumitcoids %>;
                opes_result_data.targetpagename = "<%=targetpagename%>";
                opes_result_data.codematerial =<%= codematerial %>;
                opes_result_data.uid =<%= uid %>;
                opes_result_data.lan = "<%=lan%>";
                opes_result_data.projectid =<%= projectid %>;

                //////////////////////////////////////////////////////////////////
                opes_result_data.duration = 0;
                opes_result_data.timeaverage = Math.round(0);

                ///////////////////////////////////////////////////////////////////
                //以下判断总题数
                opes_result_data.type4set = "1";
                opes_result_data.stimidset = "1";
                opes_result_data.correctanswerset = "1";

                opes_result_data.timeset = parseInt(time).toString();
                opes_result_data.radioset = "1";
                opes_result_data.buttonset = "1";
                opes_result_data.commentset = level.toString();
                opes_result_data.numset = numset.toString();
                console.log(opes_result_data);
                opes_post_result_util_js_opes_post_result(opes_result_data);
                return;


            }

        });
    </script>
</html>
