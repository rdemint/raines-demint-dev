import Image from 'next/image'

export default function Hero() {
    return (
                <div className='w-full h-96 bg-hero-pattern bg-cover bg-center flex justify-center items-center'>
                <div className='flex flex-col h-96 w-full justify-center items-center space-y-4'>
                    <h1 className='text-center text-5xl text-night-50'>raines demint</h1>
                    <h2 className='text-center text-xl text-night-200 tracking-tight'>developer portfolio site</h2>
                </div>
                </div>
)
}