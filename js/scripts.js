var numberCheck = function(number) {
  var numberString = number.toString();
  if (!numberString.match(/^[01]+$/)) {
        alert("Please enter a binary number!");
        return -1;
  }
  else {
    return conversion(number);
  }
}

var conversion = function (number){
  var result = 0;
  var string = number.toString().split("").reverse();
  for( var i = 0; i<string.length; i++){
    result += parseInt(string[i] * Math.pow(2,i));
  }
  return result;
}


$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val());
    $("#result").empty();
    if (numberCheck(inputNumber) !== -1) {
      $("#result").append(numberCheck(inputNumber));
    }
  });
});
