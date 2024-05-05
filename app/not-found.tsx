import React from 'react';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 to-gray-800">
            <div className="p-8 md:p-20 max-w-md bg-red-500/20 backdrop-blur-sm rounded-xl border border-gray-200/10 shadow-xl text-center">
                <h1 className="text-white text-6xl font-bold mb-4 animate-pulse">404</h1>
                <p className="text-gray-300 text-xl mb-6">Page Not Found</p>
                <p className="text-gray-400 mb-8">We can't seem to find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <HomeIcon size={20} className='mr-2' />
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
