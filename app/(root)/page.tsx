import HeaderBox from '@/components/HeaderBox';
import LineChart from '@/components/LineChart';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

// const loggedIn = {
//     firstName: 'Hunter',
//     lastName: 'Macias',
//     transactions: [],
//     banks: [
//         { currentBalance: 1255.44, name: 'Chase' },
//         { currentBalance: 100, name: 'Bank of America' }
//     ],
//     email: 'huntermacias20@gmail.com'
// };
const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const loggedInTest = {
        firstName: 'Hunter',
        lastName: 'Macias',
        transactions: [],
        banks: [
            { currentBalance: 1255.44, name: 'Chase' },
            { currentBalance: 100, name: 'Bank of America' }
        ],
        email: 'huntermacias20@gmail.com'
    };
    // const accounts = await getAccounts({
    //     userId: loggedIn.$id
    // })

    // if (!accounts) return;

    // const accountsData = accounts?.data;
    // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

    // const account = await getAccount({ appwriteItemId })

    return (
        <section className="home bg-[#00000f] min-h-screen flex flex-col md:flex-row">
            <div className="grid grid-cols-10 w-full relative">
                <div className="p-4 col-span-7">
                    <header className="mt-16 mb-8 space-y-8">
                        <HeaderBox
                            type="greeting"
                            title="Welcome back, "
                            user={loggedIn.name}
                            subtext="Access & Manage your account and transactions."
                        />

                        <TotalBalanceBox
                            accounts={[
                                {
                                    id: '1',
                                    currentBalance: 1255.44,
                                    availableBalance: 1255.44,
                                    appwriteItemId: '1',
                                    institutionId: '1',
                                    shareableId: '1',
                                    name: 'Chase',
                                    officialName: 'Chase Bank',
                                    type: 'Checking',
                                    subtype: 'Checking',
                                    mask: '1234',
                                },
                            ]}
                            totalBanks={2}
                            totalCurrentBalance={2222}
                        />
                    </header>
                    <LineChart accounts={loggedInTest.banks} />
                </div>
                <div className=" right-0 top-0 h-screen">
                    <RightSidebar
                        user={loggedIn}
                        transactions={loggedIn.transactions}
                        banks={loggedInTest.banks}
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
