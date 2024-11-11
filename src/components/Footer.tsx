import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.png'
import footer from '../../public/images/shapes/footer.svg'

const Footer = () => {
    return (
        <>
            <>
                <div className='relative bg-[#1d4497]'>
                    <div className='absolute inset-0 top-0'>
                        <Image
                            className='w-full rotate-180'
                            src={footer}
                            alt='Footer shape'
                        />
                    </div>

                    <div className='relative top-[30px] z-10 ml-10 max-w-[400px] md:ml-[118px]'>
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
                                <div className='mt-4 text-white'>
                                    <p>Rachelsmolen 1</p>
                                    <p>5612 MA Eindhoven</p>
                                    <p>info@aqua-alert.nl</p>
                                    <p>088 508 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pt-20 text-center md:text-left'>
                        <p className='text-white opacity-50'>
                            © Aqua Alert B.V. Alle rechten voorbehouden.
                            <a href='/terms-and-conditions'>
                                {' '}
                                Algemene Voorwaarden
                            </a>
                        </p>
                    </div>
                </div>
            </>
        </>
    )
}

export default Footer
