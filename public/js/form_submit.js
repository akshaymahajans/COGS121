
function submit_form() {
          $.ajax({
              url: "/ajax/register?action=createAccount",
              type: "post",
              data: {
                  email: $("#m_email").val(),
                  password: $("#m_pass").val(),
                  Business_Name: $("#m_bName").val(),
                  Business_Type: $("#m_type").val(),
                  location: $("#m_location").val(),
                  // TODO: LOCATION TO ACCESS PLACE FORM SEARCH BOX
                  id: "1"
              },
              success: function (data) {
                  alert("Submit Success!");
              }
          });
}

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
      e.preventDefault();
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

		$('#mrid').on('submit', function(e) {
      e.preventDefault();
      var empty;
			$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
				if( $(this).val() == "" ) {
					e.preventDefault();
					$(this).addClass('input-error-blue');
          empty=true;
          return;
				}
				else {
					$(this).removeClass('input-error-blue');
          empty=false;
				}
			});
      if (empty==false){
      console.log("SUBMITTING FORM");
      submit_form();
      window.location.href = '/merchant.html';
    }
		});


});



// $("#mrid").submit(function () {
//     submit_form();
//     return false;
// });

// function ajax(option) {
//     var originalSuccess = option.success;
//     option.success = function (result) {
//         var data = JSON.parse(result);
//         if (data.code == 0) {
//             originalSuccess(data.content);
//
//         }
//         else {
//             alert("Error " + data.code + ": " + data.msg);
//         }
//     };
//     option.error = function () {
//         alert("Internet connection error");
//     };
//     $.ajax(option);
// }
