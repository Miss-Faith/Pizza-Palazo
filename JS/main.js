//Business logic
var sizePrice, crustPrice, toppingValue, totalPrice, checkoutTotalWithDelivery;
let total = 0;

function Pizzaorder(type, size, crust, topping, total) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function() {

  $("button#add-pizza").click(function(event) {
    event.preventDefault();

    let pizzaType = $(".pizza-type").val();
    let pizzaSize = $(".pizza-size").val();
    let pizzaCrust = $(".pizza-crust").val();
    let pizzaTopping = [];
    $.each($("input[name='toppings']:checked"), function(){
       pizzaTopping.push($(this).val());
  });
  pizzaTopping.join(", ");

  //Compute order price
  switch (pizzaSize) {
    case "Large":
      sizePrice = 1200;
      toppingValue = 70;
    break;
    case "Medium":
      sizePrice = 1000;
      toppingValue = 50;
    break;
    case "Small":
      sizePrice = 800;
      toppingValue = 30;
    break;
  }
  switch (pizzaCrust) {
    case "Crispy":
      crustPrice = 150;
    break;
    case "Stuffed":
      crustPrice = 200;
    break;
    case "Gluten-free":
      crustPrice = 200;
    break;
  }
  let toppingPrice = pizzaTopping.length * toppingValue;

  totalPrice = sizePrice + crustPrice + toppingPrice;

  console.log(totalPrice);

  var newOrder = new Pizzaorder(pizzaType, pizzaSize, pizzaCrust, pizzaTopping, totalPrice);

    $("#description").hide();
    $("#order-details").show();
    $("#orders-made").append(
      '<tr><td id="pizzatype">'+newOrder.type +
      '</td><td id="pizzasize">' + newOrder.size +
      '</td><td id="pizzacrust">'+newOrder.crust +
      '</td><td id="pizzatopping">'+newOrder.topping+
      '</td><td id="total">'+newOrder.total+
      '</td></tr>');
    $("button.add-pizza").hide()

    // function onClickRemove(deleteButton) {
    //   let row = deleteButton.parentElement.parentElement;
    //   row.parentNode.removeChild(row);
    //   updateSubTotal();
    // }
    });


    $("#delivery").change(function() {
        if ($(this).prop('checked')) {
          $("#myModal").modal("show")
        }
        else {
            return false;
        }
    });

    $("button#checkout").click(function(event) {
      event.preventDefault();
      $("button#add-pizza").hide()
      $("button#checkout").hide()
      $("fieldset").hide()

      var numberOfRows = $('#table tr').length;
      console.log(numberOfRows)

      var table = document.getElementById("table");
      var checkoutTotal = 0;

      for(var i = 2; i < numberOfRows; i++) {
        checkoutTotal = checkoutTotal + parseInt(table.rows[i].cells[4].innerText);
        checkoutTotalWithDelivery = checkoutTotal + 150;
      }

      if ($("#delivery").prop('checked')) {
        $("#locationModal").modal('show');
        $("#submit").click(function (event) {
          event.preventDefault();
          var clientName = $("#client-name").val();
          var clientNumber = $("#client-number").val();
          var clientLocation = $("#client-location").val();

        $("#final-message").append(`Hi ${clientName}, your total order is Ksh.${checkoutTotalWithDelivery}. Your order will be delivered to ${clientLocation} in 30 mins.`)
        $("#locationModal").modal('hide');
          });
      }else {
          $("#final-message").append(`Hi, your total order is Ksh.${checkoutTotal}. Your order will be ready for pick up in 30 mins.`);
      };
  });
});
