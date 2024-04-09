import Requests from "./models/requestsModels.js";
import mongoose from "mongoose";

async function addRequest(newData) {
  await Requests.create(newData);
  console.log("Requests was added");
}

async function getRequests() {
  const requests = await Requests.find();
  return requests;
}

async function removeRequest(id) {
  await Requests.deleteOne({ _id: id });
  console.log("Requests was deleted");
}

async function editRequest(id, newData) {
  await Requests.updateOne({ _id: id }, { title: newData });
  console.log(chalk.bgGreen("Requests was edited", id));
}
export { addRequest, getRequests, removeRequest, editRequest };
