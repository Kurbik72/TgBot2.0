import React, { useEffect,useState} from 'react'
import Style from '../../components/pup/style.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';





const Component = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Current location is ', location);
    }, [location]);

    const [username, setUsername] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Передаем данные в состояние
        navigate('/visitpage', { state: { username, about} });
    };

    return (
        <div className={Style.popa}>
            <form onSubmit={handleSubmit}>
                <h1>Для того, чтобы сделать визитку, введите свои данные:</h1>
                
                <div className={Style.kit}>
                    <label htmlFor="FIO">ФИО</label>
                    <input
                        name="FIO" 
                        type="text" 
                        placeholder="ФИО" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />   
                    
                    <label htmlFor="About">О себе</label>
                    <input 
                        name="About" 
                        type="text" 
                        placeholder="О себе" 
                        value={about} 
                        onChange={(e) => setAbout(e.target.value)} 
                    />
                </div>
                <button type="submit">Создать</button>
            </form>
            <Outlet />
        </div>
    );
};

export default Component;
