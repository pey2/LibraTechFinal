// Nav.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
  href: string;
  studentId?: string;
  children: React.ReactNode;
}

function NavItem({ href, studentId, children }: NavItemProps) {
  // Construct the link with the studentId as a query parameter
  const linkHref = studentId ? `${href}?StudentID=${studentId}` : href;

  return (
    <Link href={linkHref} passHref>
      <div className="ml-4 cursor-pointer">{children}</div>
    </Link>
  );
}

function Nav() {
  const router = useRouter();
  const studentId = Array.isArray(router.query.StudentID)
    ? router.query.StudentID[0] // Take the first element if it's an array
    : router.query.StudentID;   // Otherwise, use the single value or undefined

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavItem href="/Home" studentId={studentId}>
          
          <div className="text-2xl cursor-pointer"><strong>LibraTech</strong></div>
        </NavItem>

        <div className="flex gap-5 font-bold">
          <NavItem href="/studentBooks" studentId={studentId}>Books</NavItem>
          <NavItem href="/studentBorrow" studentId={studentId}>Borrowed Books</NavItem>
          <NavItem href="/" studentId={studentId}>Logout</NavItem>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
