const router = require("express").Router();
const googleCon = require("../../controllers/googleCon");

// Matches with "/api/google"
router
  .route("/")
  .get(googleCon.findAll);

module.exports = router;
