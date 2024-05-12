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



export default function PostCard() {
    return (
        <Card className="w-[350px] shadow-md">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Link className='hover:underline' href='/blog/1'>
                    Read More
                </Link>
            </CardFooter>
        </Card>
    )
}
