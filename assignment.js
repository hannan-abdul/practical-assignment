

// kilometerToMeter
function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
  }
  var totalMeter = kilometerToMeter(3.6);
  console.log(totalMeter);

// budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
    }
    var totalItems = budgetCalculator(7, 9, 5);
    console.log(totalItems);

// hotelCost
function hotelCost(dayStay){
    var everydayCost = 0;
    if (dayStay <= 10){
    everydayCost = dayStay * 100;
    }
    else if(dayStay <= 20){
    var firstTenDays = 10 * 100;
    var remainingDays = dayStay - 10;
    var secondTenDays = remainingDays * 80;
    everydayCost = firstTenDays + secondTenDays;
    }
    else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remainingDays = dayStay - 20;
    var afterTwentyDays = remainingDays * 50;
    everydayCost = firstTenDays + secondTenDays + afterTwentyDays;
    }
    return everydayCost;
}
var result = hotelCost(21);
console.log(result);

// megaFriend
function megaFriend(name){
    var long = name[0];
    for (let i = 0; i < name.length; i++) {
        var element = name[i];
        if(long.length < element.length){
        long = element
        }   
    }
    return long;
}
var  friend = ['abulkalam', 'jamalUddinKhan','kader','salam','jamal'];
var longword = megaFriend(friend);
console.log(longword);







