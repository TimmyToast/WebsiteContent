<?php
// define variables and set to empty values
$nameErr = $emailErr = $postcodeErr = $artErr = $websiteErr = $aboutErr = "";
$name = $email = $gender = $comment = $art = $website = $about = "";

$validated = "yes";
$imagesOK = "yes";

// Max size PER file in KB
$max_file_size="5000";

// Max size for all files COMBINED in KB
$max_combined_size="10000";

//Maximum file uploades at one time
$file_uploads="3";

//The name of your website
$websitename="Your site name";

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
    $nameErr = "Name is required";
    $validated = "no";
  } else {
   
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
     $validated = "no";
  } else {
    
  }

  if (empty($_POST["website"])) {
    $websiteErr = "Website is required";
     $validated = "no";
  } else {
   
  }


  if (empty($_POST["postcode"])) {
    $postcodeErr = "Postcode is required";
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
        
       echo "<b>FAILED:</b> All Files <b>REASON:</b> Combined file size is to large.<br />";
       $imagesOK = "no";
        
    // Loop though, verify and upload files.
    } Else {

        // Loop through all the files.
        For($i=0; $i <= $file_uploads-1; $i++) {
            
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
                    
                    echo "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <b>REASON:</b> Blank file name detected.<br />";
                    $imagesOK = "no";
                
                //Check if the file type uploaded is a valid file type. 
                }   ElseIf(!in_array($file_ext[$i], $allow_types)) {
                                
                     echo "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <b>REASON:</b> Invalide file type.<br />";
                     $imagesOK = "no";
                                
                //Check the size of each file
                } Elseif($_FILES['file']['size'][$i] > ($max_file_size*1024)) {
                    
                     echo  "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <b>REASON:</b> File to large.<br />";
                     $imagesOK = "no";
                    
                // Check if the file already exists on the server..
                } Elseif(file_exists($folder.$file_name[$i].".".$file_ext[$i])) {
    
                     echo  "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <b>REASON:</b> File already exists.<br />";
                     $imagesOK = "no";
                    
                } Else {
                    
                    If(move_uploaded_file($_FILES['file']['tmp_name'][$i],$folder.$file_name[$i].".".$file_ext[$i])) {
                        
                         echo "<b>SUCCESS:</b> ".$_FILES['file']['name'][$i]."<br />";
                         echo "<b>URL:</b> <a href=\"".$full_url.$file_name[$i].".".$file_ext[$i]."\" target=\"_blank\">".$full_url.$file_name[$i].".".$file_ext[$i]."</a><br /><br />";
                         
                        
                    } Else {
                       echo "<b>FAILED:</b> ".$_FILES['file']['name'][$i]." <b>REASON:</b> General upload failure.<br />";
                   
                    }
                    
                }
                            
            } // If Files
        
        } // For
        
    } // Else Total Size
    
    If(($error=="") AND ($success=="")) {
        echo " No files selected but submitting content anyway";
      
    }

    $display_message=$success.$error;

echo $imagesOK;

if ($imagesOK == "yes") {



// $servername = "localhost";
// $username = "timtest";
// $password = "Topp3r09";
// $dbname = "toastCapture";

$servername = "internal-db.s16804.gridserver.com";
$username = "db16804";
$password = "n3334s1arSTA!!";
$dbname = "db16804_toastUploaded";

$passedFirstName =  filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$passedEmail =  filter_var($_POST["email"], FILTER_SANITIZE_STRING);
$passedAddress1 =  filter_var($_POST["website"], FILTER_SANITIZE_STRING);
$passedPostcode =  filter_var($_POST["postcode"], FILTER_SANITIZE_STRING);
$passedArt =  filter_var($_POST["art"], FILTER_SANITIZE_STRING);
$passedAbout =  filter_var($_POST["about"], FILTER_SANITIZE_STRING);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO simpleForm (firstName, newEmailAddress, webaddress, postCode, art, about) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $firstname, $email, $address1, $postCode, $art, $about);

// set parameters and execute
$firstname = $passedFirstName;
$email = $passedEmail;
$address1 = $passedAddress1;
$postCode = $passedPostcode;
$art = $passedArt;
$about = $passedAbout;

$stmt->execute();

echo "2";

$stmt->close();
$conn->close();
}

  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/custombootstrap.css" rel="stylesheet">
  <link href="css/custom.css" rel="stylesheet">
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
  <title>Form Entry</title>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/addressfinder.js"></script>
</head>
<body>
<div class="container">
<div class="col-md-6 col-md-offset-3 col-xs-12">
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" enctype="multipart/form-data" name="phuploader">
<div class="form-group"> 
  <label for="name">Name<b><span id="addressValidate4"> <?php echo $nameErr;?></span></b></label>
 <input class="form-control" type="text" name="name">
  </div>

  <div class="form-group"> 
  <label for="email">Email<b><span id="addressValidate4"> <?php echo $emailErr;?></span></b></label>
 	<input class="form-control" type="text" name="email">
  </div>

  <div class="form-group"> 
  <label for="website">Website<b><span id="addressValidate4"> <?php echo $websiteErr;?></span></b></label>
 <input class="form-control" type="text" name="website">
  </div>

  <div class="form-group"> 
  <label for="name">Postcode<b><span id="addressValidate4"> <?php echo $postcodeErr;?></span></b></label>
 <input class="form-control" type="text" name="postcode">
  </div>

   <div class="form-group"> 
  <label for="name">Your chosen art<b><span id="addressValidate4"> <?php echo $artErr;?></span></b></label>
 <input class="form-control" type="text" name="art">
  </div>

<div class="form-group"> 
  <label for="name">About<b><span id="addressValidate4"> <?php echo $aboutErr;?></span></b></label>
 <textarea class="form-control" type="textarea" name="about"></textarea>
  </div>

  <?For($i=0;$i <= $file_uploads-1;$i++) {?>

  <div class="form-group"> 
  <label for="name">Select File:<b><span id="addressValidate4"></span></b></label>
<input type="file" name="file[]" size="30" accept="image/*"/>
  </div>


	<?}?>




<input type="submit" name="submit" value="Submit" class="btn btn-zano"> 

</form>
</div></div>


</body>