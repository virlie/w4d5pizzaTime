

function runTotal() {
    var total = 0;
    var veggiesOnly = 10.0;
    var meatsOnly = 15.0;
    var glutenFree = 20.0;
    var Vegan = 25.0;

    var addTop = 0.25;

    if(document.forms[0].pizza[0].checked == true) {
      total += veggiesOnly;

    }else if(document.forms[0].pizza[1].checked == true){
      total += meatsOnly;

    }else if(document.forms[0].pizza[2].checked == true){
      total += glutenFree;

    }else if(document.forms[0].pizza[3].checked == true){
      total += Vegan;

    }

    for(var i = 0; i < 5; i++){

      if(document.forms[0].toppings[i].checked == true){
        total += addTop;
      }
      document.pizzaTotal.Total.value = total;
    }
  }
  let pizza = [];
  let total;

  function Pizza( pizzaType, pizzaToppings, pizzaSize){
    this.pizzatype = pizzaType;
    this.toppings = pizzaToppings;
    this.size = pizzaSize;
  }

    function forEach(pizza){

   var pizzaType = ["pizza0","pizza1","pizza2","pizza3"];
   var pizzaToppings =  ["extraBacon","extraOnions","anchovies","pepperoni","extraCheese"];
   var pizzaSize = ["small","medium","large"];


 }




//
//
//   }
// }
