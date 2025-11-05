import './HelloWorld.css';

export const HelloWorld = ({name}) => {
    return <h2 className='hello-world'>Hello {name ? name : 'World'}!</h2>;
}

// Inline Style
export function HelloWorldInline({name}) {
    const inlineStyle = {
        color: 'blue',
        fontSize: '2rem',
        textAlign: 'center',
        margin: '20px 0'
    };
    return <h4 style={inlineStyle}>Hello {name ? name : 'World'}!</h4>;
}


// export default HelloWorldInline;