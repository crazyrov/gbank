
import { useSelector } from "react-redux";
import Card from "./card";
import { logout } from "./userSlice";
import { useDispatch } from "react-redux";
import AccountStatement from "./AccountStatement";
import UserInformationForm from "./UserInformationForm";
import './Dashboard.css';

const Dashboard = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }


    const accountInformation = new Map([
        ['Account Number', user.account_number],
        ['Account Balance', user.balance]
    ]);
    const userInformation = new Map([
        ['Name ', user.name],
        ['Phone ', user.phone],
        ['Email', user.email],
        ['Address', user.address]
    ]);

    const Header = () => {
        return (
            <header className="header">
                <div style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', height: '50px' }}>
                    <p className="userName">Hello, {user.name}</p>
                </div >
                <div style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', height: '50px' }}>
                    <button onClick={handleLogout} className="logoutButton">Logout</button>
                    <img src={user.image} alt="Logo" referrerPolicy="no-referrer" />
                </div>


            </header>
        );
    };
    const view = user.existing_user === true ? (
        <>
            <Header></Header>
            <div style={{
                display: "flex",
                justifyContent: "center", /* Centers horizontally */
                gap: "20px", /* Adds spacing */
                padding: "20px"
            }}>            <Card background="" title="Account" details={accountInformation} style={{ padding: "0px" }}></Card>
                <Card title="Account Holder" details={userInformation}></Card>
            </div>
            <AccountStatement></AccountStatement>
        </>
    ) : (
        <>
            <UserInformationForm></UserInformationForm>
        </>
    );
    return view;



}

export default Dashboard;