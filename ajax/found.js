/* TODO: Implement the Found AJAX Handler */
module.exports = {
  post: function (req, res){
    req.body.lat = parseFloat(req.body.lat);
    req.body.lng = parseFloat(req.body.lng);/*user will enter a string which we needs to convert to float*/
    require("./data.json").push(req.body);/*push is a function in array that can add a new data to the end of array*/
    res.success();
  }
}
