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
	lastQuestion = $('.lastQuestion');


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
		preLoaderView.transition({ y: -4000, delay: 200 }, 3000);
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
	lastQuestion.transition({ y: 100, opacity: 0, rotate: '180deg' }, 10);
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
	}, 4000);
	setTimeout(function() {
		lastQuestion.transition({ y: 0, opacity: 100, delay: 1000 }, 1000, 'easeOutQuad');
		arrowDown.	transition({ opacity: 100, delay: 1000 }, 1000, 'easeOutQuad');
	}, 4500);
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
