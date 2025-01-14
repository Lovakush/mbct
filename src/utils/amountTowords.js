const  amountToWords  = (amount) => {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Lakh", "Crore"];

    if (amount === 0) return "Zero Rupees Only";

    let words = "";
    let num = amount;
    let partCount = 0;

    while (num > 0) {
        const part = num % 1000;
        if (part > 0) {
            let partWords = "";
            if (part > 99) {
                partWords += ones[Math.floor(part / 100)] + " Hundred ";
                if (part % 100 !== 0) partWords += "and ";
            }
            const lastTwoDigits = part % 100;
            if (lastTwoDigits > 10 && lastTwoDigits < 20) {
                partWords += teens[lastTwoDigits - 10] + " ";
            } else {
                partWords += tens[Math.floor(lastTwoDigits / 10)] + " ";
                partWords += ones[lastTwoDigits % 10] + " ";
            }
            words = partWords + thousands[partCount] + " " + words;
        }
        num = Math.floor(num / 1000);
        partCount++;
    }

    return words.trim() + " Rupees Only";
};

export default amountToWords;