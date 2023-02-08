import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import { createInterface } from "readline";

dotenv.config();

const configuration = new Configuration({
  organization: "org-g09EYI9rjdW8gsun5VGjALUc",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let prompt = "Hi";

rl.on("line", (line) => {
  prompt = line;
  rl.close();
});

rl.on("close", () => {
  (async () => {
    try {
      const res = await openai.createCompletion({
        prompt,
        model: "text-davinci-003",
        max_tokens: 160,
        temperature: 0.7,
        stream: false,
      });
      console.log(res.data.choices[0].text);
      process.exit();
      return;
    } catch (e) {
      console.log("Error");
      process.exit();
    }
  })();
});
