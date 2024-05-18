import express from "express"
import connectDb from "./db/connectDb.js";
const app = express();

connectDb()
app.use(express.static('dist'))
app.use(express.json())
app.use(express.urlencoded({ limit: '200mb', extended: true }))

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})