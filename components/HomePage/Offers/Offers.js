import Image from "next/image";


const Offers = () => {
    return (
        <div className='bg-gray-100'>
            <div className="container mx-auto pt-10 pb-20 px-5 lg:px-0">
                <h2 className='my-3 text-3xl'>Unbeatable offers</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="offer-box bg-white shadow">
                        <Image
                            src="/images/offers/offer3.jpg"
                            alt="offer"
                            width='416'
                            height='280'
                        />
                        <div className="offer-text py-3 px-5">
                            <h3 className='capitalize text-gray-600 text-xl'>Friday big sell on t-shirt</h3>
                            <div className='flex justify-between'>
                                <span className='text-gray-500'>baby care,mans care & more</span>
                                <span className='text-right text-orange-400'>End in: 4h 4h</span>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box bg-white shadow">
                        <Image
                            src="/images/offers/offer4.jpg"
                            alt="offer"
                            width='416'
                            height='280'
                        />
                        <div className="offer-text py-3 px-5">
                            <h3 className='capitalize text-gray-600 text-xl'>Today flash sell on t-shirt</h3>
                            <div className='flex justify-between'>
                                <span className='text-gray-500'>baby care,mans care & more</span>
                                <span className='text-right text-orange-400'>End in: 4h 4h</span>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box hidden lg:block bg-white shadow">
                        <Image
                            src="/images/offers/offer5.jpg"
                            alt="offer"
                            width='416'
                            height='280'
                        />
                        <div className="offer-text py-3 px-5">
                            <h3 className='capitalize text-gray-600 text-xl'>Diaper Sell</h3>
                            <div className='flex justify-between'>
                                <span className='text-gray-500'>baby care,mans care & more</span>
                                <span className='text-right text-orange-400'>End in: 4h 4h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;