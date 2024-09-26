import SideNav from "../ui/sidenav";


export default function Layout({ children }) {
    return (
        <div className="h-screen flex flex-col md:flex-row md:overflow-hidden">
            <div className="w-full md:w-64 flex-none">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}
