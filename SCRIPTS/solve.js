﻿//declare a function that takes in two values
function fizzBuzz(val1, val2) {
    let returnValue = "";

    /*generate numbers from 1 to 100, evaluate against values taken in
     * if new number is divisible by val1, print 'FIZZ'
     * if it's divisible by val2, print 'BIZZ'
     * if it's divisible by both, print 'FIZZBUZZ'*/
    for (let i = 1; i <= 100; i++) {
        returnValue += ((i % val1 == 0 ? 'FIZZ' : '') + (i % val2 == 0 ? 'BUZZ' : '') || i) + ' ';
    }
    return returnValue;
};

//display results
$("#buzzIt").on('click', function buzz() {
    let output = '';
    let val1 = $("#numIn1").val();
    let val2 = $("#numIn2").val();
    output = fizzBuzz(val1, val2);
    $('#results').empty().append(output);
});

//clear all
$("#clearIt").on('click', function () {
    $("#results").text("");
});

////get the table
//let tableBody = $("#fbBody");

//tableBody.innerHTML = "";

//let template = $("#fbRow");
//let clone = template.content.cloneNode(true);
//let columns = clone.querySelectorAll("td");
//let columnCount = columns.length;

//for (i = 1; 1 < output.length; i += columnCount) {
//    clone = template.content.cloneNode(true);
//    columns = clone.querySelectorAll("td");
//}

