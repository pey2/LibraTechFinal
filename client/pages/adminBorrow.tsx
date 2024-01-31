import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button';
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

function adminBorrow() {

    const[books, setBooks] = useState<Book[]>([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/adminborrow')
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
    }, [])


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
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pr-36 border border-gray-300 rounded m-5"
        />
        <div>
            <div>
                <table className='table-fixed'>
                    <thead className="border-b font-medium">
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.Title}</td>
                                    <td>{data.Author}</td>
                                    <td>{data.Genre}</td>
                                    <td>{data.Status}</td>
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

export default adminBorrow