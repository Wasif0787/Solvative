import express from "express"
import connectDb from "./db/connectDb.js";
import userRoutes from "./routes/userRoutes.js"
import rewardRoutes from "./routes/rewardRoute.js"
const app = express();

connectDb()
app.use(express.json())
app.use(express.urlencoded({ limit: '200mb', extended: true }))

app.use("/api/users", userRoutes)
app.use("/api/rewards", rewardRoutes)

app.listen(3000, () => {
    console.log("Listening to port 3000");
})