
function createNewPromotion() {
          $.ajax({
              url: "/ajax/newPromotion?action=createPromotion",
              type: "post",
              data: {
                  businessName: $("#b_Name").val(),
                  businessType: $("#b_Type").val(),
                  promotionDescription: $("#p_description").val(),
                  promotionExpirationTime: $("#p_time").val(),
                  promotionClaimLimit: $("#p_claim").val(),
                  promotionLocation: $("#pac-input").val(),
                  // TODO: LOCATION TO ACCESS PLACE FORM SEARCH BOX
                  promotionId: Date.now(),
                  lat: myplace.lat,
                  lng: myplace.lng,
              },
              success: function (data) {
                  alert("New Promotion Post Success");
              }
          });
}

jQuery(document).ready(function() {
  $("#postbtn").click(function () {
    console.log("submit");
    createNewPromotion();
    window.location.href = '/merchant.html';
    return false;
  });
})
