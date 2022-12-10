$(function() {
    $("#s").click(function (e) { 
        const un=$("#u").val();
    const ps=$("#p").val();
    localStorage.un =un;
    localStorage.ps=ps;
    $(".n").show();
    $(this).attr("disabled")="true";
    });
})