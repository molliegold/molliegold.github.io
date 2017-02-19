$(document).ready(
	function(){
		$(".pop").effect("slide", "3000");

		$(".pop").hover(
			function(){
			$(".popHover").show();
		});
		$(".pop").hover(
			function(){
			$(".popSlide").hide();
			});
		$(".pop").hover(
			function(){
			$(this).css("background-color", "#8A496B");
			});
		$(".pop").click(
			function(){
			$(this).hide();
			});

		$(".swatchTitle").mouseenter(
			function(){
				$(this).find(".swatchBox").hide();
			});
		$(".swatchTitle").mouseleave(
			function(){
				$(this).find(".swatchBox").show();
			});
		$(".swatchTitle").mouseenter(
			function(){
				$(this).find(".actualSwatch").css("line-height","50px");
			});
		$(".swatchTitle").mouseleave(
			function(){
				$(this).find(".actualSwatch").css("line-height","250px");
			});
		$(".swatchTitle").mouseenter(
			function(){
				$(this).find(".description").show();
			});
		$(".swatchTitle").mouseleave(
			function(){
				$(".description").hide();
			});

		var colors = ['#E6E6FA', '#DCD0FF', '#CCCCFF', '#CDC8EF', '#D6CADD', '#D8B2D1', '#DDA0DD'],
   			i = 0;

		$("body").click(
			function(){ 
		    	$("#fixedHeader").css("backgroundColor", colors[i]);
		    i = (i==colors.length-1) ? 0 : (i+1);
			});
		$("body").click(
			function(){ 
		    	$("h2").css("color", colors[i]);
		    i = (i==colors.length-1) ? 0 : (i+1);
			});
		$("body").click(
			function(){
				$(".colorSwatch1, .colorSwatch2").css({"height" : "180px", "width" : "100px"});
			});
		$("body").click(
			function(){
				$(".topColorSwatch").css({"height" : "110px", "width" : "100px"});
			});
		$("body").click(
			function(){
				$(".colorSwatch1, .colorSwatch2").find("p").css("font-size", "12px");
			});
		$("body").click(
			function(){
				$(".drag").draggable();
			});
		$("body").one('click',
			function(){
				$(".colorSwatch1, .colorSwatch2").append("<p>Drag Me Around!</p>");
			});
	});