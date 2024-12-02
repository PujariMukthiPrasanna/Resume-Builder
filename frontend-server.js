const express = require('express');
const path = require('path');
const app = express();

// Serve static files directly from the frontend directory
app.use(express.static(__dirname));


// Redirect root to the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login', 'login.html'));
});

// Optional: Detailed 404 Handler for debugging
app.use((req, res) => {
    res.status(404).send(`Resource not found at ${req.originalUrl}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
