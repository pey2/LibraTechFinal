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
import axios from 'axios'
import NavStart from './NavStart'

const formSchema = z.object({
  username: z.string().refine((value) => /^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{1}$/.test(value), {
    message: "Invalid username format. Please use the format: xxxx-xxxxx-xx-x",
  }),
  LastName: z.string().min(1, {
    message: "Please input last name.",
  }),
  FirstName: z.string().min(1, {
    message: "Please input first name.",
  }),
  MiddleInitial: z.string().min(1, {
    message: "Please input Middle Initial.",
  }),
  email: z.string().email({
    message: "Please input valid email.",
  }),
  contact: z.string().refine((value) => /^09\d{9}$/.test(value), {
    message: "Invalid contact number format. Please follow this format: 09XXXXXXXXX.",
  }),
    password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})
 

function signup() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      LastName: "",
      FirstName: "",
      MiddleInitial: "",
      email: "",
      contact: "",
      password: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    const StudentID = values.username
    const LastN = values.LastName
    const FirstN = values.FirstName
    const MidInitial = values.MiddleInitial
    const Email = values.email
    const ContactNum = values.contact
    const Password = values.password

    axios.post('http://localhost:5000/signup', {StudentID, LastN, FirstN, MidInitial, Email, ContactNum, Password})
        .then(res => {
            console.log(res)
            window.location.href = "/"
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
        height: '100%',
        margin: 0
      }}>
  <section className='box-content h-90 w-3/6 p-4 border-4 mt-9 bg-green-500 rounded-xl'>
          <div className='text-3xl mb-5 text-center'>
          <strong>SIGN UP</strong>
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
                <Input placeholder="xxxx-xxxxx-xx-x" {...field}/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>Last Name</h1>
              <FormControl>
                <Input placeholder="" {...field}/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>First Name</h1>
              <FormControl>
                <Input placeholder="" {...field}/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="MiddleInitial"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>Middle Initial</h1>
              <FormControl>
                <Input placeholder="" {...field}/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>Email</h1>
              <FormControl>
                <Input placeholder="" {...field}/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold'>Contact No.</h1>
              <FormControl>
                <Input placeholder="09XXXXXXXXX" {...field}/>
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
                <Input type='password' {...field}/>
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
    </div>
  )
}

export default signup