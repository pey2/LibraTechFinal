import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

function UpdateBook() {
    const router = useRouter();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [midInitial, setMidInitial] = useState('');
    const [email, setEmail] = useState('');
    const [contactNum, setContactNum] = useState('');

    const { StudentID } = router.query;

    useEffect(() => {
        if (!StudentID) {
            console.error("DeweyDec is undefined");
            return;
        }

        // Fetch book details using DeweyDec
        axios.get(`http://localhost:5000/getUser/` + StudentID)
            .then(res => {
                const userData = res.data[0]; // Assuming your API response contains book details
                setLastName(userData.LastName);
                setFirstName(userData.FirstName);
                setMidInitial(userData.MidInitial);
                setEmail(userData.Email);
                setContactNum(userData.ContactNum);
            })
            .catch(err => console.log(err));
    }, [StudentID]);

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();

        if (!StudentID) {
            console.error("DeweyDec is undefined");
            return;
        }

        axios.put(`http://localhost:5000/updateUser/` + StudentID, { lastName, firstName, midInitial, email, contactNum })
            .then(res => {
                console.log(res);
                window.location.href = "/adminUsers";
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='bg-green-100 h-screen'>
        <section className='h-screen flex items-center justify-center'>
            <div className='container mx-auto box-content h-90 w-80 p-4 border-4 bg-green-500 rounded-xl'>
                <form onSubmit={handleSubmit}>
                <div className='text-3xl mb-5 text-center'>
                 <strong>UPDATE BOOK</strong>
                 </div>
                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>Last Name</label> <br />
                        <input type='text' placeholder='Enter ISBN' value={lastName} 
                        onChange={e => setLastName(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>First Name</label> <br />
                        <input type='text' placeholder='Enter Title' value={firstName} 
                        onChange={e => setFirstName(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>Middle Initial</label> <br />
                        <input type='text' placeholder='Enter Author' value={midInitial} 
                        onChange={e => setMidInitial(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='' className='font-semibold'>Email</label> <br />
                        <input type='text' placeholder='Enter Publisher' value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='' className='font-semibold'>Contact Number</label> <br />
                        <input type='text' placeholder='Enter Genre' value={contactNum} 
                        onChange={e => setContactNum(e.target.value)} 
                        className='rounded w-80'/>
                    </div>

                <div className='text-center'>
                    <Button className='bg-green-800'>Update</Button>
                </div>
                </form>
            </div>
        </section>
        </div>
    );
}

export default UpdateBook;
