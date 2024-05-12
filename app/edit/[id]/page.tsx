'use client'

import FormPost from '@/components/FormPost'
import { Button } from '@/components/ui/button'
import { FormInputSubmit } from '@/lib'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

interface EditPostPage {
  params: {
    id: string
  }
}

const EditPage = ({ params }: EditPostPage) => {

  const router = useRouter()

  const { id } = params
  const { data: dataPost, isLoading: isLoadingPost } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const resposne = await axios.get(`/api/posts/${id}`)
      return resposne.data
    }
  })

  const { mutate: updatePost } = useMutation({
    mutationFn: (updatePost: FormInputSubmit) => {
      return axios.patch(`/api/posts/${id}`, updatePost)
    },
    onError: (error) => {
      console.error(error)
    },
    onSuccess: () => {
      router.push('/')
      router.refresh()
    }
  })

  const onEdit: SubmitHandler<FormInputSubmit> = (data) => {
    updatePost(data)
   }


  if (isLoadingPost) {
    return (
      <div className='text-center'>
        <span>loading..</span>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <Link href="/">
        <Button variant="outline">
          Back to home
        </Button>
      </Link>
      <h1 className='text-2xl font-semibold'>Edit post</h1>
      <FormPost isLoadingPost={isLoadingPost} submit={onEdit} initialValue={dataPost} isEditing={true} />
    </div>
  )
}

export default EditPage