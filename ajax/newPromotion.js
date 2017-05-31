var fs = require('fs');
/* TODO: Implement the Found AJAX Handler */
module.exports = {
  createPromotion: function (req, res){
    console.log("starting---");
    var d = require("./promotion_info.json");

     var des = req.body.promotionDescription;
     var time = req.body.promotionExpirationTime;
     var claim = req.body.promotionClaimLimit;
     var loc = req.body.promotionLocation;
     var id = req.body.promotionId;
     var latitude = req.body.lat;
     var longitude = req.body.lng;
     var promotionInfo = {des, time, claim, loc, id, latitude, longitude};

    d.push(promotionInfo);
    console.log("writing---" + d);
    fs.writeFile("ajax/promotion_info.json", JSON.stringify(d));
    res.success();
  }
  // getPromotionInfo: function(req, res) {
  //   var data = require("./promotion_info.json");
  //   res.success(data);
  // }

}
//
// module.exports = {
//   getPromotionInfo: function(req, res) {
//     var data = require("./promotion_info.json");
//     res.success(data);
//   }
// }
