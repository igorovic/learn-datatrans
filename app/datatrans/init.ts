import client from "./client";

export async function initTransaction(transaction: any) {
  const response = await client.post("/v1/transactions", transaction, {
    auth: {
      username: String(process.env.MARCHANT_ID),
      password: String(process.env.MARCHANT_PWD),
    },
  });
  const { data } = response;
  return data;
}
