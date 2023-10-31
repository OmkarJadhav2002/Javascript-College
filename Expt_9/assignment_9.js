function validate() {
  if (document.StudentRegistration.textnames.value == "") {
    document.getElementById("namec").innerHTML = "Please provide your Name!";
    document.StudentRegistration.textnames.focus();
    return false;
  } else {
    document.getElementById("namec").innerHTML = "";
  }

  var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos1 = email.lastIndexOf(".com");
  dotpos2 = email.lastIndexOf(".in");
  if (email == "" || atpos < 1 || (dotpos1 == -1 && dotpos2 == -1)) {
    document.getElementById("emailc").innerHTML =
      "Please enter correct email ID";
    document.StudentRegistration.emailid.focus();
    return false;
  } else {
    document.getElementById("emailc").innerHTML = "";
  }

  if (
    document.StudentRegistration.mobileno.value == "" ||
    isNaN(document.StudentRegistration.mobileno.value) ||
    document.StudentRegistration.mobileno.value.length != 10
  ) {
    document.getElementById("mobc").innerHTML =
      "Please provide a Mobile No in the format 123.";
    document.StudentRegistration.mobileno.focus();
    return false;
  } else {
    document.getElementById("mobc").innerHTML = "";
  }

  if (document.StudentRegistration.city.value == "") {
    document.getElementById("cityc").innerHTML =
      "Please provide the name of the city !";
    document.StudentRegistration.city.focus();
    return false;
  } else {
    document.getElementById("cityc").innerHTML = "";
  }

  if (document.StudentRegistration.State.value == "") {
    document.getElementById("statec").innerHTML =
      "Please provide the name of the state!";
    document.StudentRegistration.State.focus();
    return false;
  } else {
    document.getElementById("statec").innerHTML = "";
  }

  if (
    !(
      document.StudentRegistration.Gender.value != "Male" ||
      document.StudentRegistration.Gender.value != "Female" ||
      document.StudentRegistration.Gender.value != "female" ||
      document.StudentRegistration.Gender.value != "male"
    )
  ) {
    alert("Please provide valid gender!");
    document.StudentRegistration.Gender.focus();
    return false;
  }

  if (document.StudentRegistration.Address.value == "") {
    document.getElementById("addc").innerHTML = "Please provide your address!";
    document.StudentRegistration.Address.focus();
    return false;
  } else {
    document.getElementById("addc").innerHTML = "";
  }

  alert("Entered Details Updated Successfully !!!!");
  return true;
}

function rese() {
  document.getElementById("formm").reset();
  document.getElementById("cityc").innerHTML = "";
  document.getElementById("statec").innerHTML = "";
  document.getElementById("addc").innerHTML = "";
  document.getElementById("emailc").innerHTML = "";
  document.getElementById("mobc").innerHTML = "";
}
