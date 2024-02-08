const express = require("express");
const app = express();
const port = 7000
const router = require("./routes/index")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get('/', (req, res) => {
    res.send("Hello, Kamu telah tersambung")
} )

app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`)
})