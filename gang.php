<?php
// Database configuration
$host = 'localhost'; // Your database host
$dbname = 'contact_form'; // Your database name
$username = 'root'; // Your database username
$password = ''; // Your database password

// Create a connection to the database using MySQLi
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];

// Sanitize and validate input
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = filter_var($phone, FILTER_SANITIZE_STRING);
$comments = filter_var($comments, FILTER_SANITIZE_STRING);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

// Insert data into the database
$sql = "INSERT INTO contacts (email, phone, comments) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $email, $phone, $comments);

if ($stmt->execute()) {
    // Prepare email
    $to = 'your-email@example.com'; // Replace with your email
    $subject = 'New Contact Form Submission';
    $message = "E-mail: $email\nPhone: $phone\nComments: $comments";
    $headers = 'From: no-reply@example.com'; // Replace with your email or a no-reply email

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Error: " . $stmt->error;
}

// Close the database connection
$stmt->close();
$conn->close();
?>
