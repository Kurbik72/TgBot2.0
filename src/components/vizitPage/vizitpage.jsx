import React, { useState, useId} from 'react'
import vizit from './vizit.module.css';
//import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Vizitpage = () => {

        //const location = useLocation();
        //const { username, about } = location.state || {};
        const [url, setUrl] = useState();




        const Upload = () =>{
            const id = useId()
            return(
        
            
        <label htmlFor={id}>
            <div className={vizit.Osn}>
            <div className={vizit.page}>
        <p>Загрузить <br />фото</p>
        </div>
        </div>
        <input type="file"  id={id}/>
        </label>
        
        
            )
        
        }

        

return (
    
    <div className={vizit.txt}>
        <div className={vizit.back}>
        </div>
        <div className={vizit.strk}>
            <Link to='/welcomepage'><img src="./strlk.png" alt="strelka" /></Link>
            </div>
            <div class={vizit.uploadcontainer}>
            <Upload onUpload={setUrl}>
    <img src={url} alt="" />
    </Upload>
</div>

        
            {/*<div className={vizit.form}> 
            <div className={vizit.secondStep}>
        <h1>{username}</h1>
    <p>Обо мне:</p>
    <p>{about}</p>
    </div>
        </div>
*/}
    </div>
);
};

export const Vizit = () => Vizitpage();