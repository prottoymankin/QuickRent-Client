import { getCurrentUser } from "@/lib/session";
import { CirclePlus, ClockArrowRotateLeft, CreditCard, Heart, House, ListUl, Person, Persons, Ticket} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";
import { GoSidebarCollapse } from "react-icons/go";
import { LiaBuildingSolid } from "react-icons/lia";

export async function DashboardSidebar () {
  const user = await getCurrentUser();

  const tenantNavItems = [
    { icon: Ticket, href: '/dashboard/tenant/my-bookings', label: 'My Bookings'},
    { icon: Heart, href: '/dashboard/tenant/favorites', label: 'Favorites'},
    { icon: Person, href: '/dashboard/tenant/profile', label: 'Profile'},
  ]

  const ownerNavItems = [
    { icon: House, href: '/dashboard/owner', label: 'Home'},
    { icon: CirclePlus, href: '/dashboard/owner/add-property', label: 'Add Property'},
    { icon: LiaBuildingSolid , href: '/dashboard/owner/my-properties', label: 'My Properties'},
    { icon: ClockArrowRotateLeft, href: '/dashboard/owner/booking-requests', label: 'Booking Requests'},
    { icon: Person, href: '/dashboard/owner/profile', label: 'Profile'},
  ];

  const adminNavItems = [
    { icon: Persons, href: '/dashboard/admin/all-users', label: 'All Users'},
    { icon: LiaBuildingSolid, href: '/dashboard/admin/all-properties', label: 'All Properties'},
    { icon: ListUl, href: '/dashboard/admin/all-bookings', label: 'All Bookings'},
    { icon: CreditCard, href: '/dashboard/admin/transactions', label: 'Transactions'},
    { icon: Person, href: '/dashboard/admin/profile', label: 'Profile'},
  ];

  const userRole = {
    'Tenant': tenantNavItems,
    'Owner': ownerNavItems,
    'Admin': adminNavItems,
  }

  const navItems = userRole[user?.role];

  const navContent = (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href}>
          <button
            className="
              group flex w-full items-center gap-3
              rounded-2xl border border-transparent
              px-4 py-3
              text-sm font-medium text-zinc-700
              transition-all duration-200
              hover:border-emerald-100
              hover:bg-emerald-50
              hover:text-emerald-600
              hover:shadow-sm
            "
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl bg-zinc-100
                transition-all duration-200
                group-hover:bg-emerald-100
              "
            >
              <item.icon className="size-5 text-zinc-500 group-hover:text-emerald-600" />
            </div>

            <span>{item.label}</span>
          </button>
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="border-r shrink-0 w-70 hidden md:block p-5">
        <Link href='/'>
          <Button 
            className='bg-emerald-600 hover:bg-emerald-700 mb-6 rounded-lg w-full'
          >
            Back to Homepage
          </Button>
        </Link>

        {navContent}
      </aside>

      <div className="block md:hidden">
        <Drawer>
          <Button 
            className='ml-5 mt-5 bg-emerald-600 text-white'
            isIconOnly
          >
            <GoSidebarCollapse />
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  {navContent}

                  <Link href='/'>
                    <Button 
                      className='bg-emerald-600 hover:bg-emerald-700 mt-6 rounded-lg w-full'
                    >
                      Back to Homepage
                    </Button>
                  </Link>
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}