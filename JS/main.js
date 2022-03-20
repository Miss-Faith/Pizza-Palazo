//Business logic
var sizePrice, crustPrice;
let total = 0;
function Pizzaorder(number, flavour, size, crust, topping, total) {
  this.flavour = flavour;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function() {

  $("button.add-pizza").click(function(event) {
    event.preventDefault();
    let pizzaFlavour = $(".pizza-type option:selected").val();
    let pizzaSize = $(".pizza-size option:selected").val();
    let pizzaCrust = $(".pizza-crust").val();
    let pizzaTopping = [];
    $.each($("input[name='toppings']:checked"), function(){
       pizzaTopping.push($(this).val());
  });
  pizzaTopping.join(", ");
//Compute order price
  switch (pizzaSize) {
    case "large":
      sizePrice = 1200;
    break;
    case "medium":
      sizePrice = 1000;
    break;
    case "small":
      sizePrice = 800;
    break;
  }
  switch (pizzaCrust) {
    case "plain":
      crustPrice = 0;
    case "crispy":
      crustPrice = 150;
    break;
    case "stuffed":
      crustPrice = 200;
    break;
    case "gluten-free":
      crustPrice = 200;
    break;
  }
  let topping_value = pizzaTopping.length * 50;

//functions
  $("button.add-pizza").click(function() {
    $("button.add-pizza").hide();
    $("#description").hide();
    $("#order-details").show();
  });
  });
});
