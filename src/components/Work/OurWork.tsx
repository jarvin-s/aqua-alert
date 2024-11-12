'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import hero from '../../../public/images/hero-1.png'
import hero2 from '../../../public/images/hero-2.png'
import hero_bg from '../../../public/images/droplets.png'
import { motion, useInView } from 'framer-motion'
import { relative } from 'path'
import { Badge } from '../ui/badge'

const OurWork = () => {
    const ref = useRef(null)
    // Show animation when element is 50% in view
    const isInView = useInView(ref, { amount: 0.5, once: true })

    const ref2 = useRef(null)
    // Show animation when element is 50% in view
    const isInView2 = useInView(ref2, { amount: 0.5, once: true })

    const visible = { opacity: 1, y: 0, transition: { duration: 0.85 } }

    const items_variants = {
        hidden: { opacity: 0, y: 10 },
        visible,
    }

    return (
        <>
            {/* Hero */}
            <div className='bg-droplets relative mt-10 pb-96'>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className='flex justify-center'
                >
                    <motion.h1
                        variants={items_variants}
                        className='text-center text-7xl text-white md:text-left md:text-8xl'
                    >
                        Ons{' '}
                        <span className='font-bold text-[#0F5E05]'>werk</span>.
                    </motion.h1>
                </motion.div>

                <motion.div
                    className='mt-20'
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
                            width={0}
                            height={0}
                            alt='Hero 1'
                        />
                        <Image
                            className='w-full rounded-2xl md:w-80'
                            src={hero2}
                            width={0}
                            height={0}
                            alt='Hero 2'
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
                className='relative my-20 h-[60vh] bg-[#e0e0e275] px-4 text-black'
            >
                <motion.section
                    className='flex flex-col-reverse items-center justify-center md:flex-row'
                    variants={items_variants}
                >
                    <div className='relative mt-4 flex max-w-xl flex-col space-y-4 rounded-2xl bg-[#0F5E05] px-4 py-4 text-white md:-mt-[11rem] md:mr-20'>
                        <h1 className='text-4xl font-bold'>Lorem ipsum</h1>
                        <div className='flex gap-2'>
                            <Badge className='bg-[#77b255] text-white hover:bg-[#8bcf63]'>
                                Natuurvriendelijk
                            </Badge>

                            <Badge className='bg-[#ff7e28] text-white hover:bg-[#fd8d42]'>
                                Efficiënt
                            </Badge>
                        </div>
                        <p>
                            Et aliquip non incididunt enim sit incididunt nisi
                            mollit ad proident nostrud. Commodo excepteur ut
                            eiusmod et dolor incididunt non ullamco. Ad enim est
                            elit non Lorem aliquip enim aliquip consectetur aute
                            deserunt sint nisi.
                        </p>
                        <div className='flex'>
                            <a
                                href='#'
                                className='rounded-lg bg-[#77b255] px-4 py-2 duration-300 hover:bg-[#8bcf63]'
                            >
                                Lees meer
                            </a>
                        </div>
                    </div>
                    <div className='relative -mt-[11rem]'>
                        <Image
                            className='rounded-lg'
                            src={hero}
                            width={750}
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
                className='my-20 h-[50vh] px-4'
            >
                <motion.section
                    className='flex flex-col items-center justify-center md:flex-row'
                    variants={items_variants}
                >
                    <div>
                        <Image
                            className='rounded-lg'
                            src={hero}
                            width={750}
                            height={0}
                            alt='Test image 2'
                        />
                    </div>
                    <div className='ml-20 mt-4 flex max-w-xl flex-col space-y-4 rounded-2xl bg-[#0F5E05] px-4 py-4 text-white'>
                        <h1 className='mb-[.5rem] text-4xl font-bold'>
                            Lorem ipsum
                        </h1>
                        <div className='flex gap-2'>
                            <Badge className='bg-[#77b255] text-white hover:bg-[#8bcf63]'>
                                Duurzaam
                            </Badge>

                            <Badge className='bg-[#285aff] text-white hover:bg-[#3d65e7]'>
                                Innovatief
                            </Badge>
                        </div>
                        <p>
                            Et aliquip non incididunt enim sit incididunt nisi
                            mollit ad proident nostrud. Commodo excepteur ut
                            eiusmod et dolor incididunt non ullamco. Ad enim est
                            elit non Lorem aliquip enim aliquip consectetur aute
                            deserunt sint nisi.
                        </p>
                        <div className='flex'>
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
