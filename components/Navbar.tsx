import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className='h-[60px] flex p-16 shadow-lg items-center justify-between'>
            <div className=' flex'>
                <Link href="/">
                <Button>
                    Home
                </Button>
                </Link>
            </div>
            <Link href="/create">
            <Button>Create Post</Button>
            </Link>
        </div>
    )
}
