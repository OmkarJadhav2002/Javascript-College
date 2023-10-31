var arr;
var n;
function lengthh() {
  n = parseInt(document.getElementById("1").value);
  arr = new Array();
  var str = "You have entered length:" + n;
  document.getElementById("res").innerHTML = str;
}

// function to append the element to array 
function Append() {
  let arrval = document.getElementById("2").value;
  if (arr.length < n) {
    arr.push(arrval);
    var str = "You have entered :" + arr;
    document.getElementById("res").innerHTML = str;
  } else {
    document.getElementById("res").innerHTML = "Array full";
  }
}

// function to remove the element from the array 
function Remove() {
  if (arr.length != 0) {
    var num = arr.shift();
    var str = "You have removed :" + num;
    document.getElementById("res").innerHTML = str;
  } else {
    document.getElementById("res").innerHTML = "Array Empty";
  }
}

// add element to the first 
function AddFront() {
  let arrval = document.getElementById("3").value;
  if (arr.length < n) {
    arr.unshift(arrval);
    var str = "You have entered :" + arr;
    document.getElementById("res").innerHTML = str;
  } else {
    document.getElementById("res").innerHTML = "Array Empty.";
  }
}

// function to check whether there is array 
function IsArray() {
  let checkarr = Array.isArray(arr);
  document.getElementById("res").innerHTML = checkarr;
}

// function to check whether the array is empty or not 
function Empty() {
  Array = [];
  document.getElementById("res").innerHTML = "Array is Empty now.";
}

// function to display the array 
function Display() {
  var str = "";
  var str = "You have entered :" + arr;
  document.getElementById("res").innerHTML = str;
}
