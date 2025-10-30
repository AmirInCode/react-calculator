import './Display.css'

function Display({ value, expression }) {
    const showResult = expression && value && expression !== value

    return (
        <div className="display">


            <div className={`display-expression ${showResult ? "visible" : ""}`}>
                {showResult ? expression : ""}
            </div>


            <div className={`display-result ${showResult ? "result-mode" : ""}`}>
                {showResult ? (
                    <>
                        <span className="equal">=</span>
                        <span className="result-text">{value}</span>
                    </>
                ) : (
                    <span className="result-text">{expression || "0"}</span>
                )}
            </div>

        </div>
    );
}

export default Display