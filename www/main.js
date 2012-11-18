$(document).ready(function() {

	$('#preview .gl-class').click(function() {
		$('#cars .s-class ').animate({
			left: '-1000px',
		}, 500, function() {});
		$('#cars .gl-class ').animate({
			left: '0px',
		}, 500, function() {});
		$('#cars .bmw ').animate({
			left: '1000px',
		}, 500, function() {});
		$('#preview .gl-class').css({
			opacity: 1,
			'background-position': '0 0',
			'box-shadow': '0 0 10px #eee',
		});
		$('#preview .s-class').css({
			opacity: 0.5,
			'background-position': '0 66px',
			'box-shadow': '0 0 10px #333',
		});
		$('#preview .bmw').css({
			opacity: 0.5,
			'background-position': '0 66px',
			'box-shadow': '0 0 10px #333',
		});
	});
	
	$('#preview .s-class').click(function() {
		$('#cars .s-class ').animate({
			left: '0px',
		}, 500, function() {});
		$('#cars .gl-class ').animate({
			left: '1000px',
		}, 500, function() {});
		$('#cars .bmw ').animate({
			left: '2000px',
		}, 500, function() {});
		$('#preview .s-class').css({
			opacity: 1,
			'background-position': '0 0',
			'box-shadow': '0 0 10px #eee',
		});
		$('#preview .gl-class').css({
			opacity: 0.5,
			'background-position': '0 66px',
			'box-shadow': '0 0 10px #333',
		});
		$('#preview .bmw').css({
			opacity: 0.5,
			'background-position': '0 66px',
			'box-shadow': '0 0 10px #333',
		});
	});
	
	$('#preview .bmw').click(function() {
		$('#cars .s-class ').animate({
			left: '-2000px',
		}, 500, function() {});
		$('#cars .gl-class ').animate({
			left: '-1000px',
		}, 500, function() {});
		$('#cars .bmw ').animate({
			left: '0px',
		}, 500, function() {});
		$('#preview .s-class').css({
			opacity: 0.5,
			'background-position': '0 66px',
			'box-shadow': '0 0 10px #333',
		});
		$('#preview .gl-class').css({
			opacity: 0.5,
			'background-position': '0 66px',
			'box-shadow': '0 0 10px #333',
		});
		$('#preview .bmw').css({
			opacity: 1,
			'background-position': '0 0px',
			'box-shadow': '0 0 10px #eee',
		});
	});
	
});
