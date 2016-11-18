<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/custombootstrap.css" rel="stylesheet">
  <link href="css/custom.css" rel="stylesheet">
  <title>Form Entry</title>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/addressfinder.js"></script>
</head>
<body>
<div class="container">
  <div class="col-md-8 col-md-offset-2 col-xs-12">
<div class="theWorks">
  <?php
// define variables and set to empty values
$nameErr = $emailErr = $postcodeErr = $artErr = $websiteErr = $aboutErr = $passedRowID  = "";
$name = $email = $gender = $comment = $art = $website = $about = $passedRowID = "";

$validated = "yes";
$imagesOK = "yes";

// Max size PER file in KB
$max_file_size="6000";

// Max size for all files COMBINED in KB
$max_combined_size="18000";

//Maximum file uploades at one time
$file_uploads="3";

// Full browser accessable URL to where files are accessed. With trailing slash.
$full_url="/";

// Path to store files on your server If this fails use $fullpath below. With trailing slash.
$folder="images/";

// Use random file names? true=yes (recommended), false=use original file name.
// Random names will help prevent files being denied because a file with that name already exists.
$random_name=true;

// Types of files that are acceptiable for uploading. Keep the array structure.
$allow_types=array("jpg","gif","png");

// Only use this variable if you wish to use full server paths. Otherwise leave this empty. With trailing slash.
$fullpath="";

$error="";
$success="";
$display_message="";
$file_ext=array();
$password_form="";

$passedRowID =  filter_var($_POST["latestID"], FILTER_SANITIZE_STRING);

// Function to get the extension a file.
function get_ext($key) { 
    $key=strtolower(substr(strrchr($key, "."), 1));
    $key=str_replace("jpeg","jpg",$key);
    return $key;
}

// Filename security cleaning. Do not modify.
function cln_file_name($string) {
    $cln_filename_find=array("/\.[^\.]+$/", "/[^\d\w\s-]/", "/\s\s+/", "/[-]+/", "/[_]+/");
    $cln_filename_repl=array("", ""," ", "-", "_");
    $string=preg_replace($cln_filename_find, $cln_filename_repl, $string);
    return trim($string);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Please enter a name";
    $validated = "no";
  } else {
   
  }

  if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    $emailErr = "Please enter a valid email address";
     $validated = "no";
  } else {
    
  }

  if (empty($_POST["website"])) {
    $websiteErr = "Please enter a website";
     $validated = "no";
  } else {
   
  }


  if (empty($_POST["postcode"])) {
    $postcodeErr = "Please enter your postcode";
     $validated = "no";
  } else {
    
  }

  if (empty($_POST["art"])) {
    $artErr = "Please choose some art";
     $validated = "no";
  } else {
    
  }

  if (empty($_POST["about"])) {
    $aboutErr = "Please explain a little about the art";
     $validated = "no";
  } else {
    
  }


