import type { NextApiRequest, NextApiResponse } from "next";
import { TypeProduct } from "../../../common/content-types";
import client from "../../../lib/contentful";

type Data = {
  products: TypeProduct[];
};

const Search = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    query: { query },
    method,
  } = req;

  if (method === "GET") {
    // Search products via name
    const namePromise = client.getEntries({
      content_type: "product",
      "fields.name[match]": query,
    });

    // Search products via all fields
    const searchPromise = client.getEntries({
      content_type: "product",
      query: query,
    });

    const responses = await Promise.all([namePromise, searchPromise]);

    // Filter products for duplicates
    const products = [...responses[0].items, ...responses[1].items].filter(
      (product, index, self) =>
        self.findIndex((a) => a.sys.id === product.sys.id) === index
    );

    return res.status(200).json({
      products: products as TypeProduct[],
    });
  }

  return res.status(400);
};

export default Search;
