const express = require("express");

const app = express();
app.use(express.json());

app.post("/run", (req, res) => {
    res.json({
        message: "Code Executed Successfully"
    });
});

app.post("/compile", (req, res) => {
    res.json({
        message: "Code Compiled Successfully"
    });
});

app.get("/status", (req, res) => {
    res.json({
        status: "Execution Service Running"
    });
});

app.listen(4002, () => {
    console.log("Execution Service running on port 4002");
});