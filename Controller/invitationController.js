const db = require("./../firebase");
exports.sendInvitation = async (req, res) => {
  const { sender_uid, receiver_uid } = req.body;
  if (!sender_uid || !receiver_uid) {
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
  const senderRef = db.collection("users").doc(sender_uid);
  const doc = await senderRef.get();
  const sender_user = doc.data();
  const receiverRef = db.collection("users").doc(receiver_uid);
  const doc1 = await receiverRef.get();
  const receiver_user = doc1.data();

  let waiting_invitaion = [];
  let pending_invitaion = [];
  if ("waiting_invitaion" in sender_user) {
    waiting_invitaion = [...sender_user?.waiting_invitaion];
  }
  if ("pending_invitaion" in receiver_user) {
    pending_invitaion = [...receiver_user?.pending_invitaion];
  }
  if (!waiting_invitaion.includes(receiver_uid)) {
    waiting_invitaion.push(receiver_uid);
  } else {
    res.status(201).json({ data: sender_user });
    return;
  }
  if (!pending_invitaion.includes(sender_uid)) {
    pending_invitaion.push(sender_uid);
  } else {
    res.status(201).json({ data: sender_user });
    return;
  }
  console.log(waiting_invitaion);
  console.log(pending_invitaion);
  try {
    const res2 = await senderRef.update({
      waiting_invitaion: waiting_invitaion,
    });
    const res3 = await receiverRef.update({
      pending_invitaion: pending_invitaion,
    });
    const doc3 = await senderRef.get();
    res.status(201).json({ data: doc3.data() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.acceptInvitation = async (req, res) => {
  const { sender_uid, receiver_uid } = req.body;
  if (!sender_uid || !receiver_uid) {
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
  const senderRef = db.collection("users").doc(sender_uid);
  const doc = await senderRef.get();
  const sender_user = doc.data();
  const receiverRef = db.collection("users").doc(receiver_uid);
  const doc1 = await receiverRef.get();
  const receiver_user = doc1.data();

  let waiting_invitaion = [];
  let pending_invitaion = [];
  let accepted_invitation_sender = [];
  let accepted_invitation_receiver = [];
  if ("accepted_invitaion" in sender_user) {
    accepted_invitation_sender = [...sender_user?.accepted_invitaion];
  }
  if ("accepted_invitaion" in receiver_user) {
    accepted_invitation_receiver = [...receiver_user?.accepted_invitaion];
  }
  for (let i = 0; i < sender_user?.waiting_invitaion.length; i++) {
    if (sender_user?.waiting_invitaion[i] !== receiver_uid) {
      waiting_invitaion.push(sender_user?.waiting_invitaion[i]);
    }
  }
  for (let i = 0; i < receiver_user?.pending_invitaion.length; i++) {
    if (receiver_user?.pending_invitaion[i] != sender_uid) {
      pending_invitaion.push(receiver_user?.pending_invitaion[i]);
    }
  }
  if (!accepted_invitation_sender.includes(receiver_uid)) {
    accepted_invitation_sender.push(receiver_uid);
  }
  if (!accepted_invitation_receiver.includes(sender_uid)) {
    accepted_invitation_receiver.push(sender_uid);
  }
  try {
    const res2 = await senderRef.update({
      accepted_invitaion: accepted_invitation_sender,
      waiting_invitaion: waiting_invitaion,
    });
    const res3 = await receiverRef.update({
      accepted_invitaion: accepted_invitation_receiver,
      pending_invitaion: pending_invitaion,
    });
    const doc3 = await receiverRef.get();
    res.status(201).json({ data: doc3.data() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.declineInvitation = async (req, res) => {
  const { sender_uid, receiver_uid } = req.body;
  if (!sender_uid || !receiver_uid) {
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
  const senderRef = db.collection("users").doc(sender_uid);
  const doc = await senderRef.get();
  const sender_user = doc.data();
  const receiverRef = db.collection("users").doc(receiver_uid);
  const doc1 = await receiverRef.get();
  const receiver_user = doc1.data();

  let waiting_invitaion = [];
  let pending_invitaion = [];
  for (let i = 0; i < sender_user?.waiting_invitaion.length; i++) {
    if (sender_user?.waiting_invitaion[i] !== receiver_uid) {
      waiting_invitaion.push(sender_user?.waiting_invitaion[i]);
    }
  }
  for (let i = 0; i < receiver_user?.pending_invitaion.length; i++) {
    if (receiver_user?.pending_invitaion[i] != sender_uid) {
      pending_invitaion.push(receiver_user?.pending_invitaion[i]);
    }
  }
  try {
    const res2 = await senderRef.update({
      waiting_invitaion: waiting_invitaion,
    });
    const res3 = await receiverRef.update({
      pending_invitaion: pending_invitaion,
    });
    const doc3 = await receiverRef.get();
    res.status(201).json({ data: doc3.data() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
