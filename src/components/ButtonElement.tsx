const ButtonElement = (props: ButtonElementProps) => {
    return <button
        style={{
            width: "30px",
            background: 'red',
            color: 'white',
            border: '1px solid aqua'
        }}
        onClick={() => props.onChangeText(props.text, 'a')}
    >
        {props.text}
    </button>
}

export default ButtonElement;