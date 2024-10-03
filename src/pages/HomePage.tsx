import { contextProvider } from "../context/AppContext";
import HomePageCategory from "../components/HomePageCategory";

function HomePage(props: {page: string}) {
  const { categories } = contextProvider();
  return (
    <>
      <div className="p-8">
        {categories.map((element, index) => (
          <HomePageCategory index={index} element={element} page={props.page} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