if ($validated == "yes") {

    //Tally the size of all the files uploaded, check if it's over the ammount. 
    If(array_sum($_FILES['file']['size']) > $max_combined_size*1024) {
        
       echo "<b>FAILED:</b> All Files <br><b>REASON:</b> Combined file size is to large.<br />";
       $imagesOK = "no";
        
    // Loop though, verify and upload files.
    } Else {

        // Loop through all the files.
        For($i=0; $i <= $file_uploads-1; $i++) {

            If(empty($_FILES['file']['name'][0])) {

               $imagesOK = "no";
               $uploadErr= "Please upload at least one file";

            }
            
            // If a file actually exists in this key
            If($_FILES['file']['name'][$i]) {

                //Get the file extension
                $file_ext[$i]=get_ext($_FILES['file']['name'][$i]);
                
                // Randomize file names
                If($random_name){
                    $file_name[$i]=time()+rand(0,100000);
                } Else {
                    $file_name[$i]=cln_file_name($_FILES['file']['name'][$i]);
                }
    
                // Check for blank file name
                If(str_replace(" ", "", $file_name[$i])=="") {
                    
                    echo "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <br><b>REASON:</b> Blank file name detected.<br />";
                    $imagesOK = "no";
                
                //Check if the file type uploaded is a valid file type. 
                }   ElseIf(!in_array($file_ext[$i], $allow_types)) {
                                
                     echo "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <br><b>REASON:</b> Invalide file type.<br />";
                     $imagesOK = "no";
                                
                //Check the size of each file
                } Elseif($_FILES['file']['size'][$i] > ($max_file_size*1024)) {
                    
                     echo  "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <br><b>REASON:</b> File to large.<br />";
                     $imagesOK = "no";
                    
                // Check if the file already exists on the server..
                } Elseif(file_exists($folder.$file_name[$i].".".$file_ext[$i])) {
    
                     echo  "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <br><b>REASON:</b> File already exists.<br />";
                     $imagesOK = "no";
                    
                } Else {
                    
                    If(move_uploaded_file($_FILES['file']['tmp_name'][$i],$folder.$passedRowID."_".$file_name[$i].".".$file_ext[$i])) {
                        
                        $newCount = $i + 1;
                        echo "Image ".$newCount." uploaded successfully.<br>";

                         //echo "<b>SUCCESS:</b> ".$_FILES['file']['name'][$i]."<br />";
                         //echo "<b>URL:</b> <a href=\"".$full_url.$file_name[$i].".".$file_ext[$i]."\" target=\"_blank\">".$full_url.$file_name[$i].".".$file_ext[$i]."</a><br /><br />";
                         
                        
                    } Else {
                         echo "<b>Failed:</b> ".$_FILES['file']['name'][$i]." <br><b>REASON:</b> General upload failure.<br />";

                   
                    }
                    
                }
                            
            } // If Files
        
        } // For
        
    } // Else Total Size
    
    If($imagesOK == "yes") {
      echo "<div class='hiddenSuccess'>1</div>";
      
    }

    //$display_message=$success.$error;

if ($imagesOK == "yes") {



$passedFirstName =  filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$passedEmail =  filter_var($_POST["email"], FILTER_SANITIZE_STRING);
$passedAddress1 =  filter_var($_POST["website"], FILTER_SANITIZE_STRING);
$passedPostcode =  filter_var($_POST["postcode"], FILTER_SANITIZE_STRING);
$passedArt =  filter_var($_POST["art"], FILTER_SANITIZE_STRING);
$passedAbout =  filter_var($_POST["about"], FILTER_SANITIZE_STRING);
$passsedEmailAgree =  filter_var($_POST["agree"], FILTER_SANITIZE_STRING);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO uploadTest (firstName, newEmailAddress, webaddress, postCode, art, about, emailAgree) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $firstname, $email, $address1, $postCode, $art, $about, $emailAgree);

// set parameters and execute
$firstname = $passedFirstName;
$email = $passedEmail;
$address1 = $passedAddress1;
$postCode = $passedPostcode;
$art = $passedArt;
$about = $passedAbout;
$emailAgree = $passsedEmailAgree;

$stmt->execute();

//echo "2";

$stmt->close();
$conn->close();
} else {
  echo "<div class='errorSubmit'>We have not received your submission.</div>";
}

  }
}

?>

</div>
</div>


