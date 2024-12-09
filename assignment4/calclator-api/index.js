const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "this is working fine." });
});
// API Endpoints
app.post("/api/calculate/add", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
});

app.post("/api/calculate/subtract", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
});

app.post("/api/calculate/multiply", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
});

app.post("/api/calculate/divide", (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res
            .status(400)
            .json({ error: "Division by zero is not allowed." });
    }
    const result = num1 / num2;
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
