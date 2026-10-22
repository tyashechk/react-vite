import { useState } from 'react';
import './Calculator.scss';
import ButtonElement from '@/components/ButtonElement';

const arrayBtn = ["+", "-", "=", "*", ":", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const CalculatorOri = () => {
    const [text, setText] = useState('');

    const changeText = (value: string) => {
        setText(prev => prev + value);
    };

    return (
        <div className="calculator-page">
            <input
                value={text}
                type="text"
                onChange={(event) => setText(event.target.value)}
            />

            {arrayBtn.map((item) => (
                <ButtonElement text={item} onChangeText={changeText} key={item} />
            ))}
        </div>
    );
};

export default CalculatorOri;