import { contextProvider } from "../context/AppContext";
import Product from "../components/Product";

function ProductPage(props: { page: string; category: string }) {
  const { product } = contextProvider();

  const products = product.filter(
    (element) => element.category === props.category
  );

  props.page === "Home" ? (products.length = 4) : products;
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center pt-5">
      {products.map((item) => (
        <Product item={item} index={item.id} />
      ))}
    </div>
  );
}

export default ProductPage;
