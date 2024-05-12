'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface ButtonActionProps {
    id:string
}

export default function ButtonAction(id: ButtonActionProps) {

    const router = useRouter()


    const {mutate:deletePost} = useMutation({
        mutationFn: async () =>{
            return axios.delete(`/api/posts/${id.id}`)
        },
        onError: (error) =>{
            console.log(error)
        },
        onSuccess: () =>{
            router.push('/')
            router.refresh()
        }
    })

    return (
        <div>
            <Link href={`/edit/${id.id}`}>
                <Button variant="outline">
                    Edit
                </Button>
            </Link>
            <Button
                variant="destructive"
                onClick={() => deletePost()}
            >
                Delete</Button>
        </div>
    )
}
