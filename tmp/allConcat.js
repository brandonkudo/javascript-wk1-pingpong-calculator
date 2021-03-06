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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });


});
