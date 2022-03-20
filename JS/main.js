//Business logic

function getPizzaOrder(number, flavour, size, crust, topping, total) {
  this.flavour = flavour;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function() {
  $("button.add-pizza").click(function () {
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = [];
    $.each($("input[name='topping']:checked"), function(){
       topping.push($(this).val());
  });
  topping.join(", "));

//Compute order price
  switch (size) {
    case "0":
      price = 0;
    case "large":
      price = 1200;
    break;
    case "medium":
      price = 1000;
    break;
    case "small":
      price = 800;
    break;
  }
  switch (crust) {
    case "plain":
      price = 0;
    case "crispy":
      price = 150;
    break;
    case "stuffed":
      price = 200;
    break;
    case "gluten-free":
      price = 200;
    break;
  }
  let topping_value = topping.length * 50;
});
