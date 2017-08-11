$(".submitPost").click(function(){
    $(".inputDiv").removeClass("hidden");
});
$(document).on("click", ".cancelBtn", function() {
    $(".inputDiv").addClass("hidden");
});
