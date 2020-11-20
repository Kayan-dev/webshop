const { Router } = require("express");
const router = new Router();

const { joinordertable: JoinTable, order: Order } = require("../models");

router.post("/", async (request, response, next) => {
  try {
    const { userId, productId } = request.body;
    console.log("what is body", request.body);
    if (!userId || userId === " ") {
      response.status(400).send("Must provide user id");
    } else if (!productId || productId === " ") {
      response.status(400).send("Must provide products id");
    } else {
      const orderList = await Order.create({ userId });
      console.log("what is orderlist?", orderList);
      // const table = await JoinTable.create({ userId, productId });
      response.json(orderList);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
