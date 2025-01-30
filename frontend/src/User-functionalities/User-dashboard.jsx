import {Header_user_dashboard} from "./header.jsx";
import {Footer_all} from "../home/footer_all.jsx";
import {Ticket_table} from "./ticket_table.jsx";
import styled from 'styled-components';
import {Show_Hide} from './show_hide.jsx';
import './ticket_table.css';
import {useState} from "react";
import {Profile} from "./profile.jsx";
import {Feedback} from "./feedback.jsx";
import {TicketForm} from "./ticketForm.jsx";

export const User_dashboard = () => {
    const [dashboardView, setDashboardView] = useState(true);
    const [ticketForm, setTicketForm] = useState(false);
    const [profileView, setProfileView] = useState(false);
    const [feedbackForm, setfeedbackForm] = useState(false);

    // useEffect(() => {
    //     if(ticketForm){
    //         setDashboardView(false)
    //         setProfileView(false)
    //         setfeedbackForm(false)
    //     }
    //     if(profileView){
    //         setDashboardView(false)
    //         setProfileView(false)
    //         setfeedbackForm(false)
    //     }
    // },[])

    return (
        <>
            <StyledWrapper>
                <div className="homepage">
                    <Header_user_dashboard profileView={setProfileView} ticketForm={setTicketForm}
                                           dashboardView={setDashboardView} feedbackForm={setfeedbackForm}/>
                    <div className="input-container-wrapper">
                        <div className="input-container">
                            <input type="text" name="text" className="input" placeholder="search..."/>
                            <span className="icon">
                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                  <g id="SVGRepo_iconCarrier">
                    <path opacity={1} d="M14 5H20" stroke="#679ef8" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path opacity={1} d="M14 8H17" stroke="#679ef8" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                          stroke="#679ef8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity={1} d="M22 22L20 20" stroke="#679ef8" strokeWidth="3.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </g>
                </svg>
              </span>
                        </div>
                    </div>
                    {dashboardView ? <Ticket_table/> : null}
                    {ticketForm ? <TicketForm/> : null}
                    {profileView ? <Profile/> : null}
                    {feedbackForm? <Feedback/> : null}
                    <Footer_all/>
                    <Show_Hide/>
                </div>
            </StyledWrapper>
        </>
    );
};


const StyledWrapper = styled.div`

    @media (min-width: 0px) and (max-width: 90px) {
        .input-container-wrapper {
            display: none ! important;
        }
    }
    @media (min-height: 0px) and (max-height: 90px) {
        .input-container-wrapper {
            display: none ! important;
        }
    }
    @media (min-width: 90px) and (max-width: 330px) {
        .input-container-wrapper {
            width: 50vw !important;
            margin-left: 4vw ! important;
        }
    }
    @media (min-width: 330px) and (max-width: 700px) {
        .input-container-wrapper {
            width: 35vw !important;
        }
    }
    @media (min-width: 330px) and (max-width: 1100px) {
        .input-container-wrapper {
            margin-left: 3.5vw ! important;
        }
    }
    @media (min-width: 1100px) and (max-width: 1260px) {
        .input-container-wrapper {
            margin-left: 2.5vw ! important;
        }
    }
    @media (max-width: 1300px) {
        .input-container-wrapper {
            margin-left: 1.7vw;
        }
    }


    .input-container-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35vh;
        width: 20vw;
    }

    .input-container {
        width: 220px;
        position: relative;
    }

    .icon {
        position: absolute;
        right: 10px;
        top: calc(50% + 5px);
        transform: translateY(calc(-50% - 5px));
    }

    .input {
        width: 100%;
        height: 40px;
        padding: 10px;
        transition: 0.2s linear;
        border: 2.5px solid #679ef8;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;

        &::placeholder {
            color: black;
            font-weight: bold;
        }
    }

    .input:focus {
        outline: none;
        border: 0.5px solid #679ef8;
        box-shadow: -5px -5px 0px #679ef8;
    }

    .input-container:hover > .icon {
        animation: anim 1s linear infinite;
    }

    @keyframes anim {
        0%,
        100% {
            transform: translateY(calc(-50% - 5px)) scale(1);
        }

        50% {
            transform: translateY(calc(-50% - 5px)) scale(1.1);
        }
    }
`;
