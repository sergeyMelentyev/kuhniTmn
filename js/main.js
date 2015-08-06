 "use strict";
/* VARIABLES */
var preLoaderView = $('.preLoaderView'),
	pleaseWaitWrapper = $('.pleaseWaitWrapper'),
	readyToLaunch = $('.readyToLaunch'),
	svgBackGroundComplete = $('.svgBackGroundComplete'),
	setGalleryViewCounter = 0,
	zeroPageCounter = 0,
	firstPageCounter = 0,
	secondPageCounter = 0,
	fourthPageCounter = 0,
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
	arrowUpDownRight = $('.arrowUpDownRight'),
	arrowUpDownLeft = $('.arrowUpDownLeft'),
	developedByQuestion = $('.developedByQuestion'),
	developedByText = $('.developedByText'),
	developedBy = $('.developedBy'),
	developer = $('#developer'),
	developerCounter = 0,
	lastQuestionWrapper = $('.lastQuestionWrapper'),
	
	/* FIRST PAGE */
	hottestQuestionWrapperFirstPage = $('.hottestQuestionWrapperFirstPage'),
	hottestQuestionFirstPage = $('.hottestQuestionFirstPage'),

	firstPageFirstOffer = $('.firstPageFirstOffer'),
	firstPageSaleWrapper = $('.firstPageSaleWrapper'),
	firstPageSaleIcon = $('.firstPageSaleIcon'),
	firstPageSaleContext = $('.firstPageSaleContext'),
	firstPageMedalOne = $('.firstPageMedalOne'),

	firstPageSecondOffer = $('.firstPageSecondOffer'),
	firstPageMedalTwo = $('.firstPageMedalTwo'),
	firstPagePresentWrapper = $('.firstPagePresentWrapper'),
	firstPagePresentIcon = $('.firstPagePresentIcon'),
	firstPagePresentContext = $('.firstPagePresentContext'),

	firstPageThirdOffer = $('.firstPageThirdOffer'),
	firstPageMedalThree = $('.firstPageMedalThree'),
	firstPageCreditWrapper = $('.firstPageCreditWrapper'),
	firstPageCreditIcon = $('.firstPageCreditIcon'),
	firstPageCreditContext = $('.firstPageCreditContext'),

	firstPageArrowUpDown = $('.firstPageArrowUpDown'),

	/* SECOND PAGE */
	hottestQuestionWrapperSecondPage = $('.hottestQuestionWrapperSecondPage'),
	hottestQuestionSecondPage = $('.hottestQuestionSecondPage'),

	secondPageFirstOffer = $('.secondPageFirstOffer'),
	secondPageMedalOne = $('.secondPageMedalOne'),
	secondPageFactoryWrapper = $('.secondPageFactoryWrapper'),
	secondPageFactoryIcon = $('.secondPageFactoryIcon'),
	secondPageFactoryContext = $('.secondPageFactoryContext'),

	secondPageSecondOffer = $('.secondPageSecondOffer'),
	secondPageMedalTwo = $('.secondPageMedalTwo'),
	secondPageNatureWrapper = $('.secondPageNatureWrapper'),
	secondPageNatureIcon = $('.secondPageNatureIcon'),
	secondPageNatureContext = $('.secondPageNatureContext'),

	secondPageThirdOffer = $('.secondPageThirdOffer'),
	secondPageMedalThree = $('.secondPageMedalThree'),
	secondPageGarantyWrapper = $('.secondPageGarantyWrapper'),
	secondPageGarantyIcon = $('.secondPageGarantyIcon'),
	secondPageGarantyContext = $('.secondPageGarantyContext'),

	secondPageFourthOffer = $('.secondPageFourthOffer'),
	secondPageMedalFour = $('.secondPageMedalFour'),
	secondPagePersonalWrapper = $('.secondPagePersonalWrapper'),
	secondPagePersonalIcon = $('.secondPagePersonalIcon'),
	secondPagePersonalContext = $('.secondPagePersonalContext'),

	secondPageArrowUpDown = $('.secondPageArrowUpDown'),
	
	/* THIRD PAGE */
	thirdPageArrow = $('.thirdPageArrow'),
	thirdPageSlideArrow = $('.thirdPageSlideArrow'),

	/* FOURTH PAGE */
	fourthPageArrow = $('.fourthPageArrow'),
	hottestQuestionWrapperFourthPage = $('.hottestQuestionWrapperFourthPage'),
	hottestQuestionFourthPage = $('.hottestQuestionFourthPage'),
	
	fourthPageCenterAnimationWrapperImg = $('.fourthPageCenterAnimationWrapperImg'),

	fourthPageFirstContent = $('.fourthPageFirstContent'),
	fourthPageSecondContent = $('.fourthPageSecondContent'),
	fourthPageThirdContent = $('.fourthPageThirdContent'),
	fourthPageFourthContent = $('.fourthPageFourthContent'),
	fourthPageFifthContent = $('.fourthPageFifthContent'),
	fourthPageSixthContent = $('.fourthPageSixthContent'),
	
	graphicLeftTop = $('.graphicLeftTop'),
	graphicLeftCenter = $('.graphicLeftCenter'),
	graphicLeftBottom = $('.graphicLeftBottom'),
	graphicRightTop = $('.graphicRightTop'),
	graphicRightCenter = $('.graphicRightCenter'),
	graphicRightBottom = $('.graphicRightBottom'),

	fourthPageFinalContent = $('.fourthPageFinalContent'),

	/* FIFTH PAGE */
	fifthPageArrow = $('.fifthPageArrow'),
	mapObject = $('.mapGis'),
	contactsWrapper = $('.contactsWrapper'),
	mapObjectHover = $('.mapGis p');


									/* SVG ANIMATION  */

