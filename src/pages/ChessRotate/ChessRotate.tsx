import { useState } from 'react';
import './ChessRotate.scss';

const ChessRotate = () => {
    const [size, setSize] = useState<string>('');
    const [inputText, setInputText] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const rotate = () => {
        if (!size || !inputText) {
            alert('Заполните поля!');
            return;
        }

        const boardSize = Number(size);
        let numbers = inputText.split('').map(Number);

        if (numbers.length > boardSize) {
            alert('Чисел больше, чем клеток!');
            return;
        }
        let pairs: { number: number, index: number }[] = [];
        
        numbers.forEach((num, i) => {
            pairs.push({ number: num, index: boardSize - i });
        });

        for (let i = 0; i < pairs.length; i++) {
            for (let j = 0; j < pairs.length - 1; j++) {
                if (pairs[j].number > pairs[j + 1].number) {
                    let temp = pairs[j];
                    pairs[j] = pairs[j + 1];
                    pairs[j + 1] = temp;
                }
            }
        }

        let finalIndexes = pairs.map(pair => pair.index);

        setResult(finalIndexes.join(''));
    };

    return (
        <div className="chess-container">
            <h1>Сортировка с индексами</h1>
            
            <div className="controls">
                <label>Количество клеток: </label>
                <input 
                    type="number" 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)} 
                />
            </div>

            <div className="controls">
                <label>Позиции коней: </label>
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^[0-9]*$/.test(value) && (size === '' || value.length <= Number(size))) {
                            setInputText(value);
                        }
                    }} 
                />
            </div>

            <button onClick={rotate}>
                Сортировать
            </button>

            {result && (
                <div className="result">
                    <p><strong>Было:</strong> {inputText}</p>
                    <p><strong>Индексы:</strong> {result}</p>
                </div>
            )}
        </div>
    );
};

export default ChessRotate;