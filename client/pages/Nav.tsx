import React from 'react';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,  
  navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from 'next/link';

function Nav() {
  return (
    <section className='bg-green-800 text-white'>
      <div className='text-2xl'>
      <NavigationMenu className='text-2xl p-4'>
        <NavigationMenuItem style={{ listStyle: 'none' }}>
          <Link href="/Home" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              LibraTech
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuList className='ml-auto flex'>
          <NavigationMenuItem style={{ listStyle: 'none' }}>
            <Link href="/Books" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Books
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem style={{ listStyle: 'none' }}>
            <Link href="/BorrowedBooks" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Borrowed Books
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem style={{ listStyle: 'none' }}>
            <Link href="/" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Logout
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      </div>
    </section>
  );
}

export default Nav;
