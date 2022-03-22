//Business logic
var sizePrice, crustPrice, toppingValue;
let total = 0;

function Pizzaorder(type, size, crust, topping, total) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function() {

    let pizzaType = $(".pizza-type").val();
    let pizzaSize = $(".pizza-size").val();
    let pizzaCrust = $(".pizza-crust").val();
    let pizzaTopping = [];
    $.each($("input[name='toppings']:checked"), function(){
       pizzaTopping.push($(this).val());
  });
  pizzaTopping.join(", ");

  let deliveryFee = 150;
  let clientName = $("#client-name").val();
  let clientNumber = $("#client-number").val();
  let clientLocation = $("#client-location").val();

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
    case "Plain":
      crustPrice = 0;
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
  let checkoutTotal =0;
  checkoutTotal = checkoutTotal + totalPrice;
  checkoutTotalWithDelivery = checkoutTotal + deliveryFee;

  var newOrder = new Pizzaorder(pizzaType, pizzaSize, pizzaCrust, pizzaTopping, totalPrice);

  $("button#add-pizza").click(function(event) {
    event.preventDefault();
    $("#description").hide();
    $("#order-details").show();
    $("#orders-made").append(
      '<tr><td id="pizzatype">'+newOrder.type +
      '</td><td id="pizzasize">' + newOrder.size +
      '</td><td id="pizzacrust">'+newOrder.crust +
      '</td><td id="pizzatopping">'+newOrder.topping+
      '</td><td id="total">'+newOrder.total+
      '</td></tr>');
    $("button.add-pizza").hide();
  });

    $("#delivery").change(function() {
        if ($(this).prop('checked')) {
          alert("We charge an additional Ksh.150 for deliveries.");
          return false;
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
        if ($("#delivery").prop('checked')) {
          $("#location").show();
          $("button#add-location").click(function(event) {
             event.preventDefault();
             $("#final-message").append(`Hi + ${clientName} +  your total order is Ksh.${checkoutTotalWithDelivery} +. Delivery will be made to  + ${clientLocation} +  in 30 mins.`);
             return false;
           });
        }else
          $("#final-message").append(`Hi, your total order is Ksh.${checkoutTotal} . Your order will be ready for pick up in 30 mins.`);
    });
});
