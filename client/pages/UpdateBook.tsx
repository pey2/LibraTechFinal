import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

function UpdateBook() {
    const router = useRouter();
    const [isbn, setIsbn] = useState('');
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    const [Publisher, setPublisher] = useState('');
    const [Genre, setGenre] = useState('');

    const { DeweyDec } = router.query;

    useEffect(() => {
        if (!DeweyDec) {
            console.error("DeweyDec is undefined");
            return;
        }

        // Fetch book details using DeweyDec
        axios.get(`http://localhost:5000/getBook/` + DeweyDec)
            .then(res => {
                const bookData = res.data[0]; // Assuming your API response contains book details
                setIsbn(bookData.ISBN);
                setTitle(bookData.Title);
                setAuthor(bookData.Author);
                setPublisher(bookData.Publisher);
                setGenre(bookData.Genre);
            })
            .catch(err => console.log(err));
    }, [DeweyDec]);

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();

        if (!DeweyDec) {
            console.error("DeweyDec is undefined");
            return;
        }

        axios.put(`http://localhost:5000/update/` + DeweyDec, { isbn, Title, Author, Publisher, Genre })
            .then(res => {
                console.log(res);
                window.location.href = "/adminBooks";
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='bg-green-100 h-screen'>
        <section className='h-screen flex items-center justify-center'>
            <div className='container mx-auto box-content h-90 w-80 p-4 border-4 bg-green-500 rounded-xl'>
                <form onSubmit={handleSubmit}>
                <div className='text-3xl mb-5 text-center'>
                 <strong>UPDATE BOOK</strong>
                 </div>
                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>ISBN</label> <br />
                        <input type='text' placeholder='Enter ISBN' value={isbn} 
                        onChange={e => setIsbn(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>Title</label> <br />
                        <input type='text' placeholder='Enter Title' value={Title} 
                        onChange={e => setTitle(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>Author</label> <br />
                        <input type='text' placeholder='Enter Author' value={Author} 
                        onChange={e => setAuthor(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>Publisher</label> <br />
                        <input type='text' placeholder='Enter Publisher' value={Publisher} 
                        onChange={e => setPublisher(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='' className='font-semibold'>Genre</label> <br />
                        <input type='text' placeholder='Enter Genre' value={Genre} 
                        onChange={e => setGenre(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                <div className='text-center'>
                    <Button className='bg-green-800'>Update</Button>
                </div>
                </form>
            </div>
        </section>
        </div>
    );
}

export default UpdateBook;
