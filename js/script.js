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