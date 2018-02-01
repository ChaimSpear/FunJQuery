$(function() { 

	$("#imgStarTrek").delay(400).animate (
		{
				"width":"800px",
				"height":"400px",
				"top":"200px",
				"left":"26px",

		},5000, "linear", function ()
		{
			$("#dvStarTrekText").slideDown(1400);
		}
	);
 
});