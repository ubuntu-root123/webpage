<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted email address
    $email = $_POST['email'];

    // Validate the email address (simple example, you can expand this)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Check if the email exists in the database
        // (Replace this with actual database lookup)
        $user_exists = true;  // Assuming the user exists for demonstration

        if ($user_exists) {
            // Generate a unique reset token
            $token = bin2hex(random_bytes(50));
            $reset_link = "https://example.com/reset_password_form.php?token=$token";

            // Save the token to the database (associated with the user's email)
            // (Database code goes here)

            // Send the reset link to the user's email
            $subject = "Password Reset Request";
            $message = "To reset your password, click the link below:\n\n$reset_link";
            $headers = "From: no-reply@example.com";

            if (mail($email, $subject, $message, $headers)) {
                echo "A password reset link has been sent to your email.";
            } else {
                echo "Failed to send the password reset email.";
            }
        } else {
            echo "No account found with that email address.";
        }
    } else {
        echo "Invalid email address.";
    }
}
?>
