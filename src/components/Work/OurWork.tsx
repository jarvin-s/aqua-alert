'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import hero from '@/images/hero/hero-arduino.jpg'
import smart from '@/images/our-work-smart-watering.jpeg'
import smart_monitor from '@/images/our-work-smart-monitoring.jpeg'
import { motion, useInView } from 'framer-motion'
import { Badge } from '../ui/badge'

const OurWork = () => {
    const ref = useRef(null)
    // Show animation when element is 30% in view
    const isInView = useInView(ref, { amount: 0.3, once: true })

    const ref2 = useRef(null)
    // Show animation when element is 30% in view
    const isInView2 = useInView(ref2, { amount: 0.3, once: true })

    const visible = { opacity: 1, y: 0, transition: { duration: 0.85 } }

    const items_variants = {
        hidden: { opacity: 0, y: 10 },
        visible,
    }

    return (
        <>
            {/* Hero */}
            <div className='relative mt-10 pb-96'>
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
                    className='flex justify-center'
                >
                    <motion.div
                        className='flex flex-col items-center text-center'
                        variants={items_variants}
                    >
                        <h1 className='text-center text-7xl text-white md:text-left md:text-8xl'>
                            Ons{' '}
                            <span className='font-bold text-[#0F5E05]'>
                                werk
                            </span>
                            .
                        </h1>
                        <p className='text-md mt-4 max-w-[34rem] text-white'>
                            Het werk wat wij doen als Aqua Alert richt zich op
                            het creëren van innovatieve en duurzame oplossingen
                            voor plantenverzorging.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='mt-10'
                    initial='hidden'
                    animate='visible'
                    variants={{
                        visible: {
                            transition: {
                                delayChildren: 0.6,
                            },
                        },
                    }}
                >
                    <motion.div
                        className='flex flex-col items-center justify-center gap-10 px-4 md:flex-row md:items-stretch md:px-0'
                        variants={items_variants}
                    >
                        <Image
                            className='rounded-2xl'
                            src={hero}
                            width={850}
                            height={0}
                            alt='Hero 1'
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Section 1 */}
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? 'visible' : ''}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
                className='relative my-24 h-[60vh] bg-[#e0e0e275] px-4 text-black'
            >
                <motion.section
                    className='flex flex-col-reverse items-center justify-center md:flex-row'
                    variants={items_variants}
                >
                    <div className='relative mt-4 flex max-w-xl flex-col space-y-4 rounded-2xl bg-[#0F5E05] px-6 py-6 text-white md:-mt-[11rem] md:mr-20'>
                        <h1 className='text-center text-4xl font-bold md:text-left'>
                            Slim waterbeheer systeem
                        </h1>
                        <div className='flex justify-center gap-2 md:justify-start'>
                            <Badge className='bg-[#77b255] text-white hover:bg-[#8bcf63]'>
                                Natuurvriendelijk
                            </Badge>

                            <Badge className='bg-[#ff7e28] text-white hover:bg-[#fd8d42]'>
                                Efficiënt
                            </Badge>
                        </div>
                        <p className='text-center md:text-left'>
                            Onze automatische wateringssystemen zijn ontworpen
                            om efficiënt water te gebruiken, waardoor je planten
                            altijd de juiste hoeveelheid water krijgen.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                            <a
                                href='#'
                                className='rounded-lg bg-[#77b255] px-4 py-2 duration-300 hover:bg-[#8bcf63]'
                            >
                                Lees meer
                            </a>
                        </div>
                    </div>
                    <div className='relative -mt-[11rem]'>
                        {/* <div className='section-gradient absolute -left-[250px] -top-[150px] z-[-1] h-[800px] w-[2200px] border-4'></div> */}
                        <Image
                            className='rounded-lg'
                            src={smart}
                            width={850}
                            height={0}
                            alt='Test image'
                        />
                    </div>
                </motion.section>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                ref={ref2}
                initial='hidden'
                animate={isInView2 ? 'visible' : ''}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
                className='my-24 mb-96 h-[50vh] px-4'
            >
                <motion.section
                    className='flex flex-col items-center justify-center md:flex-row'
                    variants={items_variants}
                >
                    <div>
                        <Image
                            className='rounded-lg'
                            src={smart_monitor}
                            width={850}
                            height={0}
                            alt='Test image 2'
                        />
                    </div>
                    <div className='ml-0 mt-4 flex max-w-xl flex-col space-y-4 rounded-2xl bg-[#0F5E05] px-6 py-6 text-white md:ml-20'>
                        <h1 className='mb-[.5rem] text-center text-4xl font-bold md:text-left'>
                            Smart plant monitoring
                        </h1>
                        <div className='flex justify-center gap-2 md:justify-start'>
                            <Badge className='bg-[#77b255] text-white hover:bg-[#8bcf63]'>
                                Duurzaam
                            </Badge>

                            <Badge className='bg-[#285aff] text-white hover:bg-[#3d65e7]'>
                                Innovatief
                            </Badge>
                        </div>
                        <p className='text-center md:text-left'>
                            Onze smart plant monitor is ontworpen om je planten
                            optimaal te verzorgen door real-time gegevens te
                            verzamelen over hun gezondheid, zoals vochtigheid en
                            licht, zodat je altijd weet wanneer ze extra zorg
                            nodig hebben.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                            <a
                                href='#'
                                className='rounded-lg bg-[#77b255] px-4 py-2 duration-300 hover:bg-[#8bcf63]'
                            >
                                Lees meer
                            </a>
                        </div>
                    </div>
                </motion.section>
            </motion.div>
        </>
    )
}

export default OurWork
