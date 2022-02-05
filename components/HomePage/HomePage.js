import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Sliders from './Sliders/Sliders';
import SliderBottomProduct from './SliderBottomProduct/SliderBottomProduct';
import ProductBundle from './ProductBundle/ProductBundle';
import TrendingProduct from './TrendingProduct/TrendingProduct';
import Offers from './Offers/Offers';
import BestDeal from './BestDeal/BestDeal';
import NewArribalProduct from './NewArribalProduct/NewArribalProduct';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Sliders/>
            <SliderBottomProduct/>
            <ProductBundle/>
            <TrendingProduct/>
            <Offers/>
            <BestDeal/>
            <NewArribalProduct/>
            <Footer/>
        </div>
    );
};

export default HomePage;