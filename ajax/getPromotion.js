module.exports = {
  getPromotionInfo: function(req, res) {
    var data = require("./promotion_info.json");
    res.success(data);
  }
}
