import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  try {
    if (
      process.env["GAS_STATION_API_URI"] &&
      process.env["GAS_STATION_API_KEY"]
    ) {
      if (req.method !== "GET") res.status(405).json("Forbidden request");

      const requestToGasStation = await fetch(
        process.env["GAS_STATION_API_URI"].concat(
          process.env["GAS_STATION_API_KEY"]
        )
      );

      const parsedRequest = await requestToGasStation.json();
      res.status(200).json(parsedRequest);
    } else {
      res
        .status(404)
        .json({ error: "Gas station API key or URI are not defined" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}
