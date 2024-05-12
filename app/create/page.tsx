'use client'

import FormPost from '@/components/FormPost'
import { Button } from '@/components/ui/button'
import { FormInputSubmit } from '@/lib'
import Link from 'next/link'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePost = () => {

  const onSubmit: SubmitHandler<FormInputSubmit> = (data) => console.log(data)

  return (
    <div className='flex flex-col gap-y-2'>
            <Link href="/">
        <Button variant="outline">
          Back to home
        </Button>
      </Link>
      <h1 className='text-2xl font-semibold'>Add New post</h1>
      <FormPost submit={onSubmit} isEditing={false} />
    </div>
  )
}

export default CreatePost