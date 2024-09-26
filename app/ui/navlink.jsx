'use client'
import Link from "next/link";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdPeopleOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const pathname = usePathname

const links = [{
    name: 'Home',
    href: '/dashboard',
    icon: IoHomeOutline
},
{
    name: 'Invoice',
    href: '/dashboard/invoices',
    icon: LiaFileInvoiceDollarSolid
},
{
    name: 'Customers',
    href: '/dashboard/customers',
    icon: MdPeopleOutline
},
];
export default function NavLink() {
    return (
        <main>
            {/* <Link href='/dashboard/customers'>customers</Link> */}
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx('bg-blue-100 py-3 px-2 flex items-center gap-5 rounded-md mb-2 text-black focus:text-white focus:bg-blue-500',
                            {
                                'bg-sky-100 text-black': pathname === link.href,
                            })
                        }
                    > <LinkIcon className="w-35" />
                        <p >{link.name}</p>
                    </Link>
                );
            })}
        </main >
    );
}