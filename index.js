const express = require("express");
const app = express();
const PORT = process.env.PORT || 4003;
const jsonParser = express.json();

const orderRouter = require("./routers/order");

app.use(jsonParser);
app.use("/order", orderRouter);

app.listen(PORT, () => console.log("listening on port " + PORT));
