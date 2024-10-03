import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Category } from "../type/Type";
import Product from "./Product";
import { contextProvider } from "../context/AppContext";

function HomePageCategory(props: {
  index: number;
  element: Category;
  page: string;
}) {
  const { product } = contextProvider();

  const products = product.filter(
    (categoryItem) => categoryItem.category === props.element.name
  );

  props.page === "Home" ? (products.length = 4) : products;

  const navigate = useNavigate();
  return (
    <div className="mt-8 " key={props.index}>
      <div className="p-4 flex  justify-between items-center me-4">
        <div className="text-4xl font-bold uppercase">{props.element.name}</div>
        <Button
          className=""
          onClick={() => navigate(`/category/${props.element.name}`)}
        >
          Viewmore
        </Button>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center pt-5">
        {products.map((item, index) => (
          <Product item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default HomePageCategory;
