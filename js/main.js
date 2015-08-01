 "use strict";
/* VARIABLES */
var preLoaderView = $('.preLoaderView'),
	pleaseWaitWrapper = $('.pleaseWaitWrapper'),
	readyToLaunch = $('.readyToLaunch'),
	svgBackGroundComplete = $('.svgBackGroundComplete'),
	setGalleryViewCounter = 0,
	zeroPageCounter = 0,
	timeoutID,
	myVivus,
	thirdPageVivus,
	fullpage = $('#fullpage'),
	mainContantWrapper = $('.mainContantWrapper'),
	secondPageHeader = $('.secondPage header'),
	secondPageIconsWrapper = $('.secondPageIconsWrapper'),
	backSvgWrapperDrawCounter = 0,
	leftSvgHeader = $('.leftSvgHeader'),
	rightSvgHeader = $('.rightSvgHeader'),
	thirdPageGalleryWrapper = $('.thirdPageGalleryWrapper'),
	thirdPageGalleryReady = $('.thirdPageGalleryReady'),
	thirdPageGalleryScetch = $('.thirdPageGalleryScetch'),
	thirdPageGalleryReadyIcon = $('.thirdPageGalleryReadyIcon'),
	thirdPageGalleryScetchIcon = $('.thirdPageGalleryScetchIcon'),
	zeroPageQuestionWrapper = $('.zeroPageQuestionWrapper'),
	firstQuestion = $('.firstQuestion'),
	firstQuestionMid = $('.firstQuestionMid'),
	firstQuestionEnd = $('.firstQuestionEnd'),
	secondQuestion = $('.secondQuestion'),
	thirdQuestion = $('.thirdQuestion'),
	zeroPageBg = $('.zeroPageBg'),
	arrowDown = $('.arrowDown'),
	arrowUp = $('.arrowUp'),
	arrowUpDown = $('.arrowUpDown'),
	arrowUpDownRight = $('.arrowUpDownRight'),
	arrowUpDownLeft = $('.arrowUpDownLeft'),
	hottestQuestionWrapperFirstPage = $('.hottestQuestionWrapperFirstPage'),
	hottestQuestionFirstPage = $('.hottestQuestionFirstPage'),
	
	firstOffer = $('.firstOffer'),
	firstPageSaleWrapper = $('.firstPageSaleWrapper'),
	firstPageSaleIcon = $('.firstPageSaleIcon'),
	firstPageSaleContext = $('.firstPageSaleContext'),
	firstPageMedalOne = $('.firstPageMedalOne'),

	secondOffer = $('.secondOffer'),
	firstPageMedalTwo = $('.firstPageMedalTwo'),
	firstPagePresentWrapper = $('.firstPagePresentWrapper'),
	firstPagePresentIcon = $('.firstPagePresentIcon'),
	firstPagePresentContext = $('.firstPagePresentContext'),

	thirdOffer = $('.thirdOffer'),
	firstPageMedalThree = $('.firstPageMedalThree'),
	firstPageCreditWrapper = $('.firstPageCreditWrapper'),
	firstPageCreditIcon = $('.firstPageCreditIcon'),
	firstPageCreditContext = $('.firstPageCreditContext');

/* SVG ANIMATION  */
var drawSvgMainTheme = function(){
		myVivus = new Vivus('svgBackGroundDrawingId', {
	    type: 'oneByOne',
	    duration: 2000
		},
	    function(){
	    	console.log('MAIN SVG BG DONE');
	    });
};

var drawSvgThirdPage = function(){
	var svg = new Walkway({
	  selector: '#backSvgWrapperDraw',
	  duration: '5000',
	  easing: function (t) {
	   return t<.5 ? 2*t*t : -1+(4-2*t)*t
	  }
	});
svg.draw();
};

/* MAIN APP STARTER */
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); 
    allAnimationStartPosition();
    drawSvgMainTheme();
    delayedStart();
    console.log('ONLOAD EVENT FIRES'); 
},false);

function delayedStart() {
  timeoutID = window.setTimeout(startApplication, 1000);
  console.log('DELAYED START 1000MS DONE'); 
}

