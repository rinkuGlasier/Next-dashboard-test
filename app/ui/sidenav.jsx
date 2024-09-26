import Link from "next/link";
import NavLink from "./navlink";

export default function SideNav() {
    return (
        <div className="flex flex-col h-full px-3 py-4" >
            <Link href='/' className="flex flex-col py-10 px-5 bg-blue-500 mb-4 rounded-md  text-white">
                <h1 className="text-3xl">Acme</h1>
            </Link>

            <div className="flex grow md:flex-col md:space-x-0 md:space-y-4 flex-row justify-between ">
                <NavLink />
            </div>

            <div className="hidden h-full w-full grow rounded-md bg-blue-100 md:block mb-2"></div>

            <div className=" bg-blue-100 p-3 mb-4 rounded-md text-center">
                Sign - Out
            </div>
        </div>
    );
}