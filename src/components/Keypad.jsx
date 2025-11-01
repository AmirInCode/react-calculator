import Display from './Display';
import Button from "./Button";
import './Keypad.css';
import { useState } from "react";

function Keypad(){
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const buttons = [
        "C","+/-","%","/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        ".", "0", "\u232B", "=",
      ];

   


    const handleClick = (value) => {
        // پاک کردن
    if (value === "C") {
        setExpression("");
        setResult("");
        return;
      }
    if (value === "\u232B") {
        setExpression((prev) => prev.slice(0, -1));
        setResult((prev) => prev.slice(0, -1));
        return;
      }
  
      // محاسبه
      if (value === "=") {
        try {
          const evalResult = eval(expression).toString();
          setResult(evalResult);
        } catch {
          setResult("Error");
        }
        return;
      }
  
      // اگر نتیجه داریم
      if (result) {
        // اگر کاربر بعد از مساوی، یکی از عملگرها رو زد، ادامه محاسبه بده
        if (["+", "-", "*", "/"].includes(value)) {
          setExpression(result + value);
          setResult("");
        } else {
          // اگر عدد یا نقطه زد، یعنی یه محاسبه جدید شروع شده
          setExpression(value);
          setResult("");
        }
        return;
      }
  
      // حالت معمولی (در حال تایپ عبارت)
      setExpression(expression + value);
    };

    return(
        <>
        <Display value={result} expression={expression} />
        <div className="keypad">
            <div className="button-grid">
            {buttons.map((b)=> (
                <Button key={b} value={b} onclick={handleClick} />
            ))}
            </div>

        </div>
        </>
    );
}

export default Keypad