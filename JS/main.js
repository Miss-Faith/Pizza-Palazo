//Business logic

function getPizzaOrder(number, flavour, size, crust, topping, total) {
  this.number = number;
  this.flavour = flavour;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function() {
  $("button.add-pizza").click(function () {
    let number = 1;
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = [];
    $.each($("input[name='topping']:checked"), function(){
       topping.push($(this).val());
  });
  topping.join(", "));

//Compute order price
  let price, totalPrice;
    switch (size) {
      case size = "large":
        price = 1200;
        if (crust === "plain") {
          totalPrice = (price * number);
        }else if (crust === "crispy") {
          totalPrice = ((price +150) * number);
        }else if (crust === "stuffed") {
          totalPrice = ((price + 200) * number);
        }else {
          totalPrice = ((price + 200) * number);
        }
        break;
      case size = "medium":
        price = 1000;
        if (crust === "plain") {
          totalPrice = (price * number);
        }else if (crust === "crispy") {
          totalPrice = ((price +150) * number);
        }else if (crust === "stuffed") {
          totalPrice = ((price + 200) * number);
        }else {
          totalPrice = ((price + 200) * number);
        }
        break;
      case size = "regular":
        price = 800;
        if (crust === "plain") {
          totalPrice = (price * number);
        }else if (crust === "crispy") {
          totalPrice = ((price +150) * number);
        }else if (crust === "stuffed") {
          totalPrice = ((price + 200) * number);
        }else {
          totalPrice = ((price + 200) * number);
        }
        break;
  });
});
