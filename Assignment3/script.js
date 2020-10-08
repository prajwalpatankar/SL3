//alert("Incorrect Contact Number!!!");


function validateForm() {
    
    var flag=0;
    var letters = /^[A-Za-z]+$/;

    var fname = document.forms["contact-us-form"]["firstname"].value;
    if (fname == "") {
      alert("First Name cannot be empty !");
      event.preventDefault()
      return false;     
    }
    else if (!(fname.match(letters)))
    {
      alert("First Name can consist only of alphabets !");
      event.preventDefault()
      return false;
    }   //first name validation




    var lname = document.forms["contact-us-form"]["lastname"].value;
    if (lname == "") {
      alert("Last Name cannot be empty !");
      event.preventDefault()
      return false;
    }
    else if (!(lname.match(letters)))
    {
      alert("Last Name can consist only of alphabets !");
      event.preventDefault()
      return false;
    }   //last name validation




    var email = document.forms["contact-us-form"]["email"].value;
    if (email == "") {
      alert("Please Enter email!");
      event.preventDefault()
      return false;
    }
    else if(email.includes(".com.com"))
    {
      alert("Invalid email ! email cannot contain '.com.com'");
      event.preventDefault()
      return false;
    }
    else if(email.includes("@.")){
      alert("'.' is used at the wrong place in '.com' ");
      event.preventDefault()
      return false;
    }   //email validation




    var phone = document.getElementById("contact").value;
    if (phone == "") {
      alert("Please Enter Contact Number !");
      event.preventDefault()
      return false;
    }
    else if(phone.match(letters)) {
      alert("Invalid contact number! Contact number should not contain letters !");
      event.preventDefault()
      return false;   
    }
    else if(phone < 1000000000 || phone > 99999999999 ){
      alert("Invalid contact number! Contact number should of 10 or 11 digits.");
      event.preventDefault()
      return false;
    }
    else if(phone < 7000000000 || (phone > 9999999999 && phone < 70000000000)){
      alert("Invalid Contact number! Contact number must start from 7,8 or 9.")
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




    console.log(fname,lname,email,phone,address,pcode);
    alert("Your details have been submitted successfully");
    return true;          //if everything is correct
    
}