/* -------------Chapter no 1--------------- */

// Q # 1
alert("Assalam-o-Alaikum! Welcome to my website");

// Q # 2
alert("Error! Please Enter a valid password");

//Q # 3
alert("Welcome to JS Land..... \n Happy Coding!");

//Q # 4
alert("Welcome to JS Land.....");
alert("Happy Coding!");

//Q # 5
window.alert('Hello... I can run JS through my web browsers console');

/* -------------Chapter no 2--------------- */

//Q # 1
var userName;

//Q # 2
var myName = "Sameer Faisal";

//Q # 3
var message = "Hello World";
alert(message);

//Q # 4
var studentName = "Sameer Faisal";
var age = 21;
var course = "Certified Mobile Application Development";
alert("Student name:" + studentName);
alert("age: " + age);
alert("Course:" + course);

//Q # 5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

//Q # 6
var email = "sameerfaisal46@gmail.com"
alert("My email address is " + email);

//Q # 7
var book = "A smarter way to learn JavaScript";
alert("Iam trying to learn from the book " + book);

//Q # 8
document.writeln("Yah! I can write HTML content through JavaScript");

//Q # 9
var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(pattern);
document.writeln(pattern);

/* -------------Chapter no 3--------------- */

//Q # 1
var age = 21;
alert("Iam " + age + " years old");

//Q # 2
var visit = 15;
alert("You have visited this site " + visit + " times");

//Q # 3
var birthYear = 1999;
document.write("My Birth Year is " + birthYear);
document.write("<br/>DataType of my decleared variable is number");

//Q # 4
var visitorName = prompt("What is your name?");
var productTitle = prompt("What type of cloth do u want?");
var quantity = prompt("How many you want to order?");
document.write("<br/>" + visitorName + " ordered " + quantity + " " + productTitle + "(s)" + " on xyz clothing store");

/* -------------Chapter no 4--------------- */

//Q # 1
var name, age, email;

//Q # 2
var firstName, lastName, age, semester, gpa;
//var 1gh , 2fg , &kj , #id , 1212

//Q # 3
document.write("<h1>Rules for naming JS variables</h1><br/>");
document.write("Variable names can only contain, number, $ and _. For example $my_1stVariable<br/>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br/>");
document.write("Variable names are case sensitive<br/>");
document.write("Variable names should not be JS keywords");

/* -------------Chapter no 5--------------- */

//Q # 1
var firstNumber = prompt("Enter first number:");
var secondNumber = prompt("Enter second number:");
var result = parseInt(firstNumber) + parseInt(secondNumber);
document.write("<br/> Sum of " + firstNumber + " and " + secondNumber + " is " + result);

//Q # 2
var firstNumber = prompt("Enter first number:");
var secondNumber = prompt("Enter second number:");
var result1 = parseInt(firstNumber) - parseInt(secondNumber);
document.write("<br/> Subtraction of " + firstNumber + " and " + secondNumber + " is " + result1);
var result2 = parseInt(firstNumber) * parseInt(secondNumber);
document.write("<br/> Multiplication of " + firstNumber + " and " + secondNumber + " is " + result2);
var result3 = parseInt(firstNumber) / parseInt(secondNumber);
document.write("<br/> Division of " + firstNumber + " and " + secondNumber + " is " + result3);
var result4 = parseInt(firstNumber) % parseInt(secondNumber);
document.write("<br/> Modulus of " + firstNumber + " and " + secondNumber + " is " + result4);

//Q # 3
var number;
document.write("<br/>Value after variable declaration is: " + number);
number = 5;
document.write("<br/>Initial Value: " + number);
number++;
document.write("<br/>Value after increment is: " + number);
number += 7;
document.write("<br/>Value after addition is: " + number);
number--;
document.write("<br/>Value decrement declaration is: " + number);
number = number % 3;
document.write("<br/>The remainder is: " + number);

//Q # 4
var ticketPrice = 600;
var cost = parseInt(ticketPrice) * 5;
document.write("<br/>Total cost to buy 5 tickets to a movie is: " + cost + "PKR");

//Q # 5
var num = prompt("Enter any number to generate multiplication table:");
parseInt(num);
document.write("<br/>Table of " + num);
for (var i = 1; i <= 10; i++) {
    document.write("<br/>" + num + " x " + i + " = " + num * i);
}

//Q # 6
var celcius = 25;
var fahrenhiet = 70;

var c = (fahrenhiet - 32) * (5 / 9);
var f = (celcius * (9 / 5)) + 32;
document.write("<br/>");
document.write(celcius + "<sup>o</sup>C is ".concat(f, "<sup>o</sup>F"));
document.write("<br/>" + fahrenhiet + "<sup>o</sup>F is ".concat(c, "<sup>o</sup>C"));

