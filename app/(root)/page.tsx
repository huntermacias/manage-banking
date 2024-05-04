import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
    const loggedIn = {
        firstName: 'Hunter',
        lastName: 'Macias',
        transactions: [],
        banks: [
            { currentBalance: 1255.44, name: 'Chase' },
            { currentBalance: 0, name: 'Bank of America' }
        ],
        email: 'huntermacias20@gmail.com'
    };

    return (
        <section className="home bg-gray-950 min-h-screen p-2">
            <div className="container mx-auto px-4">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access & Manage your account and transactions."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1255.44}
                    />
                </header>

            </div>
            <RightSidebar
                // @ts-ignore
                user={loggedIn}
                transactions={[]}
                // @ts-ignore
                banks={loggedIn.banks}
            />
        </section>
    );
};

export default Home;
