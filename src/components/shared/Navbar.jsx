'use client';

import { Button, toast, Avatar, Dropdown, Label } from "@heroui/react";
import { IoMdMenu } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { GoArrowUpRight } from "react-icons/go";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { data } = authClient.useSession();
  const user = data?.user;

  console.log(user);
  
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

  const dashboardRoutes  = {
    'Tenant': '/dashboard/tenant/my-bookings',
    'Owner': '/dashboard/owner',
    'Admin': '/dashboard/admin/all-properties',
  }

  const dashboardPath = dashboardRoutes[user?.role];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="block">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
            Quick<span className="text-emerald-600">Rent</span>
          </h1>
        </Link>

        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link
              href="/"
              className={`transition-colors ${
                pathname === "/"
                  ? "font-semibold text-emerald-600"
                  : "hover:text-emerald-600"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-properties"
              className={`transition-colors ${
                pathname.startsWith("/all-properties")
                  ? "font-semibold text-emerald-600"
                  : "hover:text-emerald-600"
              }`}
            >
              All Properties
            </Link>
          </li>

          {user && (
            <li>
              <Link
                href={dashboardPath}
                className={`transition-colors ${
                  pathname.startsWith("/dashboard")
                    ? "font-semibold text-emerald-600"
                    : "hover:text-emerald-600"
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        
        <div className='flex gap-2'>
          {
            !user && (
              <div className="hidden md:flex gap-2">
                <Link
                  href='/login'
                >
                  <Button
                    className="border-emerald-600 rounded-lg text-emerald-600 hover:bg-emerald-50"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>

                <Link 
                  href='/register'
                >
                  <Button
                    className='bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white'
                  >
                    Register
                  </Button>
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
                  className='hidden md:flex border-red-500 rounded-lg text-red-500 hover:bg-red-50'
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
                className='bg-emerald-600 hover:bg-emerald-700 text-white'
                isIconOnly 
                aria-label="Menu" 
              >
                <IoMdMenu />
              </Button>

              <Dropdown.Popover className={'max-w-xs w-full md:hidden'}>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                  <Dropdown.Item className="hover:bg-emerald-50">
                    <Link 
                      className='w-full' 
                      href="/"
                    >
                      <Label>Home</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="hover:bg-emerald-50">
                    <Link 
                      className='w-full'
                      href="/all-properties"
                    >
                      <Label>All Properties</Label>
                    </Link>
                  </Dropdown.Item>
                  {
                    user && (
                      <Dropdown.Item className="hover:bg-emerald-50">
                        <Link 
                          className='w-full'
                          href="/Dashboard"
                        >
                          <Label>Dashboard</Label>
                        </Link>
                      </Dropdown.Item>
                    )
                  }

                  {
                    user ? (
                      <Dropdown.Item
                        variant="danger" 
                        onClick={handleLogout}
                        className='hover:bg-red-100'
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