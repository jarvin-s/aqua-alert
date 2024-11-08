import Image from 'next/image'
import React from 'react'
import tree from '../../../public/images/hero-tree.png'
import plant_blob from '../../../public/images/hero-plant-blob.png'
import plant_circle from '../../../public/images/hero-plant-circle.png'
import waves from '../../../public/images/waves.svg'
import { Agbalumo } from 'next/font/google'

const agbalumo = Agbalumo({ weight: '400', subsets: ['latin'] })
const Hero = () => {
    return (
        <>
            <div className='relative flex h-[75vh] w-full flex-col md:flex-row'>
                <div className='z-10 mt-20 flex max-w-[570px] flex-col px-2 md:ml-20'>
                    <h1 className='text-4xl text-white'>
                        Nooit meer dorstige planten — wij zorgen voor elke
                        <span className='font-bold text-[#00F0E4]'>
                            {' '}
                            druppel
                        </span>
                        .
                    </h1>
                    <div className='mt-4 flex rounded-md bg-[#0F5E05BF]'>
                        <p className='py-4 pl-4 text-lg text-gray-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec orci libero, dapibus in posuere sit
                            amet, cursus sed lacus. Suspendisse dictum lorem
                            imperdiet.
                        </p>
                    </div>
                    <div className={`${agbalumo.className} mt-4`}>
                        <a
                            href='/contact'
                            className='rounded-bl-2xl rounded-tr-2xl border-2 border-[#0F5E05] bg-[#0F5E05] px-6 py-2 text-xl text-white duration-300 hover:bg-[#2f8125]'
                        >
                            Schedule
                        </a>
                    </div>
                </div>
                <div className='flex w-full flex-col border-4 md:flex-row'>
                    <div className='relative z-10'>
                        <svg
                            className='absolute left-[13px] top-[56px] z-[-1]'
                            width='220'
                            viewBox='0 0 68 68'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M65.1709 54.2125C54.5935 72.3642 13.016 72.6884 2.68263 54.6177C-7.56936 36.547 13.4228 0.0814557 34.2522 0.000421176C55.0817 -0.161648 75.667 35.9797 65.1709 54.2125Z'
                                fill='#0F5E05'
                            />
                        </svg>
                        <Image
                            className='relative'
                            src={plant_blob}
                            width={200}
                            height={200}
                            alt='Plant blob'
                        />
                        <Image
                            className='rounded-full border-2 border-[#0F5E05]'
                            src={plant_circle}
                            width={250}
                            height={0}
                            alt='Plant circle'
                        />
                    </div>
                </div>
            </div>
            <div className='absolute -left-[504px] top-[78px] blur-[2px]'>
                <Image
                    className='w-[46rem] -scale-x-100'
                    src={tree}
                    width={0}
                    height={0}
                    alt='Tree background'
                />
            </div>
            <div className='bottom-0 left-0 right-0'>
                <Image className='w-full' src={waves} alt='Waves' />
            </div>
        </>
    )
}

export default Hero
