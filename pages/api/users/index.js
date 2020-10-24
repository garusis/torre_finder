import got from "got";

export default async (req, res) => {
  await new Promise(resolve => {
    setTimeout(resolve, 10000);
  });
  res.statusCode = 200;
  res.json({ items: [], __meta__: {} });
};
