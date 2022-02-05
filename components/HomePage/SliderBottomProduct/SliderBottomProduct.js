import Image from "next/image";


const SliderBottomProduct = () => {
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="baby-box flex items-center">
                        <Image
                            src="/images/diaper.png"
                            alt="product"
                            width='32'
                            height='55'
                        />
                        <div className="slider-text ml-3">
                            <h4>Thai pant diaper</h4>
                            <button>Shop now <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                    <div className="baby-box flex items-center">
                        <Image
                            src="/images/feeding.png"
                            alt="product"
                            width='50'
                            height='55'
                        />
                        <div className="slider-text ml-3">
                            <h4>Toggi feeding bootle</h4>
                            <button>Shop now <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                    <div className="baby-box flex items-center">
                        <Image
                            src="/images/diaper.png"
                            alt="product"
                            width='32'
                            height='55'
                        />
                        <div className="slider-text ml-3">
                            <h4>Thai pant diaper</h4>
                            <button>Shop now <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                    <div className="baby-box flex items-center">
                        <Image
                            src="/images/feeding.png"
                            alt="product"
                            width='50'
                            height='55'
                        />
                        <div className="slider-text ml-3">
                            <h4>Toggi feeding bootle</h4>
                            <button>Shop now <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                    <div className="baby-box flex items-center">
                        <Image
                            src="/images/diaper.png"
                            alt="product"
                            width='32'
                            height='55'
                        />
                        <div className="slider-text ml-3">
                            <h4>Thai pant diaper</h4>
                            <button>Shop now <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                    <div className="baby-box flex items-center">
                        <Image
                            src="/images/feeding.png"
                            alt="product"
                            width='50'
                            height='55'
                        />
                        <div className="slider-text ml-3">
                            <h4>Toggi feeding bootle</h4>
                            <button>Shop now <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBottomProduct;