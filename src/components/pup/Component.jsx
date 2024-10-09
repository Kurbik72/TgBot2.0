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
    const [RedInputs, SetRed] = useState('false')

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
    



        const Formdata = () => {
            const data = {
                Fio: username,
                Me: about
            };
    
            if (data.Fio != null && data.Fio.length === 0 ) {
                alert('Заполните поле');
                console.log(RedInputs);
                return false; // Завершаем выполнение, если поле пустое
            }

            if (data.Me != null && data.Me.length === 0){
                alert('Заполните поле');
                SetRed(true);
                return false;
            }
            
    
            // Здесь можно добавить дополнительные проверки, если нужно
            SetRed(false);
            return true; // Возвращаем true, если всё в порядке
            
        };
    
        if (Formdata()) {
            // Если все проверки пройдены, переходим на новую страницу
            navigate('/visitpage', { state: { username, about } });
        }
    };

    return (
        <div className={Style.popa}>
            <form onSubmit={handleSubmit}>
                <h1>Для того, чтобы сделать визитку, введите свои данные:</h1>
                
                <div className={Style.kit}>
                    <label htmlFor="FIO">ФИО</label>
                    <input
                        className={RedInputs ? Style.red : ''} 
                        name="Fio" 
                        type="text" 
                        placeholder="ФИО" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />   
                    
                    <label htmlFor="About">О себе</label>
                    <input 
                        className={RedInputs ? Style.red : ''} 
                        name="Me" 
                        type="text" 
                        placeholder="О себе" 
                        value={about} 
                        onChange={(e) => setAbout(e.target.value)} 
                    />
                </div>
                <button type="submit" >Создать</button>
            </form>
            <Outlet />
        </div>
    );
};

export default Component;
