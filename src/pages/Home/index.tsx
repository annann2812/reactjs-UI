import Advertisement from "../../components/Advertisement";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Offers from "../../components/Offers";
import TopSellers from "../../components/TopSellers";
import Tutorials from "../../components/Tutorials";
import Header from "../../components/Header";
import AdsBar from "../../components/AdsBar";

const Home = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<AdsBar />
			<Categories />
			<Offers />
			<Advertisement />
			<TopSellers />
			<Tutorials />
			<Footer />
		</div>
	);
};

export default Home;
