'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
// import Footer from './Footer'
// import PlaidLink from './PlaidLink'
import { motion } from "framer-motion";


const Sidebar = ({ user }: any) => {
    const pathname = usePathname();

    const loggedIn = {
        firstName: 'Hunter',
    }

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Stratify logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Stratify</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                    return (
                        <Link href={item.route} key={item.label}
                            className={cn('sidebar-link relative leading-6 no-underline', { 'bg-bank-gradient': isActive })}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>

                            {item.label}
                            {isActive ? (
                                <motion.div className="absolute -bottom-[3px] left-0 right-0 h-[1px]">
                                    <svg width="70" height="8" viewBox="0 0 37 8" fill="none">
                                        <motion.path
                                            d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 8.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 85.8368 3.7794"
                                            stroke="#7043EC"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{
                                                strokeDasharray: 84.20591735839844,
                                                strokeDashoffset: 84.20591735839844,
                                            }}
                                            animate={{
                                                strokeDashoffset: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                            }}
                                        />
                                    </svg>
                                </motion.div>
                            ) : null
                            }

                        </Link>
                    )
                })}

                {/* <PlaidLink user={user} /> */}

            </nav>


            {/* <Footer user={loggedIn} /> */}
        </section>
    )
}

export default Sidebar