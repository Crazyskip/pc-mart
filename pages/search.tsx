import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TypeProduct } from "../common/content-types";
import Product from "../components/product/Product.component";
import { server } from "../config";

const Search: NextPage = () => {
  const router = useRouter();
  const searchQuery = router.query.query;

  const [products, setProducts] = useState<TypeProduct[]>([]);

  const getSearch = async (query: string) => {
    const res = await fetch(`${server}/api/search/${query}`);
    const searchProducts = await res.json();
    setProducts(searchProducts.products);
  };

  useEffect(() => {
    if (searchQuery) {
      getSearch(String(searchQuery));
    }
  }, [searchQuery]);

  return (
    <>
      <Head>
        <title>PC Mart</title>
        <meta name="description" content="Pc part shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Search</h1>
      {products.map((product) => (
        <Product key={product.sys.id} product={product.fields} />
      ))}
    </>
  );
};

export default Search;
