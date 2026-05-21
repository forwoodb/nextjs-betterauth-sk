import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { nextCookies } from "better-auth/next-js";

const dbUrl = process.env.MONGODB_URL;

const client = new MongoClient(dbUrl!);

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client, usePlural: true }),
  emailAndPassword: {
    enabled: true,
  },
  // asResponse: true, // returns a response object instead of data
  plugins: [nextCookies()], // make sure this is the last plugin in the array
});
