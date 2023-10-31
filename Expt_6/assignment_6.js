// function to get the input length from the user
var n;
function lengthh() {
  n = document.getElementById("1").value;
  var str = "You have entered length:" + n;
  document.getElementById("res").innerHTML = str;
}

// function to get the array input
var Array = [n];
function arrayip() {
  let arrval = document.getElementById("2").value;
  console.log(arrval);
  Array = arrval.split(",");
  console.log(Array.length);
  console.log(n);
  if (Array.length > n) {
    var str = "You have entered more elements as compared to the array size";
    document.getElementById("res").innerHTML = str;
  } else {
    var str = "You have entered :" + Array;
    document.getElementById("res").innerHTML = str;
  }
}

// function to delete the element from the array
function del() {
  let val = parseInt(document.getElementById("delete").value);
  let array = [12, 23, 12, 34, 12]; // Replace this with your actual array

  // Convert array elements to integers
  array = array.map(function (item) {
    return parseInt(item);
  });

  let index = array.indexOf(val);
  if (index === -1) {
    var str = "Value: " + val + " is not present in the array";
    document.getElementById("res").innerHTML = str;
  } else {
    array.splice(index, 1);
    var str = "Value: " + val + " is deleted";
    document.getElementById("res").innerHTML = str;
  }
}

// function to find the element in the array
function find() {
  var val = document.getElementById("fnd").value;
  var array = [12, 23, 12, 34, 12]; // Replace this with your actual array
  var f = array.indexOf(parseInt(val)); // Parse the input as an integer

  if (f === -1) {
    var str = "Value: " + val + " is not present in the array";
    document.getElementById("res").innerHTML = str;
  } else {
    var str = "Value: " + val + " is present in the array at position: " + f;
    document.getElementById("res").innerHTML = str;
  }
}

// function to check whether the array is empty or not
function Empty() {
  Array = [];
  document.getElementById("res").innerHTML = "Array is Emptied";
}

// function to display the array
function Display() {
  var str = "";
  for (var i = 0; i < Array.length; i++) {
    if (Array[i] != undefined) str += Array[i] + " ";
  }
  document.getElementById("res").innerHTML = str;
}
