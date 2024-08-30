const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const { marked } = require("marked");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

// Handle the file upload
app.post("/result", upload.single("uploadedFile"), function (req, res) {
  console.log("Uploading File");

  // Read the file content
  fs.readFile(req.file.path, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading file");
    }

    // Parse the file content using marked (assuming it's a markdown file)
    const html = marked.parse(data);

    // Send the parsed HTML back to the client
    res.send(html);
  });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});
