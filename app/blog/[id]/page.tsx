'use client'

import ButtonAction from '@/components/ButtonAction'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BlogDetail = () => {
  return (
    <div>
      <Link href="/">
        <Button variant="outline">
          Back to home
        </Button>
      </Link>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold my-4'>Post One</h2>
      </div>
      <p className='text-slate-700'>Post one content</p>
      <ButtonAction />
    </div>
  )
}

export default BlogDetail