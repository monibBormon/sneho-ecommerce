import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        pauseOnHover: false,
    };
    return (
        <div className='bg-gray-100 slider'>
            <div className="container mx-auto px-5 lg:px-0 py-5 lg:py-0">
                <Slider {...settings}>
                    <div className="slider">
                        <Image
                            src="/images/slider/slide1.jpg"
                            alt="slider"
                            width='1280'
                            height='520'
                        />
                    </div>
                    <div className="slider">
                        <Image
                            src="/images/slider/slide1.jpg"
                            alt="slider"
                            width='1280'
                            height='520'
                        />
                    </div>
                    <div className="slider">
                        <Image
                            src="/images/slider/slide1.jpg"
                            alt="slider"
                            width='1280'
                            height='520'
                        />
                    </div>
                </Slider>

            </div>
        </div>
    );
};

export default Sliders;