const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/run", (req, res) => {
    const code = req.body.code;

    exec(`docker run --rm python:3.10 python -c "${code}"`, 
    (err, stdout, stderr) => {
        if (err) return res.send(stderr);
        res.send(stdout);
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));