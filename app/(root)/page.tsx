import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
    const loggedIn = {
        firstName: 'Hunter',
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
        </section>
    );
};

export default Home;
