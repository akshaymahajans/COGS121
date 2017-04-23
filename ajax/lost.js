/* TODO: Implement the lost AJAX Handler */
module.exports = {
  get/*name of the handler*/: function (req, res){
    try{
      var data = require("./data.json");
      res.success(data);
    } catch (ex){
      res.error(1, "data not found");/*0 represents the success*/
    }
  }
}
