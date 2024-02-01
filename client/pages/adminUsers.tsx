import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AdminNav from './AdminNav';

interface User {
  StudentID: number;
  LastName: string;
  FirstName: string;
  MidInitial: string;
  Email: string;
  ContactNum: string;
}

function adminUsers() {
  const[users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      axios.get('http://localhost:5000/getUsers')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = async (id: any) => {
    try{
        await axios.delete('http://localhost:5000/deleteUser/' + id)
        window.location.reload()
    }catch(err){
        console.log(err);
    }
  }
    
  const filteredUser = users.filter((user) =>
    user.StudentID.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-green-100'>
        <AdminNav />
   <section className='d-flex vh-100 justify-content-center align-items-center p-6'>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by Student ID "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pr-36 border border-gray-300 rounded m-5"
        />
        <div>
            <div>
                <table className='table-fixed'>
                    <thead className="border-b font-medium">
                        <tr 
                        >
                            <th>Student ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Initial</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUser.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.StudentID}</td>
                                    <td>{data.LastName}</td>
                                    <td>{data.FirstName}</td>
                                    <td>{data.MidInitial}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.ContactNum}</td>
                                    <td>
                                        <Button className='bg-green-800'>
                                            <Link href={`/UpdateUser?StudentID=${data.StudentID}`}>Update</Link>
                                        </Button>
                                        <Button onClick={e => handleDelete(data.StudentID)}
                                        className='bg-green-800'>Delete</Button>
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

export default adminUsers