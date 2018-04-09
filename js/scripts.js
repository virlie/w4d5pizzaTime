var myPizza = new Pizza( 0, 0, [] );
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
      myPizza.setType (0);

  }else if(document.forms[0].pizza[1].checked == true){
      total += meatsOnly;
      myPizza.setType (1);

  }else if(document.forms[0].pizza[2].checked == true){
      total += glutenFree;
      myPizza.setType(2);

  }else if(document.forms[0].pizza[3].checked == true){
      total += Vegan;
      myPizza.pizzaType(3);

  }
    if (document.forms[0].pizzaSize[0].checked == true){
      total+= sizeSmall;
      myPizza.setSize = (0);
  }else if (document.forms[0].pizzaSize[1].checked == true){
        total+= sizeMedium;
        myPizza.setSize = (1);
  }else if (document.forms[0].pizzaSize[2].checked == true){
          total+= sizeLarge;
        myPizza.setSize = (2);
        }
  var pizzaToppings =  ["Bacon","Extra Onions","Anchovies","Pepperoni","Extra Cheese"];

  myPizza.toppings = [];
  for(var i = 0; i < 5; i++){
    if(document.forms[0].toppings[i].checked == true){
      total += addTop;
      myPizza.toppings.push( pizzaToppings[i])
    }



    }
    document.pizzaTotal.Total.value = total;
  }



function Pizza( pizzaType, pizzaSize, pizzaToppings){
  this.pizzaType = pizzaType;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}
Pizza.prototype.setType = function (type){
  this.pizzaType = type;
}
Pizza.prototype.getType = function (){
  return this.pizzaType;
}
Pizza.prototype.setSize = function (type){
    this.pizzaType = type;
}
Pizza.prototype.getSize = function (){
    return this.pizzaType;
  }

function showOrder(pizza){
  var pizzaType = ["Mother Earth","Carnivore's Dream","The Floor is Gluten","Vegan"];
  var pizzaSize = ["Personal Pan","Let's Share","FamBam"];

  var orderOut = "You ordered a ";

  orderOut += pizzaType[myPizza.getType()];
  orderOut += ", size ";
  orderOut += pizzaSize[ myPizza.getSize()];
  orderOut +=" with  ";
  if ( myPizza.toppings.length ==0){
    orderOut +=" no toppings";
  }else{
    orderOut += myPizza.toppings.join(",");

  }
  document.pizzaTotal.orderOutput.value = orderOut;

}








//
//
//   }
// }
