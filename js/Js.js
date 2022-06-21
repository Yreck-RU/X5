
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
	adapuyt();
	window.addEventListener('resize' , function (event){
		const viewport_width =Math.max(document.documentElement.clientWidth);
		if (viewport_width > 1200) {
			adapuyt();
		}
		if (viewport_width <= 1200) {
			adapuyt();
		}
	});

	$('.playpause').click(function(event) {
		$('.playpause').toggleClass('activ');
	});
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


const ButtonOne = document.querySelector('.button-one');
const ButtonTwo = document.querySelector('.button-two');

const TestBottom = document.querySelector('.test-bottom');
const Line = document.querySelector('.test-bottom__line');

const TestSlaid1 = document.querySelector('.test-slaid_1');
const TestSlaid2 = document.querySelector('.test-slaid_2');
const TestSlaid3 = document.querySelector('.test-slaid_3');
const TestSlaid4 = document.querySelector('.test-slaid_4');
const TestSlaid5 = document.querySelector('.test-slaid_5');
const TestSlaid6 = document.querySelector('.test-slaid_6');
const TestSlaid7 = document.querySelector('.test-slaid_7');
const TestSlaid8 = document.querySelector('.test-slaid_8');
const TestSlaid9 = document.querySelector('.test-slaid_9');
const TestSlaid10 = document.querySelector('.test-slaid_10');
const TestSlaid11 = document.querySelector('.test-slaid_11');
const TestSlaid12 = document.querySelector('.test-slaid_12');


const resultOne = document.querySelector('.test-slaid_result_one');
const resultTwo = document.querySelector('.test-slaid_result_two');
const resultThree = document.querySelector('.test-slaid_result_three');
if (ButtonOne) {
	ButtonOne.addEventListener("click", function (e) {
		TestBottom.classList.toggle('_active');
		TestSlaid2.classList.toggle('_active');
		TestSlaid1.classList.remove('_active');
	});
}
if (ButtonTwo) {
	let TestNumber = 1;
	ButtonTwo.addEventListener("click", function (e) {
		if (TestSlaid2.classList.contains('_active')) {
			Line.style.width ='9%';

			if (document.querySelector('#radio-2').checked == true) {
				TestNumber++;
			}

			TestSlaid2.classList.remove('_active');
			TestSlaid3.classList.toggle('_active');

		} else if (TestSlaid3.classList.contains('_active')) {
			Line.style.width ='18%';
			if (document.querySelector('#radio-6').checked == true) {
				TestNumber++;
			}
			
			TestSlaid3.classList.remove('_active');
			TestSlaid4.classList.toggle('_active');
			
		} else if (TestSlaid4.classList.contains('_active')) {
			Line.style.width ='27%';
			if (document.querySelector('#radio-10').checked == true) {
				TestNumber++;
			}
			
			TestSlaid4.classList.remove('_active');
			TestSlaid5.classList.toggle('_active');
			
		} else if (TestSlaid5.classList.contains('_active')) {
			Line.style.width ='36%';
			if (document.querySelector('#radio-11').checked == true) {
				TestNumber++;
			}
			
			TestSlaid5.classList.remove('_active');
			TestSlaid6.classList.toggle('_active');
			
		} else if (TestSlaid6.classList.contains('_active')) {
			Line.style.width ='45%';
			if (document.querySelector('#radio-18').checked == true) {
				TestNumber++;
			}
			
			TestSlaid6.classList.remove('_active');
			TestSlaid7.classList.toggle('_active');
			
		}else if (TestSlaid7.classList.contains('_active')) {
			Line.style.width ='54%';
			if (document.querySelector('#radio-21').checked == true) {
				TestNumber++;
			}
			
			TestSlaid7.classList.remove('_active');
			TestSlaid8.classList.toggle('_active');
			
		} else if (TestSlaid8.classList.contains('_active')) {
			Line.style.width ='63%';
			if (document.querySelector('#radio-26').checked == true) {
				TestNumber++;
			}
			
			TestSlaid8.classList.remove('_active');
			TestSlaid9.classList.toggle('_active');
			
		} else if (TestSlaid9.classList.contains('_active')) {
			Line.style.width ='72%';
			if (document.querySelector('#radio-28').checked == true) {
				TestNumber++;
			}
			
			TestSlaid9.classList.remove('_active');
			TestSlaid10.classList.toggle('_active');
			
		} else if (TestSlaid10.classList.contains('_active')) {
			Line.style.width ='81%';
			if (document.querySelector('#radio-33').checked == true) {
				TestNumber++;
			}
			
			TestSlaid10.classList.remove('_active');
			TestSlaid11.classList.toggle('_active');
			
		} else if (TestSlaid11.classList.contains('_active')) {
			Line.style.width ='90%';
			
			TestSlaid11.classList.remove('_active');
			TestSlaid12.classList.toggle('_active');
			
		} else if (TestSlaid12.classList.contains('_active')) {
			Line.style.width ='100%';

			if (TestNumber <= 4) { 
				TestSlaid12.classList.remove('_active');
				TestBottom.classList.remove('_active');

				resultThree.classList.toggle('_active');
			} else if (TestNumber >= 5 && TestNumber < 8) {
				TestSlaid12.classList.remove('_active');
				TestBottom.classList.remove('_active');

				resultTwo.classList.toggle('_active');
			} else if (TestNumber >= 8) {
				TestSlaid12.classList.remove('_active');
				TestBottom.classList.remove('_active');

				resultOne.classList.toggle('_active');
			}
		} 
	});
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}