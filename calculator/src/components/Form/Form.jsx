import React, {useContext, useRef, useState} from "react";
import MyInput from "../UI/MyInput/MyInput";
import './Form.css';
import Footer from "../Footer/Footer";
import { AppContext} from '../../App';

const  Form = () => {

    const [age, setAge] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [diameter, setDiameter] = useState(null);
    const bodySurfaceArea = (0.007184*(height**0.725)*(weight**0.425)).toFixed(2);
    const properAorticDiameter = (1.92 + 0.74 * bodySurfaceArea).toFixed(2);
    const k1 = 0.18;
    const k2 = 0.24;
    const k3 = 0.37;

    if (age < 20) {
        let z = ((diameter - properAorticDiameter)/k1).toFixed(2);
        console.log(z);
    } else if (age >= 20 && age <= 39) {
        let z = ((diameter - properAorticDiameter)/k2).toFixed(2);
        console.log(z);
    } else {
        let z = ((diameter - properAorticDiameter)/k3).toFixed(2);
        console.log(z);
    }

    function  handleChange1(event) {
        setAge(+event.target.value);
    }
    function  handleChange2(event) {
        setHeight(+event.target.value);
    }
    function  handleChange3(event) {
        setWeight(+event.target.value);
    }
    function  handleChange4(event) {
        setDiameter(+event.target.value);
    }
    return (
        <div className='wrapper'>
            <form className='wrapper__form'>
                <h3 className='age'>Возраст</h3>
                    <MyInput
                        className='input-age'
                        onChange={handleChange1}
                        id={'age'}
                        placeHolder='Введите количество полных лет'
                    />

                <h3 className='height'>Рост</h3>
                    <MyInput
                        className='input-height'
                        onChange={handleChange2}
                        placeHolder='Введите значение, см'
                    />

                <h3 className='weight'>Масса тела</h3>
                <MyInput
                    className='input-weight'
                    onChange={handleChange3}
                    placeHolder='Введите значение, кг'
                />

                <h3 className='diameter'>Диаметр корня аорты</h3>
                <MyInput
                    className='input-weight'
                    onChange={handleChange4}
                    placeHolder='Введите значение, см'
                />
                <p>z-критерий: </p>
            </form>

            <Footer/>
        </div>
    );
};

export default Form;