<div class="container thanksHolder">
  <div class="col-md-8 col-md-offset-2 col-xs-12">
  <div class="thanksPadder">
   <p>Thank you.</p> 

    <p>We have received your entry.</p>
   </div>
   </div>
  </div>


  <div class="theForm">
    <div class="col-md-8 col-md-offset-2 col-xs-12">
      <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" enctype="multipart/form-data" name="phuploader">
        <div class="form-group"> 
          <div class="col-sm-12 validationError"><span id="validate"> <?php echo $nameErr;?></span></div>
          <div class="col-sm-3">
            <label for="name">Name:</label>
          </div>
          <div class="col-sm-9">
           <input class="form-control" type="text" name="name" value="<?php echo isset($_POST['name']) ? $_POST['name'] : '' ?>" >
         </div>
       </div>

       <div class="form-group"> 
        <div class="col-sm-12 validationError"><span id="validate"> <?php echo $emailErr;?></span></div>
        <div class="col-sm-3">
          <label for="email">Email:</label>
        </div>
        <div class="col-sm-9">
          <input class="form-control" type="text" name="email" value="<?php echo isset($_POST['email']) ? $_POST['email'] : '' ?>" >
        </div>
      </div>

      <div class="form-group"> 
       <div class="col-sm-12 validationError"><span id="validate"> <?php echo $websiteErr;?></span></div>
       <div class="col-sm-3">
        <label for="website">Website:</label>
      </div>
      <div class="col-sm-9">
       <input class="form-control" type="text" name="website" value="<?php echo isset($_POST['website']) ? $_POST['website'] : '' ?>" >
     </div>
   </div>

   <div class="form-group"> 
     <div class="col-sm-12 validationError"><span id="validate"> <?php echo $postcodeErr;?></span></div>
     <div class="col-sm-3">
      <label for="name">Postcode:</label>
    </div>
    <div class="col-sm-9">
     <input class="form-control" type="text" name="postcode" value="<?php echo isset($_POST['postcode']) ? $_POST['postcode'] : '' ?>" >
   </div>
 </div>

 <div class="form-group"> 
  <div class="col-sm-12 validationError"><span id="validate"> <?php echo $artErr;?></span></div>
  <div class="col-sm-3">
    <label for="name">Your chosen art:</label>
  </div>
  <div class="col-sm-9">
   <input class="form-control" type="text" name="art" value="<?php echo isset($_POST['art']) ? $_POST['art'] : '' ?>" >
 </div>
</div>

<div class="form-group">
 <div class="col-sm-12 validationError"><span id="validate"> <?php echo $aboutErr;?></span></div>
 <div class="col-sm-3"> 
  <label for="name">About you and your art selected:</label>
</div>
<div class="col-sm-9">
 <textarea class="form-control" type="textarea" name="about" rows="6"><?php echo isset($_POST['about']) ? $_POST['about'] : '' ?></textarea>
</div>
</div>

<div class="form-group"> 
 <div class="col-sm-12 validationError"><span id="validate"> <?php echo $uploadErr;?></span></div>
 <div class="col-sm-3">
  <label for="name">Upload up to three images:</label>
  <p> Files must be under 3mb each.</p>
</div>
<div class="col-sm-9">

  <input id="uploadFile1" placeholder="Choose File" disabled="disabled" />
  <div class="fileUpload btn btn-primary fileUploadButton">
    <span>Upload</span>
    <input type="file" name="file[]" size="30" accept="image/*"  class="upload" id="uploadBtn1">
  </div>

  <div class="clearfix"></div>

  <input id="uploadFile2" placeholder="Choose File" disabled="disabled" />
  <div class="fileUpload btn btn-primary fileUploadButton">
    <span>Upload</span>
    <input type="file" name="file[]" size="30" accept="image/*"  class="upload" id="uploadBtn2">
  </div>
  <div class="clearfix"></div>

  <input id="uploadFile3" placeholder="Choose File" disabled="disabled" />
  <div class="fileUpload btn btn-primary fileUploadButton">
    <span>Upload</span>
    <input type="file" name="file[]" size="30" accept="image/*"  class="upload" id="uploadBtn3">
  </div>

</div>
</div>

<div class="col-md-9 col-md-offset-3">
  <div class="submitHolder">
    <input type="hidden" name="latestID" value="" id="rowCount">
    <input type="submit" name="submit" value="Submit" class="btn btn-zano"> 
  </div>
</div>

<div class="col-md-6 col-md-offset-3">
  <div class="form-group"> 

    <input type="checkbox" name="agree" value="Yes" checked><span class="checkBoxText"> I would like to receive email newsletters from TOAST
    about its exclusive offers, events, editorial and collections.</span>
  </div>

</div>
</form>
</div>
</div>
</div>
<script>
if ($.trim($(".hiddenSuccess").html()) == "1"){
  $(".theForm").hide()
  $(".theWorks").hide()
  $(".thanksHolder").show()
}

 $.get( "count", function( data) {
    $('#rowCount').val(parseInt(data) + 1)
});

document.getElementById("uploadBtn1").onchange = function () {
    document.getElementById("uploadFile1").value = this.value;
}

document.getElementById("uploadBtn2").onchange = function () {
    document.getElementById("uploadFile2").value = this.value;
}

document.getElementById("uploadBtn3").onchange = function () {
    document.getElementById("uploadFile3").value = this.value;
}

</script>
</body>
