const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/run", (req, res) => {
    const code = req.body.code;

    const escapedCode = code.replace(/"/g, '\\"');

exec(
    `docker run --rm python:3.10 python -c "${escapedCode}"`,
(err, stdout, stderr) => {

    if (err) {
        return res.json({
            error: stderr
        });
    }

    res.json({
        output: stdout
    });
});
});

app.listen(3000, () => console.log("Server running on port 3000"));