const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

/* Index */
router.get("/", reviewsController.index);

/* Show */
router.get("/:id", reviewsController.show);

/* Store */

/* Update */

/* Destroy */

module.exports = router;