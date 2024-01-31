import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { error } from 'console';

interface Book {
  DeweyDec: number;
  ISBN: string;
  Title: string;
  Author: string;
  Publisher: string;
  Genre: string;
  Status: string;
}

function adminBooks() {

    const[book, setBook] = useState<Book[]>([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then(res => setBook(res.data))
        .catch(err => console.log(err))
    }, [])

  const handleDelete = async (id: any) => {
    try{
        await axios.delete('http://localhost:5000/delete/' + id)
        window.location.reload()
    }catch(err){
        console.log(err);
    }
  }
    
  return (
    <section className='d-flex vh-100 justify-content-center align-items-center'>
        <div>
            <div className='w-50 bg-white rounded'>
                <Button>
                    <Link href="/AddBook">Add +</Link>
                </Button>
                <table>
                    <thead>
                        <tr>
                            <th>Dewey Decimal</th>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Genre</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.DeweyDec}</td>
                                    <td>{data.ISBN}</td>
                                    <td>{data.Title}</td>
                                    <td>{data.Author}</td>
                                    <td>{data.Publisher}</td>
                                    <td>{data.Genre}</td>
                                    <td>{data.Status}</td>
                                    <td>
                                        <Button>
                                            <Link href={`/UpdateBook?DeweyDec=${data.DeweyDec}`}>Update</Link>
                                        </Button>
                                        <button onClick={e => handleDelete(data.DeweyDec)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default adminBooks