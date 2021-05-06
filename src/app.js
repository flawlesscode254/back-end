const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const helmet = require("helmet");
const router = require("../logs/logs")
const middlewares = require("../middlewares/middleware")
const mongooose = require("mongoose");
require("dotenv").config();
const app = express();

mongooose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(morgan("common"));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
});

app.use('/api/logs', router)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})