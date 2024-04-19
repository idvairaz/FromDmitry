class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

let Product1 = new Product("name1", 1, 1, "description1 abc");
let Product2 = new Product("name2", 2, 2, "description2 abc");
let Product3 = new Product("name3", 3, 3, "description3");
let Product4 = new Product("name4", 4, 4, "description4");
let Product5 = new Product("name5", 5, 5, "description5");
let Product6 = new Product("name6", 6, 6, "description6");
let Product7 = new Product("name7", 7, 7, "description7");
let Product8 = new Product("namefd", 2, 6, "descriptionabc");
let Product9 = new Product("namefd", 2, 27, "descriptionabc");
let Product10 = new Product("fdname", 22, 5, "descriptionabc");
let Product11 = new Product("name11", 23, 1, "descriptionabc");
let Product12 = new Product("name12", 56, 3, "description12");

const arr = [Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12];

Number.prototype['='] = function(value) {
    return this == value;
}
Number.prototype['>'] = function(value) {
    return this > value;
}
Number.prototype['<'] = function(value) {
    return this < value;
}
Number.prototype['<='] = function(value) {
    return this <= value;
}
Number.prototype['>='] = function(value) {
    return this >= value;
}

String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;

function outputValidObjects(arr, str) {
    const strArr = str.split('&');
    const pars = strArr.map(item => ({
        el: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));
    return arr.filter(value => {

        for (let prop of pars) {
            if (!value[prop.el[0]][prop.el[1]](prop.el[2]))
                return false;
        }
        return true;
    });
}
const str1 = 'name-starts-fd&quantity-=5'
const str2 = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';

const newArr1 = outputValidObjects(arr, str1);
const newArr2 = outputValidObjects(arr, str2);

console.log(newArr1);
console.log(newArr2);








