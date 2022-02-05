import Image from "next/image";


const TodayDeal = () => {
    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='bg-white px-5 py-3 today-deal-box'>
                        <div>
                            <h3 className='capitalize text-2xl'>todays deal</h3>
                            <span className="deal-percent bg-orange-400 p-1 text-white font-semibold">-40%</span>
                            <Image
                                src="/images/newArribal/slidenew.jpg"
                                alt="product"
                                width='300'
                                height='300'
                                className="mx-auto"
                            />
                        </div>
                        <div className="today-deal-text mt-5">
                            <p className='text-orange-400 font-semibold'>Estimated delivery 3-5 days</p>
                            <div className="deal-meta flex justify-between">
                                <div className="meta-left">
                                    <h3 className='text-lg text-gray-500'>Categories Name</h3>
                                    <h4 className='text-xl'>Extra large teddy bear <br /> <span>3 feet</span></h4>
                                    <p className='text-sm mt-3'>Available: 6</p>
                                </div>
                                <div className="meta-right text-right flex flex-col justify-end">
                                    <h4 className='line-through'>$5000</h4>
                                    <h4 className='text-2xl text-orange-400 font-semibold'>$5000</h4>
                                    <p className='text-sm mt-3'>Already sold: 40</p>
                                </div>
                            </div>
                            <div className="deal-timer flex justify-between items-center mt-5">
                                <div className="timer-text">
                                    <h4 className='text-2xl text-orange-400'>Hurry Up</h4>
                                    <p>Offer end in:</p>
                                </div>
                                <div className="timer-btn">
                                    <button className='bg-orange-400 text-white font-semibold p-1 rounded text-xl mr-2'>05.</button>
                                    <button className='bg-orange-400 text-white font-semibold p-1 rounded text-xl mr-2'>06.</button>
                                    <button className='bg-orange-400 text-white font-semibold p-1 rounded text-xl mr-2'>45.</button>
                                    <button className='bg-orange-400 text-white font-semibold p-1 rounded text-xl mr-2'>33.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-white">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending1.png"
                                    alt="product"
                                    width='110'
                                    height='80'
                                />
                                <div className="deal-text mt-1">
                                    <h3 className='text-left'>Extra large teddy bear <br /> 3 feet</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending2.png"
                                    alt="product"
                                    width='110'
                                    height='80'
                                />
                                <div className="deal-text mt-5">
                                    <h3>Building blocks</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending3.png"
                                    alt="product"
                                    width='110'
                                    height='80'
                                />
                                <div className="deal-text mt-5">
                                    <h3>Building blocks</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending4.png"
                                    alt="product"
                                    width='110'
                                    height='85'
                                />
                                <div className="deal-text mt-5">
                                    <h3>Baby warn cloths</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending5.png"
                                    alt="product"
                                    width='110'
                                    height='80'
                                />
                                <div className="deal-text mt-5">
                                    <h3>New care baby diaper pant</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending6.png"
                                    alt="product"
                                    width='100'
                                    height='90'
                                />
                                <div className="deal-text mt-1">
                                    <h3>Baby winter cap (Bunny SS)</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending1.png"
                                    alt="product"
                                    width='110'
                                    height='80'
                                />
                                <div className="deal-text mt-1">
                                    <h3 className='text-left'>Extra large teddy bear <br /> 3 feet</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-deal bg-white p-5 text-center mb-10">
                                <Image
                                    src="/images/trending/trending2.png"
                                    alt="product"
                                    width='110'
                                    height='80'
                                />
                                <div className="deal-text mt-5">
                                    <h3>Building blocks</h3>
                                    <div className="deal-price mt-2">
                                        <span className='mr-8 text-orange-400 text-xl font-semibold'>$5,000</span>
                                        <span className='line-through'>$5,500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayDeal;