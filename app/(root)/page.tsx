import React from "react";
import HeaderBox from "@/uicomponents/HeaderBox";

const Home = () => {
    const loggedIn = { firstname: "Mani" };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstname || "Guest"}
                        subtext="Access and manage your account and transaction efficiently"
                    />
                </header>
            </div>
        </section>
    );
}

export default Home;