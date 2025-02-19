import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalancebox from '@/components/ui/TotalBalancebox';

function Home() {
    const LoggedIn = { firstname: "Mani" };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={LoggedIn?.firstname || "Guest"}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    < TotalBalancebox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
        </section>
    );
}

export default Home;