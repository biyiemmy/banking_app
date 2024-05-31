import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  console.log(appwriteItemId);

  const account = await getAccount({ appwriteItemId });
  console.log(account);

  console.log({
    accountsData,
    account,
  });

  return (
    <main className="">
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              title="Welcome"
              type="greeting"
              subtext="Access and manage your account and transactions efficiently."
              user={loggedIn?.firstName || "Guest"}
            />

            <TotalBalanceBox
              accounts={accountsData}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />
          </header>

          <RecentTransactions
            accounts={accountsData}
            transactions={accounts?.transactions}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          />
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={accounts?.transactions}
          banks={accountsData?.slice(0, 2)}
        />
      </section>
    </main>
  );
};

export default Home;
