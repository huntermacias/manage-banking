import HeaderBox from '@/components/HeaderBox';
import LineChart from '@/components/LineChart';
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
            { currentBalance: 100, name: 'Bank of America' }
        ],
        email: 'huntermacias20@gmail.com'
    };

    return (
        <section className="home bg-gray-950 min-h-screen">
            <div className="container mx-auto px-4 flex justify-evenly">
                <div className="content-area w-full lg:w-3/4 p-4">
                    <header className="mt-16 mb-8 space-y-8 w-3/4">
                        <HeaderBox
                            type="greeting"
                            title="Welcome back, "
                            user={loggedIn.firstName}
                            subtext="Access & Manage your account and transactions."
                        />
                        <TotalBalanceBox
                            accounts={loggedIn.banks}
                            totalBanks={loggedIn.banks.length}
                            totalCurrentBalance={loggedIn.banks.reduce((acc, bank) => acc + bank.currentBalance, 0)}
                        />
                    </header>
                    <LineChart accounts={loggedIn.banks} />
                </div>
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={loggedIn.transactions}
                banks={loggedIn.banks}
            />
        </section>
    );
};

export default Home;
