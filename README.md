<div align="center">
    
  # Markdown File Upload and Rendering Service
  
![image](https://github.com/user-attachments/assets/6ea345fa-97f2-420d-bc19-aed006ade357)
  
  [Overview](#🎯-overview) •
  [Features](#✨-features) •
  [Getting Started](#🚀-getting-started) •
  [Usage](#📘-usage) •
  [Project Structure](#📚-project-structure)
  
</div>
  
---

## 🎯 Overview

This project is a simple Node.js application that allows users to upload a markdown file and returns the rendered HTML content. The application is built using Express.js and uses `multer` for handling file uploads and `marked` for converting markdown to HTML.

## ✨ Features

- **File Upload**: Upload a markdown file through a simple web interface.
- **Markdown Parsing**: Convert the uploaded markdown file to HTML.
- **CORS Support**: Allows cross-origin requests.
- **Serve Static Files**: Serves an HTML form for file upload.

## 🚀 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hamza-140/markdown-note-taking-app.git
    cd markdown-note-taking-app
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Run the server:

    ```bash
    node index.js
    ```

   The application will start listening on port `3000`.

## 📘 Usage

1. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000/`.
   - Use the provided form to upload a markdown file.

2. **Response**:
   - Upon submission, the server will parse the markdown and return the rendered HTML.

## 📚 Project Structure

```plaintext
.
├── uploads/              # Directory where uploaded files are temporarily stored
├── index.js                # Main application file
├── package.json          # Node.js package information
├── package-lock.json     # Dependency lock file
└── index.html            # HTML form for uploading markdown files
```

## CC
[https://roadmap.sh/projects/markdown-file-upload](https://roadmap.sh/projects/markdown-file-upload)
