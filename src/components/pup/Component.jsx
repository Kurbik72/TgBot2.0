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
    const [WhiteInputs, SetWhite] = useState('true');
    const [ErrorTxt, SetError] = useState(false);

    


    const VisualFunctuion = () => {
        const data = {
            Fio: username,
            Me: about
        };
        
        if (data.Fio != null && data.Fio.length === 0 ) {
            SetError(true);
        }
        if (data.Me != null && data.Me.length === 0){
            SetError(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
    



        const Formdata = () => {
            const data = {
                Fio: username,
                Me: about
            };
    
            if (data.Fio != null && data.Fio.length === 0 ) {
                SetRed(true);
                SetWhite(false);
                return false; // Завершаем выполнение, если поле пустое
            }

            if (data.Me != null && data.Me.length === 0){
                SetRed(true);
                SetWhite(false);
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
                        className={`${RedInputs ? Style.red : ''} ${WhiteInputs ? Style.White : ''}`}
                        name="Fio" 
                        type="text" 
                        placeholder="ФИО" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />   
                    
                    <label htmlFor="About">О себе</label>
                    <input 
                        className={`${RedInputs ? Style.red : ''} ${WhiteInputs ? Style.White : ''}`}
                        name="Me" 
                        type="text" 
                        placeholder="О себе" 
                        value={about} 
                        onChange={(e) => setAbout(e.target.value)} 
                    />
                    {ErrorTxt && (
                    <div className={Style.label2}>
                    <label htmlFor="Me">
                        Заполните все поля!
                    </label>
                    </div>
                    )}
                </div>
                <button type="submit"  onClick={ VisualFunctuion} >Создать</button>
            </form>
            <Outlet />
        </div>
    );
};

export default Component;
