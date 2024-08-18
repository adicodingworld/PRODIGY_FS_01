const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Basic route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example protected route
app.get('/protected', (req, res) => {
    // Simulate a check for user authentication (adjust as needed)
    if (true) { // Replace `true` with actual authentication logic
        res.status(200).send('Welcome to the protected area!');
    } else {
        res.status(403).send('Access Denied');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
