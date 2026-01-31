const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (css, js, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes to serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/download', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'download.html'));
});

app.get('/release', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'release.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'faq.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});