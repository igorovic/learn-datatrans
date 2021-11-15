// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import debug from "app/utils/debug";
import { initTransaction } from "app/datatrans/init";
type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  debug(req);
  const payload = req.body;
  const transaction = await initTransaction(payload);
  res.status(200).json(transaction);
};
