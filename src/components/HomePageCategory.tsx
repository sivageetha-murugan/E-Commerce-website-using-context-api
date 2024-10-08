import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { HomePageCategoryProps, Item } from "../type/Type";
import Product from "./Product";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import { CATEGORYPATH } from "../utils/constants";

function HomePageCategory({ index, element, page }: HomePageCategoryProps) {
  const { product } = useAppContext();

  const [productList, setProductList] = useState<Item[]>([]);

  useEffect(() => {
    const products = product.filter(
      (item) => item.category === element.name
    );
    if (page === "Home") {
      products.length = 4;
      setProductList(products);
    } else {
      setProductList(products);
    }
  }, [element, page]);

  const navigate = useNavigate();
  return (
    <div className="mt-8 " key={`${element.id} ${index}`}>
      <div className="p-4 flex  justify-between items-center me-4">
        <div className="text-4xl font-bold uppercase">{element.name}</div>
        <Button
          className="underline underline-offset-8"
          onClick={() => navigate(`${CATEGORYPATH}/${element.name}`)}
        >
          Viewmore
        </Button>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center pt-5">
        {productList.map((item) => (
          <Product item={item} index={item.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePageCategory;
