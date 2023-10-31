function set_string() {
  var string1 = document.getElementById("st1").value;
  var string2 = document.getElementById("st2").value;
  comparison_1(string1, string2);
  comparison_2(string1, string2);
  comparison_3(string1, string2);
  comparison_4(string1, string2);
}

// comparison function using uppercase()
function comparison_1(string1, string2) {
  var ot;
  const result1 = string1.toUpperCase() === string2.toUpperCase();

  if (result1) {
    ot = "The strings are similar.";
  } else {
    ot = "The strings are not similar.";
  }
  document.getElementById("casing").innerHTML = ot;
}

// comparison using regular expression
function comparison_2(string1, string2) {
  const pattern = new RegExp(string1, "gi");
  var ot;
  // compare the stings
  const result2 = pattern.test(string2);

  if (result2) {
    ot = "The strings are similar <br><br>";
  } else {
    ot = "The strings are not similar <br><br>";
  }
  document.getElementById("regex").innerHTML = ot;
}

// ***
function comparison_3(string1, string2) {
  var ot;
  const result3 = string1.localeCompare(string2, undefined, {
    sensitivity: "base",
  });

  if (result3 == 0) {
    ot = "The strings are similar <br><br>";
  } else {
    ot = "The strings are not similar <br><br>";
  }
  document.getElementById("locom").innerHTML = ot;
}

// using strict equality operator (cheks the datatype too)
function comparison_4(string1, string2) {
  var ot;

  if (string1 === string2) {
    ot = "The strings are similar <br><br>";
  } else {
    ot = "The strings are not similar";
  }
  document.getElementById("equality").innerHTML = ot;
}
