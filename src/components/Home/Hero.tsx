'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import tree from '@/images/hero/hero-tree.png'
import mobile_app from '@/images/mobile-app.png'
import google_play from '@/images/google-play.svg'
import apple_store from '@/images/apple-store.svg'
import { Esteban } from 'next/font/google'
import { motion, useInView } from 'framer-motion'

const agbalumo = Esteban({ weight: '400', subsets: ['latin'] })
const Hero = () => {
    const ref = useRef(null)
    // Show animation when element is 50% in view
    const isInView = useInView(ref, { amount: 0.5, once: true })

    const ref2 = useRef(null)
    // Show animation when element is 50% in view
    const isInView2 = useInView(ref2, { amount: 0.5, once: true })

    const visible = { opacity: 1, transition: { duration: 0.85 } }

    const items_variants = {
        hidden: { opacity: 0 },
        visible,
    }

    return (
        <>
            <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                    visible: {
                        transition: {
                            delayChildren: 0.4,
                        },
                    },
                }}
                className='bg-droplet relative flex min-h-screen max-w-[1920px] flex-col pb-40 md:flex-row'
            >
                <motion.div
                    className='z-10 mt-20 flex max-w-[570px] flex-col items-center px-2 md:ml-20 md:items-stretch'
                    variants={items_variants}
                >
                    <div className='absolute -left-[504px] top-[78px] z-[-1] rotate-[4deg] blur-[4px]'>
                        <Image
                            className='w-[46rem] -scale-x-100'
                            src={tree}
                            width={0}
                            height={0}
                            alt='Tree background'
                        />
                    </div>
                    <h1 className='md:tex-left text-center text-4xl text-white'>
                        Nooit meer dorstige planten
                        <span className='lg:whitespace-nowrap'>
                            — wij zorgen voor elke
                        </span>
                        <span className='font-bold text-[#0f5e05]'>
                            {' '}
                            druppel
                        </span>
                        .
                    </h1>
                    <div className='mt-4 flex rounded-md bg-[#0f5e05]'>
                        <p className='px-4 py-4 text-lg text-gray-200'>
                            Bij Aqua Alert zorgen we voor jouw planten met ons
                            automatische bewateringssysteem. Onze{' '}
                            <span className='bg-gradient-to-r from-[#aeff7f] to-[#00ff37] bg-clip-text font-bold text-transparent'>
                                unieke
                            </span>{' '}
                            mobiele app geeft je controle en inzicht, altijd en
                            overal.
                        </p>
                    </div>
                    <div className={`${agbalumo.className} mt-4`}>
                        <a
                            href='/contact'
                            className='rounded-xl bg-[#ff7e28] px-6 py-2 text-xl text-white duration-300 hover:bg-[#fc9958]'
                        >
                            Plan een afspraak
                        </a>
                    </div>
                </motion.div>

                {/* Mobile app section */}
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={{
                        visible: {
                            transition: {
                                delayChildren: 0.75,
                            },
                        },
                    }}
                    className='z-10 mt-20 flex w-full justify-center'
                >
                    <motion.div
                        className='relative flex flex-col items-center gap-4'
                        variants={items_variants}
                    >
                        <div className='mobile-gradient absolute h-[400px] w-[400px]'></div>
                        <Image
                            className='animate-small-bounce'
                            src={mobile_app}
                            width={300}
                            alt='Mobile app'
                        />
                        <div className='flex gap-4'>
                            <Image
                                className='cursor-pointer'
                                src={apple_store}
                                alt='Google Play'
                            />
                            <Image
                                className='cursor-pointer'
                                src={google_play}
                                alt='Google Play'
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className='relative'>
                <div className='absolute -bottom-[1px] w-full'>
                    <svg
                        viewBox='0 0 710 76'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M0 0C273.871 1.26258 425.702 38.5812 710 35.9733V76H0V0Z'
                            fill='#0D214B'
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Hero
