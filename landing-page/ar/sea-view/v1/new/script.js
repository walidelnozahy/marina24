
$(document).ready(function() {
    $("#go-to-fill-form").click(function() {
        $('html, body').animate({
            scrollTop: $("#subscribe").offset().top
        }, 1000);
    });
    window.sr = ScrollReveal({ 
        duration: 2000 ,
        rotate: { x: 0, y: -10, z: 0 }
    });
    sr.reveal('.first-section-each', 50);
    
    sr.reveal('.move-text', {
        interval: 200,
        distance: '20px',
    });
    sr.reveal('.apartments-each', 50);
    sr.reveal('.new-life-2 .text', 200);
    sr.reveal('.fadi-talk', 50);
    $(window).scroll(function() {
            // $('video').prop("volume", 0);
        var hT = $('.image-3').offset().top,
            hH = $('.image-3').outerHeight(),
            hT1 = $('.image-3').offset().top,
            hH1 = $('.image-3').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        // if (wS !== 0 ){
        //     $('video').prop("volume", 0);
        // } else {
        //     $('video').prop("volume", 1);
        // }

        if (wS > (hT+hH-wH +50)){
            $('.animate-svg').addClass('play-svg')
        }
     });
    
     $(function() {
		$('#subscribe').submit(function(event) {
		  event.preventDefault();
	  
		  var subscribeForm = $(this);
		  var subscribeButton = $('input[type=submit]', subscribeForm);
	  
		  if ($("input[name='email']").val() === '') {
			// alert('Please enter an email address')
			return
		  }
	  
		  $.ajax({
			url: subscribeForm.prop('action'),
			type: 'POST',
			crossDomain: true,
			headers : {
			  'accept' : 'application/javascript',
			},
			data: $('#subscribe').serialize(),
			beforeSend: function() {
			  subscribeButton.prop('disabled', 'disabled');
			}
		  })
		  .done(function(response) {
			// You will do something WAY BETTER than alert
      // because you are an awesome designer.
      fbq('track', 'Lead');

			// window.location.href = 'https://cayan-group.net/landing/ar/new/v1/istanbul/property101/ar/thanks.html';
			subscribeButton.prop('disabled', false);
		  })
		  .fail(function(response) {
			alert('Dang, something went wrong!');
			subscribeButton.prop('disabled', false);
		  })
	  
		});
	  });
})