function startApplication () {
    console.log('APP READY TO GO');
	myVivus.stop();
	svgBackGroundComplete.transition({ opacity: 100 }, 500);
	readyToLaunch.transition({ opacity: 100 }, 500);
	pleaseWaitWrapper.transition({ opacity: 0, delay: 500 }, 500);
	setTimeout(function(){
		pleaseWaitWrapper.css({'display': 'none'});
	}, 1000);
	readyToLaunch.click(function(){
		preLoaderView.transition({ y: -4000, delay: 50 }, 3000); // CUSTOMIZE STARTING DELAY HERE
		setTimeout(function(){
			mainContantWrapper.css({'overflow': 'initial'});
			mainContantWrapper.css({'height': 'auto'});
			thirdPageGalleryWrapper.css({'overflow': 'initial'});
		}, 1000);
		setTimeout(function(){
			fullpage.fullpage({
				menu: false,
				lockAnchors: false,
				anchors:['Question', 'Sales', 'Quality', 'Portfolio', 'Goods', 'Contacts'],
				navigation: false,
				navigationPosition: '',
				navigationTooltips: ['firstSlide', 'secondSlide'],
				showActiveTooltip: false,
				slidesNavigation: false,
				slidesNavPosition: 'bottom',
				css3: true,
				scrollingSpeed: 700,
				autoScrolling: true,
				fitToSection: true,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: false,
				continuousVertical: false,
				normalScrollElements: '#element1, .element2',
				scrollOverflow: false,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,
				controlArrows: false,
				verticalCentered: true,
				resize : false,
				sectionsColor : [''],
				paddingTop: '',
				paddingBottom: '',
				fixedElements: '#header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,
				sectionSelector: '.section',
				slideSelector: '.slide',
				onLeave: function(index, nextIndex, direction){
					console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
					if (index === 1 && nextIndex === 2) {
						$('.bgvid').get(0).play();
					};
					if (index === 3 && nextIndex === 2) {
						$('.bgvid').get(0).play();
					};
					if (index === 4 && nextIndex === 3) {
						if (setGalleryViewCounter === 1) {
							animationEndFirstSlide();
						};
					};
					if (index === 3 && nextIndex === 4) {
						if (setGalleryViewCounter === 1) {
							animationStartFirstSlide();
						};
					};
					if (index === 4 && nextIndex === 5) {
						if (setGalleryViewCounter === 1) {
							animationEndFirstSlide();
						};
					};
					if (index === 5 && nextIndex === 4) {
						if (setGalleryViewCounter === 1) {
							animationStartFirstSlide();
						};
					};
				},
				afterLoad: function(anchorLink, index){
					if (anchorLink == 'Question') {
						zeroPageAnimation();
					};
					if (anchorLink == 'Sales') {
						firstPageAnimation();
					};
					if(anchorLink == 'Quality'){
						secondPageHeader.transition({ y: -50, opacity: 80 }, 1000);
						secondPageIconsWrapper.transition({ y: -50, opacity: 80 }, 1000);
						console.log('THIRD PAGE ANIMATION FIRES');
					};
					if (anchorLink == 'Portfolio') {
						leftSvgHeader.transition({ x: 130, opacity: 100 }, 1000);
						rightSvgHeader.transition({ x: -100, opacity: 100 }, 1000);
						if (backSvgWrapperDrawCounter === 0) {
					    	backSvgWrapperDrawCounter++;
							$('#backSvgWrapperDraw').transition({ opacity: 100 }, 500);
							drawSvgThirdPage();
						};
					};
				},
				afterRender: function(){},
				afterResize: function(){},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
					if (slideAnchor == 'slide2') {
						console.log('GALLERY SLIDE FIRES');
					};
				},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
					if (slideIndex == 0 && nextSlideIndex == 1 && direction == 'right') { // Переход к первому слайду галереи
						animationStartFirstSlide();
						setGalleryViewCounter = 1;
					};
					if (slideIndex == 1 && nextSlideIndex == 0 && direction == 'left') { // возврат из галереи
						animationEndFirstSlide();
						setGalleryViewCounter = 0;
					};
					console.log("onLeave--" + "slideIndex: " + slideIndex + " nextSlideIndex: " + nextSlideIndex + " direction: " +  direction);
				}
			});	
			}, 600);
	});
  };

