import './Button.css';

function Button({ value, onclick }) {
    return (
        <button
            className="btn"
            onClick={() => onclick(value)}>
            {value}
        </button>
    );
}

export default Button