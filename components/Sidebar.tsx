'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
// import PlaidLink from './PlaidLink';
import { motion } from 'framer-motion';

const Sidebar = ({ user }: any) => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Stratify logo"
                    />
                    <h1 className="sidebar-logo">Stratify</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link href={item.route} key={item.label}
                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                        >
                            <div className="relative w-6 h-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    layout="fill"
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>
                            <span className={cn('sidebar-label', { 'text-white': isActive })}>{item.label}</span>
                            {isActive && (
                                <motion.div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" layoutId="underline" />
                            )}
                        </Link>
                    );
                })}

                {/* <PlaidLink user={user} /> */}
            </nav>

            <Footer user={user} />
        </section>
    );
}

export default Sidebar;
