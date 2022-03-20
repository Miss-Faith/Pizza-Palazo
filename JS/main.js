//
$("#place-order").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

//Function order
        let order = (flavour, size, crust, topping, number, total) => {
            return {flavour, size, crust, topping, number, total};

//Compute order price
