import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';


interface Book {
  DeweyDec: string;
  Title: string;
  Author: string;
  Genre: string;
  DateBorrow: string;
  DueDate: string;
}

function studentBorrow() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const  studentId  = router.query.StudentID;

  useEffect(() => {
    // Fetch book details using DeweyDec
    axios.get(`http://localhost:5000/borrowedBooks/` + studentId)
      .then(res => {
        const formattedBooks = res.data.map((book: { DateBorrow: Date; DueDate: Date; }) => {
          return {
            ...book,
            DateBorrow: new Date(book.DateBorrow).toISOString().split('T')[0],
            DueDate: new Date(book.DueDate).toISOString().split('T')[0],
          };
        });
        setBooks(formattedBooks);
        console.log(formattedBooks)
      })
      .catch(err => console.log(err));
  }, [studentId]);
  
  // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-green-100">
      <Nav />
      <section>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pr-36 border border-gray-300 rounded m-5"
        />

        <table>
          <thead>
            <tr>
              <th>DeweyDecimal</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Date Borrowed</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((data, i) => (
              <tr key={i}>
                <td>{data.DeweyDec}</td>
                <td>{data.Title}</td>
                <td>{data.Author}</td>
                <td>{data.Genre}</td>
                <td>{data.DateBorrow}</td>
                <td>{data.DueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default studentBorrow