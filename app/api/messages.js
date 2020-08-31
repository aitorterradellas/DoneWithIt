import client from "./client";

const send = (messageInfo) => client.post("/messages", messageInfo);

export default {
  send,
};
