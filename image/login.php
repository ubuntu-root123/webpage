<?php
// Sample credentials for demonstration
$valid_username = 'admin';
$valid_password = 'password123';

// Read POST data
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

// Validate credentials
if ($username === $valid_username && $password === $valid_password) {
    // Credentials are valid
    http_response_code(200);
    echo json_encode(['message' => 'Login successful']);
} else {
    // Credentials are invalid
    http_response_code(401);
    echo json_encode(['message' => 'Invalid credentials']);
}
?>
