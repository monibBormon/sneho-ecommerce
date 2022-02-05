import Image from "next/image";


const NewBlogs = () => {
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="single-blog bg-white shadow">
                        <div className="blog-image">
                            <img src="./images/blogs/blog1.jpg" alt="blog" />
                            <span className='bg-slate-400 p-1 text-white'>হেয়ার কাট</span>
                        </div>
                        <div className="blog-text p-2">
                            <h3 className='text-lg lg:text-xl font-semibold mb-3'>ফেস শেইপ অনুযায়ী বেছে নিন পারফেক্ট হেয়ার কাট ও স্টাইল</h3>
                            <p className=''>হেয়ার প্রবলেমের সলিউশন বা হেয়ার কালার টিপস নিয়ে আলোচন করি। এবারের টপিকটা একটু ভিন্ন। পারফেক্ট হেয়ার স্টাইল ছাড়া আপনার ওভারঅল লুকটা ইনকমপ্লিট।</p>
                        </div>
                    </div>
                    <div className="single-blog bg-white shadow">
                        <div className="blog-image">
                            <img src="./images/blogs/blog2.jpg" alt="blog" />
                            <span className='bg-slate-400 p-1 text-white'>নেইলস</span>
                        </div>
                        <div className="blog-text p-2">
                            <h3 className='text-lg lg:text-xl font-semibold mb-3'>নেইল আর্ট করুন মাত্র ২টি রুলস দিয়ে</h3>
                            <p className=''>পলিশ দিতে সবার ভালো লাগে। আর এই নেইল পলিশ দিতেই যদি ঘরের কয়েকটা জিনিস ব্যবহার করে নখের সাজে একটু ভিন্নতা আনা যায়, তাহলে তো ভালোই হয় তাই না?</p>
                        </div>
                    </div>
                    <div className="single-blog bg-white shadow">
                        <div className="blog-image">
                            <img src="./images/blogs/blog3.jpg" alt="blog" />
                            <span className='bg-slate-400 p-1 text-white'>হেয়ার কাট</span>
                        </div>
                        <div className="blog-text p-2">
                            <h3 className='text-lg lg:text-xl font-semibold mb-3'>নানা রঙের হেয়ার এক্সেসরিজ দিয়ে হেয়ার স্টাইল</h3>
                            <p className=''>হেয়ার প্রবলেমের সলিউশন বা হেয়ার কালার টিপস নিয়ে আলোচন করি। এবারের টপিকটা একটু ভিন্ন। পারফেক্ট হেয়ার স্টাইল ছাড়া আপনার ওভারঅল লুকটা ইনকমপ্লিট।</p>
                        </div>
                    </div>
                    <div className="single-blog bg-white shadow">
                        <div className="blog-image">
                            <img src="./images/blogs/blog4.jpg" alt="blog" />
                            <span className='p-1 bg-slate-400 text-white'>হেয়ার কাট</span>
                        </div>
                        <div className="blog-text p-2">
                            <h3 className='text-lg lg:text-xl font-semibold mb-3'>ভ্যালেন্টাইন ডে ও ফাল্গুনে নতুন হেয়ার স্টাইল</h3>
                            <p className=''>হেয়ার প্রবলেমের সলিউশন বা হেয়ার কালার টিপস নিয়ে আলোচন করি। এবারের টপিকটা একটু ভিন্ন। পারফেক্ট হেয়ার স্টাইল ছাড়া আপনার ওভারঅল লুকটা ইনকমপ্লিট।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewBlogs;