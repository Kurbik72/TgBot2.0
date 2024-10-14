import React, { useState, useId} from 'react'
import vizit from './vizit.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Vizitpage = () => {

        const location = useLocation();
        const { username, about } = location.state || {};
        const [url, setUrl] = useState();






        const Upload = () =>{
            const id = useId()

            const handleImagechange = (event) => {
                const file = event.target.files[0];
                if(file){
                    const reader =new FileReader();
                    reader.onload = (e) => {
                        setUrl(e.target.result)
                    };
                    reader.readAsDataURL(file);
                }
    
            }


            return(
        



        <div className={vizit.labell2}>
        <label htmlFor={id}>
            <div className={vizit.Osn}>
            <div className={vizit.page}>
            {url ? (
            <img src={url} alt="Uploaded" style={{ width: '25vw', height: '14vh' }} />
                        ) : (
                    <p>Загрузить <br />фото</p>
                        )}
        </div>
        </div>
        <input type="file"  id={id} onChange={handleImagechange}  accept="image/*"/>
        </label>
        </div>
        
        
            )
        
        }

        

return (
    
    <div className={vizit.txt}>
        <div className={vizit.back}>
        </div>
        <div className={vizit.strk}>
            <Link to='/welcomepage'><img src="./strlk.png" alt="strelka" /></Link>
            </div>
            <div className={vizit.allInThisPlace}>
            <div class={vizit.uploadcontainer}>
            <Upload>
    </Upload>
</div>
<div className={vizit.inputs}> 
<input type="text"  value={username} readOnly/>
<input type="text " value={about} readOnly/>

</div>
</div>
    </div>
);
};

export const Vizit = () => Vizitpage();