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

$("#r1").click(function () {
	$("body").animate({scrollTop: 0}, 1000);
});

$("#r2").click(function () {
	$("body").animate({scrollTop: 80}, 1000);
});

$("#r3").click(function () {
	$("body").animate({scrollTop: 1000}, 1000);
});

$("#r4").click(function () {
	$("body").animate({scrollTop: 1875}, 1000);
});

$("#r5").click(function () {
	$("body").animate({scrollTop: 2600}, 1000);
});

$("#r6").click(function () {
	$("body").animate({scrollTop: 3100}, 1000);
});

$("#w1").click(function () {
	$("body").animate({scrollTop: 0}, 1000);
});

$("#w2").click(function () {
	$("body").animate({scrollTop: 80}, 1000);
});

$("#w3").click(function () {
	$("body").animate({scrollTop: 1000}, 1000);
});

$("#w4").click(function () {
	$("body").animate({scrollTop: 1875}, 1000);
});

$("#w5").click(function () {
	$("body").animate({scrollTop: 2600}, 1000);
});

$("#w6").click(function () {
	$("body").animate({scrollTop: 3100}, 1000);
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
			elem[i].style.left = 170 + radius * Math.sin(atom[i]) + 'px';
			elem[i].style.top = 170 + radius * Math.cos(atom[i]) + 'px';
			atom[i]+= 0.0005;
		}
	}, speed)
}

