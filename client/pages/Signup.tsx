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

const formSchema = z.object({
  username: z.string().min(12, {
    message: "Student ID must be at least 12 characters.",
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
  email: z.string().min(2, {
    message: "Please input email.",
  }),
  contact: z.string().min(11, {
    message: "Contact No. must be at least 11 characters.",
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
  }  

  return (
    <section>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Id</FormLabel>
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
          name="LastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
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
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
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
          name="MiddleInitial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Middle Initial</FormLabel>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact No.</FormLabel>
              <FormControl>
                <Input placeholder="09XXXXXXXXX" {...field} />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        
    </section>
  )
}

export default signup