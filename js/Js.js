


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
	let testItem = document.querySelector('._item');

	ButtonTwo.addEventListener("click", function (e) {
		if (TestSlaid2.classList.contains('_active')) {
			Line.style.width ='9%';
			testItem.innerText = 2;

			if (document.querySelector('#radio-2').checked == true) {
				TestNumber++;
			}

			TestSlaid2.classList.remove('_active');
			TestSlaid3.classList.toggle('_active');

		} else if (TestSlaid3.classList.contains('_active')) {
			Line.style.width ='18%';
			testItem.innerText = 3;
			if (document.querySelector('#radio-6').checked == true) {
				TestNumber++;
			}
			
			TestSlaid3.classList.remove('_active');
			TestSlaid4.classList.toggle('_active');
			
		} else if (TestSlaid4.classList.contains('_active')) {
			Line.style.width ='27%';
			testItem.innerText = 4;
			if (document.querySelector('#radio-10').checked == true) {
				TestNumber++;
			}
			
			TestSlaid4.classList.remove('_active');
			TestSlaid5.classList.toggle('_active');
			
		} else if (TestSlaid5.classList.contains('_active')) {
			Line.style.width ='36%';
			testItem.innerText = 5;
			if (document.querySelector('#radio-11').checked == true) {
				TestNumber++;
			}
			
			TestSlaid5.classList.remove('_active');
			TestSlaid6.classList.toggle('_active');
			
		} else if (TestSlaid6.classList.contains('_active')) {
			Line.style.width ='45%';
			testItem.innerText = 6;
			if (document.querySelector('#radio-18').checked == true) {
				TestNumber++;
			}
			
			TestSlaid6.classList.remove('_active');
			TestSlaid7.classList.toggle('_active');
			
		}else if (TestSlaid7.classList.contains('_active')) {
			Line.style.width ='54%';
			testItem.innerText = 7;
			if (document.querySelector('#radio-21').checked == true) {
				TestNumber++;
			}
			
			TestSlaid7.classList.remove('_active');
			TestSlaid8.classList.toggle('_active');
			
		} else if (TestSlaid8.classList.contains('_active')) {
			Line.style.width ='63%';
			testItem.innerText = 8;
			if (document.querySelector('#radio-26').checked == true) {
				TestNumber++;
			}
			
			TestSlaid8.classList.remove('_active');
			TestSlaid9.classList.toggle('_active');
			
		} else if (TestSlaid9.classList.contains('_active')) {
			Line.style.width ='72%';
			testItem.innerText = 9;
			if (document.querySelector('#radio-28').checked == true) {
				TestNumber++;
			}
			
			TestSlaid9.classList.remove('_active');
			TestSlaid10.classList.toggle('_active');
			
		} else if (TestSlaid10.classList.contains('_active')) {
			Line.style.width ='81%';
			testItem.innerText = 10;
			if (document.querySelector('#radio-33').checked == true) {
				TestNumber++;
			}
			
			TestSlaid10.classList.remove('_active');
			TestSlaid11.classList.toggle('_active');
			
		} else if (TestSlaid11.classList.contains('_active')) {
			Line.style.width ='90%';
			testItem.innerText = 11;
			
			TestSlaid11.classList.remove('_active');
			TestSlaid12.classList.toggle('_active');
			
		} else if (TestSlaid12.classList.contains('_active')) {
			Line.style.width ='100%';
			testItem.innerText = 12;

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