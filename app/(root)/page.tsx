import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedIn = { firstName: "Emmanuel" };

  return (
    <main className="">
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              title="Welcome"
              type="greeting"
              subtext="Access and manage your account and transactions efficiently."
              user={loggedIn.firstName || "Guest"}
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1000250.45}
            />
          </header>
        </div>
      </section>
    </main>
  );
}
