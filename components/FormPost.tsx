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
import axios from 'axios'
import { FormInputSubmit, formSchema } from '@/lib'
import { useQuery } from '@tanstack/react-query'

interface FormPostProps {
    submit: SubmitHandler<FormInputSubmit>
    isEditing?: boolean
    initialValue?: FormInputSubmit
    isLoadingPost: boolean
}
interface Tag {
    id: string; // or string, depending on your API
    name: string;
    // Add other properties if your tags have them (e.g., color, description)
}


export default function FormPost({ submit, isEditing, initialValue, isLoadingPost }: FormPostProps) {

    const { data: dataTags, isLoading: isLoadingTags } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const response = await axios.get('/api/tags')
            return response.data
        }
    })



    const form = useForm<FormInputSubmit>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValue,
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

                {isLoadingTags ? (
                    'loading...'


                ) : (
                    <FormField
                        control={form.control}
                        name="tagId"
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
                                        {dataTags?.map((item: Tag) => (
                                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>

                                        ))}
                                    </SelectContent>

                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <Button disabled={isLoadingPost} type="submit">
                    {isEditing ? isLoadingPost ? 'Updating..': 'Update' : (
                        isLoadingPost ? 'Creating' : 'Create'
                    )}
                </Button>
            </form>
        </Form>
    )
}
