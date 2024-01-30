"use client"

import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const formSchema = z.object({
  username: z.string().min(12, {
    message: "Student ID must be at least 12 characters.",
  }),
    password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})
 

function Login() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }  
  return (
    <section className='bg-green-100 h-screen flex items-center justify-center'>
      <div className='box-content h-90 w-80 p-4 border-4 bg-green-500 rounded-xl'>
      <div className='grid grid-cols-1'>
        <div className='text-center text-3xl mb-5'>
        <strong>LOG IN</strong>
        </div>

      <div>
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student ID</FormLabel>
              <FormControl>
                <Input placeholder="xxxx-xxxxx-xx-x" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='text-center'>
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
      </div>

      <div className='text-center'>
    <Button variant="link">
        <Link href="/adminLogin">Login as admin</Link>
    </Button>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Login