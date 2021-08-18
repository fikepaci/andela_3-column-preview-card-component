function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  var email = document.Form.email.value;

  var emailErr = true;

  if (email == "") {
    printError(
      "emailErr",
      "Whoops! It looks like you forgot to add your email"
    );
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please provide a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailErr", "");
      emailErr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  if (emailErr == true) {
    return false;
  }
}