/* INITIALIZATION */
$('.slider-for').slick({ // первый слайдер галереи с готовыми кухняли
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: true,
	prevArrow: $('.prevBtnReady'),
	nextArrow: $('.nextBtnReady'),
	centerPadding: '0px',
	focusOnSelect: true
});

$('.slider-for-scetch').slick({ // первый слайдер галереи со скетчами
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav-scetch'
});
$('.slider-nav-scetch').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for-scetch',
	dots: false,
	centerMode: true,
	prevArrow: $('.prevBtnScetch'),
	nextArrow: $('.nextBtnScetch'),
	centerPadding: '0px',
	focusOnSelect: true
});

/* ANIMATION FUNCTIONS */
var allAnimationStartPosition = function(){
	zeroPageQuestionWrapper.transition({ x: -300, opacity: 0 }, 10);
	firstQuestion.transition({ x: -200, opacity: 0 }, 10);
	firstQuestionMid.transition({ x: -100, opacity: 0 }, 10);
	firstQuestionEnd.transition({ x: 100, opacity: 0 }, 10);
	secondQuestion.transition({ y: -50, opacity: 0 }, 10);
	thirdQuestion.transition({ y: 100, opacity: 0, rotate: '180deg' }, 10);
	hottestQuestionWrapperFirstPage.transition({ x: 50, opacity: 0 }, 10);
	hottestQuestionFirstPage.transition({ x: -75, opacity: 0 }, 10);
	
	firstOffer.transition({ opacity: 0 }, 10);
	firstPageMedalOne.transition({ scale: 0.8, opacity: 0 }, 10);
	firstPageSaleWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	firstPageSaleIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	firstPageSaleContext.transition({ opacity: 0 }, 10);

	secondOffer.transition({ opacity: 0 }, 10);
	firstPageMedalTwo.transition({ scale: 0.8, opacity: 0 }, 10);
	firstPagePresentWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	firstPagePresentIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	firstPagePresentContext.transition({ opacity: 0 }, 10);

	thirdOffer.transition({ opacity: 0 }, 10);
	firstPageMedalThree.transition({ scale: 0.8, opacity: 0 }, 10);
	firstPageCreditWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	firstPageCreditIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	firstPageCreditContext.transition({ opacity: 0 }, 10);
};
var zeroPageAnimation = function(){
	if (zeroPageCounter === 0) {
		zeroPageCounter++;
		zeroPageQuestionWrapper.transition({ x: 0, opacity: 100, delay: 2000 }, 4000, 'easeOutQuad');
		firstQuestion.transition({ x: 0, opacity: 100, delay: 500 }, 4000, 'easeOutQuad');
		firstQuestionMid.transition({ x: 0, opacity: 100, delay: 500 }, 4000, 'easeOutQuad');
		firstQuestionEnd.transition({ x: 0, opacity: 100, delay: 3000 }, 3000, 'easeOutQuad', function() {
			zeroPageAnimationStageTwo();
		});
	};
};
var zeroPageAnimationStageTwo = function(){
		zeroPageQuestionWrapper.transition({ y: 50, opacity: 100, delay: 500 }, 1000, 'easeOutQuad');
		firstQuestion.transition({ y: 100, opacity: 0, delay: 500 }, 4000, 'easeOutQuad');
		firstQuestionMid.transition({ y: 150, opacity: 0, delay: 500 }, 4000, 'easeOutQuad');
		firstQuestionEnd.transition({ y: 200, opacity: 0, delay: 500 }, 4000, 'easeOutQuad');
	setTimeout(function() {
		secondQuestion.transition({ y: 0, opacity: 100, delay: 400 }, 1000, 'easeOutQuad');
		zeroPageQuestionWrapper.transition({ y: 100, opacity: 0, delay: 1000 }, 1000, 'easeOutQuad');
	}, 500);
	setTimeout(function() {
		secondQuestion.transition({ opacity: 0 }, 1000, 'easeOutQuad');
		thirdQuestion.transition({ y: 0, opacity: 100, delay: 600 }, 2000, 'easeOutQuad');
		zeroPageQuestionWrapper.transition({ y: 50, opacity: 0, delay: 100 }, 1000, 'easeOutQuad');
		zeroPageBg.transition({ scale: 2 }, 500, 'easeOutCubic').transition({ rotate: '180deg' }, 1000, 'easeOutCubic').transition({ scale: 1 }, 500, 'easeOutCubic');
	}, 5000);
	setTimeout(function() {
		arrowDown.transition({ opacity: 100, delay: 1000 }, 1000, 'easeOutQuad');
	}, 6000);
};

