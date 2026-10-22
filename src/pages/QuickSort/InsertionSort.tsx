import { useState } from 'react';

const InsertionSort = () => {

    const [array, setArray] = useState<number[]>([8,3,2,5,9,1,7]);
    const [sorted, setSortet] = useState<number[]>([9]);

    const insertionSort = ()=> {
        
        let result = array;
        for(let i  = 1; i < result.length; i++) {
            let x = result[i];
            let j = i;

            while (j > 0 && result[j-1] > x) {
                result[j] = result[j -1]; 
                --j;
            }

            result[j] = x;
        }

        setSortet(result);

    }
    
    return (
        <div>
            <h1>сортировка вставками</h1>
            <button onClick={insertionSort}>жми</button>
            {array} ----
            {sorted}
        </div>
    );
};


export default InsertionSort;

