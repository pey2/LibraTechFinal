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
    <section className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Book</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Dewey Decimal</label>
                    <input type='text' placeholder='Enter Dewey Decimal' onChange={e => setDeweyDec(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>ISBN</label>
                    <input type='text' placeholder='Enter ISBN' onChange={e => setIsbn(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Title</label>
                    <input type='text' placeholder='Enter Title' onChange={e => setTitle(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Author</label>
                    <input type='text' placeholder='Enter Author' onChange={e => setAuthor(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Publisher</label>
                    <input type='text' placeholder='Enter Publisher' onChange={e => setPublisher(e.target.value)} />
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Genre</label>
                    <input type='text' placeholder='Enter Genre' onChange={e => setGenre(e.target.value)}/>
                </div>

                <button>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default AddBook