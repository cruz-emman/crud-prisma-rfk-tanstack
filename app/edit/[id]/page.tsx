'use client'

import FormPost from '@/components/FormPost'
import { Button } from '@/components/ui/button'
import { FormInputSubmit } from '@/lib'
import Link from 'next/link'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const EditPage = () => {

  const onEdit: SubmitHandler<FormInputSubmit> = (data) => console.log(data)

  return (
    <div className='flex flex-col gap-y-2'>
      <Link href="/">
        <Button variant="outline">
          Back to home
        </Button>
      </Link>
      <h1 className='text-2xl font-semibold'>Edit post</h1>
      <FormPost submit={onEdit} isEditing={true} />
    </div>
  )
}

export default EditPage