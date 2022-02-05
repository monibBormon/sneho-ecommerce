import Image from "next/image";

const ProductBundle = () => {
    return (
        <div className='bg-gray-100'>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <h2 className='mb-5 text-3xl hidden lg:block'>Sneho Bundle Box</h2>
                <div className="lg:grid hidden grid-cols-4 gap-4 bg-white lg:py-8 py-0">
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/female-care.png"
                            alt="product"
                            width='80'
                            height='70'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>female care</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/female-care.png"
                            alt="product"
                            width='80'
                            height='70'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>female care</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/female-care.png"
                            alt="product"
                            width='80'
                            height='70'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>female care</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/female-care.png"
                            alt="product"
                            width='80'
                            height='70'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>female care</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                    <div className="single-product-box flex items-center px-8 py-3">
                        <Image
                            src="/images/winter-box.png"
                            alt="product"
                            width='80'
                            height='80'
                        />
                        <div className="product-text ml-5">
                            <h4 className='capitalize'>sneho winter box</h4>
                            <h5>10 product</h5>
                        </div>
                    </div>
                </div>
                <h2 className='mb-5 text-3xl mt-5 lg:mt-16 capitalize'>unbeatable offers</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="unbeatable-offer-box">
                        <Image
                            src="/images/offers/offer1.jpg"
                            alt="offer"
                            width='630'
                            height='250'
                        />
                    </div>
                    <div className="unbeatable-offer-box">
                        <Image
                            src="/images/offers/offer2.jpg"
                            alt="offer"
                            width='630'
                            height='250'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBundle;