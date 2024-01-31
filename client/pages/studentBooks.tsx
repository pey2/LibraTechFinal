import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Nav from './Nav';

interface Book {
  DeweyDec: number;
  Title: string;
  Author: string;
  Genre: string;
  Status: string;
}

function StudentBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/borrow')
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pr-36 border border-gray-300 rounded m-5"
        />

        <table>
          <thead>
            <tr>
              <th>Dewey Decimal</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((data, i) => (
              <tr key={i}>
                <td>{data.DeweyDec}</td>
                <td>{data.Title}</td>
                <td>{data.Author}</td>
                <td>{data.Genre}</td>
                <td>{data.Status}</td>
                <td>
                  <Button className='bg-green-800'>Borrow</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default StudentBooks;
