<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <style>
            .red_err {
                color: #FF0000;
            }
        </style>
        <link rel="stylesheet" type="text/css" href="./style.css">
        <title>
            Contact Us
        </title>
    </head>
    <body>


        <?php
        $firstname = $lastname = $email = $contact = $address = $pcode = $age = $salary = "";
        $Efirstname = $Elastname = $Eemail = $Econtact = $Eaddress = $Epcode = $Eage = $Esalary = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            if (empty($_POST["age"])) {
            $Eage = "Error! Age is required";
        } else {
            $age = input_val($_POST["age"]);
            if (preg_match("/^[a-zA-Z-' ]*$/",$age)) {
            $Eage = "Error! Only Numbers are allowed";
            } else if ( $age < 18 || $age > 60) {
                $Eage = "Error! Invalid age. Age needs to be between 18 and 60";
            }
        }

        if (empty($_POST["salary"])) {
            $Esalary = "Error! Salary is required";
        } else {
            $salary = input_val($_POST["salary"]);
            if (preg_match("/^[a-zA-Z-' ]*$/",$salary)) {
            $Esalary = "Error! Only Numbers are allowed";
            } else if ( $salary > 500000 ) {
                $Esalary = "Error! Salary must be less than Rs. 5,00,000";
            }
        }

        }

        function input_val($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
          }
        
        ?>



        <div class="logo-top">
            <a class="logo" href="./index.html"><img src="./img/logo.png" height="112px" width="200px"></a>
        </div>
        <div class="heading-top">
            <h1>CONTACT US</h1>
        </div>             
        <div class="nav">
            <ul>
                <li id="nav-current"><a href="./contact.html">Contact Us</li>                
                <li><a href="./supersports.html">Superbikes</a></li>
                <li><a href="./motorcycles.html">Motorcycles</a></li>
                <li><a href="./scooters.html">Scooters</a></li>
                <li><a href="./index.html">Home</a></li>
            </ul>
            <h1 id='title-name'>MotoCross Universe</h1>
        </div>

        <div class="contact-header-text">
            <h1>Exclusive motorcycle updates, right in your inbox!</h1>
            <h3>Subscribe today to recieve offers available to only our subscribers !</h3>
        </div>
        <div class="contact-us-section">
            <form name="contact-us-form"  method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                <label for="fname">First Name</label>
                <input type="text"  name="firstname" placeholder="Your name"><br><br>
            
                <label for="lname">Last Name</label>
                <input type="text"  name="lastname" placeholder="Last name"><br><br>

                <label for="email">email-id</label>
                <input type="email"  name="email" placeholder="example@example.com"><br><br>

                <label for="contact">Contact No.   +91 - </label>
                <input type="text"  name="contact" id="contact" placeholder="0000000000"><br><br>

                <label for="address">Address</label>
                <input type="text"  name="address" placeholder="Your postal address"><br><br>
                
                <label for="email">Pin Code</label>
                <input type="text"  name="pcode" id="pcode" placeholder="Six Digit Pincode"><br><br>

                <label for="age">Age</label>
                <input type="text" name="age" id="age" placeholder="Your Age"><br><br>

                <label for="salary">Salary</label>
                <input type="text" name="salary" id="salary" placeholder="Salary in Rupees"><br><br>
            
                <label for="rating">Rate our website</label>
                <select id="rating" name="rating">
                  <option value="opExcellent">Excellent</option>
                  <option value="opGood">Good</option>
                  <option value="opJustok">Just Okay</option>
                  <option value="opNeeds">Needs Improvement</option>
                </select><br>

                <br>
                <span class="red_err"><?php echo $Eage?></span><br> 
                <span class="red_err"><?php echo $Esalary?></span> <br>


                <button class="btn-submit-form" onclick="validateForm()">Submit</button><br>
            </form>
        </div>
        
        


        <script src="script.js"></script>
    </body>
</html>
