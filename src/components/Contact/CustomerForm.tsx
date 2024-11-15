import React from 'react'
import Image from 'next/image'
import seedling from '../../../public/images/seedling-send-btn.svg'
import wave from '../../../public/images/shapes/contact-wave.svg'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const CustomerForm = () => {
    return (
        <>
            <div className='relative m-[20px] border-4 border-dashed border-[#0F5E05] bg-gray-300 px-12 py-12 md:mx-auto md:w-[50rem] md:px-0'>
                <div className='absolute bottom-0 left-0 right-0 z-[1]'>
                    <Image src={wave} alt='Contact wave' />
                </div>
                <div className='mx-auto text-center'>
                    <h2 className='text-6xl font-bold tracking-tight text-[#0F5E05]'>
                        Contact
                    </h2>
                    <h2 className='mt-4 flex flex-col justify-center space-y-4 text-2xl md:flex-row md:space-y-0'>
                        Vragen?&nbsp;
                        <span className='underline decoration-[#0F5E05] decoration-wavy'>
                            Aarzel niet!
                        </span>{' '}
                        <span className='ml-2 animate-bounce'>👇</span>
                    </h2>
                </div>
                <form className='mx-auto mt-16 max-w-xl sm:mt-20'>
                    <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                        <div className='z-[10]'>
                            <label
                                htmlFor='first-name'
                                className='block text-lg font-semibold leading-6'
                            >
                                Voornaam <span className='text-red-500'>*</span>
                            </label>
                            <Input
                                className='my-2 border-2 bg-white placeholder:opacity-60 focus:border-[#0F5E05] focus:outline-none focus-visible:ring-0'
                                type='text'
                                placeholder='Uw voornaam'
                                required
                            />
                        </div>
                        <div className='z-[10]'>
                            <label
                                htmlFor='last-name'
                                className='block text-lg font-semibold leading-6'
                            >
                                Achternaam{' '}
                                <span className='text-red-500'>*</span>
                            </label>
                            <Input
                                className='my-2 border-2 bg-white placeholder:opacity-60 focus:border-[#0F5E05] focus:outline-none focus-visible:ring-0'
                                type='text'
                                placeholder='Uw achternaam'
                                required
                            />
                        </div>
                        <div className='z-[10] sm:col-span-2'>
                            <label
                                htmlFor='company-name'
                                className='block text-lg font-semibold leading-6'
                            >
                                Bedrijf{' '}
                            </label>
                            <Input
                                className='my-2 border-2 bg-white placeholder:opacity-60 focus:border-[#0F5E05] focus:outline-none focus-visible:ring-0'
                                type='text'
                                placeholder='Uw bedrijf'
                                required
                            />
                        </div>
                        <div className='z-[10] sm:col-span-2'>
                            <label
                                htmlFor='email'
                                className='block text-lg font-semibold leading-6'
                            >
                                E-mailadres{' '}
                                <span className='text-red-500'>*</span>
                            </label>
                            <Input
                                className='my-2 border-2 bg-white placeholder:opacity-60 focus:border-[#0F5E05] focus:outline-none focus-visible:ring-0'
                                type='email'
                                placeholder='Uw e-mailadres'
                                required
                            />
                        </div>
                        <div className='z-10 space-y-2 sm:col-span-2'>
                            <h1 className='text-lg font-bold text-white'>
                                Bericht
                            </h1>
                            <Textarea
                                rows={4}
                                cols={0}
                                className='rounded-lg border-2 bg-white placeholder:opacity-60 focus:border-[#0F5E05] focus:outline-none focus-visible:ring-0'
                                placeholder='Uw bericht'
                            />
                        </div>
                    </div>
                    <div className='relative mt-10 flex'>
                        <Image
                            className='absolute -left-4 -top-8 z-10'
                            src={seedling}
                            width={30}
                            height={0}
                            alt='Seedling send button'
                        />
                        <a
                            className='z-20 flex items-center gap-2 rounded-lg bg-[#ff7e28] px-6 py-2 text-white duration-300 hover:bg-[#fc9958]'
                            href='#'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='1.5'
                                    d='M22 12L3 20l3.563-8L3 4zM6.5 12H22'
                                />
                            </svg>
                            Verzenden
                        </a>
                    </div>
                </form>
            </div>{' '}
        </>
    )
}

export default CustomerForm
