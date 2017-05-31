jQuery(document).ready()
{
            ajax({
                url: "/ajax/getPromotion?action=getPromotionInfo",
                type: "get",
                success: function (data) {
                    data.forEach(function (promotion) {
                      $("#p_List").append(
                        '<div class="card-panel blue lighten-5 mainContent z-depth-1">'+
                        '<p id="p_Name" class=" blue-grey-text text-darken-1"><b>Name: </b>'+promotion.bName+'</p>'+
                        '<p id="p_Type" class=" blue-grey-text text-darken-1"><b>Type: </b>'+promotion.bType+'</p>'+
                        '<p id="p_Description" class=" blue-grey-text text-darken-1"><b>Promotion: </b>'+promotion.des+'</p>'+
                        '<p id="p_Time" class=" blue-grey-text text-darken-1"><b>Promotion Expiration Time: </b>'+promotion.time+'</p>'+
                        '<p id="p_Claim" class=" blue-grey-text text-darken-1"><b>Promotion Claim Limit: </b>'+promotion.claim+'</p>'+
                        '<p id="p_Location" class=" blue-grey-text text-darken-1"><b>Promotion Location:  </b>'+promotion.loc+'</p>'+
                        '</div>');
                    });
                }
            });
  }

  function ajax(option) {
      var originalSuccess = option.success;
      option.success = function (result) {
          var data = JSON.parse(result);
          if (data.code == 0) {
              originalSuccess(data.content);

          }
          else {
              alert("Error " + data.code + ": " + data.msg);
          }
      };
      option.error = function () {
          alert("Internet connection error");
      };
      $.ajax(option);
  }

  // jQuery(document).ready(function() {
  //   getPromotion();
  // })
