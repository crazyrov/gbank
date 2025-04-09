




const AccountStatement = () => {
    const data = [
        { date: "2023-01-15 10:30:25", type: "Credit", info: "Salary", amount: "Rs. 950.25" },
        { date: "2023-02-03 14:15:40", type: "Debit", info: "Online Shopping", amount: "Rs. 120.50" },
        { date: "2023-02-20 09:45:10", type: "Debit", info: "Loan Payment", amount: "Rs. 300.00" },
        { date: "2023-03-01 18:05:55", type: "Debit", info: "Electricity Bill", amount: "Rs. 75.80" },
        { date: "2023-03-15 12:50:30", type: "Credit", info: "Cashback", amount: "Rs. 15.00" },
        { date: "2023-04-10 08:20:15", type: "Debit", info: "Refund", amount: "Rs. 50.00" },
        { date: "2023-04-25 16:40:45", type: "Debit", info: "Loan Payment", amount: "Rs. 400.75" },
        { date: "2023-05-05 11:30:00", type: "Credit", info: "Salary", amount: "Rs. 1000.00" },
        { date: "2023-05-18 13:25:30", type: "Debit", info: "Electricity Bill", amount: "Rs. 80.60" },
        { date: "2023-06-01 17:10:20", type: "Debit", info: "Online Shopping", amount: "Rs. 145.20" },
        { date: "2023-06-15 09:55:45", type: "Debit", info: "Loan Payment", amount: "Rs. 350.00" },
        { date: "2023-07-03 14:30:10", type: "Credit", info: "Cashback", amount: "Rs. 20.50" },
        { date: "2023-07-22 18:50:35", type: "Debit", info: "Electricity Bill", amount: "Rs. 70.30" },
        { date: "2023-08-05 10:40:25", type: "Debit", info: "Online Shopping", amount: "Rs. 220.10" },
        { date: "2023-08-17 12:15:50", type: "Credit", info: "Salary", amount: "Rs. 970.40" },
        { date: "2023-09-02 09:05:20", type: "Debit", info: "Loan Payment", amount: "Rs. 500.00" },
        { date: "2023-09-15 15:20:45", type: "Credit", info: "Cashback", amount: "Rs. 18.75" },
        { date: "2023-09-30 17:30:10", type: "Debit", info: "Electricity Bill", amount: "Rs. 77.50" },
        { date: "2023-10-10 08:45:50", type: "Debit", info: "Online Shopping", amount: "Rs. 189.99" },
        { date: "2023-10-23 11:55:40", type: "Debit", info: "Loan Payment", amount: "Rs. 320.60" },
        { date: "2023-11-05 14:10:30", type: "Credit", info: "Salary", amount: "Rs. 1025.00" },
        { date: "2023-11-15 18:20:50", type: "Debit", info: "Refund", amount: "Rs. 45.00" },
        { date: "2023-11-25 09:40:15", type: "Debit", info: "Electricity Bill", amount: "Rs. 90.20" },
        { date: "2023-12-01 12:55:10", type: "Debit", info: "Loan Payment", amount: "Rs. 275.50" },
        { date: "2023-12-12 16:30:40", type: "Credit", info: "Cashback", amount: "Rs. 22.30" },
        { date: "2023-12-30 10:20:25", type: "Debit", info: "Online Shopping", amount: "Rs. 130.99" },
        { date: "2024-01-10 14:50:15", type: "Credit", info: "Salary", amount: "Rs. 1100.00" },
        { date: "2024-01-20 08:35:50", type: "Debit", info: "Electricity Bill", amount: "Rs. 85.90" },
        { date: "2024-02-05 17:10:30", type: "Debit", info: "Online Shopping", amount: "Rs. 175.80" },
        { date: "2024-02-18 11:25:20", type: "Debit", info: "Loan Payment", amount: "Rs. 600.00" },
        { date: "2024-03-01 15:40:10", type: "Credit", info: "Cashback", amount: "Rs. 19.40" },
        { date: "2024-03-15 09:30:45", type: "Debit", info: "Refund", amount: "Rs. 38.50" },
        { date: "2024-04-02 13:55:30", type: "Debit", info: "Electricity Bill", amount: "Rs. 92.60" },
        { date: "2024-04-12 18:25:15", type: "Credit", info: "Salary", amount: "Rs. 1200.00" },
        { date: "2024-04-20 10:40:50", type: "Debit", info: "Loan Payment", amount: "Rs. 700.50" },
        { date: "2024-05-05 12:30:30", type: "Debit", info: "Online Shopping", amount: "Rs. 225.99" },
        { date: "2024-05-15 15:20:40", type: "Credit", info: "Cashback", amount: "Rs. 25.00" },
        { date: "2024-06-01 08:45:10", type: "Debit", info: "Electricity Bill", amount: "Rs. 99.30" },
        { date: "2024-06-18 11:55:50", type: "Debit", info: "Online Shopping", amount: "Rs. 160.75" }
    ];

    return (
        <div style={styles.card}>
            <h3 style={styles.header}>Transaction History</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Transaction Tyle</th>
                        <th style={styles.th}>Additional Information</th>
                        <th style={styles.th}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td style={styles.td}>{row.date}</td>
                            <td style={styles.td}>{row.type}</td>
                            <td style={styles.td}>{row.info}</td>
                            <td style={styles.td}>{row.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    card: {
        width: "80%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        background: "#fff",
    },
    header: {
        textAlign: "center",
        marginBottom: "10px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    th: {
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "2px solid #ddd",
        textAlign: "start",
    },
    td: {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        textAlign: "start",
    },
};

export default AccountStatement;
