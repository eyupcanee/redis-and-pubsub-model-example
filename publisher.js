import { createClient } from "redis";

const publisher = createClient();

publisher.on("error", (err) => console.log("Redis Client Error", err));

await publisher.connect();

await publisher.publish("eyupcanee", "Hello World From RedisJS!");

await publisher.disconnect();
