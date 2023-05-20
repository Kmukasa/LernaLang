/* Proxy for OpenAI API and Firebase */

import express from "express";
// import * as path from "path";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 3000;
const MAX_RETRIES = 3;

app.use(bodyParser.json());

/*
 *  sendMessage -> request handler for sending a message to the OpenAI API
 *      @param {string} message - the array of messages to send to the OpenAI API - [{role: string, content: string}]
 *      @param {string} language - the language to use for the conversation
 *      @param {string} topic - the topic to use for the conversation
 *      @param {string} proficiency - the proficiency level of the user
 *      @returns {object} - the response from the OpenAI API
 */
app.post("/sendMessage", async (req, res) => {
  console.log("Request Body: ", req.body);
  const { messages } = req.body;
  let retryCount = 0;

  if (messages.length == 0) {
    return res.json({
      statusCode: 400,
      status: "error",
      data: "ERROR: Message cannot be empty.",
    });
  }

  // construct the request payload
  const requestBody = {
    model: process.env.OPENAI_MODEL,
    messages: messages,
    max_tokens: 150,
  };

  let response = await fetch(process.env.OPENAI_CHAT_REQUEST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  // if response is not ok, retry 3 more times
  while (!response.ok && retryCount < MAX_RETRIES) {
    response = await fetch(process.env.OPENAI_CHAT_REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });
    retryCount += 1;
  }

  // After retrying if response is server_error, rerun the error
  if (!response.ok) {
    const error = await response.json();
    console.error("OpenAI API Error:", error);
    return res.json({
      code: error.code,
      status: "error",
      data: error.message,
    });
  }

  // parse the successful response from OpenAI as json
  const data = await response.json();
  console.log("OpenAI API Response: ", data);
  const responseMessage = {
    role: "assistant",
    content: data?.choices?.[0]?.message?.content,
  };
  return res.json({
    code: 200,
    status: "success",
    data: responseMessage,
  });
});

// start the express server
app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));
