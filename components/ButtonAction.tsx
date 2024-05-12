import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function ButtonAction() {
    return (
        <div>
            <Link href="/edit/id">
                <Button variant="outline">
                    Edit
                </Button>
            </Link>
            <Button
                variant="destructive"
            >
                Delete</Button>
        </div>
    )
}
