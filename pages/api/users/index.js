import got from "got";
import { findByName } from "../../../apiServices/users/findByName";
import { findByUsername } from "../../../apiServices/users/findByUsername";



export default async (req, res) => {
  const query = req.query.query;

  const resultsByUsername = await findByUsername(query);
  if (resultsByUsername) {
    res.statusCode = 200;
    return res.json({
      items: resultsByUsername.items,
      __meta__: resultsByUsername.meta,
    });
  }

  const resultsByName = await findByName(query);
  res.statusCode = 200;
  return res.json({
    items: resultsByName.items,
    __meta__: resultsByName.meta,
  });
};
