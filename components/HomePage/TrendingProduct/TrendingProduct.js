import Image from "next/image";


const TrendingProduct = () => {
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <h2 className='mb-5 text-3xl'>Trending Products</h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending1.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Extra largge teddy bear <br /> <span>3 feet</span></h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending2.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Building blocks</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending3.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Building blocks</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending4.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Baby warm covers</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending5.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Neo care baby diaper pant</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending6.png"
                            alt="product"
                            width='110'
                            height='85'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Baby winter cap (Bunny SS)</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending2.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Building blocks</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending5.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Neo care baby diaper pant</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending4.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Baby warm covers</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending1.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Extra largge teddy bear <br /> <span>3 feet</span></h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending6.png"
                            alt="product"
                            width='110'
                            height='85'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Baby winter cap (Bunny SS)</h4>
                        </div>
                    </div>
                    <div className="trending-product-box p-3 text-center">
                        <Image
                            src="/images/trending/trending3.png"
                            alt="product"
                            width='110'
                            height='80'
                        />
                        <div className="trending-text">
                            <h4 className='mt-3'>Building blocks</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;