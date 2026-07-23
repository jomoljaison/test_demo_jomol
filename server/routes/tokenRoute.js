const express = require("express");

const {
    mintToken,
    transferToken,
    getBalance
} = require("../controllers/tokenController");


const router = express.Router();


// Mint tokens
router.route("/mint")
.post(mintToken);


// Transfer tokens
router.route("/transfer")
.post(transferToken);


// Check balance
router.route("/balance/:address")
.get(getBalance);


module.exports = router;
