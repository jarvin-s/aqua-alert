import React from 'react'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import seedling from '../../public/images/seedling.png'

const Navbar = () => {
    return (
        <>
            <header className='sticky top-0 z-[100] flex h-20 w-full shrink-0 items-center justify-end px-4 md:justify-between md:border-b-[1px] md:border-[#ffffff98] md:bg-[#77b2555d] md:px-6 md:backdrop-blur-md'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant='outline'
                            size='icon'
                            className='bg-[#0F5E05] duration-300 hover:bg-green-900 md:hidden'
                        >
                            <MenuIcon className='h-6 w-4 text-white' />
                            <span className='sr-only'>
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        className='z-[999] bg-[#0F5E05] text-white'
                        side='right'
                    >
                        <SheetTitle className='hidden'>Aqua Alert</SheetTitle>
                        <Link href='#' prefetch={false}>
                            <Image src={seedling} width={0} height={0} alt='Seedling'/>
                            <span className='sr-only'>Aqua Alert</span>
                        </Link>
                        <div className='grid gap-2 py-6'>
                            <Link
                                href='/'
                                className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href='/our-work'
                                className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                                prefetch={false}
                            >
                                Ons werk
                            </Link>
                            <Link
                                href='/contact'
                                className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href='/' className='mr-6 hidden md:flex' prefetch={false}>
                    <Image
                        src={logo}
                        width={220}
                        height={0}
                        alt='Aqua Alert logo'
                    />
                    <span className='sr-only'>Aqua Alert</span>
                </Link>
                <NavigationMenu className='hidden text-white md:flex'>
                    <NavigationMenuList>
                        <NavigationMenuLink asChild>
                            <Link
                                href='/'
                                className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 hover:underline disabled:pointer-events-none disabled:opacity-50'
                                prefetch={false}
                            >
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href='/our-work'
                                className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 hover:underline disabled:pointer-events-none disabled:opacity-50'
                                prefetch={false}
                            >
                                Ons werk
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href='/contact'
                                className='group inline-flex h-9 w-max items-center justify-center rounded-md disabled:pointer-events-none disabled:opacity-50'
                                prefetch={false}
                            >
                                <span className='rounded-md bg-[#0F5E05] px-4 py-2 duration-300 hover:bg-[#2c7722]'>
                                    Contact
                                </span>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </>
    )
}

export default Navbar

function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    )
}
