import React, { useState } from "react";
import {AdminHeader} from "../Admin_header.jsx";
import { AdminFooter } from "../Admin_footer.jsx";
import '../Admin_dashboard.css';

export const Add_new_client = () => {

  return (
    <div className="admin-add-new-client contain">
           <div className="form-container">
        <h2>Add New Client</h2>

        <form className="client-form">
          <div>
            <label>
              Name
              <input
                type="text"
                name="issue"
                placeholder="Type your Name"
              />
            </label>
          </div>
          <div>
            <label>
             Address:
              <textarea
                name="description"
                placeholder="Enter Your Address"
              ></textarea>
            </label>
          </div>
          <div>
            <label>
              Mobile Number
              <input
                type="tel"
                name="mobile_number"
                placeholder="Type your Number"
              />
            </label>
          </div>
          <div>
            <label>
              Company
              <input
                type="text"
                name="company"
                placeholder="Type Company Name"
              />
            </label>
          </div>
          <div>
            <label>
              Total Order
              <input
                type="Number"
                name="total_order"
                placeholder="Enter Total Order"
              />
            </label>
          </div>
          <div>
            <label>
              Order Id
              <input
                type="Number"
                name="order_id"
                placeholder="Enter Order Id"
              />
            </label>
          </div>
          <button type="submit">Add Client</button>
        </form>
      </div>
    <div className="main-admin">
    <AdminHeader/>
    <AdminFooter/>
    </div>
    </div>
  );
};
