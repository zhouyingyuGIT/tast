/*
	 js file for the game
*/

//全局对象，用来装载所有游戏相关的变量
var Game = {};

Game.deck = [
    'J1', 'J1',
    'Q1', 'Q1',
    'K1', 'K1',
    'J2', 'J2',
    'Q2', 'Q2',
    'K2', 'K2'
];


$(function(){

    //洗牌
    Game.deck.sort(function(){
        return 0.5 - Math.random();
    });

    //复制11个纸牌并追加到cards中
    for(var i=0; i<11; i++){
        $('.card:first-child').clone().appendTo('#cards');
    }

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


    /*function post_result() {
        // var numset=parseInt((100-Math.sqrt(timer/sd.blankNum))*sd.blankNum);
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
        //opes_result_data.time = timer;
        //opes_result_data.level = sd.blankNum;

        opes_result_data.timeset = "1";
        opes_result_data.radioset = "1";
        opes_result_data.buttonset = "1";
        opes_result_data.commentset = "1";
        console.log(opes_result_data);
        opes_result_data.numset = "1";
        console.log(opes_result_data);
        opes_post_result_util_js_opes_post_result(opes_result_data);
        return;


    }*/


});

function clickCard(){
    //如果已被翻2张牌,不做操作
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
        post_result()
        alert("完成了")
    };


}

