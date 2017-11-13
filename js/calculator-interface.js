$(document).ready(function() {
  var simpleCalculator = new Calculator();

  $("#add").click(function(){
    var firstNumber = parseInt($("#first-number").val());
    var secondNumber = parseInt($("#second-number").val());
    var sum = simpleCalculator.add(firstNumber, secondNumber);
    $("#calculator-output").show().text(sum);
  });

  $("#subtract").click(function(){
    var firstNumber = parseInt($("#first-number").val());
    var secondNumber = parseInt($("#second-number").val());
    var difference = simpleCalculator.subtract(firstNumber, secondNumber);
    $("#calculator-output").show().text(difference);
  });

  $("#multiply").click(function(){
    var firstNumber = parseInt($("#first-number").val());
    var secondNumber = parseInt($("#second-number").val());
    var product = simpleCalculator.multiply(firstNumber, secondNumber);
    $("#calculator-output").show().text(product);
  });

  $("#divide").click(function(){
    var firstNumber = parseInt($("#first-number").val());
    var secondNumber = parseInt($("#second-number").val());
    var quotient = simpleCalculator.divide(firstNumber, secondNumber);
    $("#calculator-output").show().text(quotient);
  });
});
