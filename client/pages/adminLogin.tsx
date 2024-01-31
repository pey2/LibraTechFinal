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
import axios from 'axios'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Please input username.",
  }),
    password: z.string().min(3, {
    message: "Please input password.",
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
    const username = values.username
    const password = values.password

    axios.post('http://localhost:5000/adminLogin', {username, password})
        .then(res => {
            console.log(res)
            if (res.data === "Login Successfully.") {
              // Redirect to "/adminBooks" only if authentication was successful
              window.location.href = "/adminBooks";
            } else {
              // Handle unsuccessful authentication (e.g., display an error message)
              alert(res.data);
            }
        }).catch(err => console.log(err))
  }  

  return (
    <div className='h-screen flex items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('librarybg.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
   <section className='container mx-auto box-content h-90 w-80 p-4 border-4 bg-green-500 rounded-xl'>
              <div className='text-3xl mb-5 text-center'>
          <strong>ADMIN</strong>
        </div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>Username</h1>
              <FormControl>
                <Input placeholder="" {...field} />
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
        <Button type="submit" className='bg-green-800'>Submit</Button>
        </div>
      </form>
    </Form>
    </section>
    </div>
 
  )
}

export default Login