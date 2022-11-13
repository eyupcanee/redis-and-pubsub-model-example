import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.set("user_name", "Test", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message : ", message);
});

//
let value = await client.get("user_name");
console.log(value);

// exists
let exists = await client.exists("user_name");
console.log(exists);

await client.set("user_name2", "Test2", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message : ", message);
});

await client.del("user_name2");

let exists2 = await client.exists("user_name2");
console.log(exists2);

await client.append("last_name", "LNAME");
let appendResult = await client.get("last_name");
console.log(appendResult);
