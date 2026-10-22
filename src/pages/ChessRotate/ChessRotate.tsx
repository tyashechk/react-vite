import { useState } from 'react';
import './ChessRotate.scss';

const ChessRotate = () => {
    const [size, setSize] = useState(5);
    const [inputText, setInputText] = useState('13452');
    const [sorted, setSorted] = useState<number[]>([]);

    const rotate = () => {
        let inputArray = inputText.split('').map(Number);

        if (inputArray.length > size) {
            alert(`Ошибка! Количество чисел (${inputArray.length}) не может быть больше количества клеток (${size}).`);
            return;
        }

        let indexes = [];
        for (let i = size; i >= 1; i--) {
            indexes.push(i);
        }   

        let pairs = inputArray.map((num, i) => {
            return { num: num, idx: indexes[i] };
        });

        for (let i = 0; i < pairs.length; i++) {
            for (let j = 0; j < pairs.length - 1; j++) {
                if (pairs[j].num > pairs[j + 1].num) {
                    let temp = pairs[j];
                    pairs[j] = pairs[j + 1];
                    pairs[j + 1] = temp;
                }
            }
        }

        let result = [];
        pairs.forEach(pair => {
            result[pair.idx - 1] = pair.num; 
        });

        setSorted(result);
    };

    return (
        <div className="chess-container">
            <h1>Поворот коней</h1>
            
            <div className="controls">
                <label>Количество клеток: </label>
                <input 
                    type="number" 
                    value={size} 
                    onChange={(e) => setSize(Number(e.target.value))} 
                />
            </div>

            <div className="controls">
                <label>Позиции коней: </label>
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^[0-9]*$/.test(value) && value.length <= size) {
                            setInputText(value);
                        }
                    }} 
                />
            </div>

            <button onClick={rotate}>
                Повернуть
            </button>

            <div className="result">
                <p><strong>Было:</strong> {inputText}</p>
                {/* Вот здесь мы убрали запятые: join('') вместо join(', ') */}
                <p><strong>Стало:</strong> {sorted.join('')}</p>
            </div>
        </div>
    );
};

export default ChessRotate;