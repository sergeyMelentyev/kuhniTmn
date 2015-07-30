 "use strict";
var preLoaderView = $('.preLoaderView'),
	pleaseWaitWrapper = $('.pleaseWaitWrapper'),
	readyToLaunch = $('.readyToLaunch'),
	svgBackGroundComplete = $('.svgBackGroundComplete'),
	timeoutID,
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
	thirdPageGalleryScetchIcon = $('.thirdPageGalleryScetchIcon');

var myVivus = new Vivus('svgBackGroundDrawingId', {
    type: 'delayed',
    duration: 1000},
    function(){
    	console.log('test');
    });

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); 
    delayedStart();
    console.log('Load Event Fires!'); 
},false);

function delayedStart() {
  timeoutID = window.setTimeout(startApplication, 1000);
  console.log('Delayed Start Fires!'); 
}

function startApplication () {
    console.log('Start Application Fires!');
	myVivus.stop();
	svgBackGroundComplete.transition({ opacity: 100 }, 500);
	readyToLaunch.transition({ opacity: 100 }, 500);
	pleaseWaitWrapper.transition({ opacity: 0, delay: 500 }, 500);
	setTimeout(function(){
		pleaseWaitWrapper.css({'display': 'none'});
	}, 1000);
	readyToLaunch.click(function(){
		preLoaderView.transition({ scale: 0.9 }, 250).transition({ y: -1000, opacity: 0 }, 1000);
		setTimeout(function(){
			mainContantWrapper.css({'overflow': 'initial'});
			mainContantWrapper.css({'height': 'auto'});
		}, 1000);
		setTimeout(function(){
			fullpage.fullpage({
				menu: false,
				lockAnchors: false,
				anchors:['Sales', 'Quality', 'Portfolio', 'Goods', 'Contacts'],
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
					if (index === 2 && nextIndex === 1) { // переход на первую страницу со второй
						$('.bgvid').get(0).play();
					};
				},
				afterLoad: function(anchorLink, index){
					if(anchorLink == 'Quality'){
						secondPageHeader.transition({ y: -50, opacity: 80 }, 1000);
						secondPageIconsWrapper.transition({ y: -50, opacity: 80 }, 1000);
						console.log('Second page animation fires!');
					};
					if (anchorLink == 'Portfolio') {
						leftSvgHeader.transition({ x: 130, opacity: 100 }, 1000);
						rightSvgHeader.transition({ x: -100, opacity: 100 }, 1000);
						if (backSvgWrapperDrawCounter === 0) {
					    	backSvgWrapperDrawCounter++;
							$('#backSvgWrapperDraw').transition({ opacity: 100 }, 500);
							var thirdsPageVivus = new Vivus('backSvgWrapperDraw', {
						    type: 'delayed',
						    duration: 500},
						    function(){
						    	console.log('Ресуем на доске');
						    });
						};
					};
				},
				afterRender: function(){
					$('.bgvid').get(0).play();
					console.log('Video fires after page rendered!')
				},
				afterResize: function(){},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
					if (slideAnchor == 'slide2') {
						console.log('secondSlide fires!!!');
					};
				},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
					if (slideIndex == 0 && nextSlideIndex == 1 && direction == 'right') {
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
						$('.thirdPageGalleryReadyIcon img').click(function(){
							console.log('ReadyIcon');
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
						$('.thirdPageGalleryScetchIcon img').click(function(){
							console.log('ScetchIcon');
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
						console.log('gallery is ready for view!');
					};
					if (slideIndex == 1 && nextSlideIndex == 0 && direction == 'left') {
						thirdPageGalleryWrapper.css({'visibility': 'hidden'});
						testFunctionEnd();
						console.log('welcome back!!!');
					};
					console.log("onLeave--" + "slideIndex: " + slideIndex + " nextSlideIndex: " + nextSlideIndex + " direction: " +  direction);
				}
			});	
			}, 600);
	});
  };

$('.slider-for').slick({
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

$('.slider-for-scetch').slick({
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

var testFunctionEnd = function(){
	thirdPageGalleryReady.css({'display': 'initial'});
	thirdPageGalleryScetch.css({'display': 'initial'});
	thirdPageGalleryReady.css({'visibility': 'hidden'});
	thirdPageGalleryScetch.css({'visibility': 'hidden'});
	if (thirdPageGalleryScetchIcon.hasClass('activeGallery')) {
		thirdPageGalleryReadyIcon.transition({ x: '0px', opacity: 0.9 }, 500);
		thirdPageGalleryScetchIcon.removeClass('activeGallery');
		thirdPageGalleryReadyIcon.addClass('activeGallery');
	};
};

