import { Request, Response } from "express";
import { getPlacesByName } from "./UserController";
import { checkSearchParams } from "./../../middleware/check";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams, // <-- this line
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  }
];