import fetch from "node-fetch";
import { readFileSync } from "fs";

const baseUri = "https://us-central1-myfirstblogger-1675264620328.cloudfunctions.net/";
const endpoint = "setData";

const run = async () => {
  const readData = readFileSync("./resultData.json", { encoding: "utf-8" });
  // console.log(readData);
  await fetch("http://127.0.0.1:6000/" + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(readData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return;
};

run();
