import { Router } from "express";
import { addUser, loginUser } from "../userController.js";

const router = new Router();

router.post("/", async (req, res) => {
  try {
    await addUser(req.body.email, req.body.password);
    return res.json({ message: "Зарегестрирован новый пользователь" });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ error: "Такой пользователь уже существует" });
    } else {
      return res.json({ error: "Произошла ошибка" });
    }
  }
});
export default router;

router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    if (result.error) {
      return res.json({ error: result.error });
    }

    const token = result;
    console.log(token);
    res.cookie("token", token);

    return res.json({
      message: "Вы вошли в аккаунт",
    });
  } catch (error) {
    return res.json({ error: "Произошла ошибка" });
  }
});
