import React, { useEffect } from 'react'
import Style from '../../components/pup/style.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';



const Component = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
    console.log('Current location is ', location);
    }, [location]);

return (
    
<div className={Style.popa}>
    <form>
        <h1>Для того, чтобы сделать визитку, введите свои данные:</h1>
        
        <div className={Style.kit}>
        <label htmlFor="FIO">ФИО</label>
        <input name="FIO" type="text"
        placeholder/>
        <label htmlFor="About">О себе</label>
        <input name="About" type="text"
        placeholder/>
        
        
        </div>
        <button onClick={() => navigate('visitpage', { replace: false })}>Создать</button>
    </form>
    <Outlet/>
    </div>
    
);
};

export default Component;
