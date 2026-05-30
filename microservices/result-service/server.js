const express = require("express");

const app = express();
app.use(express.json());

app.post("/submission", (req, res) => {
    res.json({
        message: "Submission Stored Successfully"
    });
});

app.get("/history", (req, res) => {
    res.json({
        submissions: []
    });
});

app.get("/results/:id", (req, res) => {
    res.json({
        id: req.params.id,
        result: "Success"
    });
});

app.listen(4003, () => {
    console.log("Result Service running on port 4003");
});