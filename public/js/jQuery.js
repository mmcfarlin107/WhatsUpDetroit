$(".submitPost").click(function(){
    $(".inputDiv").removeClass("hidden");
});
// $("cancelBtn").click(function(){
$(document).on("click", ".cancelBtn", function() {
  // console.log("aksdflsakdjf;laksdjf");
    $(".inputDiv").addClass("hidden");
});
