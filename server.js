const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const moviesRouter = require("./routers/movies");
const reviewsRouter = require("./routers/reviews");

app.use(express.static("public"));

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
});

app.use("/movies", moviesRouter);

app.use("/reviews", reviewsRouter);

app.get('/about', (req, res) => {
    res.json({
        title: "About",
        content: "Pagina About"
    });
});