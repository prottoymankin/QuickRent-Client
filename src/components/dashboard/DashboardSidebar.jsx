import { getCurrentUser } from "@/lib/session";
import {Bars, CirclePlus, ClockArrowRotateLeft, CreditCard, Heart, House, ListUl, Person, Persons, Ticket} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
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
    { icon: ListUl, href: '/dashboard/admin/all-boolings', label: 'All Bookings'},
    { icon: CreditCard, href: '/dashboard/admin/transactions', label: 'Transactions'},
  ];

  const userRole = {
    'Tenant': tenantNavItems,
    'Owner': ownerNavItems,
    'Admin': adminNavItems,
  }

  const navItems = userRole[user?.role];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="border-r shrink-0 w-60 hidden md:block">
        {navContent}
      </aside>

      <div className="block md:hidden">
        <Drawer>
          <Button 
            isIconOnly
            variant="tertiary"
          >
            <Bars />
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
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>

  );
}