import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Tag } from '@prisma/client'

interface PostCardProps {
    post: {
        id: string
        title: string
        content:string
        Tag: Tag
    }
}

export default function PostCard({post}:PostCardProps) {

    const {title, content, id, Tag} = post
   

    return (
        <Card className="w-[350px] shadow-md">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{Tag.name}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <CardFooter>
                <Link className='hover:underline' href={`/blog/${id}`}>
                    Read More
                </Link>
            </CardFooter>
        </Card>
    )
}
