var pizza = new Pizza( 0, 0, [] );
var total;


function runTotal() {
  var veggiesOnly = 10.0;
  var meatsOnly = 15.0;
  var glutenFree = 20.0;
  var Vegan = 25.0;
  var sizeSmall = 2.0;
  var sizeMedium = 4.0;
  var sizeLarge = 6.0;


  var addTop = 0.25;
  total = 0.0;

  if(document.forms[0].pizza[0].checked == true) {
      total += veggiesOnly;
      pizza.pizzaType =0;

  }else if(document.forms[0].pizza[1].checked == true){
      total += meatsOnly;
      pizza.pizzaType =1;

  }else if(document.forms[0].pizza[2].checked == true){
      total += glutenFree;
      pizza.pizzaType=2;

  }else if(document.forms[0].pizza[3].checked == true){
      total += Vegan;
      pizza.pizzaType=3;

  }
    if (document.forms[0].pizzaSize[0].checked == true){
      total+= sizeSmall;
      pizza.size = 0;
  }else if (document.forms[0].pizzaSize[1].checked == true){
        total+= sizeMedium;
        pizza.size = 1;
  }else if (document.forms[0].pizzaSize[2].checked == true){
          total+= sizeLarge;
        pizza.size = 2;
        }
  var pizzaToppings =  ["Bacon","Extra Onions","Anchovies","Pepperoni","Extra Cheese"];

  pizza.toppings = [];
  for(var i = 0; i < 5; i++){
    if(document.forms[0].toppings[i].checked == true){
      total += addTop;
      pizza.toppings.push( pizzaToppings[i])
    }



    }
    document.pizzaTotal.Total.value = total;
  }



function Pizza( pizzaType, pizzaSize, pizzaToppings){
  this.pizzatype = pizzaType;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
  }

function showOrder(pizza){
  var pizzaType = ["Mother Earth","Carnivore's Dream","The Floor is Gluten","Vegan"];
  var pizzaSize = ["Personal Pan","Let's Share","FamBam"];

  document.pizzaTotal.orderOutput.value = "this is a test"




 }




//
//
//   }
// }
