$("h1").addClass("big-title margin-50");

$("h1").click(function(){
    $("h1").css("color","purple");
});

$("button").text("Hehehe");

$("button").click(function(){
    $("h1").css("color", "purple")
});

$("input").keydown(function(event){
    console.log("event.key");

    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});