//Q # 7
document.write("<br/><h1>Shopping Cart</h1>")
var priceItem1 = 650;
var priceItem2 = 100;
var shippingCharges = 100;
var quantity1 = prompt("Enter quantity of item1:");
var quantity2 = prompt("Enter quantity of item2:");
document.write("<br/>Price of item 1 is " + priceItem1);
document.write("<br/>Quantity of item 1 is " + quantity1);
document.write("<br/>Price of item 2 is " + priceItem2);
document.write("<br/>Quantity of item 2 is " + quantity2);
document.write("<br/> Shipping charges: " + shippingCharges);
var totalCost = ((parseInt(quantity1) * parseInt(priceItem1)) + (parseInt(quantity2) * parseInt(priceItem2))) + parseInt(shippingCharges);
document.write("<br/><br/> Total cost of your order is: " + totalCost);

//Q # 8
document.write("<br/><h1>Marks Sheet</h1>");
var totalMarks = prompt("Enter total marks:");
var obtainedMarks = prompt("Enter your obtained marks:");
var percentage = (parseInt(obtainedMarks) / parseInt(totalMarks)) * 100;
document.write("<br/>Total Marks: " + totalMarks);
document.write("<br/>Obtained Marks: " + obtainedMarks);
document.write("<br/>Percentage: " + percentage + "%");

//Q # 9
document.write("<br/><h1>Currency in PKR</h1>");
var dollars = 10;
var riyals = 25;
PKR = (parseInt(dollars) * 104.80) + (parseInt(riyals) * 28);
document.write("<br/>Total currency in PKR is: " + PKR);

//Q # 10
var exp = 12;
var answer = ((parseInt(exp) + 5) * 10) / 10;
document.write("<br/><br/><br/>Answer is: " + answer);

//Q # 11
document.write("<br/><h1>Age Calculator</h1>");
var yearOfBirth = prompt("Enter the year you were born in:");
var currentYear = 2020;
document.write("<br/>Current year: " + currentYear);
var currentAge = parseInt(currentYear) - parseInt(yearOfBirth);
document.write("<br/>Birth year: " + yearOfBirth);
document.write("<br/>Your age is either: " + currentAge);
document.write(" or " + (currentAge - 1))

//Q # 12
document.write("<br/><h1>The Geometrizer</h1>");
var radius = prompt("Enter radius of circle:");
var pi = 3.142;
var cricumference = 2 * parseFloat(pi) * parseFloat(radius);
var area = parseFloat(pi) * (parseFloat(radius) * parseFloat(radius));
document.write("<br/>The circumference of circle is: " + cricumference);
document.write("<br/>The area of circle is: " + area);

//Q # 13
document.write("<br/><h1>The Lifetime Supply Calculator</h1>");
var favouriteSnack = "Lays";
var currentAgeNow = 21;
var maximumAge = 70;
var estAmmount = 4;
var totalforLife = (parseInt(maximumAge) - parseInt(currentAgeNow)) * 2;
document.write("<br/>Favourite Snack: " + favouriteSnack);
document.write("<br/>Current Age: " + currentAgeNow);
document.write("<br/>Estimated maximum age: " + maximumAge);
document.write("<br/>Amount of snacks per day: " + estAmmount);
document.write("<br/>You will need " + totalforLife + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge);

/* -------------Chapter no 6-9--------------- */

//Q # 1
var a = 10;
document.write("<br/><br/><br/><br/>Result:");
document.write("<br/>The value of a is: " + a);
document.write("<br />....................................<br />");
document.write("<br/>The Value of ++a is: " + (++a));
document.write("<br/>Now value of a is:" + a);
document.write("<br/>The Value of a++ is: " + (a++));
document.write("<br/>Now value of a is:" + a);
document.write("<br/>The Value of --a is: " + (--a));
document.write("<br/>Now value of a is:" + a);
document.write("<br/>The Value of a-- is: " + (a--));
document.write("<br/>Now value of a is:" + a);

//Q # 2
document.write("<br/><br/><br/>");
var a = 2;
var b = 1;
document.write("<br /><br />--a = ".concat(--a));
document.write("<br />--a - --b = ".concat((--a) - (--b)));
document.write("<br />--a - --b + ++b = ".concat((--a) - (--b) + (++b)));
document.write("<br />--a - --b + ++b + b-- = ".concat((--a) - (--b) + (++b) + (b--)));
document.write("<br />a is = ".concat(a));
document.write("<br />b is = ".concat(b));
var result = (--a) - (--b) + (++b) + (b--);
document.write("<br />result is = ".concat(result));

//Q # 3
var nameofUser = prompt("Enter your name: ");
document.write("<br/><br/>Assalam-o-Alaikum! " + nameofUser + " Hope you are fine");

//Q # 4
document.write("<br /><br />");
var numForTable = prompt("Enter any number to generate its Table:");
if (numForTable === "") {
    for (var i = 1; i < 11; i++) {
        document.write("5 x ".concat(i, " = ", 5 * i, "<br />"));
    }
} else {
    for (var j = 1; j < 11; j++) {
        document.write(numForTable + " x ".concat(j, " = ", numForTable * j, "<br />"));
    }
}

