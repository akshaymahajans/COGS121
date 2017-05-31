var fs = require('fs');
/* TODO: Implement the Found AJAX Handler */
module.exports = {
  savePromotions: function (req, res){
    console.log("starting---");
    var d = require("./savedPromotion_info.json");

    //  var savedPromotion = req.body.saved_promotion;
    //  var savedInfo = {Email, Password, Name, Type, BusinessLocation};

    d.push(req.body.saved_promotion);
    // d.push(Password);
    // d.push(Name);
    // d.push(Type);
    // d.push(BusinessLocation);
    console.log("writing---" + d);
    fs.writeFile("ajax/savedPromotion_info.json", JSON.stringify(d));
    res.success();
  }
}