var drawSvgMainTheme = function(){
	myVivus = new Vivus('svgBackGroundDrawingId', {
    type: 'delayed',
    duration: 100
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
	svg.draw(drawSvgThirdPageCallBack);
};
var drawSvgThirdPageCallBack = function() {
	thirdPageArrow.transition({ opacity: 100, delay: 500 }, 2000, 'easeOutQuad');
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
  timeoutID = window.setTimeout(startApplication, 100);
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
					if (index === 6 && nextIndex === 5) {
						fifthPageAnimationEnd();
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
						secondPageAnimation();
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
					if (anchorLink == 'Goods') {
						fourthPageAnimation();
					};
					if (anchorLink == 'Contacts') {
						fifthPageAnimationStart();
						fifthPageArrow.transition({ opacity: 100, delay: 1500 }, 1000, 'easeOutQuad');
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

									/* ANIMATION FUNCTIONS START POSITION */

var allAnimationStartPosition = function(){
	
	/* ZERO PAGE */
	zeroPageQuestionWrapper.transition({ x: -300, opacity: 0 }, 10);
	firstQuestion.transition({ x: -200, opacity: 0 }, 10);
	firstQuestionMid.transition({ x: -100, opacity: 0 }, 10);
	firstQuestionEnd.transition({ x: 100, opacity: 0 }, 10);
	secondQuestion.transition({ y: -50, opacity: 0 }, 10);
	thirdQuestion.transition({ y: 10, opacity: 0, rotate: '180deg' }, 10);
	lastQuestionWrapper.transition({ scale: 0.95, opacity: 0, rotate: '180deg' }, 10);
	
	/* FIRST PAGE */
	hottestQuestionWrapperFirstPage.transition({ x: 50, opacity: 0 }, 10);
	hottestQuestionFirstPage.transition({ x: -75, opacity: 0 }, 10);
	
	firstPageFirstOffer.transition({ opacity: 0 }, 10);
	firstPageMedalOne.transition({ scale: 0.8, opacity: 0 }, 10);
	firstPageSaleWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	firstPageSaleIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	firstPageSaleContext.transition({ opacity: 0 }, 10);

	firstPageSecondOffer.transition({ opacity: 0 }, 10);
	firstPageMedalTwo.transition({ scale: 0.8, opacity: 0 }, 10);
	firstPagePresentWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	firstPagePresentIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	firstPagePresentContext.transition({ opacity: 0 }, 10);

	firstPageThirdOffer.transition({ opacity: 0 }, 10);
	firstPageMedalThree.transition({ scale: 0.8, opacity: 0 }, 10);
	firstPageCreditWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	firstPageCreditIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	firstPageCreditContext.transition({ opacity: 0 }, 10);
	
	/* SECOND PAGE */
	hottestQuestionWrapperSecondPage.transition({ x: 50, opacity: 0 }, 10);
	hottestQuestionSecondPage.transition({ x: -75, opacity: 0 }, 10);
	
	secondPageFirstOffer.transition({ opacity: 0 }, 10);
	secondPageMedalOne.transition({ scale: 0.8, opacity: 0 }, 10);
	secondPageFactoryWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	secondPageFactoryIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	secondPageFactoryContext.transition({ opacity: 0 }, 10);

	secondPageSecondOffer.transition({ opacity: 0 }, 10);
	secondPageMedalTwo.transition({ scale: 0.8, opacity: 0 }, 10);
	secondPageNatureWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	secondPageNatureIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	secondPageNatureContext.transition({ opacity: 0 }, 10);

	secondPageThirdOffer.transition({ opacity: 0 }, 10);
	secondPageMedalThree.transition({ scale: 0.8, opacity: 0 }, 10);
	secondPageGarantyWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	secondPageGarantyIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	secondPageGarantyContext.transition({ opacity: 0 }, 10);

	secondPageFourthOffer.transition({ opacity: 0 }, 10);
	secondPageMedalFour.transition({ scale: 0.8, opacity: 0 }, 10);
	secondPagePersonalWrapper.transition({ x: -150, y: 50, opacity: 0, rotate: '-45deg' }, 10);
	secondPagePersonalIcon.transition({ x: 150, y: 50, opacity: 0, rotate: '45deg' }, 10);
	secondPagePersonalContext.transition({ opacity: 0 }, 10);

	/* FOURTH PAGE */
	hottestQuestionWrapperFourthPage.transition({ x: 50, opacity: 0 }, 10);
	hottestQuestionFourthPage.transition({ x: -75, opacity: 0 }, 10);

	/* FOURTH PAGE */
	contactsWrapper.transition({ x: -100, opacity: 0, perspective: '200px', rotateY: '-15deg' });
};


									/* ANIMATION FUNCTIONS END POSITION */

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
		lastQuestionWrapper.transition({ scale: 1, opacity: 100, delay: 2000 }, 2000, 'easeOutQuad');
		zeroPageQuestionWrapper.transition({ y: 50, opacity: 0, delay: 100 }, 1000, 'easeOutQuad');
		zeroPageBg.transition({ scale: 2 }, 500, 'easeOutCubic').transition({ rotate: '180deg' }, 1000, 'easeOutCubic').transition({ scale: 1 }, 500, 'easeOutCubic');
	}, 5000);
	setTimeout(function() {
		arrowDown.transition({ opacity: 100, delay: 1000 }, 1000, 'easeOutQuad');
	}, 6000);
};
										/* FIRST PAGE ANIMATION */

var firstPageAnimation = function(){
	if (firstPageCounter === 0) {
		firstPageCounter++;
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
						firstPageFirstOffer.transition({ opacity: 100 }, 1000);
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 2000); // Пауза. Отрисовали скидку по центру
		}, 3000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
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
						firstPageSecondOffer.transition({ opacity: 100 }, 1000);
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 1000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
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
						firstPageThirdOffer.transition({ opacity: 100 }, 1000);
						finalAction();
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 1000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	};
	var finalAction = function(){
		setTimeout(function() {
			hottestQuestionWrapperFirstPage.transition({ y: 200 }, 2000, 'easeOutQuad');
			hottestQuestionFirstPage.transition({ y: 200 }, 2000, 'easeOutQuad');
		}, 2000); // Пауза. Заголовок опустился в центре
		setTimeout(function() {
			firstPageArrowUpDown.transition({ opacity: 100, delay: 1000 }, 1000, 'easeOutQuad');
		}, 2000);
	};
	};
};

										/* SECOND PAGE ANIMATION */

