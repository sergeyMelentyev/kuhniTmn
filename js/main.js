 "use strict";
var gradientBackGroundAddOn = $('.gradientBackGroundAddOn');
var svgDunamicElements = $('.svgDunamicElements');
var comingSoon = $('.comingSoon');

gradientBackGroundAddOn.transition({ opacity: 100, delay: 4500 }, 2000, 'ease');	
comingSoon.transition({x: '0px', opacity: 100, delay: 6000}, 750, 'ease');

new Vivus('centerSvgDunamic', {
    type: 'delayed',
    duration: 300},
    function(){
    	animateTheRest();
    });

var animateTheRest = function(){
	console.log('test');
};
