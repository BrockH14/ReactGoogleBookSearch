const router = require("express").Router();
const booksCon = require("../../controllers/booksCon");

// Matches with "/api/books"
router.route("/")
  .get(booksCon.findAll)
  .post(booksCon.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksCon.findById)
  .put(booksCon.update)
  .delete(booksCon.remove);

module.exports = router;
