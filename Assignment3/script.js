//alert("Incorrect Contact Number!!!");


function validateForm() {
    
    var flag=0;
    var fname = document.forms["contact-us-form"]["firstname"].value;
    if (fname == "") {
      alert("First Name cannot be empty !");
      event.preventDefault()
      return false;     
    }   //first name validation

    var lname = document.forms["contact-us-form"]["lastname"].value;
    if (lname == "") {
      alert("Last Name cannot be empty !");
      event.preventDefault()
      return false;
    }   //last name validation

    var email = document.forms["contact-us-form"]["email"].value;
    if (email == "") {
      alert("Invalid email !");
      event.preventDefault()
      return false;
    }   //email validation

    var phone = document.getElementById("contact").value;
    if (phone == "") {
      alert("Please Enter Contact Number !");
      event.preventDefault()
      return false;
    }
    else if( phone < 7000000000 || (phone > 9999999999 && phone < 70000000000) || phone > 99999999999 ) {
      console.log("");
      alert("Invalid contact number !");
      event.preventDefault()
      return false;
    }   //contact validation   

    var address = document.forms["contact-us-form"]["address"].value;
    if (address == "") {
      alert("Address cannot be empty !");
      event.preventDefault()
      return false;
    }   //Address validation

    var pcode = document.getElementById("pcode").value;
    if (pcode == "") {
      alert("Please Enter Pincode !");
      event.preventDefault()
      return false;
    }
    else if( pcode<400000 || pcode>499999 ) {
      console.log("");
      alert("Invalid Pincode !");
      event.preventDefault()
      return false;
    }   //pincode validation   

    alert("Your details have been submitted successfully");
    return true;          //if everything is correct
    
}