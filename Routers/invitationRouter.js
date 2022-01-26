const router = require("express").Router();
const Invitation = require("./../Controller/invitationController");

router.post("/sendInvitation", Invitation.sendInvitation);
module.exports = router;
