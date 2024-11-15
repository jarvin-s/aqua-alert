'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import tree from '../../../public/images/hero/hero-tree.png'
import plant_blob from '../../../public/images/hero/hero-plant-blob.png'
import plant_circle from '../../../public/images/hero/hero-plant-circle.png'
import hero_blob_right from '../../../public/images/shapes/hero-blob-right.svg'
import plant_blob_bg from '../../../public/images/shapes/plant-blob-bg.svg'
import hero_words from '../../../public/images/hero/hero-words.png'
import mobile_app from '../../../public/images/mobile-app.png'
import google_play from '../../../public/images/google-play.svg'
import { Agbalumo } from 'next/font/google'
import { motion, useInView } from 'framer-motion'

const agbalumo = Agbalumo({ weight: '400', subsets: ['latin'] })
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
                className='bg-droplet relative flex min-h-screen max-w-[1920px] flex-col md:flex-row'
            >
                <motion.div
                    className='z-10 mt-20 flex max-w-[570px] flex-col items-center px-2 md:ml-20 md:items-stretch'
                    variants={items_variants}
                >
                    <div className='absolute -left-[504px] top-[78px] z-[-1] blur-[4px]'>
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
                    className='z-10 mt-20 flex w-full justify-center'
                    variants={items_variants}
                >
                    <div className='relative flex flex-col items-center gap-4'>
                        <div className='mobile-gradient absolute h-[400px] w-[400px]'></div>
                        <Image
                            className='animate-small-bounce'
                            src={mobile_app}
                            width={300}
                            alt='Mobile app'
                        />
                        <Image
                            className='cursor-pointer'
                            src={google_play}
                            alt='Google Play'
                        />
                    </div>
                </motion.div>
            </motion.div>
            {/* Hero right */}
            {/* <div className='flex w-full flex-col items-center justify-end md:flex-row md:items-stretch'>
                    <motion.div
                        className='mr-24 mt-20 flex flex-col items-center justify-center gap-14 text-4xl md:items-stretch'
                        variants={items_variants}
                    >
                        <span className='bg-[#0F5E05] px-2 py-1'>
                            <h1 className='font-bold text-white'>Efficiënt</h1>
                        </span>

                        <span className='bg-[#0F5E05] px-2 py-1'>
                            <h1 className='font-bold text-white'>Natuurlijk</h1>
                        </span>
                        <span className='bg-[#0F5E05] px-2 py-1'>
                            <h1 className='font-bold text-white'>
                                Betrouwbaar
                            </h1>
                        </span>
                    </motion.div>
                    <motion.div
                        className='relative mt-10 flex flex-col items-end gap-8'
                        variants={items_variants}
                    >
                        <div className='absolute -right-[200px] -top-[20px] z-[-1] hidden w-[26rem] md:block'>
                            <Image src={hero_blob_right} alt='Hero blob' />
                        </div>
                        <div className='relative z-10 h-48 w-48'>
                            <div className='absolute -bottom-[20px] right-[24px] z-[-1]'>
                                <Image
                                    className='h-[9rem] w-full'
                                    src={plant_blob_bg}
                                    width={0}
                                    alt='Plant blob bg'
                                />
                            </div>
                            <Image
                                className='h-full w-full rounded-lg object-cover'
                                src={plant_blob}
                                alt='Plant blob'
                            />
                        </div>
                        <div className='h-48 w-48'>
                            <Image
                                className='rounded-full border-2 border-[#11350c] object-cover'
                                src={plant_circle}
                                width={0}
                                height={0}
                                alt='Plant circle'
                            />
                        </div>
                    </motion.div>
                </div> */}
            <div className='relative'>
                <div className='rectangle -bottom-[1px] h-[200px] w-full'></div>
            </div>
        </>
    )
}

export default Hero
