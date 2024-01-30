import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

function index() {
  return (
    <section className='bg-green-100 h-screen'>
      <div>
        Welcome to LibraTech!
      </div>
      <div>
      <Button>
      <Link href="/Login">Login</Link>
      </Button>

      <Button>
      <Link href="/Signup">Sign Up</Link>
      </Button>
      </div>
    </section>
  )
}

export default index