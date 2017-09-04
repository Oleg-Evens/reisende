$(window).scroll(function() {
	$('.mov').each(function() {
		var topOfWindow = $(window).scrollTop();
		if(topOfWindow > 600) {
			$('.pent .mov').addClass('fadeIn')
		}
		if(topOfWindow > 1000) {
			$('.pent .mov').css('opacity', '1');
		}
		if(topOfWindow > 1500) {
			$('.arguments .mov').addClass('fadeInUp');
			$('.arguments .mov').css('opacity', '1');
		}
		if(topOfWindow > 2200) {
			$('.cont .mov').addClass('fadeInLeft')
		}
		if(topOfWindow > 80) {
			$('#open').css('display', 'block');
		}
	})
})
$(document).ready(function(){
	var body = $("html, body");
	$("#r1").click(function () {
		body.stop().animate({scrollTop: $(".navbar").offset().top}, 1000, 'swing', function() { });
	});

	$("#r2").click(function () {
		body.stop().animate({scrollTop: $(".quad").offset().top}, 1000, 'swing', function() { });
	});

	$("#r3").click(function () {
		body.stop().animate({scrollTop: $(".pent").offset().top}, 1000, 'swing', function() { });
	});

	$("#r4").click(function () {
		body.stop().animate({scrollTop: $(".works").offset().top}, 1000, 'swing', function() { });
	});

	$("#r5").click(function () {
		body.stop().animate({scrollTop: $(".why_i").offset().top}, 1000, 'swing', function() { });
	});

	$("#r6").click(function () {
		body.stop().animate({scrollTop: $(".cont").offset().top}, 1000, 'swing', function() { });
	});

	$("#w1").click(function () {
		body.stop().animate({scrollTop: $(".navbar").offset().top}, 1000, 'swing', function() { });
	});

	$("#w2").click(function () {
		body.stop().animate({scrollTop: $(".quad").offset().top}, 1000, 'swing', function() { });
	});

	$("#w3").click(function () {
		body.stop().animate({scrollTop: $(".pent").offset().top}, 1000, 'swing', function() { });
	});

	$("#w4").click(function () {
		body.stop().animate({scrollTop: $(".works").offset().top}, 1000, 'swing', function() { });
	});

	$("#w5").click(function () {
		body.stop().animate({scrollTop: $(".why_i").offset().top}, 1000, 'swing', function() { });
	});

	$("#w6").click(function () {
		body.stop().animate({scrollTop: $(".cont").offset().top}, 1000, 'swing', function() { });
	});
});
$('#open').click(function() {
	timer = setInterval(function(){
		f();
	}, 25)
	return timer;
})

$("#w7").click(function () {
	clearInterval(timer);
	$('.left-panel').css('left', -200);
});

var test; 

var timer = setInterval(function(){
	f();
}, 25)

function f() {
	test = $(document).scrollTop();
	if(test > 99) {
		$('.left-panel').css('left', 0);
		$('.left-panel').css('top', 0);
		$('.open').css('left', 0);
		$('.open').css('top', 0);
	} else {
		$('.left-panel').css('left', -200);
		$('.open').css('left', -200);
	}
}


$('.slick').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1
});

var x = 0;
var n = 0;
var atom = [];
var q = 0;
var elem = [];
elem = document.querySelectorAll('.lang');
var distance = elem.length;
var obj = {
	radius: 125
}
for(var t = 0; t < distance; t++) {
	atom[t] = q;
	q += 6.28/distance;
}
ter(atom,obj,elem,distance)

function ter(atom,obj,elem,distance) {
	var timer = setInterval(function() {
		for(var i = 0; i < distance; i++) {
			elem[i].style.left = 170 + obj.radius * Math.sin(atom[i]) + 'px';
			elem[i].style.top = 170 + obj.radius * Math.cos(atom[i]) + 'px';
			atom[i]+= 0.01;
		}
	}, 10)
}







var knowledge = ['html', 'css', 'bootstrap', 'js', 'point-js', 'jquery'];
var width = '150px';
var radius = 250;
var speed = 1;





