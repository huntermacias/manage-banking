import AnimateCount from './AnimateCount';
import DoughnutChart from './DoughnutChart';
import react from 'react';

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
    return (
        <section className="total-balance bg-gray-950">
            <div className="p-4 bg-blue-950/50 rounded-lg">
                <DoughnutChart accounts={accounts} />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">
                    Connected Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-1 text-white">
                    <p className="text-sm">Total Balance:</p>
                    <div className="total-balance-amount flex items-center gap-2 text-2xl font-bold">
                        <AnimateCount amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TotalBalanceBox;
