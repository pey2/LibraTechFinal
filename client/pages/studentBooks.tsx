import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Nav from './Nav';
import { useRouter } from 'next/router';


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
  const router = useRouter();
  const studentId = router.query.StudentID

  const [dateBorrowed, setDateBorrowed] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();

    const formattedDateBorrowed = currentDate.toISOString().split('T')[0];
    setDateBorrowed(formattedDateBorrowed);

    const dueDateObject = new Date(currentDate);
    dueDateObject.setDate(currentDate.getDate() + 14); // Assuming a 14-day borrowing period
    const formattedDueDate = dueDateObject.toISOString().split('T')[0];
    setDueDate(formattedDueDate);
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/borrow')
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const borrowBook = async (id: any) => {
    try {
      // Fetch book details using DeweyDec
      const response = await axios.get(`http://localhost:5000/getBook/` + id);
      const bookData = response.data[0]; // Assuming your API response contains book details
  
      var title = bookData.Title
      var author = bookData.Author
      var genre = bookData.Genre

      // Continue with the borrowBook logic
      axios.put('http://localhost:5000/borrowBook/' + id, { studentId, id, title, author, genre, dateBorrowed, dueDate });
      console.log("Book borrowed successfully!");
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
                  <Button className='bg-green-800' onClick={e => borrowBook(data.DeweyDec)}>Borrow</Button>
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
