<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $membership = $_POST['membership'];

    $to = "srivastavaaparna2004@gmail.com";
    $subject = "New Membership Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMembership: $membership";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your submission.";
    } else {
        echo "There was a problem submitting your form. Please try again.";
    }
}
?>
