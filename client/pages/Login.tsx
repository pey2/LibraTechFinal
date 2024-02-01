"use client"

import React, { useState } from 'react'

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
import axios from 'axios'
import NavStart from './NavStart'
import { useRouter } from 'next/router'

const formSchema = z.object({
  username: z.string().refine((value) => /^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{1}$/.test(value), {
    message: "Invalid username format. Please use the format: xxxx-xxxxx-xx-x",
  }),
    password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})
 

function Login() {
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    const username = values.username
    const password = values.password

    axios.post('http://localhost:5000/studentLogin', {username, password})
        .then(res => {
            if (res.data === "Login Successfully.") {
              router.push({
                pathname: '/Home', // The pathname of the next page
                query: { StudentID: values.username }, // Pass the username as a query parameter
              });
            } else {
              alert(res.data)
            }
        }).catch(err => console.log(err))
        
  }  
  return (
    <div>
    <NavStart />
      <div className='h-screen flex items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('librarybg.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
    <section className='container mx-auto box-content h-90 w-80 p-4 border-4 bg-green-500 rounded-xl'>
      <div className='text-3xl mb-5 text-center'>
          <strong>LOG IN</strong>
        </div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>Student Id</h1>
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
              <h1 className='font-bold'>Password</h1>
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
        <Button type="submit" className='bg-green-800'>Login</Button>
        </div>

      </form>
    </Form>

    <div className='text-center'>
    <Button variant="link">
        <Link href="/adminLogin">Login as admin</Link>
    </Button>
    </div>
    </section>
      </div>
    </div>
  )
}

export default Login