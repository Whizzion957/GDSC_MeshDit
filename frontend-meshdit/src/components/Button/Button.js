import classes from './button.module.css'

export default function Button({ type, text, onClick, color, backgroundColors , fontSize, width, height}) {
    const background = backgroundColors ? `linear-gradient(180deg, ${backgroundColors[0]}, ${backgroundColors[1]})` : null;
    return (
        <div className={classes.container}>
            <button style={{color, backgroundColor: background ? undefined : backgroundColors, background, fontSize, width, height,}} type={type} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

Button.defaultProps = {
    type: 'button',
    text: 'Submit',
    backgroundColors: ['#ff7e5f', '#e72929'],
    color: 'white',
    fontSize: '1.3rem',
    width: '12rem',
    height: '3.5rem',
};

