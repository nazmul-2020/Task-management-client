import { useLoaderData } from "react-router-dom";
import Banner from "../component/Home/Banner";
import Fruits from "../component/Home/Fruits";
import Gallery from "../component/Home/Gallery";
import Specialty from "../component/Home/Specialty";
import Team from "../component/Home/Team";
import Contact from "../component/Home/Contact";
const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner />
      <Fruits data={data} />
      <Gallery />
      <Specialty/>
      <Team/>
      <Contact/>
    </>
  );
};

export default Home;
