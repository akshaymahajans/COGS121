jQuery(document).ready()
{
            ajax({
                url: "/ajax/getPromotion?action=getPromotionInfo",
                type: "get",
                success: function (data) {
                    data.forEach(function (promotion) {
                      $("#sp_List").append(
                        '<div class="card red lighten-5 mainContent" id="card'+promotion.id+'">'+
                        '<div class="card-content blue-grey-text text-darken-1">'+
                        '<span class="card-title">'+promotion.bName+'</span>'+
                        '<p id="p_Type" class=" blue-grey-text text-darken-1"><b>Type: </b>'+promotion.bType+'</p>'+
                        '<p id="p_Description" class=" blue-grey-text text-darken-1"><b>Promotion: </b>'+promotion.des+'</p>'+
                        '<p id="p_Time" class=" blue-grey-text text-darken-1"><b>Promotion Expiration Time: </b>'+promotion.time+'</p>'+
                        '<p id="p_Location" class=" blue-grey-text text-darken-1"><b>Promotion Location:  </b>'+promotion.loc+'</p>'+
                        '</div>'+
                        '<div class="card-action">'+'<a class="light-blue-text text-lighten-3" href="#">Show me the direction</a>'+
                        '<a class="light-blue-text" id="removebtn'+promotion.id+'" href="#" style="float:right;">Remove</a>'+
                        '</div>'+'</div>');


                    });
                    $('"#removebtn'+data[0].id+'"').click(function() {
                        $('"#card'+data[0].id+'"').hide(500);
                      });
                    $('"#removebtn'+data[1].id+'"').click(function() {
                          $('"#card'+data[1].id+'"').hide(500);
                        });
                        $('"#removebtn'+data[2].id+'"').click(function() {
                            $('"#card'+data[2].id+'"').hide(500);
                          });
                          $('"#removebtn'+data[3].id+'"').click(function() {
                              $('"#card'+data[3].id+'"').hide(500);
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
