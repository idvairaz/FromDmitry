export const module2 = {
    addition(str1, str2) {
        return String(BigInt(str1) + BigInt(str2));
    },

    subtraction(str1, str2) {
        return String(BigInt(str1) - BigInt(str2));
    },

    multiplication(str1, str2) {
        return String(BigInt(str1) * BigInt(str2));
    },

    /*
    Метод для деления чисел произвольной длины. Константа nDigitsScale - это количество знаков после запятой в частном,
    Изменить nDigitsScale можно задав первый параметр в методе padEnd(50,'0'), который присваивает количество нулей
    после запятой константе scale.
    Рекомендуется задавать большой параметр, в случае если делитель весомо больше делимого частное стремится к нулю
    и требуется большое количество нулей, для более точного отражения.
    Например:
    const scale = BigInt("1".padEnd(50,'0')) -> частное с точностью 50 знаков после запятой,
    const scale = BigInt("1".padEnd(5,'0')) -> частное с точностью 5 знаков после запятойю
     */

    division(str1, str2) {
        function abs(x) {
            return x < 0n ? -x : x;
        }

        let BigStr1 = BigInt(str1);
        let BigStr2 = BigInt(str2);
        let resultSign = "";
        if (String(BigStr1 * BigStr2).slice(0,1) == "-") {
            resultSign = "-";
        }

        let quotient = abs(BigStr1) / abs(BigStr2);
        let remainder = abs(BigStr1) % abs(BigStr2);
        const scale = BigInt("1".padEnd(50,'0'));
        const nDigitsScale = scale.toString().length - 1;
        let remainderTenth = (remainder * scale / abs(BigStr2));
        return resultSign + String(quotient) + ',' + String(remainderTenth).padStart(nDigitsScale,'0');
    }
}



