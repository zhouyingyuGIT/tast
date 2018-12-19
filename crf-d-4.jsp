<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" import="com.lattice.entity.*"%>
<%@ page language="java" import="com.lattice.dao.*,java.util.*"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>


<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CRF</title>

  <link href="./bootstrap.css" rel="stylesheet">
  <link href="./crf.css" rel="stylesheet">
  <script src="/lattice/js/jquery-1.8.2.min.js"></script>
  <SCRIPT src="/lattice/js/Statistics/Statistics.js" type=text/javascript></SCRIPT>
  <script src="/lattice/js/oneui/opes_post_result_util.js"></script>

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
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
  if (!(request.getParameter("codematerial")==null))  {
  codematerial=Integer.parseInt(request.getParameter("codematerial"));
}

int sumitcoids=u.getCoid();


Vector<OPES_Task> ots=OPES_TaskDAO.getOPES_aTask(Integer.parseInt(request.getParameter("taskid")),lan);
if (ots.size()==0)
  {
response.sendRedirect("/lattice/"+targetpagename);
return; 
}
ots.get(0).setProjectid(Integer.parseInt(request.getParameter("projectid")));
request.getSession().setAttribute("ot",ots.get(0));

%>
    <body>
      <div class="container c" id='c'>
        <h1>D 量表评分（续4）</h1>
        <form class="form-horizontal" role="form" id="result" name="result" method="post"
        action="/lattice/OPESHandler?type=formal">
        <div class="form-group">
          <label for="" class="col-sm-3 control-label title">4.日常生活活动能力量表(ADL)</label>
          
        </div>
        <div class="form-group">
          <p class='col-sm-12 '><span style="margin-right: 20px;">1—自己完全可以做</span>      2—可以做但有些困难</p>
          <p class='col-sm-12 '><span style="margin-right: 20px;">3—有较大困难需要帮助</span>  4—完全需要帮助</p>
          <label for="" class="col-sm-12 control-label title">
            填写日期：20
            <input type="text" class="" name='d-4-21'>
            年
            <input type="text" class="" name='d-4-22'>
            月
            <input type="text" class="" name='d-4-23'>
            日
          </label>
        </div>

        <table class='table'>
          <thead>
            <tr>
              <th>问题</th>
              <th>完成情况</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.自己搭公共汽车</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-1" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-1" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-1" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-1" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>2.到家（病区）附近的地方去走走</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-2" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-2" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-2" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-2" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>3.自己做饭（打饭）</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-3" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-3" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-3" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-3" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>4.做家务（收拾用物）</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-4" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-4" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-4" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-4" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>5.吃药</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-5" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-5" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-5" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-5" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>6.吃饭</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-6" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-6" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-6" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-6" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>7.穿脱衣服</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-7" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-7" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-7" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-7" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>8.梳头、刷牙</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-8" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-8" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-8" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-8" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>9.洗自己的衣服</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-9" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-9" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-9" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-9" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>10.在平坦的室内走动</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-10" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-10" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-10" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-10" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>11.上下楼梯</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-11" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-11" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-11" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-11" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>12.上下床、坐下或站起</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-12" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-12" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-12" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-12" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>13.提水煮饭或洗澡</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-13" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-13" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-13" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-13" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>14.洗澡（水已别人放好）</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-14" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-14" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-14" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-14" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>15.剪脚趾甲</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-15" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-15" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-15" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-15" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>16.逛街、购物</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-16" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-16" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-16" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-16" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>17.定时去厕所</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-17" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-17" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-17" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-17" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>18.打电话</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-18" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-18" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-18" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-18" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>19.处理自己的钱财</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-19" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-19" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-19" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-19" value="4"> 4 
                </label>
              </td>
            </tr>

            <tr>
              <td>20.独自在家</td>
              <td>
                <label class="radio-inline">
                  <input type="radio" name="d-4-20" value="1"> 1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-20" value="2"> 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-20" value="3"> 3 
                </label>
                <label class="radio-inline">
                  <input type="radio" name="d-4-20" value="4"> 4 
                </label>
              </td>
            </tr>            
          </tbody>
        </table>

        <div class="form-group">
          <label for="" class="col-sm-12 control-label title">
            评分
            <input type="text" class="" id="num_1" name='d-4-24' disabled="disabled"  value="0" style="text-align: center">
            (自动计算，不须填写)            
          </label>
        </div>
        <table class='table'>
          <thead>
            <tr>
              <th>自理能力等级</th>
              <th>自理能力分数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>完全依赖</td>
              <td>50-80分</td>
            </tr>
            <tr>
              <td>部分依赖</td>
              <td>20-50分</td>
            </tr>
            <tr>
              <td>完全自理</td>
              <td>0-20分</td>
            </tr>
            

          </tbody>
        </table>

        <div class="form-group">
          <label for="" class="col-sm-2 control-label title"></label>
          <div class="col-sm-10">
            <button type="button" id='submit_1' class="btn btn-default">提交</button>
          </div>
        </div>
      </form>
    </div>

    <script src="./jquery-2.1.4.js"></script>
    <script src="./bootstrap.js"></script>
  </body>
  </html>
  <script type="text/javascript">

