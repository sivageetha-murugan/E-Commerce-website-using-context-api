import { useAppContext } from "../context/AppContext";
import HomePageCategory from "../components/HomePageCategory";
import { HomePageProps } from "../type/Type";

function HomePage({ page }: HomePageProps) {
  const { state } = useAppContext();
  return (
    <div className="p-8">
      {state.categories.map((element, index) => (
        <HomePageCategory index={index} element={element} page={page} />
      ))}
    </div>
  );
}

export default HomePage;
