/* Proxy for OpenAI API and Firebase */
/* Currently not in use */

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

// Imports the Google Cloud client library & initializes the client
const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate(process.env.FIREBASE_PROJECT_ID);

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

/*
 *  getTranslation -> request handler for translating text to english
 *      @param {string} text - the text to translate
 *      @param {string} targetLanguage - the language to translate to
 *      @returns {object} - the translation from the Google Translate API
 *      Note: assumption is that the translation will always be correct
 */
app.post("/getTranslation", async (req, res) => {
  console.log("Request Body: ", req.body);
  const { text, targetLanguage } = req.body;
  let retryCount = 0;

  if (text.length == 0) {
    return res.json({
      statusCode: 400,
      status: "error",
      data: "ERROR: Text cannot be empty.",
    });
  }

  try {
    const [translation] = await translate.translate(text, targetLanguage);
    console.log(`Text: ${text}`);
    return res.json({
      code: 200,
      status: "success",
      data: translation,
    });
  } catch (error) {
    console.error("Google Translate API Error:", error);
    return res.json({
      code: error.code,
      status: "error",
      data: error.message,
    });
  }
});

/*
 * generateSpeechToText
 */
app.post("/generateSpeechToText", async (req, res) => {
  console.log("Request Body: ", req.body);
  const { uri, language } = req.body;
  let retryCount = 0;

  if (uri.length == 0) {
    return res.json({
      statusCode: 400,
      status: "error",
      data: "ERROR: URI cannot be empty.",
    });
  }

  try {
    let response = await fetch(process.env.OPENAI_SPEECH_TO_TEXT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        file: uri,
        model: "whisper-1",
        language: language,
      }),
    });

    // TODO: check file size and return error if too large

    // if response is not ok, retry 3 more times
    while (!response.ok && retryCount < MAX_RETRIES) {
      response = await fetch(process.env.OPENAI_SPEECH_TO_TEXT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          file: uri,
          model: "whisper-1",
          language: language,
        }),
      });
      retryCount += 1;
    }

    // if not successful, return error and empty string
    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI Speech to Text API Error:", error);
      return res.json({
        statusCode: error.code,
        status: "error",
        data: error.message,
      });
    }
    // if successful, return the transcription
    const data = await response.json();
    console.log("OpenAI Speech to Text API Response: ", data);
    return res.json({
      code: 200,
      status: "success",
      data: data,
    });
  } catch (error) {
    console.error("OpenAI Speech to Text API Error:", error);
    return res.json({
      statusCode: error.code,
      status: "error",
      data: error.message,
    });
  }
});

// start the express server
app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));
