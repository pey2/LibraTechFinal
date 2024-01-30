import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function index() {
  return (
    <section className='bg-green-100 h-screen flex items-center justify-center'>
      <div className='grid grid-cols-1'>
        <div className='text-center text-4xl'>
          <strong>Welcome to LibraTech!</strong>
          <div className='p-3'>
            <Button>
              <Link href='/Login'>Login</Link>
            </Button>

            <span className='mx-2'></span>

            <Button>
              <Link href='/Signup'>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
