<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page language="java" import="com.lattice.entity.*" %>
<%@ page language="java" import="com.lattice.dao.*,java.util.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!--<!DOCTYPE html>-->
<html>
<head>
	<meta charset="utf-8"/>
	<title>纸牌记忆游戏</title>
	<!--<link href='http://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>-->
	<link rel="stylesheet" href="game.css"/>
    <SCRIPT src="/lattice/js/Statistics/Statistics.js" type=text/javascript></SCRIPT>
    <script src="/lattice/js/oneui/opes_post_result_util.js"></script>
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
	<audio id="soundOver">
		<source src="sounds/over.wav"/>
		<source src="sounds/over.ogg"/>
	</audio>
	<audio id="soundActive">
		<source src="sounds/active.mp3"/>
		<source src="sounds/active.ogg"/>
	</audio>

	<header>
		<h1>纸牌记忆游戏</h1>
	</header>

	<section id="gameTable">
		<div id="cards">
			<div class="card">
				<div class="face front"></div>
				<div class="face back"></div>
			</div>
		</div>
	</section>
	
	<footer>
		<h3>练习使用html5+CSS3制作2D游戏. Hao.Wu</h3>
	</footer>
</body>

	<script type="text/javascript" src="jquery-1.7.2.js"></script>
	<script type="text/javascript">

        /*
         js file for the game
    */

        //全局对象，用来装载所有游戏相关的变量



        $(function(){
            var Game = {};
            var beginTime;
            var timer;
            var commentset=[];
            var buttonset=[];
            Game.deck = [
                'J1', 'J1',
                'Q1', 'Q1',
                'K1', 'K1',
                'J2', 'J2',
                'Q2', 'Q2',
                'K2', 'K2'
            ];

            //洗牌
            Game.deck.sort(function(){
            beginTime = new Date().getTime();
                return 0.5 - Math.random();
            });
            commentset=Game.deck;

            //复制11个纸牌并追加到cards中
            for(var i=0; i<11; i++){
                $('.card:first-child').clone().appendTo('#cards');
            }



            // console.log(commentset.reverse());

            $('#cards').children().each(function(index){
                $(this).css({
                    "left": ($(this).width()+20) * (index%4),
                    "top" : ($(this).height()+20) * Math.floor(index/4)
                });

                //从数组中取出一张牌得到其花色
                //花色其实是依靠类和css选择器来实现的
                var pattern = Game.deck.pop();

                //依次添加花色,也就是通过添加类
                $(this).find('.back').addClass(pattern);
                $(this).attr('data-pattern', pattern);

                $(this).click(clickCard);
            });

            Game.soundOver = document.getElementById('soundOver');
            Game.soundOver.volume = .4;
            Game.soundActive = document.getElementById('soundActive');
            Game.soundActive.volume = .4;

            $('.card')
                .hover(function(){
                    Game.soundOver.currentTime = 0;
                    Game.soundOver.play();
                },function(){
                    Game.soundOver.pause();
                })
                .click(function(){
                    Game.soundActive.currentTime = 0;
                    Game.soundActive.play();
                });

            function clickCard(){
                //如果已被翻2张牌,不做操作
                buttonset.push($(this).attr("data-pattern"));
                if($('.flipped').size>1){
                    return;
                }
                //翻牌
                $(this).addClass('flipped');

                //如果翻第二张牌,进行匹配检查
                if($('.flipped').size()==2){
                    setTimeout(checkPattern, 500);
                }
            }

            function checkPattern(){
                if(isMatch()){
                    //从flipped删除，添加到removed中
                    $('.flipped').removeClass('flipped').addClass('removed');

                    //从DOM中删除
                    $('.removed').bind("webkitTransitionEnd", removeMatched);
                }
                else{
                    $('.flipped').removeClass('flipped');

                }
            }

            function isMatch(){
                var flippedCards = $('.flipped');
                var pattern0 = $(flippedCards[0]).data('pattern');
                var pattern1 = $(flippedCards[1]).data('pattern');

                return (pattern0 == pattern1);
            }

            function removeMatched(){
                $('.removed').remove();

                if($('.card').length == 0){
                    timer=((new Date().getTime()) - beginTime) / 1000;
                    post_result();

                    alert("完成了")
                };


            }

            function post_result() {
                var numset = parseInt(180 - timer);
                var opes_result_data = {};
                opes_result_data.taskid =<%= taskid %>;
                opes_result_data.sumitcoids =<%= sumitcoids %>;
                opes_result_data.targetpagename = "<%=targetpagename%>";
                opes_result_data.codematerial =<%= codematerial %>;
                opes_result_data.uid =<%= uid %>;
                opes_result_data.lan = "<%=lan%>";
                opes_result_data.projectid =<%= projectid %>;

                opes_result_data.duration = 0;
                opes_result_data.timeaverage = Math.round(0);

                //以下判断总题数
                opes_result_data.type4set = "1";
                opes_result_data.stimidset = "1";
                opes_result_data.correctanswerset = "1";

                opes_result_data.timeset = parseInt(timer).toString();
                opes_result_data.radioset = "1";
                opes_result_data.buttonset = buttonset.join(";");
                opes_result_data.commentset = commentset;
                opes_result_data.numset = numset.toString();
                opes_post_result_util_js_opes_post_result(opes_result_data);
                return;


            }



        });





    </script>

</html>