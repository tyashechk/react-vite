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

        // 1. Создаем массив пар: число и его индекс В ОБРАТНОМ ПОРЯДКЕ (от boardSize до 1)
        let pairs: { number: number, index: number }[] = [];
        
        // Заполняем пары. 
        // numbers[i] - само число.
        // boardSize - i - это индекс (если размер 5, то 5, 4, 3, 2, 1)
        numbers.forEach((num, i) => {
            pairs.push({ number: num, index: boardSize - i });
        });

        // 2. СОРТИРУЕМ МАССИВ ПО ЧИСЛАМ ПО ВОЗРАСТАНИЮ (через if/else)
        for (let i = 0; i < pairs.length; i++) {
            for (let j = 0; j < pairs.length - 1; j++) {
                if (pairs[j].number > pairs[j + 1].number) {
                    let temp = pairs[j];
                    pairs[j] = pairs[j + 1];
                    pairs[j + 1] = temp;
                }
            }
        }

        // 3. Теперь числа стоят по порядку (1,2,3,4,5), а их индексы перемешались.
        // Вытаскиваем ТОЛЬКО ИНДЕКСЫ.
        let finalIndexes = pairs.map(pair => pair.index);

        // 4. Выводим результат (слитно, без запятых)
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