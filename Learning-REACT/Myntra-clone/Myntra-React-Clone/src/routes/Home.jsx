import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className='items-container'>
          {items && items.length > 0 ? (
            items.map((item) => <HomeItem key={item.id} item={item} />)
          ) : (
            <p>No items available.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
