import Image from 'next/image';

export default function Topbar() {

return (
    <header className="flex justify-between items-center w-full h-12 bg-lavender-light relative z-10 px-2 shadow-md">
        <Image 
                                    src="/calpaltextlogo.png" 
                                    alt="CalPal Logo" 
                                    width={125} 
                                    height={125} 
                                    priority 
                                    />
    </header>
    )
};
