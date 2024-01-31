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
    <div className='bg-green-100'>
   <section>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <h1>Student Id</h1>
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
              <h1>Last Name</h1>
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
              <h1>First Name</h1>
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
              <h1>Middle Initial</h1>
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
              <h1>Email</h1>
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
              <h1>Contact No.</h1>
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
              <h1>Password</h1>
              <FormControl>
                <Input type='password' {...field}/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        
    </section>
    </div>
  )
}

export default signup