var firstPageAnimation = function(){
	hottestQuestionWrapperFirstPage.transition({ x: 0, opacity: 100 }, 1200, 'easeOutQuad');
	hottestQuestionFirstPage.transition({ x: 0, opacity: 100 }, 1500, 'easeOutQuad');
	setTimeout(function() {
		firstPageMedalOne.transition({ scale: 1, opacity: 100 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
		setTimeout(function() {
			firstPageSaleWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
			firstPageSaleIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
			setTimeout(function() {
				firstPageSaleContext.transition({ opacity: 100 }, 1000);
				setTimeout(function() {
					secondStage();
					firstPageMedalOne.transition({ opacity: 0 }, 1000);
					firstPageSaleWrapper.transition({ opacity: 0 }, 1000);
					firstPageSaleIcon.transition({ opacity: 0 }, 1000);
					firstPageSaleContext.transition({ opacity: 0 }, 1000);
					firstOffer.transition({ opacity: 100 }, 1000);
				}, 3000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
			}, 1000); // Пауза. Отрисовали описание скидки
		}, 2000); // Пауза. Отрисовали скидку по центру
	}, 2000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	
	var secondStage = function(){
	setTimeout(function() {
			firstPageMedalTwo.transition({ scale: 1, opacity: 100, delay: 500 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				firstPagePresentWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
				firstPagePresentIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
				setTimeout(function() {
					firstPagePresentContext.transition({ opacity: 100 }, 1000);
					setTimeout(function() {
						thirdStage();
						firstPageMedalTwo.transition({ opacity: 0 }, 1000);
						firstPagePresentWrapper.transition({ opacity: 0 }, 1000);
						firstPagePresentIcon.transition({ opacity: 0 }, 1000);
						firstPagePresentContext.transition({ opacity: 0 }, 1000);
						secondOffer.transition({ opacity: 100 }, 1000);
					}, 3000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 2000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	};

	var thirdStage = function(){
		setTimeout(function() {
			firstPageMedalThree.transition({ scale: 1, opacity: 100, delay: 500 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				firstPageCreditWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
				firstPageCreditIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
				setTimeout(function() {
					firstPageCreditContext.transition({ opacity: 100 }, 1000);
					setTimeout(function() {
						firstPageMedalThree.transition({ opacity: 0 }, 1000);
						firstPageCreditWrapper.transition({ opacity: 0 }, 1000);
						firstPageCreditIcon.transition({ opacity: 0 }, 1000);
						firstPageCreditContext.transition({ opacity: 0 }, 1000);
						thirdOffer.transition({ opacity: 100 }, 1000);
						finalAction();
					}, 3000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 2000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	};
	var finalAction = function(){
		setTimeout(function() {
			hottestQuestionWrapperFirstPage.transition({ y: 200 }, 2000, 'easeOutQuad');
			hottestQuestionFirstPage.transition({ y: 200 }, 2000, 'easeOutQuad');
		}, 2000); // Пауза. Заголовок опустился в центре
	};
};


var animationStartFirstSlide = function(){ // Переход к первому слайду галереи
	setGalleryViewCounter = 1;
	setTimeout(function(){
		thirdPageGalleryWrapper.css({'visibility': 'initial'});
		thirdPageGalleryScetchIcon.transition({ x: '200px', opacity: 0.2 }, 500);
		if (thirdPageGalleryReadyIcon.hasClass('activeGallery')) {
			thirdPageGalleryReadyIcon.transition({ x: '0px', opacity: 0.9 }, 500);
			thirdPageGalleryReady.css({'visibility': 'initial'}).transition({ opacity: 1 }, 500);
			thirdPageGalleryScetch.css({'visibility': 'hidden'}).transition({ opacity: 0 }, 500);
		} else {
			return false;
		};
		if (thirdPageGalleryScetchIcon.hasClass('activeGallery')) {
			thirdPageGalleryScetchIcon.transition({ x: '0px', opacity: 0.9 }, 500);
			thirdPageGalleryReady.css({'visibility': 'hidden'}).transition({ opacity: 0 }, 500);
			thirdPageGalleryScetch.css({'visibility': 'initial'}).transition({ opacity: 1 }, 500);
		} else {
			return false;
		};
	}, 350);
	console.log('GALLERY LAUNCHED');
};

var animationEndFirstSlide = function(){ // Выход из первого слайда галереи
	thirdPageGalleryWrapper.css({'visibility': 'hidden'});
	thirdPageGalleryReady.css({'display': 'initial'});
	thirdPageGalleryScetch.css({'display': 'initial'});
	thirdPageGalleryReady.css({'visibility': 'hidden'});
	thirdPageGalleryScetch.css({'visibility': 'hidden'});
	if (thirdPageGalleryScetchIcon.hasClass('activeGallery')) {
		thirdPageGalleryReadyIcon.transition({ x: '0px', opacity: 0.9 }, 500);
		thirdPageGalleryScetchIcon.removeClass('activeGallery');
		thirdPageGalleryReadyIcon.addClass('activeGallery');
	};
	console.log('GALLERY OFF');
};

/* ONCLICK EVENTS*/
$('.thirdPageGalleryReadyIcon img').click(function(){ // Клик в галереи готовых работ по фото
	if (thirdPageGalleryReadyIcon.hasClass('activeGallery')) {
		return false;
	} else {
		thirdPageGalleryReadyIcon.transition({ x: '0px', opacity: 0.9 }, 500);
		thirdPageGalleryReadyIcon.addClass('activeGallery');
		thirdPageGalleryScetchIcon.transition({ x: '200px', opacity: 0.2 }, 500);
		thirdPageGalleryScetchIcon.removeClass('activeGallery');
		thirdPageGalleryReady.css({'visibility': 'initial'}).transition({ opacity: 1 }, 500);
		thirdPageGalleryReady.css({'display': 'initial'}).transition({ opacity: 1 }, 500);
		thirdPageGalleryScetch.css({'display': 'none'}).transition({ opacity: 0 }, 500);
	};
});
$('.thirdPageGalleryScetchIcon img').click(function(){ // Клик в галереи готовых работ по скетчам
	if (thirdPageGalleryScetchIcon.hasClass('activeGallery')) {
		return false;
	} else {
		thirdPageGalleryScetchIcon.transition({ x: '0px', opacity: 0.9 }, 500);
		thirdPageGalleryScetchIcon.addClass('activeGallery');
		thirdPageGalleryReadyIcon.transition({ x: '200px', opacity: 0.2 }, 500);
		thirdPageGalleryReadyIcon.removeClass('activeGallery');
		thirdPageGalleryScetch.css({'visibility': 'initial'}).transition({ opacity: 1 }, 500);
		thirdPageGalleryScetch.css({'display': 'initial'}).transition({ opacity: 1 }, 500);
		thirdPageGalleryReady.css({'display': 'none'}).transition({ opacity: 0 }, 500);
	};
});





var c = document.getElementById("developer");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "01";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 40;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#FFF"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}
setInterval(draw, 100);
var developedByQuestion = $('.developedByQuestion'),
	developedByText = $('.developedByText'),
	developedBy = $('.developedBy'),
	developer = $('#developer'),
	developerCounter = 0;

$('.developedBy, .developedByQuestion').click(function(){
	if (developerCounter === 0) {
		developedByText.css({'display': 'initial'});
		developedByQuestion.transition({ opacity: 0 }, 350);
		developedBy.transition({ x: 65, y: -65 }, 750);
		developer.transition({ opacity: 0.4 }, 500);
		developedByText.transition({ opacity: 100, delay: 500 }, 1500);
		developerCounter++;
	} else {
		developedByText.css({'display': 'none'});
		developedByText.transition({ opacity: 0 }, 500);
		developedBy.transition({ x: 0, y: 0 }, 750);
		developer.transition({ opacity: 0 }, 500);
		developedByQuestion.transition({ opacity: 100 }, 500);
		developerCounter = 0;
	};	
});





