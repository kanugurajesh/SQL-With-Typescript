import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://k3vq3i:xau_fvG9w8F6enAamJ8yvP9N3@us-east-1.sql.xata.sh/practice:main?sslmode=require"
  );
  await client.connect();
  return client;
}
