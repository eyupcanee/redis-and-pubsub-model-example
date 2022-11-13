import { createClient } from "redis";

const subscriber = createClient();

subscriber.on("error", (err) => console.log("Redis Client Error", err));

await subscriber.connect();

await subscriber.subscribe("eyupcanee", (message) => {
  console.log(message);
});
