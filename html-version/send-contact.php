<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
  echo json_encode(['success' => false, 'error' => 'Dados inválidos']);
  exit;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($subject) || strlen($message) < 10) {
  echo json_encode(['success' => false, 'error' => 'Campos obrigatórios não preenchidos']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(['success' => false, 'error' => 'Email inválido']);
  exit;
}

// Send email
$to = 'camila@diasfrazao.com.br'; // Change to your email
$emailSubject = "Contato do Site: $subject";

$body = "Nome: $name\n";
$body .= "Email: $email\n";
if ($phone) $body .= "Telefone: $phone\n";
$body .= "Assunto: $subject\n\n";
$body .= "Mensagem:\n$message\n";

$headers = "From: noreply@diasfrazao.com.br\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $emailSubject, $body, $headers);

echo json_encode(['success' => $sent]);
