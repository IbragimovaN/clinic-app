import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { addRequest, getRequests } from "../requestsController.js";

const router = new Router();

router.get("/", async (req, res) => {
  const requests = await getRequests();
  res.send(requests);
});

router.post("/", async (req, res) => {
  await addRequest(req.body);
  return res.json({ message: "added" });
});

export default router;
