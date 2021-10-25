/* eslint-disable import/prefer-default-export */
import { Handler } from "@netlify/functions";

import quests from "./quests.json";

export const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "sentry-trace",
    "Content-Type": "application/json",
  };

  const id = event.queryStringParameters?.id;
  if (id) {
    const quest = quests.quests.find((q) => q.id.toString() === id);
    if (quest) {
      return { statusCode: 200, headers, body: JSON.stringify(quest) };
    }
    return { statusCode: 404, headers, body: JSON.stringify({ message: "Quest not found" }) };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(quests),
  };
};
