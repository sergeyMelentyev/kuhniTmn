 "use strict";
var gradientBackGroundAddOn = $('.gradientBackGroundAddOn');
var svgDunamicElements = $('.svgDunamicElements');
var comingSoon = $('.comingSoon');
var centerSvgDunamicFinal = $('#centerSvgDunamicFinal');

var myVivus = new Vivus('centerSvgDunamic', {
    type: 'delayed',
    duration: 250},
    function(){
    	animateTheRest();
    });

var animateTheRest = function(){
	console.log('test');
};

setTimeout(function(){
	myVivus.stop();
	centerSvgDunamicFinal.css({'display': 'initial'});
	centerSvgDunamicFinal.transition({ opacity: 100 }, 2000, 'ease');
	gradientBackGroundAddOn.transition({ opacity: 100 }, 2000, 'ease');
	comingSoon.transition({x: '0px', opacity: 80}, 750, 'ease');
}, 5000);
