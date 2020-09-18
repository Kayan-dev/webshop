const express = require("express");
const app = express();
const PORT = process.env.PORT || 4003;
const jsonParser = express.json();

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");

app.use(jsonParser);
app.use("/users", userRouter);
app.use("/login", authRouter);

app.listen(PORT, () => console.log("listening on port " + PORT));
