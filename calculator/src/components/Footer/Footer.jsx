import './Footer.css';
import {useContext} from "react";
import {AppContext} from "../../App";

function Footer() {
    const {age, setAge, height, setHeight, weight, setWeight, diameter, setDiameter } = useContext( AppContext );
    const bodySurfaceArea = 0.007184*({height}^0.725)*({weight}^0.425);
    const properAorticDiameter = 1.92 + 0.74 * bodySurfaceArea;
    const k1 = 0.18;
    const k2 = 0.24;
    const k3 = 0.37;


    return (
        <footer className={'footer'}>
            { if (!MyInput) {
                <h4>Результат автоматически<br/> подсчитается, когда вы<br/> заполните все поля</h4>
            }
                else if ({age} < 20){
                <h4>({diameter} - properAorticDiameter)/k1</h4>
            } else if ({age} > 20 && {age} <= 39)
                <h4>({diameter} - properAorticDiameter)/k2</h4>
            } else  <h4>({diameter} - properAorticDiameter)/k3</h4>

                <button>Сбросить</button>
            }
        </footer>
    )
}

export default Footer;