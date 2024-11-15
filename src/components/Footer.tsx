import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.png'
import footer from '../../public/images/shapes/footer.svg'

const Footer = () => {
    return (
        <>
            <div className='relative w-full bg-[#0d214b]'>
                <div className='absolute left-0 right-0 top-[-1px]'>
                    <Image
                        className='w-full rotate-180'
                        src={footer}
                        alt='Footer shape'
                    />
                </div>

                <div className='relative top-[50px] z-10 ml-10 max-w-[400px] md:ml-[118px]'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <Link href='/' prefetch={false}>
                                <Image
                                    className='w-[40%] md:w-[60%]'
                                    src={logo}
                                    alt='Aqua Alert logo'
                                />
                                <span className='sr-only'>Aqua Alert</span>
                            </Link>
                            {/* Footer info with icons */}
                            <div className='mt-4 text-white space-y-1'>
                                <div className='flex gap-1'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22'
                                        />
                                    </svg>
                                    <div>
                                        <p className='block'>Rachelsmolen 1,</p>
                                        <p className='block'>
                                            5612 MA Eindhoven
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z'
                                        />
                                    </svg>
                                    <p className='duration-300 hover:opacity-70'>
                                        <a href='mailto:info@aqua-alert.nl'>
                                            info@aqua-alert.nl
                                        </a>
                                    </p>
                                </div>
                                <div className='flex gap-1'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3'
                                        />
                                    </svg>
                                    <p>088 508 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-[50%] justify-center'>
                    <hr />
                </div>
                <div className='flex justify-center pb-4 pt-20 text-center md:text-left'>
                    <p className='text-white opacity-50'>
                        © Aqua Alert B.V. Alle rechten voorbehouden.
                        <a
                            href='/terms-and-conditions'
                            className='text-white opacity-100 duration-300 hover:opacity-80'
                        >
                            {' '}
                            Algemene voorwaarden.
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
