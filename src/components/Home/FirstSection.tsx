'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import whyus_arduino from '@/images/why-us-arduino.png'
import { motion, useInView } from 'framer-motion'

const FirstSection = () => {
    const ref = useRef(null)
    // Show animation when element is 30% in view
    const isInView = useInView(ref, { amount: 0.3, once: true })

    const visible = { opacity: 1, transition: { duration: 0.85 } }

    const items_variants = {
        hidden: { opacity: 0 },
        visible,
    }
    return (
        <>
            <div className='bg-[#0d214b]'>
                <motion.main
                    ref={ref}
                    initial='hidden'
                    animate={isInView ? 'visible' : ''}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.5,
                                delayChildren: 0.4,
                            },
                        },
                    }}
                    className='mx-auto flex h-[120rem] max-w-[1920px] flex-col justify-around pb-40 md:space-y-0 lg:h-[60vh] lg:flex-row'
                >
                    <motion.div
                        variants={items_variants}
                        className='flex flex-col gap-20 px-20'
                    >
                        <h1 className='text-6xl font-bold text-white'>
                            Waarom ons?
                        </h1>
                        <Image
                            src={whyus_arduino}
                            width={0}
                            alt='Waarom ons Arduino'
                        />
                    </motion.div>
                    <motion.div
                        className='grid max-w-[1200px] grid-cols-1 gap-4 px-4 pt-10 lg:grid-cols-2'
                        variants={items_variants}
                    >
                        <div className='rounded-lg bg-[#9BEF90] p-6'>
                            <div className='mb-5'>
                                <svg
                                    className='inline-block h-12 w-12'
                                    viewBox='0 0 47 47'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M15.6321 11.1409L18.6077 12.8546L24.0774 3.44661L27.9474 10.1127L23.4754 12.6832L32.8667 15.1852L35.3951 5.82859L30.9231 8.39907L27.053 1.71581C26.8285 1.32511 26.5286 0.982563 26.1705 0.707938C25.8124 0.433313 25.4033 0.232046 24.9668 0.115747C24.5302 -0.00055244 24.0749 -0.029581 23.627 0.030336C23.1792 0.090253 22.7477 0.237929 22.3574 0.464845C21.893 0.721894 21.4974 1.0989 21.205 1.54445M20.4998 31.859V28.4317H9.59484L13.4477 21.7485L17.9197 24.3189L15.4085 14.9624L6 17.4643L10.472 20.0348L6.60201 26.7181C6.30848 27.2254 6.1501 27.7991 6.14194 28.3846C6.13377 28.9701 6.27609 29.548 6.55536 30.0632C6.83462 30.5784 7.24155 31.0139 7.73743 31.3283C8.23332 31.6426 8.80167 31.8253 9.38844 31.859M36.0831 17.293L33.0903 19.0066L38.56 28.4317H30.8199V23.2907L23.9398 30.1454L30.8199 37V31.859H38.56C40.4692 31.859 42 30.3339 42 28.4317C42 27.9005 41.8624 27.3693 41.6216 26.9066L36.0831 17.293Z'
                                        fill='#0A3704'
                                    />
                                </svg>
                            </div>
                            <h3 className='mb-2 text-lg font-bold text-black'>
                                Duurzaamheid
                            </h3>
                            <p className='text-sm leading-6 text-black'>
                                Bespaar water en ondersteun een duurzamere
                                wereld met ons milieuvriendelijke systeem.
                            </p>
                        </div>
                        <div className='rounded-lg bg-[#92EEF9] p-6'>
                            <div className='mb-5'>
                                <svg
                                    className='inline-block h-12 w-12'
                                    viewBox='0 0 44 42'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g clipPath='url(#clip0_1004_42)'>
                                        <path
                                            d='M19.7135 10.7646C18.8765 8.65111 16.285 7.88261 14.1245 11.6356C11.964 15.3886 -1.05251 33.1326 14.6125 40.0731C20.3815 42.7191 27.2735 38.6041 28.289 33.9506C30.1025 25.6451 22.7085 18.3256 19.714 10.7656'
                                            fill='#57C6E9'
                                        />
                                        <path
                                            d='M9.37161 32.6236C8.2619 33.043 7.89401 34.7899 8.54991 36.5255C9.20581 38.2611 10.6371 39.3281 11.7468 38.9087C12.8565 38.4894 13.2244 36.7424 12.5685 35.0068C11.9126 33.2712 10.4813 32.2042 9.37161 32.6236Z'
                                            fill='#E7E6E6'
                                        />
                                        <path
                                            d='M31.3545 23.875L29.917 23.1562L28.4795 23.875V26.0312H31.3545V23.875ZM26.0573 27.6053L24.2964 29.3663C23.937 29.7256 23.362 29.7256 23.0098 29.3663L22.2695 28.6259C21.9102 28.2666 21.9102 27.6916 22.2695 27.3394L24.0305 25.5784C24.3898 25.2191 24.9648 25.2191 25.317 25.5784L26.0645 26.3259C26.4167 26.6709 26.4167 27.2531 26.0573 27.6053ZM35.5305 29.3663L33.7695 27.6053C33.4102 27.2531 33.4102 26.6709 33.7695 26.3187L34.517 25.5712C34.8692 25.2119 35.4442 25.2119 35.8036 25.5712L37.5645 27.3322C37.9239 27.6844 37.9239 28.2594 37.5645 28.6188L36.817 29.3663C36.4648 29.7256 35.8898 29.7256 35.5305 29.3663Z'
                                            fill='#D3D3D3'
                                        />
                                        <path
                                            d='M27.9476 23.875H31.8792C32.3823 23.875 32.792 23.4653 32.7848 22.9622V21.9128C32.7848 21.4097 32.3751 21 31.872 21H27.9476C27.4445 21 27.042 21.4097 27.0348 21.9128V22.9622C27.0348 23.4653 27.4445 23.875 27.9476 23.875ZM37.8233 33.2188C37.8233 37.5852 34.2834 41.125 29.917 41.125C25.5506 41.125 22.0108 37.5852 22.0108 33.2188C22.0108 28.8523 25.5506 25.3125 29.917 25.3125C34.2834 25.3125 37.8233 28.8523 37.8233 33.2188Z'
                                            fill='#636363'
                                        />
                                        <path
                                            d='M29.917 39.6875C30.7665 39.6875 31.6077 39.5202 32.3925 39.1951C33.1773 38.87 33.8904 38.3935 34.4911 37.7928C35.0918 37.1922 35.5683 36.4791 35.8934 35.6942C36.2185 34.9094 36.3858 34.0682 36.3858 33.2188C36.3858 32.3693 36.2185 31.5281 35.8934 30.7433C35.5683 29.9584 35.0918 29.2453 34.4911 28.6447C33.8904 28.044 33.1773 27.5675 32.3925 27.2424C31.6077 26.9173 30.7665 26.75 29.917 26.75C28.2014 26.75 26.5561 27.4315 25.3429 28.6447C24.1298 29.8578 23.4483 31.5031 23.4483 33.2188C23.4483 34.9344 24.1298 36.5797 25.3429 37.7928C26.5561 39.006 28.2014 39.6875 29.917 39.6875Z'
                                            fill='white'
                                        />
                                        <path
                                            d='M32.4542 29.6609L32.9645 29.1506C33.0311 29.084 33.1101 29.0312 33.197 28.9952C33.284 28.9592 33.3771 28.9407 33.4712 28.9407C33.5654 28.9407 33.6585 28.9592 33.7455 28.9952C33.8324 29.0312 33.9114 29.084 33.978 29.1506C34.0445 29.2171 34.0973 29.2961 34.1333 29.383C34.1693 29.47 34.1879 29.5632 34.1879 29.6573C34.1879 29.7514 34.1693 29.8446 34.1333 29.9315C34.0973 30.0185 34.0445 30.0975 33.978 30.164L33.4677 30.6743C33.4011 30.7409 33.3221 30.7936 33.2352 30.8297C33.1482 30.8657 33.055 30.8842 32.9609 30.8842C32.8668 30.8842 32.7736 30.8657 32.6867 30.8297C32.5998 30.7936 32.5208 30.7409 32.4542 30.6743C32.3877 30.6078 32.3349 30.5288 32.2989 30.4418C32.2629 30.3549 32.2443 30.2617 32.2443 30.1676C32.2443 30.0735 32.2629 29.9803 32.2989 29.8934C32.3349 29.8064 32.3877 29.7274 32.4542 29.6609Z'
                                            fill='#9B9B9B'
                                        />
                                        <path
                                            d='M29.1983 28.9062V28.1875C29.1983 27.7922 29.5217 27.4688 29.917 27.4688C30.3123 27.4688 30.6358 27.7922 30.6358 28.1875V28.9062C30.6358 29.3016 30.3123 29.625 29.917 29.625C29.5145 29.625 29.1983 29.3016 29.1983 28.9062ZM29.1983 38.25V37.5312C29.1983 37.1359 29.5217 36.8125 29.917 36.8125C30.3123 36.8125 30.6358 37.1359 30.6358 37.5312V38.25C30.6358 38.6453 30.3123 38.9688 29.917 38.9688C29.5145 38.9688 29.1983 38.6453 29.1983 38.25ZM34.9483 32.5H34.2295C33.827 32.5 33.5108 32.8234 33.5108 33.2188C33.5108 33.6141 33.8342 33.9375 34.2295 33.9375H34.9483C35.3436 33.9375 35.667 33.6141 35.667 33.2188C35.667 32.8234 35.3436 32.5 34.9483 32.5ZM24.8858 32.5H25.6045C25.9998 32.5 26.3233 32.8234 26.3233 33.2188C26.3233 33.6141 25.9998 33.9375 25.6045 33.9375H24.8858C24.4905 33.9375 24.167 33.6141 24.167 33.2188C24.167 32.8234 24.4833 32.5 24.8858 32.5ZM33.9851 36.2734L33.4748 35.7631C33.3404 35.6287 33.1582 35.5532 32.9681 35.5532C32.7781 35.5532 32.5958 35.6287 32.4614 35.7631C32.327 35.8975 32.2515 36.0798 32.2515 36.2698C32.2515 36.4599 32.327 36.6422 32.4614 36.7766L32.9717 37.2869C33.1061 37.4213 33.2884 37.4968 33.4784 37.4968C33.6685 37.4968 33.8508 37.4213 33.9851 37.2869C34.1195 37.1525 34.195 36.9702 34.195 36.7802C34.195 36.5901 34.1195 36.4078 33.9851 36.2734ZM26.8623 29.1578L27.3726 29.6681C27.4392 29.7347 27.492 29.8137 27.528 29.9006C27.564 29.9876 27.5825 30.0807 27.5825 30.1748C27.5825 30.269 27.564 30.3621 27.528 30.4491C27.492 30.536 27.4392 30.615 27.3726 30.6816C27.3061 30.7481 27.2271 30.8009 27.1402 30.8369C27.0532 30.8729 26.96 30.8915 26.8659 30.8915C26.7718 30.8915 26.6786 30.8729 26.5917 30.8369C26.5048 30.8009 26.4258 30.7481 26.3592 30.6816L25.8489 30.1713C25.7823 30.1048 25.7294 30.0258 25.6933 29.9388C25.6573 29.8519 25.6387 29.7587 25.6387 29.6645C25.6387 29.5704 25.6573 29.4772 25.6933 29.3902C25.7294 29.3033 25.7823 29.2243 25.8489 29.1578C26.1292 28.8703 26.582 28.8703 26.8623 29.1578ZM26.3592 35.7559L25.8489 36.2662C25.7824 36.3328 25.7296 36.4118 25.6936 36.4987C25.6575 36.5857 25.639 36.6789 25.639 36.773C25.639 36.8671 25.6575 36.9603 25.6936 37.0472C25.7296 37.1341 25.7824 37.2131 25.8489 37.2797C25.9154 37.3462 25.9944 37.399 26.0814 37.435C26.1683 37.471 26.2615 37.4896 26.3556 37.4896C26.4497 37.4896 26.5429 37.471 26.6299 37.435C26.7168 37.399 26.7958 37.3462 26.8623 37.2797L27.3726 36.7694C27.4392 36.7028 27.492 36.6238 27.528 36.5369C27.564 36.4499 27.5825 36.3568 27.5825 36.2627C27.5825 36.1686 27.564 36.0754 27.528 35.9884C27.492 35.9015 27.4392 35.8225 27.3726 35.7559C27.3061 35.6894 27.2271 35.6366 27.1402 35.6006C27.0532 35.5646 26.96 35.546 26.8659 35.546C26.7718 35.546 26.6786 35.5646 26.5917 35.6006C26.5048 35.6366 26.4258 35.6894 26.3592 35.7559Z'
                                            fill='#D3D3D3'
                                        />
                                        <path
                                            d='M29.4067 33.7291C29.3401 33.6626 29.2872 33.5837 29.2512 33.4967C29.2151 33.4098 29.1965 33.3166 29.1965 33.2224C29.1965 33.1283 29.2151 33.0351 29.2512 32.9481C29.2872 32.8612 29.3401 32.7822 29.4067 32.7157L32.9645 29.1579C33.0311 29.0913 33.1101 29.0386 33.197 29.0025C33.284 28.9665 33.3772 28.948 33.4713 28.948C33.5654 28.948 33.6585 28.9665 33.7455 29.0025C33.8324 29.0386 33.9114 29.0913 33.978 29.1579C34.0445 29.2244 34.0973 29.3034 34.1333 29.3904C34.1693 29.4773 34.1879 29.5705 34.1879 29.6646C34.1879 29.7587 34.1693 29.8519 34.1333 29.9388C34.0973 30.0258 34.0445 30.1048 33.978 30.1713L30.4202 33.7291C30.3537 33.7958 30.2747 33.8486 30.1877 33.8847C30.1008 33.9208 30.0076 33.9393 29.9134 33.9393C29.8193 33.9393 29.7261 33.9208 29.6392 33.8847C29.5522 33.8486 29.4732 33.7958 29.4067 33.7291Z'
                                            fill='#F8312F'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_1004_42'>
                                            <rect
                                                width='44'
                                                height='42'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className='mb-2 text-lg font-bold text-black'>
                                Efficiënt
                            </h3>
                            <p className='text-sm leading-6 text-black'>
                                Onze automatische watersystemen zijn ontworpen
                                om water te besparen door de behoeften van de
                                plant nauwkeurig te volgen.
                            </p>
                        </div>
                        <div className='rounded-lg bg-[#FCAE7A] p-6'>
                            <div className='mb-5'>
                                <svg
                                    className='inline-block h-9 w-9'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M18.5 3.08325C27.0146 3.08325 33.9167 9.98529 33.9167 18.4999C33.9167 27.0145 27.0146 33.9166 18.5 33.9166C9.98539 33.9166 3.08334 27.0145 3.08334 18.4999C3.08334 9.98529 9.98539 3.08325 18.5 3.08325Z'
                                        fill='url(#paint0_linear_1004_55)'
                                    />
                                    <path
                                        d='M25.1554 13.5789C25.2449 13.6684 25.3159 13.7746 25.3643 13.8916C25.4128 14.0085 25.4377 14.1338 25.4377 14.2604C25.4377 14.3869 25.4128 14.5122 25.3643 14.6291C25.3159 14.7461 25.2449 14.8523 25.1554 14.9418L16.6762 23.4209C16.5867 23.5104 16.4805 23.5814 16.3636 23.6299C16.2467 23.6783 16.1214 23.7032 15.9948 23.7032C15.8682 23.7032 15.7429 23.6783 15.626 23.6299C15.5091 23.5814 15.4029 23.5104 15.3134 23.4209L11.8446 19.9522C11.6639 19.7715 11.5624 19.5263 11.5624 19.2708C11.5624 19.0152 11.6639 18.7701 11.8446 18.5894C12.0254 18.4086 12.2705 18.3071 12.526 18.3071C12.7816 18.3071 13.0267 18.4086 13.2075 18.5894L15.9948 21.3767L23.7925 13.5789C23.882 13.4894 23.9883 13.4184 24.1052 13.37C24.2221 13.3216 24.3474 13.2966 24.474 13.2966C24.6005 13.2966 24.7258 13.3216 24.8428 13.37C24.9597 13.4184 25.0659 13.4894 25.1554 13.5789Z'
                                        fill='url(#paint1_linear_1004_55)'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear_1004_55'
                                            x1='4.18486'
                                            y1='8.8645'
                                            x2='25.4629'
                                            y2='30.972'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stopColor='#52D17C' />
                                            <stop
                                                offset='1'
                                                stopColor='#22918B'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='paint1_linear_1004_55'
                                            x1='14.1641'
                                            y1='14.3582'
                                            x2='16.6392'
                                            y2='26.0086'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stopColor='white' />
                                            <stop
                                                offset='1'
                                                stopColor='#E3FFD9'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className='mb-2 text-lg font-bold text-black'>
                                Betrouwbaar
                            </h3>
                            <p className='text-sm leading-6 text-black'>
                                Onze systemen zijn getest en bewezen
                                betrouwbaar, zodat u zich geen zorgen hoeft te
                                maken over het welzijn van uw planten.
                            </p>
                        </div>
                        <div className='rounded-lg bg-[#FFB5F8] p-6'>
                            <div className='mb-5'>
                                <svg
                                    className='inline-block h-8 w-8'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 36 36'
                                >
                                    <path
                                        fill='#8899A6'
                                        d='m34.247 6.324l-2.742 2.743s-1.829.914-3.657-.915c-1.829-1.828-.915-3.657-.915-3.657l2.743-2.743C30.591.838 29.492 0 28.667 0a7.333 7.333 0 0 0-7.334 7.333c0 .569.072 1.121.194 1.653l-6.199 6.199l5.485 5.485l6.199-6.198a7.4 7.4 0 0 0 1.654.194a7.333 7.333 0 0 0 7.333-7.333c.001-.83-.838-1.923-1.752-1.009m-19.027 9.04L3.031 27.552a3.83 3.83 0 0 0 0 5.417a3.83 3.83 0 0 0 5.417 0l12.187-12.188zM5.763 31.838a1.482 1.482 0 1 1 0-2.964a1.482 1.482 0 0 1 0 2.964'
                                    />
                                    <path
                                        fill='#F4900C'
                                        d='M30.83 33.279c1.166 1.166 3.022 1.221 4.121.121s1.045-2.955-.121-4.121L11.565 6.014c-1.167-1.167-3.021-1.221-4.121-.121s-1.045 2.955.121 4.121z'
                                    />
                                    <path
                                        fill='#66757F'
                                        d='M21.444.893s-6-3-11 2l-7 7s-1-1-2 0l-1 1s-1 1 0 2l4 4s1 1 2 0l1-1s1-1 0-2l-.078-.078c.77-.743 1.923-1.5 3.078-.922l4-4s-1-3 1-5s3-2 5-2s1-1 1-1'
                                    />
                                </svg>
                            </div>
                            <h3 className='mb-2 text-lg font-bold text-black'>
                                Gemakkelijk onderhoud
                            </h3>
                            <p className='text-sm leading-6 text-black'>
                                Met ons automatische irrigatiesysteem hoeft u
                                zich geen zorgen meer te maken over handmatig
                                water geven – het systeem zorgt voor alles,
                                zodat uw planten gezond blijven.
                            </p>
                        </div>
                    </motion.div>
                </motion.main>
            </div>
            <div className='flex h-[20vh]'></div>
        </>
    )
}

export default FirstSection
