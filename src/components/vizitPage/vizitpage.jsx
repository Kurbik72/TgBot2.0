import React from 'react'
import vizit from './vizit.module.css';
import { useLocation } from 'react-router-dom';


const Vizitpage = () => {

        const location = useLocation();
        const { username, about } = location.state || {};

return (
    <div className={vizit.txt}>
        <div className={vizit.form}>
            <div className={vizit.secondStep}>
        <h1>{username}</h1>
    <p>Обо мне:</p>
    <p>{about}</p>
    </div>
        </div>
    </div>
);
};

export const Vizit = () => Vizitpage();