import Image from "next/image";


const NewProductBanner = () => {
    return (
        <div>
            <div className="container mx-auto py-5 px-5 lg:px-0">
                <div className="lg:grid hidden grid-cols-2 gap-4">
                    <div className="product-banner">
                        <Image
                            src="/images/newArribal/banner2.jpg"
                            alt="product"
                            width='630'
                            height='290'
                        />
                    </div>
                    <div className="product-banner">
                        <Image
                            src="/images/newArribal/banner3.jpg"
                            alt="product"
                            width='630'
                            height='290'
                        />
                    </div>
                </div>

                {/* offers  */}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
                    <div className="offer-box bg-white shadow">
                        <Image
                            src="/images/newArribal/offer4.png"
                            alt="product"
                            width='308'
                            height='308'
                        />
                        <div className="offer-text py-3 px-2">
                            <h3 className='capitalize text-gray-600 text-xl'>Baby diaper upto 40% off</h3>
                            <div className='flex justify-between mt-2'>
                                <span className='text-gray-500'>diaper</span>
                                <span className='text-right text-orange-400'>End in: 2h 4h</span>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box bg-white shadow">
                        <Image
                            src="/images/newArribal/offer1.jpg"
                            alt="product"
                            width='308'
                            height='308'
                        />
                        <div className="offer-text py-3 px-2">
                            <h3 className='capitalize text-gray-600 text-xl'>Kids toy upto 50% off</h3>
                            <div className='flex justify-between mt-2'>
                                <span className='text-gray-500'>toys</span>
                                <span className='text-right text-orange-400'>End in: 2h 4h</span>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box bg-white shadow">
                        <Image
                            src="/images/newArribal/offer2.jpg"
                            alt="product"
                            width='308'
                            height='308'
                        />
                        <div className="offer-text py-3 px-2">
                            <h3 className='capitalize text-gray-600 text-xl'>Baby cream</h3>
                            <div className='flex justify-between mt-2'>
                                <span className='text-gray-500'>baby care</span>
                                <span className='text-right text-orange-400'>End in: 2h 4h</span>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box bg-white shadow">
                        <Image
                            src="/images/newArribal/offer3.jpg"
                            alt="product"
                            width='308'
                            height='308'
                        />
                        <div className="offer-text py-3 px-2">
                            <h3 className='capitalize text-gray-600 text-xl'>Horlicks 335tk</h3>
                            <div className='flex justify-between mt-2'>
                                <span className='text-gray-500'>baby food</span>
                                <span className='text-right text-orange-400'>End in: 2h 4h</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewProductBanner;