'use client'

import FormPost from '@/components/FormPost'
import { Button } from '@/components/ui/button'
import { FormInputSubmit } from '@/lib'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePost = () => {

  const router = useRouter()

  const onSubmit: SubmitHandler<FormInputSubmit> = (data) => createPost(data)

  const {mutate: createPost, isPending: isLoadingPost } = useMutation({
    mutationFn: (newPost: FormInputSubmit) => {
      return axios.post('/api/posts/create', newPost)
    },
    onError: (error) => {
      console.error(error)
    },
    onSuccess: () =>{
      router.push('/')
      router.refresh()
    }
  })



  return (
    <div className='flex flex-col gap-y-2'>
            <Link href="/">
        <Button variant="outline">
          Back to home
        </Button>
      </Link>
      <h1 className='text-2xl font-semibold'>Add New post</h1>
      <FormPost isLoadingPost={isLoadingPost} submit={onSubmit} isEditing={false} />
    </div>
  )
}

export default CreatePost