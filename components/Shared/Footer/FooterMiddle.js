import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'


const FooterMiddle = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className="container mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                    <div className="payment-card text-center">
                        <img className='w-16 mr-3 inline-block' src="./images/cards/bkash.jpg" alt="bkash" />
                        <img className='w-12 mr-3 inline-block' src="./images/cards/master.png" alt="" />
                        <img className='w-12 mr-3 inline-block' src="./images/cards/union.png" alt="" />
                        <img className='w-12 mr-3 inline-block' src="./images/cards/visa.png" alt="" />
                        <img className='w-12 mr-3 inline-block' src="./images/cards/american.png" alt="" />
                    </div>
                    <div className="footer-social text-center">
                        <FontAwesomeIcon className='w-8 mr-5 inline-block' icon={faFacebookSquare} />
                        <FontAwesomeIcon className='w-8 mr-5 inline-block' icon={faInstagram} />
                        <FontAwesomeIcon className='w-8 mr-5 inline-block' icon={faYoutube} />
                        <FontAwesomeIcon className='w-8 mr-5 inline-block' icon={faTwitter} />
                    </div>
                    <div className="footer-dev text-center lg:text-left">
                        <p className='text-xl'>Develop & maintaince by <span className='text-orange-400 font-semibold'>Texon Limited</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;