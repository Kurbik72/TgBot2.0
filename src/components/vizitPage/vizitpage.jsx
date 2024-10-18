import React, { useState, useId} from 'react'
import vizit from './vizit.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Vizitpage = () => {

        const location = useLocation();
        const { username, about } = location.state || {};
        const [url, setUrl] = useState();

        
const heighAuto = () =>{
    const data = {
        Info1: username,
        Info2: about
        
    };
const Info1Element = document.querySelector('[name="Info1"]')
const Info2Element = document.querySelector('[name="Info2"]')
    if (data.Info2 !==null && data.Info2.length >40){
        Info2Element.style.height = "auto"

    };

    if (data.Info1 !==null && data.Info1.length > 20){
        Info1Element.style.height = "auto"
    };

}

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
            <img src={url} alt="Uploaded" />
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
<div className={vizit.allIt} onSubmit={heighAuto} contenteditable="true" > 

<p className={vizit.inputs1}  contentEditable="false" name ='Info1'> {username}</p>
<p  className={vizit.inputs}  contentEditable="false" name='Info2'>{about}</p>

</div>
</div>
    </div>
);
};

export const Vizit = () => Vizitpage();