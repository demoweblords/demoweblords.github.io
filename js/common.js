$(function() {

	$('.hostels').slick({
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		speed: 500
	});

	// $(document).ready(function() {
	// 	$('.hostel-images').magnificPopup({
	// 		delegate: 'a',
	// 		type: 'image',
	// 		tLoading: 'Загрузка изображения #%curr%...',
	// 		mainClass: 'mfp-fade',
	// 		removalDelay: 300,
	// 		gallery: {
	// 			enabled: true,
	// 			navigateByImgClick: true,
	// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 		},
	// 		image: {
	// 			tError: 'Ошибка при загрузке <a href="%url%">картинки #%curr%</a>',
	// 		}
	// 	});
	// });

	// $('.calendar-wrapper .form-item').simpleCalendar({
	// 	months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	// 	days: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	// 	displayYear: false,
	// 	fixedStartDay: true,
	// 	displayEvent: true,
	// 	events: [
	// 		{
	// 			startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
	// 			endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
	// 			summary: 'Visit of the Eiffel Tower'
	// 		},
	// 		// generate new event for yesterday at noon
	// 		{
	// 			startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
	// 			endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
	// 			summary: 'Restaurant'
	// 		},
	// 		// generate new event for the last two days
	// 		{
	// 			startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
	// 			endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
	// 			summary: 'Visit of the Louvre'
	// 		}
	// 	],
	// 	onDateSelect: 
	// 	function handler(date, events) {
	// 		console.log(date,'asdsa', events);
	// 	}
	// });
	
	$('.calendarr').flatpickr({
		enableTime: true,
		inline: true,
		locale: 'ru',
		minDate: 'today',
		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		dateFormat: 'h',
		ariaDateFormat: 'h',
		onChange: function(date, str, instance) {
			var month = date[0].getUTCMonth() + 1;
			var day = date[0].getUTCDate();
			var year = date[0].getUTCFullYear();

			var timeH = date[0].getHours();
			var timeM = date[0].getMinutes();
			if(timeM <=9) {
				timeM = '0' + timeM;
			} 

			var newDate = day + '.' + month + '.' + year;

			var newTime = timeH + ':' + timeM;

			console.log(newDate);

			console.log(newTime);
		}
	});

	$('.dateTime').flatpickr({
		enableTime: true,
		locale: 'ru',
		minDate: 'today',
	});

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}

	$('.btn-back').click(function(e) {
		window.history.back();
	})

	$('.phone-input').mask("+9 (999) 999-9999");
	
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.navbar').toggleClass('active');
	});

});
