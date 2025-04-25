import {AdminHeader} from "../Admin_header.jsx";
import { AdminFooter } from "../Admin_footer.jsx";
import {TicketPieChart} from './PieChart/piechart.jsx';
import { Bubblegraph } from "./BubbleGraph/bubblegraph.jsx";
import './BubbleGraph/bubble.css'
export const Client_Analytics = () => {
   return (
    <div className="main-admin">
    <AdminHeader/>
    <div className="graph">
    <TicketPieChart/>
    <Bubblegraph/>
    </div>
    <AdminFooter/>
    </div>
    )
};
