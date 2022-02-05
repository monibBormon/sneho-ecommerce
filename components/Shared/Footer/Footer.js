import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'

const Footer = () => {
    return (
        <div className='py-10'>
            <FooterTop />
            <FooterMiddle />

            <p className='text-center pt-8'>&copy; 2022 Sneho.com.bd | All right reserved.</p>
        </div>
    );
};

export default Footer;