var secondPageAnimation = function(){
	if (secondPageCounter === 0) {
		secondPageCounter++;
		console.log('secondPageAnimation first stage!');
		hottestQuestionWrapperSecondPage.transition({ x: 0, opacity: 100 }, 1200, 'easeOutQuad');
		hottestQuestionSecondPage.transition({ x: 0, opacity: 100 }, 1500, 'easeOutQuad');
		setTimeout(function() {
			secondPageMedalOne.transition({ scale: 1, opacity: 100 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				secondPageFactoryWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
				secondPageFactoryIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
				setTimeout(function() {
					secondPageFactoryContext.transition({ opacity: 100 }, 1000);
					setTimeout(function() {
						secondPageSecondStage();
						secondPageMedalOne.transition({ opacity: 0 }, 1000);
						secondPageFactoryWrapper.transition({ opacity: 0 }, 1000);
						secondPageFactoryIcon.transition({ opacity: 0 }, 1000);
						secondPageFactoryContext.transition({ opacity: 0 }, 1000);
						secondPageFirstOffer.transition({ opacity: 100 }, 1000);
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 2000); // Пауза. Отрисовали скидку по центру
		}, 3000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	var secondPageSecondStage = function(){
				console.log('secondPageAnimation second stage!');
	setTimeout(function() {
			secondPageMedalTwo.transition({ scale: 1, opacity: 100, delay: 500 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				secondPageNatureWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
				secondPageNatureIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
				setTimeout(function() {
					secondPageNatureContext.transition({ opacity: 100 }, 1000);
					setTimeout(function() {
						secondPageThirdStage();
						secondPageMedalTwo.transition({ opacity: 0 }, 1000);
						secondPageNatureWrapper.transition({ opacity: 0 }, 1000);
						secondPageNatureIcon.transition({ opacity: 0 }, 1000);
						secondPageNatureContext.transition({ opacity: 0 }, 1000);
						secondPageSecondOffer.transition({ opacity: 100 }, 1000);
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 1000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	};
	var secondPageThirdStage = function(){
				console.log('secondPageAnimation third stage!');
		setTimeout(function() {
			secondPageMedalThree.transition({ scale: 1, opacity: 100, delay: 500 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				secondPageGarantyWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
				secondPageGarantyIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
				setTimeout(function() {
					secondPageGarantyContext.transition({ opacity: 100 }, 1000);
					setTimeout(function() {
						secondPageMedalThree.transition({ opacity: 0 }, 1000);
						secondPageGarantyWrapper.transition({ opacity: 0 }, 1000);
						secondPageGarantyIcon.transition({ opacity: 0 }, 1000);
						secondPageGarantyContext.transition({ opacity: 0 }, 1000);
						secondPageThirdOffer.transition({ opacity: 100 }, 1000);
						secondPageFourthStage();
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 1000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	};
	var secondPageFourthStage = function(){
				console.log('secondPageAnimation fourth stage!');
		setTimeout(function() {
			secondPageMedalFour.transition({ scale: 1, opacity: 100, delay: 500 }, 500, 'easeOutQuad').transition({ x: -500, delay: 1000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				secondPagePersonalWrapper.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 1500);
				secondPagePersonalIcon.transition({ x: 0, y: 0, opacity: 100, rotate: '0deg' }, 2000);
				setTimeout(function() {
					secondPagePersonalContext.transition({ opacity: 100 }, 1000);
					setTimeout(function() {
						secondPageMedalFour.transition({ opacity: 0 }, 1000);
						secondPagePersonalWrapper.transition({ opacity: 0 }, 1000);
						secondPagePersonalIcon.transition({ opacity: 0 }, 1000);
						secondPagePersonalContext.transition({ opacity: 0 }, 1000);
						secondPageFourthOffer.transition({ opacity: 100 }, 1000);
						secondPageFinalAction();
					}, 5000); // Пауза. Все скорыли. Добавили первый ярлык внизу.
				}, 1000); // Пауза. Отрисовали описание скидки
			}, 3000); // Пауза. Отрисовали скидку по центру
		}, 1000); // Пауза. Отрисовка первой медали по центру (delay внутри) далее сдвинули
	};
	var secondPageFinalAction = function(){
				console.log('secondPageAnimation final stage!');
		setTimeout(function() {
			hottestQuestionWrapperSecondPage.transition({ y: 200 }, 2000, 'easeOutQuad');
			hottestQuestionSecondPage.transition({ y: 200 }, 2000, 'easeOutQuad');
		}, 2000); // Пауза. Заголовок опустился в центре
		setTimeout(function() {
			secondPageArrowUpDown.transition({ opacity: 100, delay: 1000 }, 1000, 'easeOutQuad');
		}, 2000);
	};
	};
};
										/* FOURTH PAGE ANIMATION */

var fourthPageAnimation = function(){
	if (fourthPageCounter === 0 ) {
		fourthPageCounter++
		hottestQuestionWrapperFourthPage.transition({ x: 0, opacity: 1 }, 1200, 'easeOutQuad');
		hottestQuestionFourthPage.transition({ x: 0, opacity: 1 }, 1500, 'easeOutQuad');
		setTimeout(function() {
			fourthPageCenterAnimationWrapperImg.transition({ opacity: 1 }, 1000, 'easeOutQuad');
			fourthPageFirstContent.transition({ opacity: 1, delay: 2000 }, 1000, 'easeOutQuad');
			graphicRightBottom.transition({ opacity: 0.7, delay: 3000 }, 1000, 'easeOutQuad');
			setTimeout(function() {
				fourthPageFirstContent.transition({ opacity: 0 }, 1000, 'easeOutQuad');
				fourthPageSecondContent.transition({ opacity: 1 }, 1000, 'easeOutQuad');
				graphicLeftTop.transition({ opacity: 0.7, delay: 1000 }, 1000, 'easeOutQuad');
				setTimeout(function() {
					fourthPageSecondContent.transition({ opacity: 0 }, 1000, 'easeOutQuad');
					fourthPageThirdContent.transition({ opacity: 1 }, 1000, 'easeOutQuad');
					graphicLeftCenter.transition({ opacity: 0.7, delay: 1000 }, 1000, 'easeOutQuad');
						setTimeout(function() {
							fourthPageThirdContent.transition({ opacity: 0 }, 1000, 'easeOutQuad');
							fourthPageFourthContent.transition({ opacity: 1 }, 1000, 'easeOutQuad');
							graphicLeftBottom.transition({ opacity: 0.7, delay: 1000 }, 1000, 'easeOutQuad');
								setTimeout(function() {
									fourthPageFourthContent.transition({ opacity: 0 }, 1000, 'easeOutQuad');
									fourthPageFifthContent.transition({ opacity: 1 }, 1000, 'easeOutQuad');
									graphicRightTop.transition({ opacity: 0.7, delay: 1000 }, 1000, 'easeOutQuad');
										setTimeout(function() {
										fourthPageFifthContent.transition({ opacity: 0 }, 1000, 'easeOutQuad');
										fourthPageSixthContent.transition({ opacity: 1 }, 1000, 'easeOutQuad');
										graphicRightCenter.transition({ opacity: 0.7, delay: 1000 }, 1000, 'easeOutQuad');
											setTimeout(function() {
												fourthPageSixthContent.transition({ opacity: 0 }, 1000, 'easeOutQuad');
												fourthPageFinalContent.transition({ opacity: 1 }, 1000, 'easeOutQuad');
												fourthPageArrow.transition({ opacity: 1, delay: 2000 }, 1000, 'easeOutQuad');
											}, 4000); // Пауза. Появляется мебель
										}, 4000); // Пауза. Появляется мебель
								}, 4000); // Пауза. Появляется раковина
						}, 4000); // Пауза. Появляется вытяжка
					}, 4000); // Пауза. Появляется вытяжка
			}, 7000); // Пауза. Появляется духовой шкаф
		}, 2000); // Пауза. Появляется центральная сцена, появилась варочная поверхность
	};
};



										/* FIFTH PAGE ANIMATION */

var fifthPageAnimationStart = function(){
	mapObject.css({'visibility': 'initial'});
	mapObject.transition({ opacity: 1 }, 1000, 'easeOutQuad');
	setTimeout(function() {
		contactsWrapper.transition({ x: 0, opacity: 1, perspective: '200px', rotateY: '0deg' }, 2000, 'easeOutQuad');
	}, 1000);
};

var fifthPageAnimationEnd = function(){
	mapObject.transition({ opacity: 0 }, 400, 'easeOutQuad');
	setTimeout(function() {
		mapObject.css({'visibility': 'hidden'});
	}, 500);
};



var animationStartFirstSlide = function(){ // Переход к первому слайду галереи
	setGalleryViewCounter = 1;
	thirdPageArrow.transition({ opacity: 0 }, 1000, 'easeOutQuad');
	thirdPageSlideArrow.transition({ opacity: 100 }, 1000, 'easeOutQuad');
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
	thirdPageArrow.transition({ opacity: 100 }, 1000, 'easeOutQuad');
	thirdPageSlideArrow.transition({ opacity: 0 }, 1000, 'easeOutQuad');
	console.log('GALLERY OFF');
};

/* ONCLICK EVENTS*/
$('.thirdPageGalleryReadyIcon img').click(function(){ // Клик в галереи готовых работ по фото
	if (thirdPageGalleryReadyIcon.hasClass('activeGallery')) {
		return false;
	} else {
		thirdPageGalleryReadyIcon.transition({ x: '0px', opacity: 0.9 }, 1000);
		thirdPageGalleryReadyIcon.addClass('activeGallery');
		thirdPageGalleryScetchIcon.transition({ x: '200px', opacity: 0.2 }, 1000);
		thirdPageGalleryScetchIcon.removeClass('activeGallery');
		thirdPageGalleryReady.css({'visibility': 'initial'}).transition({ opacity: 1 }, 1000);
		thirdPageGalleryReady.css({'display': 'initial'}).transition({ opacity: 1 }, 1000);
		thirdPageGalleryScetch.css({'display': 'none'}).transition({ opacity: 0 }, 1000);
	};
});
$('.thirdPageGalleryScetchIcon img').click(function(){ // Клик в галереи готовых работ по скетчам
	if (thirdPageGalleryScetchIcon.hasClass('activeGallery')) {
		return false;
	} else {
		thirdPageGalleryScetchIcon.transition({ x: '-840px', opacity: 0.9 }, 1000);
		thirdPageGalleryScetchIcon.addClass('activeGallery');
		thirdPageGalleryReadyIcon.transition({ x: '1010px', opacity: 0.2 }, 1000);
		thirdPageGalleryReadyIcon.removeClass('activeGallery');
		thirdPageGalleryScetch.css({'visibility': 'initial'}).transition({ opacity: 1 }, 1000);
		thirdPageGalleryScetch.css({'display': 'initial'}).transition({ opacity: 1 }, 1000);
		thirdPageGalleryReady.css({'display': 'none'}).transition({ opacity: 0 }, 1000);
	};
});





var c = document.getElementById("developer");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var chinese = "01";
chinese = chinese.split("");
var font_size = 35;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
	drops[x] = 1; 
	function draw(){
		ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.fillStyle = "#0F0";
		ctx.font = font_size + "px arial";
		for(var i = 0; i < drops.length; i++){
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		drops[i]++;
		};
	};
setInterval(draw, 150);

$('.developedBy, .developedByQuestion').click(function(){
	if (developerCounter === 0) {
		developedByText.css({'display': 'initial'});
		developedByQuestion.transition({ opacity: 0 }, 350);
		developedBy.transition({ x: 65, y: -65 }, 750);
		developer.transition({ opacity: 0.6 }, 500);
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
