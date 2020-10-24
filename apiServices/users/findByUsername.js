import got from "got";

export async function findByUsername(query) {
  try {
    const response = await got(`${process.env.BIO_API}/api/bios/${query}`, {
      responseType: "json",
    });
  } catch (err) {
    if (err.response.statusCode === 404) {
      return null;
    }
    throw err;
  }
}
