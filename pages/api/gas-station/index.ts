import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  if (
    !process.env["GAS_STATION_API_URI"] &&
    !process.env["GAS_STATION_API_KEY"]
  )
    return res.status(404);

  try {
    if (req.method !== "GET") return res.status(405);

    const requestToGasStation = await fetch(
      process.env["GAS_STATION_API_URI"]!.concat(
        process.env["GAS_STATION_API_KEY"]!
      )
    );

    const parsedRequest = await requestToGasStation.json();
    return res.status(200).json(parsedRequest);
  } catch (error) {
    return res.status(400);
  }
}
