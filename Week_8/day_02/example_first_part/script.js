function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  let mobile = document.forms["myForm"]["mobNumber"].value;

  if (fname.trim() == "") {
    alert("You must fill your first name");
    return false;
  }
  if (lname.trim() == "") {
    alert("You must fill your last name");
    return false;
  }
  if (mobile.length == 8) {
    alert("You mobile number must be 8 digits");
    return false;
  }
}
