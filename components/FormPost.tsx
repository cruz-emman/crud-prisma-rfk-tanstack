"use client"


import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FormInputSubmit, formSchema } from '@/lib'

interface FormPostProps {
    submit: SubmitHandler<FormInputSubmit>
    isEditing?: boolean
}

export default function FormPost({submit, isEditing}:FormPostProps) {

    const form = useForm<FormInputSubmit>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            tags: ""
        },
    })



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Tags" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="javascript">javascript</SelectItem>
                                    <SelectItem value="python">python</SelectItem>
                                    <SelectItem value="php">php</SelectItem>
                                </SelectContent>
                            </Select>
                            
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button  type="submit">
                    {isEditing ? 'Update': 'Create'}
                </Button>
            </form>
        </Form>
    )
}
