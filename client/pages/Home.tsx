import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav />
        <section className='h-screen flex items-center justify-center'
      style={{
        backgroundImage: `url('homebg.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        </section>
    </div>
  )
}

export default Home