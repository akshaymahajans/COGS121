$("footer > tab").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + $(this).attr("id") + "-section").addClass("active").siblings().removeClass("active");
});

$("#found-form").submit(function () {
    postFound();
    return false;
});

$(document).ready()
{
        ajax({
                  url: "/ajax/lost?action=get",
                  type: "get",
                  success: function (data) {
                      data.forEach(function (sale) {
                        $("#collist").append(
                            '<li><div class="collapsible-header"><i collapsiblelass="material-icons"></i>'
                            +sale.name+
                            '<i class="material-icons starbtn"  style="float: right;">star</i></div><div class="collapsible-body">'
                            +'<p>Business Name:</p>'
                            +'<p>Promotion Location:</p>'
                            +'<p>Promotion Details:</p>'
                            +'<p>Limitation of claiming:</p>'
                            +'</div></li>');
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

/*
//Fire Base Json File Adding
var found-item = ducment.getElementById("found-item");
var pac-input = ducment.getElementById("pac-input");
var item-price = ducment.getElementById("item-price");
var found-description = ducment.getElementById("found-description");

function submitClick(){
    var firebaseRef = firebase.database().ref("discounts");

    firebaseRef.push({
        name: found-item,
        price: item-price,
        description: found-description,
        location: pac-input
    })

}
*/



