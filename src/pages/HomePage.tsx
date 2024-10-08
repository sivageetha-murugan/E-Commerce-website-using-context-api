import { useAppContext } from "../context/AppContext";
import HomePageCategory from "../components/HomePageCategory";
import { HomePageProps } from "../type/Type";

function HomePage({ page }: HomePageProps) {
  const { categories } = useAppContext();
  return (
    <>
      <div className="p-8">
        {categories.map((element, index) => (
          <HomePageCategory index={index} element={element} page={page} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
