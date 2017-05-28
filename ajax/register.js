var fs = require('fs');
/* TODO: Implement the Found AJAX Handler */
module.exports = {
  createAccount: function (req, res){
    console.log("starting---");
    var d = require("./merchant_info.json");

     var Email = req.body.email;
     var Password = req.body.password;
     var Name = req.body.Business_Name;
     var Type = req.body.Business_Type;
     var BusinessLocation = req.body.location;
     var merchantInfo = {Email, Password, Name, Type, BusinessLocation};

    d.push(merchantInfo);
    // d.push(Password);
    // d.push(Name);
    // d.push(Type);
    // d.push(BusinessLocation);
    console.log("writing---" + d);
    fs.writeFile("ajax/merchant_info.json", JSON.stringify(d));
    res.success();
  }
}