//Q # 5
var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second Subject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c = Number(sub3Marks)
var totalMarks = 100

document.write(
    "<table>" +
    "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>" +
    "<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + a + "</td><td>" + (a / totalMarks * totalMarks) + " %</td></tr>" +
    "<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + a + "</td><td>" + (a / totalMarks * totalMarks) + " %</td></tr>" +
    "<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + a + "</td><td>" + (a / totalMarks * totalMarks) + " %</td></tr>" +
    "<tr><td></td><td>" + (totalMarks * 3) + "</td><td>" + (a + b + c) + "</td><td>" + ((a + b + c) / (totalMarks * 3) * 100) + " %</td></tr>" +
    "</table>"
)

/* -------------Chapter no 9-11--------------- */

//Q # 1
var city = prompt("Enter city name:");
if (city === "karachi" || city === "Karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Not Karachi....!");
}

//Q # 2
var gender = prompt("Enter Your Gender:");
if (gender === "male" || gender === "Male") {
    alert("Good Morning Sir");
} else if (gender === "female" || gender === "Female") {
    alert("Good Morning Ma’am");
} else {
    alert("Please! Enter Male or Female...!");
}

//Q # 3
var trafficLight = prompt("Enter Traffic SIgnal Light Color")
if (trafficLight === "Red" | trafficLight === "red") {
    alert("Must Stop")
}

if (trafficLight === "Yellow" | trafficLight === "yellow") {
    alert("Ready to move")
}

if (trafficLight === "Green" | trafficLight === "green") {
    alert("Move now")
}

//Q # 4
var fuel = prompt("Enter Your Remaining Fuel Level")
if (fuel < "0.25") {
    alert("Please refill the fuel in your car")
}

//Q # 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Q # 6
var sub1 = prompt("Enter Marks of subject 1 : ");
var sub2 = prompt("Enter Marks of Subject 2 : ");
var sub3 = prompt("Enter Marks of Subject 3 : ");

sub1 = parseInt(sub1);
sub2 = parseInt(sub2);
sub3 = parseInt(sub3);
var tmarks = (sub1 + sub2 + sub3);
var per = (tmarks / 300) * 100;
document.write("<h1>Marks Sheet</h1>")
if (per >= 80) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is A-one <br/>Remarks : Excellent");
} else if (per >= 70) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is A <br/>Remarks : Good");
} else if (per >= 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is B <br/>Remarks : You need to improve");
} else if (per < 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is Fail <br/>Remarks : Sorry");
}

//Q # 7
var guess = 10
var userInput = +prompt("Enter the number")
if (guess == userInput) {
    alert("BINGO! Correct Answer")
} else if (userInput + 1 == guess) {
    alert("Close enough to the correct answer")
} else {
    alert("You lost!")
}

//Q # 8
var checkDivisibility = prompt("Enter any number to check whether it is even or odd");
if (parseFloat(checkDivisibility) % 3 === 0) {
    alert("It is divisible by 3");
} else {
    alert("It is not divisible by 3");
}

//Q # 9
var checkEven = prompt("Enter any number to check divisibility by 3");
if (parseFloat(checkEven) % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

//Q # 10
var temprature = prompt("Enter the temprature:")
var t = Number(temprature)

if (t > 40) {
    alert("It is too hot outside")
}

if (t > 30) {
    alert("The weather today is Normal")
}

if (t > 20) {
    alert("Today's weather is cool")
}

if (t > 10) {
    alert("OMG! Today's weather is so cool")
}

//Q # 11
var number1 = prompt("Enter the first number:");
var number2 = prompt("Enter the second number:");
var operator = prompt("Enter and operator '+', '-', '*', '/', '%'");
var calculatedResult = 0;
if (operator === "+") {
    calculatedResult = parseFloat(number1) + parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "-") {
    calculatedResult = parseFloat(number1) - parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "*") {
    calculatedResult = parseFloat(number1) * parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "/") {
    calculatedResult = parseFloat(number1) / parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "%") {
    calculatedResult = parseFloat(number1) % parseFloat(number2);
    alert(calculatedResult);
}

/* -------------Chapter no 12-13--------------- */

//Q # 1
var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90) {
    alert("Your input is am uppercase letter")
} else if (ascii >= 97 && ascii <= 122) {
    alert("Your input is a lowercase letter")
} else if (ascii >= 48 && ascii <= 57) {
    alert("Your input is a number")
} else {
    alert("Invalid input detected")
}

//Q # 2
var integer1 = prompt("Enter the first number:");
var integer2 = prompt("Enter the second number:");
if (parseInt(integer1) < parseInt(integer2)) {
    alert("Number 2 is greater than number 1");
}
if (parseInt(integer1) > parseInt(integer2)) {
    alert("Number 1 is greater than number 2");
}
if (parseInt(integer1) === parseInt(integer2)) {
    alert("Number 1 and number 2 are equal");
}