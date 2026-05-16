import { useState } from 'react';
import './Home.scss';
import ButtonElement from '@/components/ButtonElement0';

const arrayBtn = ["+", "-", "=", "*", ":", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const Home = () => {
    const [text, setText] = useState('');

    const changeText = (value: string, op: string) => {
        setText(text + value);
        console.log(op)
    }

    return <div className="home-page">
        <input value={text} type="text" onChange={(event) => setText(event.target.value)} />
        
        <ButtonElement text='+' onChangeText={changeText}/>
        <ButtonElement text='-' onChangeText={changeText}/>
        
        {arrayBtn.map((item, key) => (
            <ButtonElement text={item} onChangeText={changeText} key={key} />
        ))}

        <button>
            -
        </button>
        <button>
            *
        </button>

        <button>
            :
        </button>

        <button>
            =
        </button>

        <button>
            1
        </button>

        <button>
            2
        </button>
        <button>
            3
        </button>

        <button>
            4
        </button>

        <button>
            5
        </button>
        <button>
            6
        </button>

        <button>
            7
        </button>
        <button>
            8
        </button>

        <button>
            9
        </button>

        <button>
            0
        </button>
    </div>
};

export default Home;