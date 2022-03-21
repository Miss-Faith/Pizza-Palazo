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
    $("button.add-pizza").hide();
  });

    $("#delivery").change(function() {
        if ($(this).prop('checked')) {
            alert("We charge an additional Ksh.200 for deliveries.");
            $("#order-details").hide();
            $("#location").show();
        }
        else {
            return false;
        }
    });
    $("button#add-location").click(function(event) {
      event.preventDefault();
      let deliveryFee = 150;
      let clientName = $(".client-name").val();
      let clientNumber = $(".client-number").val();
      let clientLocation = $(".client-location").val();

      $("#location").hide();
      $("#order-details").show();
    });
});
