
import AnimatedCounter from './AnimatedCounter'
import DOughnutChart from './DOughnutChart'


const TotalBalancebox = ({
    accounts = [], totalBanks, totalCurrentBalance
}:  TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
        <DOughnutChart accounts={accounts} />
        </div>

    <div className="flex flex-col gap-6">
        <h2 className="header-2">
            Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col flex-center gap-1">
            <p className="total-balance-label">
                Total Current Balance 
            </p>

            <p className="total-balance-amount flex-center gap-2">
             <AnimatedCounter amount={totalCurrentBalance} />               
            </p> 
        </div>
    </div>
    </section>
  )
}

export default TotalBalancebox
