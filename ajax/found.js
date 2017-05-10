var fs = require('fs');
/* TODO: Implement the Found AJAX Handler */
module.exports = {
  post: function (req, res){
  	req.body.price = parseInt(req.body.price);
    req.body.lat = parseFloat(req.body.lat);
    req.body.lng = parseFloat(req.body.lng);/*user will enter a string which we needs to convert to float*/

    var d = require("./data.json");
    d.push(req.body);
    fs.writeFile("ajax/data.json", JSON.stringify(d));
    res.success();
  }
}
