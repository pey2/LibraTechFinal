import React from 'react';
import Link from 'next/link';

function AdminNav() {
  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/adminBooks" passHref>
          <div className="text-2xl cursor-pointer"><strong>LibraTech</strong></div>
        </Link>

        <div className="flex gap-5 font-bold">
          <NavItem href="/adminBooks">Books</NavItem>
          <NavItem href="/adminBorrow">Borrowed Books</NavItem>
          <NavItem href="/adminUsers">Manage Users</NavItem>
          <NavItem href="/">Logout</NavItem>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <Link href={href} passHref>
      <div className="ml-4 cursor-pointer">{children}</div>
    </Link>
  );
}

export default AdminNav;
