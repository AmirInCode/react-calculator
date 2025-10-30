// const handleClick = (value) => {
//     // پاک کردن
//     if (value === "C") {
//         setExpression("");
//         setResult("");
//         return;
//     }

//     // محاسبه
//     if (value === "=") {
//         try {
//             const evalResult = eval(expression).toString();
//             setResult(evalResult);
//         } catch {
//             setResult("Error");
//         }
//         return;
//     }

//     // اگر نتیجه داریم
//     if (result) {
//         // اگر کاربر بعد از مساوی، یکی از عملگرها رو زد، ادامه محاسبه بده
//         if (["+", "-", "*", "/"].includes(value)) {
//             setExpression(result + value);
//             setResult("");
//         } else {
//             // اگر عدد یا نقطه زد، یعنی یه محاسبه جدید شروع شده
//             setExpression(value);
//             setResult("");
//         }
//         return;
//     }

//     // حالت معمولی (در حال تایپ عبارت)
//     setExpression(expression + value);
// };