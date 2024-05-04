import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = {
        firstName: 'Hunter',
        lastName: 'Macias',
    };

    return (
        <main className="flex h-screen w-full font-inter">
            {/* sidebar */}
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout bg-gray-900">
                    <Image src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <div className="">
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
