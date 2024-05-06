import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'


const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            <section className='flex flex-col pb-8'>
                <div className='profile-banner' />
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='text-5xl font-semibold text-indigo-500'>{user.name[0]}</span>
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {user.name}
                        </h1>
                        <p className='profile-email'>{user.email}</p>
                    </div>
                </div>
            </section>

            <section className='banks'>
                <div className='flex w-full justify-between items-center mb-4'>
                    <h2 className='header-2'>
                        My Banks
                    </h2>
                    <Link href='/add-bank' className='flex items-center gap-2'>
                        <Image
                            src='/icons/plus.svg'
                            width={20}
                            height={20}
                            alt='Add Bank'
                        />
                        <h2 className='text-lg font-semibold text-gray-400'>Add Bank</h2>
                    </Link>
                </div>

                {banks?.length > 0 && (
                    <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                        <div className='relative z-10'>
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={user.name}
                                showBalance={false}
                            />
                        </div>
                        {banks[1] && (
                            <div className='absolute right-0 top-8 z-0 w-[90%]'>
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={user.name}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    )
}

export default RightSidebar

// 'use client';
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { motion } from 'framer-motion';
// import BankCard from './BankCard';

// // Define motion custom components if needed
// const MotionBankCard = motion(BankCard);

// // Animation variants for fading elements in
// const fadeInVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8 } }
// };


// const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <aside className='right-sidebar'>
//             <motion.section className='flex flex-col pb-8'
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInVariants}>
//                 <div className='profile-banner' />
//                 <div className='profile'>
//                     <div className='profile-img'>
//                         <span className='text-5xl font-semibold text-indigo-500'>{user.name[0]}</span>
//                     </div>
//                     <div className='profile-details'>
//                         <h1 className='profile-name'>
//                             {user.name}
//                         </h1>
//                         <p className='profile-email'>{user.email}</p>
//                     </div>
//                 </div>
//             </motion.section>

//             <motion.section className='banks'
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInVariants}>
//                 <div className='flex w-full justify-between items-center mb-4'>
//                     <h2 className='header-2'>My Banks</h2>
//                     <Link href='/add-bank' className='flex items-center gap-2'>
//                         <motion.div whileHover={{ scale: 1.1 }}>
//                             <Image
//                                 src='/icons/plus.svg'
//                                 width={20}
//                                 height={20}
//                                 alt='Add Bank'
//                             />
//                         </motion.div>
//                         <h2 className='text-lg font-semibold text-gray-400'>Add Bank</h2>
//                     </Link>
//                 </div>

//                 {banks?.length > 0 && (
//                     <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
//                         {banks.map((bank, index) => (
//                             <MotionBankCard
//                                 key={bank.$id}
//                                 drag="y"  // Allow vertical dragging
//                                 dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}  // Constrain drag to vertical movement within its initial position
//                                 onDragStart={() => setActiveIndex(index)}
//                                 whileDrag={{ zIndex: 100 }}  // Bring to front when dragged
//                                 initial="hidden"
//                                 animate="visible"
//                                 variants={fadeInVariants}
//                                 className="bank-card"
//                                 account={bank}
//                                 userName={user.name}
//                                 showBalance={false}
//                                 style={{
//                                     zIndex: index === activeIndex ? 100 : banks.length - index,
//                                     position: 'absolute',
//                                     top: `${index * 8}px`,  // Adjust the vertical position dynamically based on index
//                                     right: 0,  // Align to the right within the sidebar
//                                     left: 0   // Ensure it spans the width of the sidebar
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}

//             </motion.section>
//         </aside>
//     );
// }

// export default RightSidebar