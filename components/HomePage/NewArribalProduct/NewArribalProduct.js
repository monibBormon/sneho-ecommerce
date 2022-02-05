import NewProduct from './NewProduct';
import NewProductBanner from './NewProductBanner';
import TodayDeal from './TodayDeal';
import ProductForYou from './ProductForYou';
import QrScannerBanner from './QrScannerBanner';
import NewBlogs from './NewBlogs';



const NewArribalProduct = () => {
    return (
        <div className='py-5 lg:py-14 bg-gray-100'>

            {/* banner  */}

            <div className="banner hidden lg:block" style={{ backgroundImage: "url(./images/newArribal/banner.jpg)", height: "250px", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}></div>

            <NewProduct/>
            <NewProductBanner/>
            <TodayDeal/>
            <ProductForYou/>
            <QrScannerBanner/>
            <NewBlogs/>


        </div>
    );
};

export default NewArribalProduct;