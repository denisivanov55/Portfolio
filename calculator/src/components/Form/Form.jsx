import React, {useContext, useRef, useState} from "react";
import MyInput from "../UI/MyInput/MyInput";
import './Form.css';
import Footer from "../Footer/Footer";
import { AppContext} from '../../App';

const  Form = ({form}) => {

    const ageRef = useRef(null);
    const heightRef = useRef(null);
    const weightRef = useRef(null);
    const diameterRef = useRef(null);
    const {age, setAge, height, setHeight, weight, setWeight, diameter, setDiameter } = useContext( AppContext );

    const enterYourAge = (e) => {
        e.preventDefault();
        const ageValue = ageRef.current.value;
    }
    const enterYourHeight = (e) => {
        e.preventDefault();
        const heightValue = heightRef.current.value;
    }

    return (
        <div className='wrapper'>
            <form className='wrapper__form'>
                <h3 className='age'>Возраст</h3>
                    <MyInput
                        className='input-age'
                        ref={ageRef}
                        id={'age'}
                        placeHolder='Введите количество полных лет'
                    />

                <h3 className='height'>Рост</h3>
                    <MyInput
                        className='input-height'
                        ref={heightRef}
                        id={'height'}
                        placeHolder='Введите значение, см'
                    />
                <h3 className='weight'>Масса тела</h3>
                <MyInput
                    className='input-weight'
                    ref={weightRef}
                    id={'weight'}
                    placeHolder='Введите значение, кг'
                />
                <h3 className='diameter'>Диаметр корня аорты</h3>
                <MyInput
                    className='input-weight'
                    ref={diameterRef}
                    id={'diameter'}
                    placeHolder='Введите значение, см'
                />
            </form>
            <Footer/>
        </div>
    );
};

export default Form;