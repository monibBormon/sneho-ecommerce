import Image from "next/image";


const QrScannerBanner = () => {
    return (
        <div>
            <div className="container mx-auto mt-20">
                <div className="scanner">
                    <Image
                        src="/images/newArribal/scanner.jpg"
                        alt="product"
                        width='1280'
                        height='265'
                    />
                </div>
            </div>
        </div>
    );
};

export default QrScannerBanner;