import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes, faAngleRight, faSearch, faUser, faShoppingCart, faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Header = () => {
    const [show, setShow] = useState(false)

    const handleMobileMenu = () => {
        setShow(true)
    }
    const closeMenu = () => {
        setShow(false)
    }


    /* const handleMobileMenu = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mobile Menu is under Construction'
        })
    } */
    return (
        <div>
            <div className="mobile-menu px-5 lg:px-0 flex justify-around py-4 md:hidden">
                <div className="icon w-5">
                    {
                        show === true ? <FontAwesomeIcon onClick={closeMenu} icon={faTimes} /> : <FontAwesomeIcon onClick={handleMobileMenu} icon={faBars} />
                    }
                    {
                        show === true && <div className='showMenu'>
                            <ul>
                                <li>all Categories</li>
                                <li>Baby care</li>
                                <li>child care</li>
                                <li>shop</li>
                                <li>baby collection</li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="search-mobile">
                    <input className='focus:outline-none border-2 h-10 pl-2 rounded' type="text" placeholder='What are you looking?' />
                    <button className='-ml-5'><i className="fas fa-search"></i></button>
                </div>
                <div className="cart w-5">
                    <FontAwesomeIcon className='inline-block' icon={faCartPlus} />
                </div>
            </div>
            <div className='px-5 block md:hidden lg:px-0 bg-yellow-300 py-3'>
                <button className='capitalize border-2 border-black px-1 font-semibold rounded-l-full rounded-br-full'>express</button> <span className='bg-yellow-100 uppercase px-2 py-1 font-semibold rounded mx-3'>Free delivery</span> <span>on all express items</span>
            </div>
            <div className="header-top hidden md:block bg-gray-100 py-2">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="top-menu">
                        <ul className='flex justify-end'>
                            <li>Track Order</li>
                            <li>Need help</li>
                            <li>Select location</li>
                            <li>Customer Care</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-middle hidden md:block">
                <div className="container mx-auto py-6 px-5 lg:px-0">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2 col-span-1 flex justify-between items-center">
                            <div className="logo">
                                <img className='w-40 lg:w-48' src="./images/logo.png" alt="logo" />
                            </div>
                            <div className="search-box w-2/3 lg:flex hidden">
                                <input className='border-2 border-orange-400 w-full h-12 focus:outline-none pl-3 rounded border-r-0' type="text" />
                                <button className='text-orange-400 border-2 border-orange-400  px-3 rounded -ml-2 rounded-l-none'><FontAwesomeIcon className='w-5 inline-block' icon={faSearch} /></button>
                            </div>
                        </div>
                        <div className='flex justify-evenly'>
                            <div className="sign-in flex items-center">
                                <FontAwesomeIcon className='w-8 inline-block mr-3' icon={faUser} />
                                <div className="sing-in-text border-l-2 pl-1 border-gray-200">
                                    <span className='capitalize font-semibold'>sign in</span> <br />
                                    <span>to free</span>
                                </div>
                            </div>
                            <div className="header-cart flex items-center">
                                <FontAwesomeIcon className='w-8 inline-block mr-3' icon={faShoppingCart} />
                                <div className="sing-in-text border-l-2 pl-1 border-gray-200">
                                    <span className='capitalize font-semibold'>$550.00</span> <br />
                                    <span>2 items</span>
                                </div>
                            </div>
                            <button className='bg-orange-400 text-white font-semibold rounded px-3'>Create Package</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom hidden md:block bg-orange-400 py-3">
                <div className="container mx-auto">
                    <div className="main-menu">
                        <nav>
                            <ul className='text-white'>
                                <li className='all-cat'>All Categories  <FontAwesomeIcon className='w-2 arrowIcon inline-block' icon={faAngleRight} /></li>
                                <li>Mens Care <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>Hair Care <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>Skin Care <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>Diaper <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>feeding <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>baby milk <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>toys <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li>oral care <FontAwesomeIcon className='w-2 inline-block' icon={faAngleDown} /></li>
                                <li className='blogs'>Blogs</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;