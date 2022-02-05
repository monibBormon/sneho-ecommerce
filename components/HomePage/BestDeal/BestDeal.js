import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const BestDeal = () => {
    return (
        <div className='-mt-20'>
            <div className="container mx-auto pt-10 pb-5 lg:pb-20 px-5 lg:px-0">

                {/* best deal timer  */}

                <div className="deal-timer w-full lg:w-2/5 text-center border-2 border-orange-400 px-10 py-5 rounded-lg mx-auto">
                    <button className='bg-orange-400 text-white p-3 font-bold rounded-lg text-4xl mr-3'>05<sub className='-mb-3 text-base font-normal'>d</sub></button>
                    <button className='bg-orange-400 text-white p-3 font-bold rounded-lg text-4xl mr-3'>06<sub className='-mb-3 text-base font-normal'>h</sub></button>
                    <button className='bg-orange-400 text-white p-3 font-bold rounded-lg text-4xl mr-3'>45<sub className='-mb-3 text-base font-normal'>m</sub></button>
                    <button className='bg-orange-400 text-white p-3 font-bold rounded-lg text-4xl mr-3'>33<sub className='-mb-3 text-base font-normal'>s</sub></button>
                </div>

                {/* best deal bg image  */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                    <div className="best-deal-images">
                        <Image
                            src="/images/bestDeal/dealbg1.jpg"
                            alt="offer"
                            width='632'
                            height='150'
                        />
                    </div>
                    <div className="best-deal-images">
                        <Image
                            src="/images/bestDeal/dealbg2.jpg"
                            alt="offer"
                            width='632'
                            height='150'
                        />
                    </div>
                </div>

                {/* best deal products  */}

                <div className="lg:grid hidden grid-cols-3">
                    <div className="single-best-deal p-5 flex items-center border-r-2 border-b-2">
                        <Image
                            src="/images/trending/trending5.png"
                            alt="Picture of the author"
                            width='92'
                            height='59'
                        />
                        <div className="best-deal-text ml-5">
                            <h4 className='text-xl capitalize'>Neo care baby diaper pant</h4>
                            <h5 className='font-semibold'>$ 5,000.00</h5>
                            <div className="best-rating text-yellow-400">
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStarHalfAlt} />
                                <span className='ml-3'>4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-best-deal p-5 flex items-center border-r-2 border-b-2">
                        <Image
                            src="/images/trending/trending4.png"
                            alt="Picture of the author"
                            width='88'
                            height='88'
                        />
                        <div className="best-deal-text ml-5">
                            <h4 className='text-xl capitalize'>Baby warm convers</h4>
                            <h5 className='font-semibold'>$ 5,000.00</h5>
                            <div className="best-rating text-yellow-400">
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStarHalfAlt} />
                                <span className='ml-3'>4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-best-deal p-5 border-b-2 flex items-center">
                        <Image
                            src="/images/trending/trending5.png"
                            alt="Picture of the author"
                            width='92'
                            height='59'
                        />
                        {/* <img src="./images/trending/trending5.png" alt="" /> */}
                        <div className="best-deal-text ml-5">
                            <h4 className='text-xl capitalize'>Extra large tedy bear feet</h4>
                            <h5 className='font-semibold'>$ 5,000.00</h5>
                            <div className="best-rating text-yellow-400">
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStarHalfAlt} />
                                <span className='ml-3'>4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-best-deal p-5 flex items-center border-r-2">
                        <Image
                            src="/images/trending/trending5.png"
                            alt="Picture of the author"
                            width='92'
                            height='59'
                        />
                        <div className="best-deal-text ml-5">
                            <h4 className='text-xl capitalize'>Extra large tedy bear feet</h4>
                            <h5 className='font-semibold'>$ 5,000.00</h5>
                            <div className="best-rating text-yellow-400">
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStarHalfAlt} />
                                <span className='ml-3'>4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-best-deal p-5 flex items-center border-r-2">
                        <Image
                            src="/images/trending/trending5.png"
                            alt="Picture of the author"
                            width='92'
                            height='59'
                        />
                        <div className="best-deal-text ml-5">
                            <h4 className='text-xl capitalize'>Neo care baby diaper pant</h4>
                            <h5 className='font-semibold'>$ 5,000.00</h5>
                            <div className="best-rating text-yellow-400">
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStarHalfAlt} />
                                <span className='ml-3'>4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-best-deal p-5 flex items-center">
                        <Image
                            src="/images/trending/trending4.png"
                            alt="Picture of the author"
                            width='88'
                            height='88'
                        />
                        <div className="best-deal-text ml-5">
                            <h4 className='text-xl capitalize'>Baby warm convers</h4>
                            <h5 className='font-semibold'>$ 5,000.00</h5>
                            <div className="best-rating text-yellow-400">
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStar} />
                                <FontAwesomeIcon className='w-5 inline-block' icon={faStarHalfAlt} />
                                <span className='ml-3'>4.5</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* view more btn  */}
                <div className='text-center hidden lg:block mt-10'>
                    <button className='bg-orange-400 text-white font-semibold px-8 py-2 rounded'>View More</button>
                </div>

            </div>
        </div>
    );
};

export default BestDeal;