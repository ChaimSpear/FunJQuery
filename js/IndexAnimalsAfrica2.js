$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);


//  $(".red-box").animate({"margin-left":"450px"});
//$(".red-box").animate({bottom: "0",
  //  right: "0",
    //position: "fixed"
//});

showCoverDiv = function (imgObj)
{

 var prevObj=	$( imgObj).prev()  ;

$( prevObj).slideDown( 2000);

}

RedAction = function()
{
$(".red-box-absolute").fadeOut(2000);

}

fadeAction= function(obj)
{
//$(obj).slideUp(2000);

 $( obj ).slideUp( 2000, function() {
   // alert("DONE");
    // Animation complete.
  });
	//alert('fadeAction')
}

});