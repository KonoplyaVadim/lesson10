/**
 * Created by konoplya on 15.06.2017.
 */
//Task1
$(document).ready(function(){
    $("div:first").find("input").wrap("<form style='border:3px dashed red'></form>");
    //Task2
    $("p:contains('Клик')").on('click',function () {
        $(this).parent().attr({style:"border: 3px green solid; background-color: yellow"})
    });
    //Task3

    //Task4
    $("#sec").next("button").on("click",chrono);
    var counter=0;
    var chronoHandler;
    function chrono() {
        chronoHandler=setInterval(Count, 1000);
        $("#time").append('<button id="stop">Остановить секундомер</button>');
        $("button:contains('Остановить секундомер')").on("click",chronoStop);
    }
    function Count() {
        $("#sec").val(counter.toString());
        counter++;
    }
    function chronoStop(){
        counter=0;
        $("#sec").val(counter.toString());
        clearInterval(chronoHandler);
        //setTimeout(rem, 1000);
        //function rem(){
            //$("div").remove("button:contains('Остановить секундомер')");
            $("#stop").remove();
        //}
    }
    //Task5
    $("#bl").focus(function(){
        $(this).attr({style:"border: background-color:green",value:""}).val("");
    });
    $("#bl").blur(function checkInput(){
        if($(this).val().length==0) $(this).attr({style:"border: 3px red solid; background-color:red; color:white"}).val("Заполните поле");
        else $(this).css("border","3px solid green");
    });
    //Task6
    $("#pos").click(function(e){
        var coordX=e.clientX;
        var coordY=e.clientY;
        $(this).html("Координаты клика:<br />" + "x: " + coordX + "<br />y: " + coordY);
    });
    //Task7
    $("#hov").hover(function(){
        $(this).css("opacity", "0.5").append('<a href="#"><i style="color:white" class="fa fa-share" aria-hidden="true"></i></a>');
    },function () {
        $(this).css("opacity", "1");
        $("div>a").remove();
        }
    );
    //Task8
    var dat={name:"Иван",age:"18",phone:"123-45-67"};
    $("button:contains('получить данные')").on("click",dat,getInfo);
    function getInfo(e) {
        $("input[name=name]").val(e.data.name);
        $("input[name=age]").val(e.data.age);
        $("input[name=phone]").val(e.data.phone);
    }
    //Task9
    $("button:contains('получить разметку')").click(function () {
        $.ajax({
            url: "task9.xml",
            type: "GET",
            dataType: "xml",

            success: function (xml) {
                //$("#to").append($(xml).find("to").text());
                //$("#from").append($(xml).find("from").text());
                //$("#message").append($(xml).find("body").text());
                $("#forTab").append($(xml).find("note").html());
            },

            // в случае ошибки
            error: function (xhr, status, error) {
                // staus - возможные значения "timeout", "error", "abort", and "parsererror"
                alert("ERROR: " + xhr.status + " " + error);
            }
        });
    });
    $("button:contains('применить js')").click(function () {
        $.ajax({
            url: "js/task9.js",
            type: "GET",
            dataType: "script",

            success: function (xml) {
                //$("#to").append($(xml).find("to").text());
                //$("#from").append($(xml).find("from").text());
                //$("#message").append($(xml).find("body").text());
                $("#forTab").append($(xml).find("note").html());
            },

            // в случае ошибки
            error: function (xhr, status, error) {
                // staus - возможные значения "timeout", "error", "abort", and "parsererror"
                alert("ERROR: " + xhr.status + " " + error);
            }
        });
    });
    //Task10
    $("#forForm").load("forLoad.html #forLoad", function () {
        $("#loadMes").text("Форма загружена");
    });
});

