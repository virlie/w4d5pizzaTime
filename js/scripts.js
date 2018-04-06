function runTotal() {
    var total = 0;
    var veggiesOnly = 10.0;
    var meatsOnly = 15.0;
    var fishOnly = 20.0;
    var Vegan = 25.0;
    var addTop = 0.25;
    if(document.forms[0].pizza[0].checked == true) {
        total += veg;
    }
    else if(document.forms[0].pizza[1].checked == true){
        total += meat;
    }
    else if(document.forms[0].pizza[2].checked == true){
        total += cheese;
    }
    for(var i = 0; i < 11; i++){
        if(document.forms[0].toppings[i].checked == true){
            total += addTop;
		}
    }
    document.f1.Total.value = total;



//You have 4 topping boxes, so the index are 0-3. You loop till i < 5, so document.forms[0].toppings[4] is invalid.
}
