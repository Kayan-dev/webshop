const { Router } = require("express");
const router = new Router();

const { joinorderproduct: JoinTable } = require("../models");

router.post("/", async (request, response) => {
  try {
    const { UserId, ProductId } = request.body;
    if (!UserId || UserId === " ") {
      response.status(400).send("Must provide user id");
    } else if (!ProductId || ProductId === " ") {
      response.status(400).send("Must provide products id");
    } else {
      const table = await JoinTable.create({ orderId, productId });
      response.json(table);
    }
  } catch (e) {
    next(e);
  }
});
