import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <div className='footer' >
        <div className="fLists">
          <div>
            <ul className="fList">
                <li className="fListItem"><h3>About Us</h3></li>
                <li className="fListItem">Overview</li>
                <li className="fListItem">History</li>
                <li className="fListItem">Initiative</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Compliance</li>
                <li className="fListItem">Human Resources</li>
                <li className="fListItem">Career</li>
            </ul> 
            </div>
          <div>
            <ul className="fList">
          <li className="fListItem"><h3>Shareholder's Corner</h3> </li>
          <li className="fListItem">Overview </li>
          <li className="fListItem">Shareholders Meeting </li>
          <li className="fListItem">Stock Exchanges Notifications</li>
          <li className="fListItem">Contact Points - Shares & Debuntures</li>
          <li className="fListItem">Share Transfer</li>
        </ul>
        </div>
        <div>
        <ul className="fList">
          <li className="fListItem"><h3>Customer Corner</h3></li>
          <li className="fListItem">Find Customer Information</li>
          <li className="fListItem">Doorstep Banking </li>
          <li className="fListItem">Online Complaints </li>
          <li className="fListItem">Periodic Updation of KYC </li>
        </ul>
        </div>
        <div>
        <ul className="fList">
          <li className="fListItem"><h3>Media Centre</h3></li>
          <li className="fListItem">Events</li>
          <li className="fListItem">News Coverage </li>
          <li className="fListItem">Podcast </li>
          <li className="fListItem">Announcements</li>
        </ul>
        </div>
        <div>
        <ul className="fList">
          <li className="fListItem"><h3>Resources</h3></li>
          <li className="fListItem">Banking Mantra</li>
          <li className="fListItem">E-auction</li>
          <li className="fListItem">Economic Scenario</li>
          <li className="fListItem">Interest Rate</li>
          <li className="fListItem">Tenders</li>
          <li className="fListItem">Download Forms</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
        </div>
        </div>
        <div className="fTet">~~~Copyright @ Welcome to SS Bank!</div>
    </div>
  )
}

export default Footer
