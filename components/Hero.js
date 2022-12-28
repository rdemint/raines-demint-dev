import Image from 'next/image'

export default function Hero() {
    return (
                <div className='w-full h-96 bg-hero-pattern bg-cover bg-center flex justify-center items-center shadow shadow-[#BEF263]/40'>
                <div className='flex flex-col h-96 w-full justify-center items-center space-y-4'>
                    <h1 className='text-center text-5xl text-night-50'>
                        <span className='bg-clip-text bg-gradient-to-r from-night-50 to-lime-300 text-transparent'>raines demint</span>
                    </h1>
                    <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-night-300 to-night-100 text-center text-xl tracking-tight'>developer portfolio site</h2>
                </div>
                </div>
)
}