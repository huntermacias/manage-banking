import Image from 'next/image';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full justify-between items-start bg-gradient-to-tl from-gray-900 to-gray-950 font-inter">
            {children}
            <div className="auth-asset rounded-l-xl  ">
                <Image
                    src="/icons/auth-image.svg"
                    alt="Auth image"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg shadow-xl"
                />
            </div>
        </main>
    );
}
