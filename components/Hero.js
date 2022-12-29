import Image from 'next/image'

export default function Hero() {
    return (
                <div className='w-full h-96 bg-hero-pattern bg-cover bg-center flex justify-center items-center shadow-sm shadow-alien-200'>
                <div className='flex flex-col h-96 w-full justify-start items-center space-y-4'>
                    <h1 className='text-center text-6xl text-night-50 pt-8 px-4'>
                        <span className='bg-clip-text bg-gradient-to-r from-night-50 to-alien-400 text-transparent'>raines demint</span>
                    </h1>
                    <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-night-300 to-alien-50 text-center text-xl tracking-tight'>developer portfolio site</h2>
                </div>
                </div>
)
}