 "use strict";
var gradientBackGroundAddOn = $('.gradientBackGroundAddOn');
var svgDunamicElements = $('.svgDunamicElements');
var comingSoon = $('.comingSoon');

var myVivus = new Vivus('centerSvgDunamic', {
    type: 'delayed',
    duration: 450},
    function(){
    	animateTheRest();
    });

var animateTheRest = function(){
	console.log('test');
};

setTimeout(function(){
	myVivus.stop();
	gradientBackGroundAddOn.transition({ opacity: 100 }, 2000, 'ease');	
	comingSoon.transition({x: '0px', opacity: 80}, 750, 'ease');
}, 6500);
