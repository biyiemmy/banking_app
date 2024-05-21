import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <main className="">
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              title="Welcome"
              type="greeting"
              subtext="Access and manage your account and transactions efficiently."
              user={loggedIn?.name || "Guest"}
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1000.45}
            />
          </header>

          <RecentTransactions />
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
        />
      </section>
    </main>
  );
};

export default Home;
