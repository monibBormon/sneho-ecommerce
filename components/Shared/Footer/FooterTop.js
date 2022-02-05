

const FooterTop = () => {
    return (
        <div>
            <div className="container mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="top-footer-box p-2 lg:p-10">
                        <h4 className='text-xl'>Contact</h4>
                        <p>Feel free to get touch via phone or send us a messae</p>

                        <div className="contact py-10">
                            <p>+1234 56 7890</p>
                            <p>example@example.com</p>
                        </div>
                        <div className="affiliate">
                            <p>Join our affiliate program</p>
                            <button className='px-10 py-2 bg-orange-400 text-white'>Apply Now</button>
                        </div>
                    </div>
                    <div className="top-footer-box p-2 lg:p-10 flex justify-between">
                        <div className="link-one">
                            <h4 className='text-xl mb-3'>Product</h4>
                            <ul className='mb-3'>
                                <li>Trending</li>
                                <li>My Account</li>
                                <li>vendors</li>
                                <li>brands</li>
                                <li>storefonts</li>
                            </ul>
                            <ul className='mb-3'>
                                <li>Trending</li>
                                <li>My Account</li>
                                <li>vendors</li>
                                <li>brands</li>
                                <li>storefonts</li>
                            </ul>
                        </div>
                        <div className="link-two">
                            <h4 className='text-xl mb-3'>Legals</h4>
                            <ul className='mb-3'>
                                <li>Privacy</li>
                                <li>Policy</li>
                                <li>redund</li>
                                <li>About us</li>
                                <li>contact us</li>
                            </ul>
                            <ul className='mb-3'>
                                <li>Privacy</li>
                                <li>Policy</li>
                                <li>redund</li>
                                <li>About us</li>
                                <li>contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="top-footer-box p-2 lg:p-10">
                        <h4 className='text-xl mb-3'>Like us on facebook</h4>
                        <img src="https://ishadeed.com/assets/fb-login/fb-new-login.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;