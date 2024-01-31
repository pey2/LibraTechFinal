import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, {useState} from 'react'

function AddBook() {

    const [DeweyDec, setDeweyDec] = useState('')
    const [isbn, setIsbn] = useState('')
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')
    const [Publisher, setPublisher] = useState('')
    const [Genre, setGenre] = useState('')

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        axios.post('http://localhost:5000/create', {DeweyDec, isbn, Title, Author, Publisher, Genre})
        .then(res => {
            console.log(res)
            window.location.href = "/adminBooks"
        }).catch(err => console.log(err))
    }


  return (
    <div className='bg-green-100 h-screen'>
   <section className='h-screen flex items-center justify-center'>
        <div className='container mx-auto box-content h-90 w-80 p-4 border-4 bg-green-500 rounded-xl'>
            <form onSubmit={handleSubmit}>
                <div className='text-3xl mb-5 text-center'>
          <strong>ADD BOOK</strong>
        </div>
                <div className='mb-2'>
                    <label htmlFor='' className='font-semibold'>Dewey Decimal</label> <br />
                    <input type='text' placeholder='Enter Dewey Decimal' 
                    onChange={e => setDeweyDec(e.target.value)} 
                    className='rounded w-80'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='' className='font-semibold'>ISBN</label> <br />
                    <input type='text' placeholder='Enter ISBN' 
                    onChange={e => setIsbn(e.target.value)} 
                    className='rounded w-80'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='' className='font-semibold'>Title</label> <br />
                    <input type='text' placeholder='Enter Title' 
                    onChange={e => setTitle(e.target.value)} 
                    className='rounded w-80'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='' className='font-semibold'>Author</label> <br />
                    <input type='text' placeholder='Enter Author' 
                    onChange={e => setAuthor(e.target.value)} 
                    className='rounded w-80'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='' className='font-semibold'>Publisher</label> <br />
                    <input type='text' placeholder='Enter Publisher' 
                    onChange={e => setPublisher(e.target.value)} 
                    className='rounded w-80'/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='' className='font-semibold'>Genre</label> <br />
                    <input type='text' placeholder='Enter Genre' 
                    onChange={e => setGenre(e.target.value)}
                    className='rounded w-80'/>
                </div>
                
                <div className='text-center'>
                    <Button className='bg-green-800'>Add Book</Button>
                </div>
            </form>
        </div>
    </section>
    </div>
  )
}

export default AddBook