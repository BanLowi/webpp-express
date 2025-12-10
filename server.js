const express = require("express");
const app = express();
const PORT = 3000;
const moviesRouter = require("./routers/movies")

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
})

app.get("/", (req, res) => {

    res.send("Welcome to Boolflix!")
})

app.use("/movies", moviesRouter)