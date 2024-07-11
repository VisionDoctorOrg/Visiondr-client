import React from 'react'
import Navbar from './Navbar'
import './Hero.css'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
const Hero = () => {
  return (
    <div className='min-h-screen hero-bg pt-10 text-white'>
        <Navbar/>
        <section className='flex flex-col items-center justify-center text-white w-[60%] mx-auto min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='font-medium text-7xl'>See Clearly, Live Fully!</h1>
            <p className='text-center text-lg text-slate-300 mt-10'>Enjoy a clearer view of your world with VisionDR. With our exclusive offerings for your optimal eye health, we will take you on your personalized eye health journey through eye health education, online eye care and services.  </p>
            <div className='mt-20 flex gap-5'>
                <Button className={cn('px-28 py-6 border-2 border-white bg-transparent hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all')}>Join the Waitlist</Button>
                <Button className={cn('px-28 py-6 border-2 border-white bg-transparent hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all')}>Get Eye Care Tips</Button>
            </div>

            </div>
        </section>
    </div>
  )
}

export default Hero