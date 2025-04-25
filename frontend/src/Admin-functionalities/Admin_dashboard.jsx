import {AdminHeader} from "./Admin_header.jsx";
import { AdminFooter } from "./Admin_footer.jsx";
import {Dashboard_Table} from "./dashboard_table.jsx";
export const AdminDashboard = () => {
 return(
    <div className="main-admin">
    <AdminHeader/>
    <Dashboard_Table/>
    <AdminFooter/>
    </div>
  );
};