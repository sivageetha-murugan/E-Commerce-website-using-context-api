import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Item, ProductPageProps } from "../type/Type";

function ProductPage({ page, category }: ProductPageProps) {
  const { state } = useAppContext();

  const [productList, setProductList] = useState<Item[]>([]);

  useEffect(() => {
    const products = state.product.filter((item) => item.category === category);
    if (page === "Home") {
      products.length = 4;
      setProductList(products);
    } else {
      setProductList(products);
    }
  }, [category, page]);

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center pt-5">
      {productList.map((item) => (
        <Product item={item} index={item.id} />
      ))}
    </div>
  );
}

export default ProductPage;
