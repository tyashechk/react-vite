import { useState } from 'react';
import './Calculator.scss';
import ButtonElement from '@/components/ButtonElement';

const arrayBtn = ["+", "-", "=", "*", ":", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const Calculator = () => {
    const [text, setText] = useState('');

    const changeText = (value: string, op: string) => {
        setText(text + value);
        console.log(op)
    }
    return <div className="calculator-page">
        <input value={text} type="text" onChange={(event) => setText(event.target.value)} />



        {arrayBtn.map((item, key) => (
            <ButtonElement text={item} onChangeText={changeText} key={key} />
        ))}


    </div>
};

export default Calculator;