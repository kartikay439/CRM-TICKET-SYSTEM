import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export const TicketPieChart = () => {
  const [resolvedPercent, setResolvedPercent] = useState(0);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tickets/fetchAllTicketsAdmin", {
          withCredentials: true,
        });
        const ticketList = response.data.data || [];
        setTickets(ticketList);

        const resolvedTickets = ticketList.filter(ticket => ticket.status === "resolved").length;
        const percentageResolved = ticketList.length > 0
            ? Math.round((resolvedTickets / ticketList.length) * 100)
            : 0;
        setResolvedPercent(percentageResolved);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const pieData = [
    { name: "Resolved", value: resolvedPercent },
    { name: "Unresolved", value: 100 - resolvedPercent },
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  return (
      <div style={{ width: "100%", height: 300 }}>
        <h2>Ticket Resolution</h2>
        <ResponsiveContainer>
          <PieChart>
            <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
            >
              {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
};

