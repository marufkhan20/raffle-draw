const db = require("../db/db");

const router = require("express").Router();

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const { ticketId } = req.params;
    const ticket = db.findById(ticketId);
    res.status(200).json({ message: "Find Single Ticket", ticket });
  })
  .patch((req, res) => {
    const { ticketId } = req.params;
    const { username, price } = req.body;
    const updatedTicket = db.updateById(ticketId, { username, price });
    res.status(200).json({ message: "Update Ticket", updatedTicket });
  })
  .delete((req, res) => {
    const { ticketId } = req.params;
    const deletedTicket = db.updateById(ticketId);
    res
      .status(200)
      .json({ message: "Ticket Delete Successfully!", deletedTicket });
  });

router.route("/u/:username").get((req, res) => {
  const { username } = req.params;
  const tickets = db.findByUsername(username);
  res.status(200).json({ message: "Find Tickets By username", tickets });
});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  res.status(201).json({ message: "Ticket Buying Successfully!", ticket });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res
    .status(201)
    .json({ message: "Bulk Tickets Bying Successfully!", tickets });
});

router.post("/draw", (req, res) => {
  const { winnerCount } = req.body;
  const winners = db.draw(winnerCount);
  res.status(200).json({ message: "Get All Winners!!", winners });
});

router.get("/", (_req, res) => {
  const tickets = db.find();
  res.status(200).json({ tickets });
});

module.exports = router;
