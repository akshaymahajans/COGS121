
jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    //$.backstretch("img/BP.png");

    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {

    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });

		$('.login-form-blue input[type="text"], .login-form-blue input[type="password"], .login-form textarea').on('focus', function() {
			$(this).removeClass('input-error-blue');
		});

		$('.login-form-blue').on('submit', function(e) {

			$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
				if( $(this).val() == "" ) {
					e.preventDefault();
					$(this).addClass('input-error-blue');
				}
				else {
					$(this).removeClass('input-error-blue');
				}
			});

		});


});
