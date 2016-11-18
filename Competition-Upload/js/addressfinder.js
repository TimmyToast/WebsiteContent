function submitDetailsForm() {
  event.preventDefault();

  var customerID= $("#IDfield").val();
        var email = $("#emailField").val();
        var newEmail = $("#newEmailField").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var address1 = $("#address1").val();
        var address2 = $("#address2").val();
        var address3 = $("#address3").val();
        var address4 = $("#address4").val();
        var address5 = $("#address5").val();
        var postcode = $("#postcode").val();

        if (firstName == "") {$('#firstNameValidate').html(" - Please enter a first name")}
        if (lastName  == "") {$('#lastNameValidate').html(" - Please enter a last name")}
        if (address1 == "") {$('#addressValidate1').html(" - Please enter a house name or number")}
        if (address2 == "") {$('#addressValidate2').html(" - Please enter a street name")}
        if (address3 == "") {$('#addressValidate3').html(" - Please enter a city")}
        if (address4 == "") {$('#addressValidate4').html(" - Please enter a county")}
        if (address5 == "") {$('#addressValidate5').html(" - Please select a country")}
        if (postcode == "") {$('#validatePostcode').html(" - Please enter a zip or post code")}

        if (newEmail != "") {$('#newEmailValidate').html(" <span class='glyphicon glyphicon-ok'></span>")} 
        if (firstName != "") {$('#firstNameValidate').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (lastName != "") {$('#lastNameValidate').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (address1 != "") {$('#addressValidate1').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (address2 != "") {$('#addressValidate2').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (address3 != "") {$('#addressValidate3').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (address4 != "") {$('#addressValidate4').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (address5 != "") {$('#addressValidate5').html(" <span class='glyphicon glyphicon-ok'></span>")}
        if (postcode != "") {$('#validatePostcode').html(" <span class='glyphicon glyphicon-ok'></span>")}

        if (newEmail != "") {
          if (validateEmail(newEmail) == true){ 
            var newEmailVerified = true
            $("#newEmailValidation").html(" <span class='glyphicon glyphicon-ok'></span>");
          }
          if (validateEmail(newEmail) == false){ $("#newEmailValidation").html('This is not a valid email address')}
        } else {
          var newEmailVerified = true
          $("#newEmailValidation").html("")
        }

        if (firstName != "" && lastName != "" && address1 != "" && address2 != "" && address3 != "" && address4 != "" && address5 != "" && postcode != "" && newEmailVerified) {

        var dataString = '?IDfield='+ customerID +  '&emailField='+ email + '&newEmail='+ newEmail + '&address5='+ address5 + '&firstName='+ firstName + '&lastName='+ lastName + '&address1='+ address1 + '&address2='+ address2 + '&address3='+ address3 + '&address4='+ address4 + '&postcode='+ postcode + "&file" + $("#file")[0].files[0] + "&file" + $("#file")[1].files[0] + "&file" + $("#file")[2].files[0]

        console.log (dataString)
        if (address1.length == 0) { 
          document.getElementById("validationText").innerHTML = "";
          return;
        } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == 1) { 
                  //$('#validationText').html("<span class='validtext'>- This email is valid</span>")
                  $(".form-group").fadeOut()
                  $(".btn-zano").fadeOut()
                  $('.explText').html("<b><span class='white'>Thank you.</span></b><br><br> Your information has now been submitted.")
                } else {
                  alert("error")
                }
               //if (xmlhttp.responseText == 0) { $('#validationText').html("<span class='invalidtext'>- This is an invalid email address</span>")}
            }
        }
        xmlhttp.open("GET", "index_up.php" + dataString,  true);
        xmlhttp.send();
    }}
   
};

function validateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
  {  
    return (true)  
  }  
     
    return (false)  
} 

