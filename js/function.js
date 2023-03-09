//PC lnb - 메뉴
$(function () {
	const $home = $('header .headleft>.home')
	const $shop = $('header .headleft>.shop')
	const $home_lnb = $('header .lnb>.menu> a')
	const $shop_lnb = $('header .lnb>.mnu> a')

	$home.on('mouseenter', function () {
		$home_lnb.stop().fadeIn(30).parent().stop().fadeIn(30)
	})

	$home.on('mouseleave', function () {
		$home_lnb.stop().fadeOut(30).parent().stop().fadeOut(30)
	})

	$shop.on('mouseenter', function () {
		$shop_lnb.stop().fadeIn(30).parent().stop().fadeIn(30)
	})

	$shop.on('mouseleave', function () {
		$shop_lnb.stop().fadeOut(30).parent().stop().fadeOut(30)
	})
})

//MOBILE lnb - 메뉴
$(function () {
	const $h2 = $('#wrap aside > #mo-nav h2 > a')
	const $clse = $('.btnclose')
	const $btnGnb = $('.nav-btn')

	$h2.on('click', function (evt) {
		evt.preventDefault()

		$(this).parent().toggleClass('on').next().slideToggle(150)
	})

	// $clse.on('click', function (evt) {
	// 	evt.preventDefault()
	// 	$('aside').fadeOut(500)
	// })
	$btnGnb.on('click', function (evt) {
		evt.preventDefault()

		$('aside').stop().animate({ left: 0 }, 500).css({ visibility: 'visible' }).next().fadeIn(500)
	})

	$clse.on('click', function (evt) {
		evt.preventDefault()
		$('aside').stop().animate({ left: -300 }, 500).next().fadeOut(500)
	})
})

//MAIN- 슬라이더
$(function () {
	$('.slider').bxSlider({
		mode: 'horizontal', //horizontal, vertical, speed, fade
		speed: 1000, //슬라이드가 변환되는 시간
		auto: true, //자동변환
		pause: 3000, //변황 후 멈춰있는 시간
		autoControls: false, //컨트롤 버튼 노출 (기본값:false)
		stopAutoOnClick: true, //이전다음 등의 버튼을 직접 클릭시 자동변환 멈춤
		pager: true, //페이저 노출 여부 (기본값:true)
	})
})

//스크롤탑값에 따른 header 고정처리
$(function () {
	const $header = $('#header')
	$(window).on({
		scroll: function () {
			const scrollTop = Math.ceil($(window).scrollTop())

			if (scrollTop > 70) {
				$header.addClass('fixed')
				$header.next().css({ marginTop: 66 })
			} else {
				$header.removeClass('fixed')
				$header.next().css({ marginTop: 0 })
			}
		},
	})
})

//탑버튼
$(function () {
	$(window).on({
		scroll: function () {
			const scrollTop = Math.ceil($(window).scrollTop())

			//탑버튼 노출처리
			const $top = $('#toTop')

			if (scrollTop > 130) {
				$top.fadeIn()
			} else {
				$top.fadeOut()
			}
		},
	})

	//scrolltop
	$('#toTop').on('click', function (evt) {
		evt.preventDefault()

		$('html,body').animate({ scrollTop: 0 }, 400)
	})
})
