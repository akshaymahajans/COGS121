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
     var promotionInfo = {des, time, claim, loc, id};

    d.push(promotionInfo);
    // d.push(Password);
    // d.push(Name);
    // d.push(Type);
    // d.push(BusinessLocation);
    console.log("writing---" + d);
    fs.writeFile("ajax/promotion_info.json", JSON.stringify(d));
    res.success();
  }
}
