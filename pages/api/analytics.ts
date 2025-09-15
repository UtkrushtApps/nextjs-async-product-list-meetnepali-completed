import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  // Simulate time-consuming analytics processing
  await new Promise((resolve) => setTimeout(resolve, 400));
  res.status(200).json({ message: "Analytics logged" });
}
