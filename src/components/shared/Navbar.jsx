'use client';

import { useState } from "react";
import { Link, Button, toast, Avatar, Dropdown, Label } from "@heroui/react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const router = useRouter();

  const { data } = authClient.useSession();
  const user = data?.user;
  
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Logout successful');
          router.push("/login");
        },
      },
    });
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <Link
          className='font-bold text-3xl' 
          href='/'
        >
          QuickRent
        </Link>

        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-properties">All Properties</Link>
          </li>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
        </ul>

        
        <div className='flex gap-2'>
          {
            !user && (
              <div className="hidden md:flex gap-2">
                <Link href='/login'>
                  <Button>Login</Button>
                </Link>

                <Link href='/register'>
                  <Button>Register</Button>
                </Link>
              </div>
            )
          }
          
          {
            user && (
              <div className='flex gap-2 items-center'>
                <Avatar>
                  <Avatar.Image 
                    alt={user?.name}
                    className='object-cover'
                    src={user?.image} 
                  />

                  <Avatar.Fallback>
                    { user?.name.charAt(0).toUpperCase() }
                  </Avatar.Fallback>
                </Avatar>

                <Button
                  className='hidden md:flex'
                  onClick={handleLogout}
                  variant="outline"
                >
                  <RiLogoutCircleLine />
                  Logout
                </Button>
              </div>
            )
          }

          <div className="md:hidden">
            <Dropdown>
              <Button
                isIconOnly 
                aria-label="Menu" 
                variant="tertiary"
              >
                <IoMdMenu />
              </Button>

              <Dropdown.Popover className={'max-w-xs w-full md:hidden'}>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                  <Dropdown.Item>
                    <Link 
                      className='hover:no-underline w-full' 
                      href="/"
                    >
                      <Label>Home</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link 
                      className='hover:no-underline w-full'
                      href="/all-properties"
                    >
                      <Label>All Properties</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link 
                      className='hover:no-underline w-full'
                      href="/Dashboard"
                    >
                      <Label>Dashboard</Label>
                    </Link>
                  </Dropdown.Item>

                  {
                    user ? (
                      <Dropdown.Item 
                        variant="danger" 
                        onClick={handleLogout}
                      >
                        <Label className="flex items-center gap-2">
                          <RiLogoutCircleLine />
                          Logout
                        </Label>
                      </Dropdown.Item>
                    ) : (
                      <>
                        <Dropdown.Item>
                          <Link 
                            className='no-underline w-full' 
                            href='/login'
                          >
                            <Label className="flex items-end">
                              Login
                              <GoArrowUpRight />
                            </Label>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Item>
                          <Link 
                            className='no-underline w-full' 
                            href='/register'
                          >
                            <Label className="flex items-end" >
                              Register
                              <GoArrowUpRight />
                            </Label>
                          </Link>
                        </Dropdown.Item>
                      </>
                    )
                  }
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>

      </header>
    </nav>
  );
}

export default Navbar;