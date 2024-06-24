import React, { useState } from 'react';
import '../assets/css/contact.css'
import location from '../assets/svg/location.svg'
import phoneNumber from '../assets/svg/phoneNumber.svg'
import time from '../assets/svg/time.svg'

const ContactInfo = () => {
    const [iconSrc, setIconSrc] = useState(location); // Set your initial icon path

    const handleHover = (newIconSrc) => {
        setIconSrc(newIconSrc);
    };

    return (
        <div className="contact">
            <div className="icon">
                <img src={iconSrc} alt="Custom Icon" />
            </div>
            <div className="context">
                <div onMouseEnter={() => handleHover(time)}>Từ 2024.</div>
                <div onMouseEnter={() => handleHover(phoneNumber)}>09627604</div>
                <div onMouseEnter={() => handleHover(location)}>46 Đ. 53 Q. 7</div>
            </div>
        </div>
    );
};

export default ContactInfo;
