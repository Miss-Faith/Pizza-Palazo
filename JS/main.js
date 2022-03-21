//Business logic
var sizePrice, crustPrice;
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
    if($(".pizza-type").val("") || $(".pizza-size").val("") || $(".pizza-crust").val("")) {
      alert("Select Pizza type")
      }else {}
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
    break;
    case "Medium":
      sizePrice = 1000;
    break;
    case "Small":
      sizePrice = 800;
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
  let toppingPrice = pizzaTopping.length * 50;

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
      $("#order-details").show();
    $("button.add-pizza").hide();

  function resetFields() {
    let pizzaType = $(".pizza-type").val("");
    let pizzaSize = $(".pizza-size").val("");
    let pizzaCrust = $(".pizza-crust").val("");
    let pizzaTopping = $(".pizza-topping").prop("checked", false);
  }
  resetFields()
  });
});
