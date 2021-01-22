// https://github.com/hannan-abdul/practical-assignment

// kilometerToMeter
function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
  }
var totalMeter = kilometerToMeter(3.6);

// budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
    }
    var totalItems = budgetCalculator(7, 9, 5);

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

// megaFriend
function megaFriend(name){
    var longName = name[0];
    for (let i = 0; i < name.length; i++) {
        var element = name[i];
        if(longName.length < element.length){
        longName = element
        }   
    }
    return longName;
}
var  friend = ["Abul Kalam", "Jamal Uddin Khan","Kader","Salam","Jamal"];
var longword = megaFriend(friend);







