import Image from "next/image";

const NewProduct = () => {
    return (
        <div>
            <div className="container mx-auto pt-8 pb-10 px-5 lg:px-0">
                <h2 className='text-4xl py-5'>New Arribal Product</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="single-product bg-white">
                        <Image
                            src="/images/newArribal/teddy.jpg"
                            alt="product"
                            width='300'
                            height='305'
                        />
                        <div className="product-text p-5">
                            <h3 className='text-xl'>Extra large teddy bear</h3>
                            <h4>3 feet</h4>
                            <div className="product-price mt-3 block lg:flex justify-between">
                                <span className='text-orange-400 text-lg lg:text-2xl font-semibold mr-2 lg:mr-0'>$ 5000</span>
                                <span className='text-lg lg:text-xl line-through mr-2 lg:mr-0'>$5000</span>
                                <span className='capitalize bg-orange-400 text-white text-lg lg:text-xl italic font-semibold p-1 lg:px-5 rounded-l-full rounded-br-full'>new</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product bg-white">
                        <Image
                            src="/images/newArribal/teddy.jpg"
                            alt="product"
                            width='300'
                            height='305'
                        />
                        <div className="product-text p-5">
                            <h3 className='text-xl'>Extra large teddy bear</h3>
                            <h4>3 feet</h4>
                            <div className="product-price mt-3 block lg:flex justify-between">
                                <span className='text-orange-400 text-lg lg:text-2xl font-semibold mr-2 lg:mr-0'>$ 5000</span>
                                <span className='text-lg lg:text-xl line-through mr-2 lg:mr-0'>$5000</span>
                                <span className='capitalize bg-orange-400 text-white text-lg lg:text-xl italic font-semibold p-1 lg:px-5 rounded-l-full rounded-br-full'>new</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product bg-white">
                        <Image
                            src="/images/newArribal/teddy.jpg"
                            alt="product"
                            width='300'
                            height='305'
                        />
                        <div className="product-text p-5">
                            <h3 className='text-xl'>Extra large teddy bear</h3>
                            <h4>3 feet</h4>
                            <div className="product-price mt-3 block lg:flex justify-between">
                                <span className='text-orange-400 text-lg lg:text-2xl font-semibold mr-2 lg:mr-0'>$ 5000</span>
                                <span className='text-lg lg:text-xl line-through mr-2 lg:mr-0'>$5000</span>
                                <span className='capitalize bg-orange-400 text-white text-lg lg:text-xl italic font-semibold p-1 lg:px-5 rounded-l-full rounded-br-full'>new</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product bg-white">
                        <Image
                            src="/images/newArribal/teddy.jpg"
                            alt="product"
                            width='300'
                            height='305'
                        />
                        <div className="product-text p-5">
                            <h3 className='text-xl'>Extra large teddy bear</h3>
                            <h4>3 feet</h4>
                            <div className="product-price mt-3 block lg:flex justify-between">
                                <span className='text-orange-400 text-lg lg:text-2xl font-semibold mr-2 lg:mr-0'>$ 5000</span>
                                <span className='text-lg lg:text-xl line-through mr-2 lg:mr-0'>$5000</span>
                                <span className='capitalize bg-orange-400 text-white text-lg lg:text-xl italic font-semibold p-1 lg:px-5 rounded-l-full rounded-br-full'>new</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;