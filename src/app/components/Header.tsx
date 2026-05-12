import { ShoppingBasket } from 'lucide-react';

export default function Header(){
    return(
        <div className="fixed bg-white rounded-4xl h-14 w-4/6 left-1/2 translate-x-[-50%] mt-2 flex items-center justify-between px-8 font-(family-name:--font-bungee) text-black italic text-xl gap-24">
            <p className="">MURILO.<br /><span className="text-red-800">DEV</span></p>
            <nav className='flex gap-12 ml-auto'>
                <a className='transition-all hover:scale-115 hover:link-shadow ease-in-out cursor-pointer' href={'./'}>Home</a>
                <a className='transition-all hover:scale-115 hover:link-shadow ease-in-out cursor-pointer' href={'./'}>Projects</a>
                <a className='transition-all hover:scale-115 hover:link-shadow ease-in-out cursor-pointer' href={'./'}>Products</a>
                <a className='transition-all hover:scale-115 hover:link-shadow ease-in-out cursor-pointer' href={'./'}>About me</a>
                <a className='transition-all hover:scale-115 hover:link-shadow ease-in-out cursor-pointer' href={'./'}>Skills</a>
                <a className='transition-all hover:scale-115 hover:link-shadow ease-in-out cursor-pointer' href={'./'}>Contact</a>
            </nav>
            <div className='ml-auto relative cursor-pointer transition-all hover:scale-115 ease-in-out'>
                <ShoppingBasket className='w-10 h-10'/>
                <div className='absolute rounded-full bg-rose-800 text-white text-xs font-extralight bottom-0 right-0 w-4 h-4 flex items-center justify-center translate-x-1/2'>
                    2
                </div>
            </div>
        </div>
    );
}