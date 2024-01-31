import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

                // console.log(bookData.ISBN)
            })
            .catch(err => console.log(err));
    }, [DeweyDec]);

    function handleSubmit(event) {
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
        <section className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Book</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>ISBN</label>
                        <input type='text' placeholder='Enter ISBN' value={isbn} onChange={e => setIsbn(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Title</label>
                        <input type='text' placeholder='Enter Title' value={Title} onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Author</label>
                        <input type='text' placeholder='Enter Author' value={Author} onChange={e => setAuthor(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Publisher</label>
                        <input type='text' placeholder='Enter Publisher' value={Publisher} onChange={e => setPublisher(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Genre</label>
                        <input type='text' placeholder='Enter Genre' value={Genre} onChange={e => setGenre(e.target.value)} />
                    </div>

                    <button>Update</button>
                </form>
            </div>
        </section>
    );
}

export default UpdateBook;
