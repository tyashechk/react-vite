interface ButtonElementProps {
    text: string;
    onChangeText: (value: string) => void;
}

const ButtonElement = ({ text, onChangeText }: ButtonElementProps) => (
    <button
        style={{
            width: "30px",
            background: 'cyan',
            color: 'black',
            border: '1px solid black',
        }}
        onClick={() => onChangeText(text)}
    >
        {text}
    </button>
);

export default ButtonElement;