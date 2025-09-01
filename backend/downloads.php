<?php
// Directory where uploaded files will be saved
$targetDir = "downloads/";

// Create directory if it doesn't exist
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

$uploadOk = 1;
$message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['brochure'])) {
        $file = $_FILES['brochure'];

        // Extract file info
        $filename = basename($file['name']);
        $targetFilePath = $targetDir . $filename;
        $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

        // Allowed file types
        $allowedTypes = ['pdf'];

        // Check file type
        if (!in_array($fileType, $allowedTypes)) {
            $message = "Sorry, only PDF files are allowed.";
            $uploadOk = 0;
        }

        // Check file size limit (5MB)
        if ($file['size'] > 5 * 1024 * 1024) {
            $message = "Sorry, file size exceeds 5MB limit.";
            $uploadOk = 0;
        }

        // Check if file already exists
        if (file_exists($targetFilePath)) {
            $message = "Sorry, file already exists.";
            $uploadOk = 0;
        }

        // Upload file if all checks pass
        if ($uploadOk) {
            if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
                $message = "The file " . htmlspecialchars($filename) . " has been uploaded.";
            } else {
                $message = "Sorry, there was an error uploading your file.";
            }
        }
    } else {
        $message = "No file was uploaded.";
    }
} else {
    $message = "Invalid request method.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Upload Result</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet" />
</head>
<body class="bg-white text-gray-800 flex justify-center items-center h-screen">
  <div class="max-w-lg p-6 border rounded shadow text-center">
    <p class="mb-4"><?= $message ?></p>
    <a href="academics.html" class="text-blue-600 underline hover:text-blue-800">Back to Academics Page</a>
  </div>
</body>
</html>
