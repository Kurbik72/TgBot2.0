import React from 'react'
import Style from '../../components/pup/style.module.css'



const component = () => {


return (
<div className={Style.popa}>
    <form>
        <h1>Для того, чтобы сделать визитку, введите свои данные:</h1>
        <input name="FIO" type="text"/>
        <label htmlFor="FIO">ФИО</label>
        <input name="About" type="text"/>
        <label htmlFor="About">О себе</label>
        <button>Создать</button>
    </form>
    </div>
);
};

export default component;
