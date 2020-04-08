<?php
$name=$_POST['name1'];
$email=$_POST['email1'];
$phone_no=$_POST['phone_no1'];
$massage=$_POST['massage1'];
$email= filter_var($email,FILTER_SANITIZE_EMAIL);
if(filter_var($email,FILTER_VALIDATE_EMAIL)){
    if(!preg_match("/^[0-9]{10}$/", $phone_no)){
        echo "<span style='color:red;text-align:center;font-size:20px;padding-left:20%;padding-top:30px;'>*Please Enter A Valid Contact No.*</span>";
    }
    else{
        $subject=$name;
        $to="arshad.kkc.akkc@gmail.com";
        $headers='From'. $email."\r\n";
        $headers.='Cc'.$email."\r\n";
        $template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
            . '<br/>Thank you...! For Contacting Us.<br/><br/>'
            . 'Name:' . $name . '<br/>'
            . 'Email:' . $email . '<br/>'
            . 'Contact No:' . $phone_no . '<br/>'
            . 'Message:' . $massage . '<br/><br/>'
            . 'This is a Contact Confirmation mail.'
            . '<br/>'
            . 'We Will contact You as soon as possible .</div>';
        $send_message = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
        $send_message = wordwrap($send_message, 70);
        mail($to, $subject, $send_message, $headers);
        echo "<span style='font-size:20px;text-align:center;text-align:center;'>*YOUR MASSAGE HAS BEEN SEND AND WE WILL*
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*CONTACT AS SOON AS POSSIBLE.*</span>";
    }
} else {
    echo "<span style='color:red;text-align:center;font-size:20px;padding-left:20%;padding-top:30px;'>* Enter the an Valid Email Address *</span>";
    }
?>