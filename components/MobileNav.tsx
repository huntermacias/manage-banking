'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"
import { XIcon } from "lucide-react"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-gray-900">
                    <div className="p-4 flex items-center">
                        <Link href="/" className="flex items-center gap-1">
                            <Image
                                src="/icons/logo.svg"
                                width={34}
                                height={34}
                                alt="Stratify logo"
                            />
                            <h1 className="text-26 font-ibm-plex-serif font-bold text-white">Stratify</h1>
                        </Link>
                    </div>
                    <SheetClose asChild>
                        <nav className="flex flex-col gap-6 py-2 px-4 text-white">
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                                return (
                                    <Link href={item.route} key={item.route}
                                        className={cn('flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-700 transition-colors', { 'bg-bank-gradient': isActive })}>
                                        <Image
                                            src={item.imgURL}
                                            alt={item.label}
                                            width={20}
                                            height={20}
                                            className={cn({
                                                'brightness-[3] invert-0': isActive
                                            })}
                                        />
                                        <p className={cn("text-sm font-semibold", { "text-white": isActive })}>
                                            {item.label}
                                        </p>

                                    </Link>
                                )
                            })}
                        </nav>
                    </SheetClose>
                    {/* <Footer user={user} type="mobile" /> */}
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
