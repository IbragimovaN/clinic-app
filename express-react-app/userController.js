import mongoose from "mongoose";
import User from "./models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.JWT_SECRET;

async function getUsers() {
  const users = await User.find();
  return users;
}

async function addUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ email, password: passwordHash });

  console.log("User was added!");
}

async function loginUser(email, password) {
  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) {
    return { error: "Пользователь не найден" };
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return { error: "Неверный пароль" };
  }

  return jwt.sign({ email }, secret, { expiresIn: "30d" });
}

export { addUser, loginUser };
