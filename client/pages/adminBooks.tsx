import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AdminNav from './AdminNav';

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

    const[books, setBooks] = useState<Book[]>([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then(res => setBooks(res.data))
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

    // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
  return (
    <div className='bg-green-100'>
        <AdminNav />
   <section className='d-flex vh-100 justify-content-center align-items-center p-6'>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pr-36 border border-gray-300 rounded m-5"
        />
        <Button className='bg-green-800'>
            <Link href="/AddBook">Add +</Link>
        </Button>
        <div>
            <div>
                <table className='table-fixed border border-collapse bg-white' style={{ width: '100%', tableLayout: 'fixed' }}>
                    <thead className="border-b font-medium">
                        <tr 
                        >
                            <th className="border p-2">Dewey Decimal</th>
                            <th className="border p-2">ISBN</th>
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Author</th>
                            <th className="border p-2">Publisher</th>
                            <th className="border p-2">Genre</th>
                            <th className="border p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredBooks.map((data, i) => (
                                <tr key={i}>
                                    <td className="border p-2">{data.DeweyDec}</td>
                                    <td className="border p-2">{data.ISBN}</td>
                                    <td className="border p-2">{data.Title}</td>
                                    <td className="border p-2">{data.Author}</td>
                                    <td className="border p-2">{data.Publisher}</td>
                                    <td className="border p-2">{data.Genre}</td>
                                    <td className={`border p-2 font-bold text-center ${data.Status === 'Available' ? 'text-green-800' : 'text-red-500'}`}>{data.Status}</td>
                                    <td className="border p-2">
                                        <Button className='bg-green-800 w-16'>
                                            <Link href={`/UpdateBook?DeweyDec=${data.DeweyDec}`}>Update</Link>
                                        </Button> <span></span>
                                        <Button onClick={e => handleDelete(data.DeweyDec)}
                                        className='bg-green-800 w-16'>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</div>
 
  )
}

export default adminBooks