var length = knowledge.length;
for(var i = 0; i < length; i++) {
	$(".core").append('<div class="lang"><img width="' + width + '" src="images/' + knowledge[i] + '.png"></div>');
}
var x = 0;
var n = 0;
var atom = [];
var q = 0;
var elem = [];
elem = document.querySelectorAll('.lang');
var distance = elem.length;
for(var t = 0; t < distance; t++) {
	atom[t] = q;
	q += 6.28/distance;
}
ter(atom,obj,elem,distance)

function ter(atom,obj,elem,distance) {
	var timer = setInterval(function() {
		for(var i = 0; i < distance; i++) {
			elem[i].style.left = 170 + radius * Math.sin(atom[i]) + 'px';
			elem[i].style.top = 170 + radius * Math.cos(atom[i]) + 'px';
			atom[i]+= 0.0005;
		}
	}, speed)
}

setInterval(function(){
	if($('.works').css('width') == '350px') {
		return radius = 150;
	}
},1000)

$(document).ready(function(){
	var elem1 = document.querySelector('.line-on1');
	var elem2 = document.querySelector('.line-on2');
	var elem3 = document.querySelector('.line-on3');
	var elem4 = document.querySelector('.line-on4');
	var elem5 = document.querySelector('.line-on5');
	var elem6 = document.querySelector('.line-on6');
	var elem7 = document.querySelector('.line-on7');
	var elem8 = document.querySelector('.line-on8');
	var elem9 = document.querySelector('.line-on9');
	var width1 = 1;
	var width2 = 1;
	var width3 = 1;
	var width4 = 1;
	var width5 = 1;
	var width6 = 1;
	var width7 = 1;
	var width8 = 1;
	var width9 = 1;
	$(window).scroll( function() { 
 		var scrolled_val = $(document).scrollTop();
	if(scrolled_val > 500) {
	var timer = setInterval(function(){
		if(width1 < 99) {
			width1++;
			elem1.style.width = width1 + '%';
			var num = document.querySelector('.num-html').innerHTML = width1 + '%';
		} else {
			clearInterval(timer);
	};
		if(width2 < 99) {
			width2++;
			elem2.style.width = width2 + '%';
			var num = document.querySelector('.num-css').innerHTML = width2 + '%';
		} else {
	};  
		if(width3 < 75) {
			width3++;
			elem3.style.width = width3 + '%';
			var num = document.querySelector('.num-js').innerHTML = width3 + '%';
		} else {
	};
		if(width4 < 55) {
			width4++;
			elem4.style.width = width4 + '%';
			var num = document.querySelector('.num-pointjs').innerHTML = width4 + '%';
		} else {
	};
		if(width5 < 95) {
			width5++;
			elem5.style.width = width5 + '%';
			var num = document.querySelector('.num-bootstrap').innerHTML = width5 + '%';
		} else {
	};
		if(width6 < 80) {
			width6++;
			elem6.style.width = width6 + '%';
			var num = document.querySelector('.num-jquery').innerHTML = width6 + '%';
		} else {
	};
		if(width7 < 60) {
			width7++;
			elem7.style.width = width7 + '%';
			var num = document.querySelector('.num-PHP7').innerHTML = width7 + '%';
		} else {
	};
		if(width8 < 75) {
			width8++;
			elem8.style.width = width8 + '%';
			var num = document.querySelector('.num-MySQL').innerHTML = width8 + '%';
		} else {
	};
		if(width9 < 80) {
			width9++;
			elem9.style.width = width9 + '%';
			var num = document.querySelector('.num-Ajax').innerHTML = width9 + '%';
		} else {
	};
}, 100);
}
});
	var elem10 = document.querySelector('.navbar-fixed');
	$(window).scroll( function() { 
 		var scrolled_val = $(document).scrollTop();
	if(scrolled_val > 100) {
		$('.header-settings').css('height', '55px');
		$('.header-settings').css('padding-top', '0px');
		$('.header-settings').css('background', '#b3b1b2');
	} else {
		$('.header-settings').css('height', '100px');
		$('.header-settings').css('padding-top', '20px');
		$('.header-settings').css('background', '#3d3d3d');
	}
});
});