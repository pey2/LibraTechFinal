import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button';
import AdminNav from './AdminNav';

interface Book {
  StudentID: string;
  DeweyDec: string;
  Title: string;
  Author: string;
  Genre: string;
  DateBorrow: string;
  DueDate: string;
}

function adminBorrow() {

    const[books, setBooks] = useState<Book[]>([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch book details using DeweyDec
        axios.get(`http://localhost:5000/adminborrow`)
          .then(res => {
            const formattedBooks = res.data.map((book: { DateBorrow: Date; DueDate: Date; }) => {
              return {
                ...book,
                DateBorrow: new Date(book.DateBorrow).toISOString().split('T')[0],
                DueDate: new Date(book.DueDate).toISOString().split('T')[0],
              };
            });
            setBooks(formattedBooks);
          })
          .catch(err => console.log(err));
      }, []);
    
    const returnBook = async (id: any) => {
        try {
          axios.put(`http://localhost:5000/returnBook/` + id,{});
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
    };

    // Filter books based on the search term
    const filteredBooks = books.filter((book) =>
        book.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className='bg-green-100 h-screen'>
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
            <div>
                <div>
                    <table className='table-fixed border border-collapse bg-white' style={{ width: '100%', tableLayout: 'fixed' }}>
                        <thead className="border-b font-medium">
                            <tr>
                                <th className="border p-2">Student ID</th>
                                <th className="border p-2">Dewey Decimal</th>
                                <th className="border p-2">Title</th>
                                <th className="border p-2">Author</th>
                                <th className="border p-2">Genre</th>
                                <th className="border p-2">Date Borrowed</th>
                                <th className="border p-2">Due Date</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredBooks.map((data, i) => (
                                    <tr key={i}>
                                        <td className="border p-2">{data.StudentID}</td>
                                        <td className="border p-2">{data.DeweyDec}</td>
                                        <td className="border p-2">{data.Title}</td>
                                        <td className="border p-2">{data.Author}</td>
                                        <td className="border p-2">{data.Genre}</td>
                                        <td className="border p-2">{data.DateBorrow}</td>
                                        <td className="border p-2">{data.DueDate}</td>
                                        <td>
                                            <Button className='bg-green-800' onClick={e => returnBook(data.DeweyDec)}>Returned</Button>
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

export default adminBorrow