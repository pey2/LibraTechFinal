import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NavStart from './NavStart';

function Index() {
  return (
<div>
<NavStart />
   <section
      className='h-screen flex items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('librarybg.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='grid grid-cols-1'>
        <div className='text-center text-6xl text-white'>
          <strong>Welcome to LibraTech!</strong>
          <div className='p-3'>
            <Button className='w-40 bg-green-800'>
              <Link href='/Login'>Login</Link>
            </Button>

            <span className='mx-7'></span>

            <Button className='w-40 bg-green-800'>
              <Link href='/Signup'>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
</div>
 
  );
}

export default Index;
