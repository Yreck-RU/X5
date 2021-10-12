
let p = 0;
let z = 0;
function adapuyt(){
	let rodit = $( "#port2" ).offset();
	let l1 = $( "#port1" ).offset();
	let l2 = $( "#port3" ).offset();
	let l3 = $( "#port4" ).offset();
	let l4 = $( "#port5" ).offset();
	let l5 = $( "#port6" ).offset();
	let l6 = $( "#port7" ).offset();
	let l7 = $( "#port8" ).offset();
	let l8 = $( "#port9" ).offset();
	let l9 = $( "#port10" ).offset();

	let cum1 = (+l1.top - +rodit.top)+ 10;
	$('#line1').css("top", ""+cum1+"px");

	let cum2 = (+l2.top - +rodit.top)+ 10;
	$('#line2').css("top", ""+cum2+"px");

	let cum3 = (+l3.top - +rodit.top)+ 10;
	$('#line3').css("top", ""+cum3+"px");

	let cum4 = (+l4.top - +rodit.top)+ 10;
	$('#line4').css("top", ""+cum4+"px");

	let cum5 = (+l5.top - +rodit.top)+ 10;
	$('#line5').css("top", ""+cum5+"px");

	let cum6 = (+l6.top - +rodit.top)+ 10;
	$('#line6').css("top", ""+cum6+"px");

	let cum7 = (+l7.top - +rodit.top)+ 10;
	$('#line7').css("top", ""+cum7+"px");

	let cum8 = (+l8.top - +rodit.top)+ 10;
	$('#line8').css("top", ""+cum8+"px");

	let cum9 = (+l9.top - +rodit.top)+ 10;
	$('#line9').css("top", ""+cum9+"px");
}
	

$(document).ready(function() {
	$('.playpause').click(function(event) {
		$('.playpause').toggleClass('activ');
	});
	$('.slaid-1-buttton').click(function(event) {
		$('.slaid-2').toggleClass('one');
		$('.slaid-1').toggleClass('off');
		$(".test").toggleClass('a1');
	});
	$('.slaid-2-buttton').click(function(event) {
		$('.slaid-2').toggleClass('off');
		$('.slaid-5').toggleClass('one');
		$(".test").removeClass('a1');
		$('.test').toggleClass('a2');

		$('.slaib-2-progresbar-img').toggleClass('s1');

		if ($("#adiv1").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-5-buttton').click(function(event) {
		$('.slaid-6').toggleClass('one');
		$('.slaid-5').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s2');
		$('.slaib-2-progresbar-img').removeClass('s1');

		if ($("#adiv2").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-6-buttton').click(function(event) {
		$('.slaid-7').toggleClass('one');
		$('.slaid-6').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s3');
		$('.slaib-2-progresbar-img').removeClass('s2');
		if ($("#adiv3").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-7-buttton').click(function(event) {
		$('.slaid-8').toggleClass('one');
		$('.slaid-7').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s4');
		$('.slaib-2-progresbar-img').removeClass('s3');
		if ($("#adiv4").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-8-buttton').click(function(event) {
		$('.slaid-9').toggleClass('one');
		$('.slaid-8').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s5');
		$('.slaib-2-progresbar-img').removeClass('s4');
		if ($("#adiv5").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-9-buttton').click(function(event) {
		$('.slaid-10').toggleClass('one');
		$('.slaid-9').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s6');
		$('.slaib-2-progresbar-img').removeClass('s5');
		if ($("#adiv6").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-10-buttton').click(function(event) {
		$('.slaid-11').toggleClass('one');
		$('.slaid-10').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s7');
		$('.slaib-2-progresbar-img').removeClass('s6');
		if ($("#adiv7").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-11-buttton').click(function(event) {
		$('.slaid-12').toggleClass('one');
		$('.slaid-11').toggleClass('off');
		$(".test").removeClass('a2');
		$('.test').toggleClass('a3');

		$('.slaib-2-progresbar-img').toggleClass('s8');
		$('.slaib-2-progresbar-img').removeClass('s7');
		if ($("#adiv8").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-12-buttton').click(function(event) {
		$('.slaid-3').toggleClass('one');
		$('.slaid-12').toggleClass('off');
		$(".test").removeClass('a3');
		$('.test').toggleClass('a4');

		$('.slaib-2-progresbar-img').toggleClass('s9');
		$('.slaib-2-progresbar-img').removeClass('s8');
		if ($("#adiv9").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-3-buttton').click(function(event) {
		$('.slaid-13').toggleClass('one');
		$('.slaid-3').toggleClass('off');
		$(".test").removeClass('a4');
		$('.test').toggleClass('a2');

		$('.slaib-2-progresbar-img').toggleClass('s10');
		$('.slaib-2-progresbar-img').removeClass('s9');

		$('.slaib-2-progresbar-img').removeClass('s1');
		$('.slaib-2-progresbar-img').toggleClass('s2');

		let name1 = $("#forms10 input[name=y1]").val();
		let name2 = $("#forms10 input[name=y2]").val();
		let name3 = $("#forms10 input[name=y3]").val();
		let name4 = $("#forms10 input[name=y4]").val();
		let name5 = $("#forms10 input[name=y5]").val();
		let name6 = $("#forms10 input[name=y6]").val();
		if (name1 == "б"||name1 == "Б") {
			z = z + 1;
		}
		if (name2 == "д"||name2 == "Д") {
			z = z + 1;
		}
		if (name3 == "в"||name3 == "В") {
			z = z + 1;
		}
		if (name4 == "е"||name4 == "Е") {
			z = z + 1;
		}
		if (name5 == "г"||name5 == "Г") {
			z = z + 1;
		}
		if (name6 == "а"||name6 == "А") {
			z = z + 1;
		}
		if (z == 6) {
			p = p + 1;
		}
	});

	$('.slaid-13-buttton').click(function(event) {
		$('.slaid-4').toggleClass('one');
		$('.slaid-13').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s11');
		$('.slaib-2-progresbar-img').removeClass('s10');


		if ($("#adiv10").is(":checked")) {
			p = p + 1;
		}
		if ($("#adiv11").is(":checked")) {
			p = p + 1;
		}
		if ($("#adiv12").is(":checked")) {
			p = p + 1;
		}
		if ($("#adiv13").is(":checked")) {
			p = p + 1;
		}
		if (p <= 4) {
			$('.slaid-16').toggleClass('one');
		} else if (p >= 5 && p <= 8) {
			$('.slaid-15').toggleClass('one');
		} else {
			$('.slaid-14').toggleClass('one');
		}

	});


	window.addEventListener('resize' , function (event){
		const viewport_width =Math.max(document.documentElement.clientWidth);
		if (viewport_width > 1200) {
			adapuyt();
		}
		if (viewport_width <= 1200) {
			adapuyt();
		}
		
	});
	
    /*$("body").children().each(function() {
        $(this).html($(this).html().replace(/&#8232;/g," "));
    });*/
});



function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
adapuyt();
