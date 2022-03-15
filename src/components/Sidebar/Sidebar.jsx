import React, { useState } from "react";
import Participants from "../Participants/Participants";
import "./style.css";

const Sidebar = () => {
    const [headerButton, setHeaderButton] = useState('participants');
    return (
        <div className="sidebar">
            <div className="header">
                <div className="header-group">
                    <button
                        className={[headerButton === 'participants' ? 'active' : '']}
                        onClick={() => {
                            setHeaderButton('participants');
                        }}
                    >
                        <i class="fas fa-user"></i>
                        <span>
                            Participants
                        </span>
                    </button>
                    <button
                        className={[headerButton === 'apps' ? 'active' : '']}
                        onClick={() => {
                            setHeaderButton('apps');
                        }}
                    >
                        <i class="fab fa-uncharted"></i>
                        <span>Apps</span>
                    </button>
                </div>
            </div>
            <Participants />
        </div>
    )
}
export default Sidebar;