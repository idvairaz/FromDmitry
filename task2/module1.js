export const module1 = {
    ucFirst(str) {
        return str[0].toUpperCase() + str.toLowerCase().slice(1);
    },

    goodTransformStr(str) {
        return str.replace(/ +(\,)/g, "$1")
            .replace(/ +(\.)/g, "$1")
            .replaceAll(",", ", ")
            .replaceAll(".", ". ")
            .replace(/\s+/g, ' ')
            .trim();
    },

    numOfWordsToLines(str) {
        let arr = str.split(" ");
        let count = 0;
        for (let i = 0; i < arr.length; i++){
            count++
        }
        return count;
    },

    numOfUniqWordsToLines(str){
        let arr = str.toLowerCase()
            .replaceAll(",", " ")
            .replaceAll(".", " ")
            .replaceAll("-", " ")
            .replaceAll("\"", " ")
            .replace(/\s+/g, ' ')
            .trim()
            .split(" ");

        let map = new Map();
        for (let i = 0; i < arr.length; i++){
            if (!map.has(arr[i])) {
                map.set(arr[i], 1);
            } else {
                map.set(arr[i], map.get(arr[i]) + 1)
            }
        }
        return map;
    }
}