//-----自动计算总分模块start
$('input').click(function(){
  var name_tmp=$(this).attr('name');
  name_tmp=name_tmp.substr(0,3);
  if(name_tmp=='d-4'){
    var num_1=compute(name_tmp);
    $('#num_1').val(num_1);

  }
});
function compute(name){
  var num_all=0; 
  var radio = $('input[type=radio]');
  var radio_name = $.unique($.map(radio, function(e){
    return $(e).attr('name');
  }));
  for(var i=0; i<radio_name.length; i++){
    if(radio_name[i].substr(0,3)==name&&getvalue($('input[name='+radio_name[i]+']'))!=''&&getvalue($('input[name='+radio_name[i]+']'))!=undefined&&getvalue($('input[name='+radio_name[i]+']'))!=null){
      num_all+= parseInt(getvalue($('input[name='+radio_name[i]+']')));
    }




  }
  return num_all;

}  








//------自动计算总分模块end

var commentset = '';
var numset = '';

function save(){
  var radio = $('input');
  var flag_r = 0;
  empty_warning='';
  

var result=new Object();


  var radio_name = $.unique($.map(radio, function(e){
    return $(e).attr('name');
  }));
  for(var i=0; i<radio_name.length; i++){
    if($('input[name='+radio_name[i]+']').attr('type')=='text'||$('input[name='+radio_name[i]+']').attr('type')=='num'){
      var value = $('input[name='+radio_name[i]+']').val();
      
    }else{
      var value =getvalue($('input[name='+radio_name[i]+']'));

    }


    if(value === ''){
      empty_warning+=radio_name[i]+';\n';
    }else{
      result[radio_name[i]] = value;

    }

  }  

  commentset = result_format(result);
  numset = '123456789';
  if(empty_warning!=''&&empty_warning!=null){
    empty(empty_warning);
    return;
  }
  alert("*****" + numset + "#####" + commentset);
  post_result();



  }



  </script>

  <script type="text/javascript">
//------------------------------------通用js代码---------------------------------


$('#submit_1').on('click', function(){
  save();
});

$('.radio-yes').on('click', function(){
  $(this).parents('.form-group').next().show(500);
});

$('.radio-no, .no-idea').on('click', function(){
  $(this).parents('.form-group').next().hide(500);
});



function empty(xx){
  if(xx==''||xx==undefined||xx==null){ 
    alert('有未填选项，请完成后提交!');
    return;
  }
  alert('有未填选项，请完成后提交:\n'+xx);
  return;
}



function add_result_to_form(id, value){
 var elem = document.createElement("input");
 elem.setAttribute("type", "text");
 elem.setAttribute("id", id);
 elem.setAttribute("name", id);
 elem.setAttribute("value", value);     
 document.getElementById("result").appendChild(elem);
}


function post_result() {

  var opes_result_data={};  

 opes_result_data.taskid=<%=taskid%>;
  opes_result_data.sumitcoids=<%=sumitcoids%>;
  opes_result_data.targetpagename="<%=targetpagename%>";
  opes_result_data.codematerial=<%=codematerial%>;
  opes_result_data.uid=<%=uid%>;
  opes_result_data.lan="<%=lan%>";
  opes_result_data.projectid=<%=projectid%>;

    //////////////////////////////////////////////////////////////////
    opes_result_data.duration=0;
    opes_result_data.timeaverage=Math.round(0); 
    
    ///////////////////////////////////////////////////////////////////
    //以下判断总题数
    var all_input = $('input');
    var string_num='';
    all_input = $.unique($.map(all_input, function(e){
      return $(e).attr('name');
    }));
    for (var i = 1; i <= all_input.length; i++) {
      string_num+=(i)+';';
    }
    opes_result_data.type4set =string_num;
    opes_result_data.stimidset = string_num;
    opes_result_data.correctanswerset = "";
    opes_result_data.numset=numset;
    opes_result_data.timeset="";      
    opes_result_data.radioset="";    
    opes_result_data.buttonset = ""; 
    opes_result_data.commentset=commentset; 
    opes_post_result_util_js_opes_post_result(opes_result_data);
    return;
    

  }


  function result_format(result){  
    var msg =""; 
    var obj= result; 
    for(var name in obj){  
      msg += obj[name]+"{"+name+"};";  
    } ;
    msg=(msg.slice(msg.length-1)==';')?msg.slice(0,-1):msg;
    return msg;  
  }  




  function getvalue(shuzu) {
    var res = "";
    for (var i = 0; i < shuzu.length; i++) {
      if (shuzu[i].checked) {
        res = shuzu[i].value;
      }
    }
    return res;
  }

  // checkbox
  function getCheckBoxValue(shuzu) {
    var res = "";
    for (var i = 0; i < shuzu.length; i++) {
      if (shuzu[i].checked) {
        res = res + shuzu[i].value + ",";
      }
    }
    res=(res.slice(res.length-1)==',')?res.slice(0,-1):res;
    return res;
  };
  function is_null(val){
    if(val===''||val==undefined) return true;
    return false;
  }
  




  </script>