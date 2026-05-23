import { useState } from 'react';

const QuickSort = () => {
    const [array, setArray] = useState([8, 3, 9, 1, 5, 7, 2, 6]);
    const [sorted, setSorted] = useState<number[]>([]);

    const quickSort = (arr: number[]): number[] => {
        console.log('👉 Входной массив:', arr);
        
        if (arr.length <= 1) {
            console.log('👈 Возвращаем:', arr);
            return arr;
        }
        
        const pivot = arr[arr.length - 1];
        console.log('📌 Pivot:', pivot);
        
        const left = arr.filter((num, i) => i !== arr.length - 1 && num < pivot);
        const right = arr.filter((num, i) => i !== arr.length - 1 && num >= pivot);
        
        console.log('⬅️ Левые:', left);
        console.log('➡️ Правые:', right);
        
        const result = [...quickSort(left), pivot, ...quickSort(right)];
        console.log('✨ Результат:', result);
        console.log('---');
        
        return result;
    };

    const handleSort = () => {
        console.clear();
        console.log('🚀 СТАРТ');
        console.log('Исходный:', array);
        console.log('');
        
        const result = quickSort([...array]);
        
        console.log('');
        console.log('✅ ГОТОВО:', result);
        setSorted(result);
    };

    const handleReset = () => {
        setArray([8, 3, 9, 1, 5, 7, 2, 6]);
        setSorted([]);
        console.clear();
        console.log('🔄 Сброс');
    };

    return (
        <div>
            <h1>Быстрая сортировка</h1>
            
            <div>
                <strong>Исходный массив:</strong> {array.join(', ')}
            </div>
            
            <div>
                <button onClick={handleSort}>Сортировать</button>
                <button onClick={handleReset}>Сбросить</button>
            </div>
            
            {sorted.length > 0 && (
                <div>
                    <strong>Отсортированный:</strong> {sorted.join(', ')}
                </div>
            )}
            
        </div>
    );
};

export default QuickSort;