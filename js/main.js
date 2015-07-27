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
	rightSvgHeader = $('.rightSvgHeader');

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
						leftSvgHeader.transition({ rotate: '45deg' }, 10);
						leftSvgHeader.transition({ x: 130, opacity: 100, rotate: '0deg' }, 1000);
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
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
			});	
			}, 600);
	});
  };
