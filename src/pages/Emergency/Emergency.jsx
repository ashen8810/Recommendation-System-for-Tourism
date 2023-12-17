import React from 'react';
import './Emergency.css';

const EmergencyPage = () => {
    return (

        <>
            <div className="emergency-section">
                <h1 className='heading-tag'>Emergency Information</h1>
                <h3>Stay safe, have fun, and happy travels!</h3>

                <div className="main-emergency">
                    <h4>In Case of Emergency</h4>
                    <div className='commen-emergency'>
                    <ul>
                        <li>Police Emergency Hotline: <strong>119</strong></li>
                        <li>Medical Emergency Hotline: <strong>1990</strong></li>
                        <li>Tourist Police Hotline: <strong>1912</strong></li>
                        <li>Fire and Rescue Services: <strong>110</strong></li>
                    </ul>
                    </div>
                </div>
            </div>

            <br />

            <div className='emergency-container'>
                <div className='places'>
                <h4 >Major Cities and Emergency Contact Number</h4>
                    Colombo:
                    <ul>
                        <li>Police: <strong>011-2421026</strong></li>
                        <li>National Hospital: <strong>011-2691111</strong></li>
                        <li>Tourist Police: <strong>011-2421086</strong></li>
                    </ul>
                    Kandy:
                    <ul>
                        <li>Police: <strong>081-2222222</strong></li>
                        <li>General Hospital: <strong>081-2238888</strong></li>
                        <li>Tourist Police: <strong>081-2232062</strong></li>
                    </ul>
                    Galle:
                    <ul>
                        <li>Police: <strong>091-2222600</strong></li>
                        <li>Hospital: <strong>091-2227666</strong></li>
                        <li>Tourist Police: <strong>091-2222274</strong></li>
                    </ul>
                    Anuradhapura:
                    <ul>
                        <li>Police: <strong>025-2222222</strong></li>
                        <li>Hospital: <strong>025-2223333</strong></li>
                    </ul>
                    Sigiriya:
                    <ul>
                        <li>Police: <strong>066-2222222</strong></li>
                        <li>Hospital: <strong>066-2227222</strong></li>
                    </ul>
                </div>

                <div className='embassy'>
                <h4>Here are some embassy contact numbers in Sri Lanka</h4>
                    Western Countries:
                    <ul>
                        <li>United States: <strong>+94 (11) 508 2250</strong></li>
                        <li>United Kingdom: <strong>+94 (11) 249 2000</strong></li>
                        <li>Canada: <strong>+94 (11) 574 7000</strong></li>
                        <li>Australi: <strong>+94 (11) 534 5100</strong></li>
                    </ul>
                    European Countries:
                    <ul>
                        <li>France: <strong>+94 (11) 269 1152</strong></li>
                        <li>Germany: <strong>+94 (11) 534 2400</strong></li>
                        <li>Italy: <strong>+94 (11) 269 3986</strong></li>
                        <li>Netherlands: <strong>+94 (11) 230 8100</strong></li>
                    </ul>
                    Other Countries:
                    <ul>
                        <li>India: <strong>+94 (11) 244 6666</strong></li>
                        <li>China: <strong>+94 (11) 269 8088</strong></li>
                        <li>Japan: <strong>+94 (11) 268 5565</strong></li>
                        <li>Singapore: <strong>+94 (11) 557 7300</strong></li>
                    </ul>
                </div>

            </div>


        </>

    );
}

export default EmergencyPage;
