
import ButtonAction from '@/components/ButtonAction'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

interface BlogDetailProps {
  params: {
    id: string
  }
}


async function getPost(id: string){
  const response = await db.post.findFirst({
    where: {
      id: id
    },
    select: {
      id: true,
      title: true,
      content: true,
      Tag: true
    }
  })

  return response
}

const BlogDetail = async ({params}: BlogDetailProps) => {

  const post = await getPost(params.id)



  return (
  <div>
      <Link href="/">
        <Button variant="outline">
          Back to home
        </Button>
      </Link>
      <div className='mb-8'>
      <h2 className='text-2xl fonp-bold my-4'>{post?.title}</h2>
      </div>
      <p>{post?.Tag.name}</p>
      <p className='text-slate-700'>{post?.content}</p>
      <ButtonAction id={params.id} />
    </div>
  )
}

export default BlogDetail