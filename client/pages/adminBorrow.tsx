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
            <div>
                <div>
                    <table className='table-fixed'>
                        <thead className="border-b font-medium">
                            <tr>
                                <th>Student ID</th>
                                <th>Dewey Decimal</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Date Borrowed</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredBooks.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.StudentID}</td>
                                        <td>{data.DeweyDec}</td>
                                        <td>{data.Title}</td>
                                        <td>{data.Author}</td>
                                        <td>{data.Genre}</td>
                                        <td>{data.DateBorrow}</td>
                                        <td>{data.DueDate}</td>
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