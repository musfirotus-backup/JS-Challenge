class String {
    constructor(lower, upper, capital) {
        this._lower = lower;
        this._upper = upper;
        this._capital = capital;
    }

    lower(str) {
        return str.toLowerCase();
    }

    upper(str) {
        return str.toUpperCase();
    }

    capitalize(str) {
        str = str.split(" ");

        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

        return str.join(" ");
    }

    reverse(str) {
        return str.split("").reverse().join("");
    }

    contains(str, key) {
        return str.includes(key);
    }

    random(length = 16) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    slug(text, hubung = '-') {
        return text.toString().toLowerCase().replace(/\s+/g, hubung) // Ganti spasi dengan -
            .replace(/[^\w\-]+/g, '') // Hapus semua karakter non-word
            .replace(/\-\-+/g, hubung)
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }

    count(str) {
        return str.length;
    }

    countWords(str) {
        return str.split(' ')
            .filter(function (n) {
                return n != ''
            })
            .length;
    }

    trim(str, end = 100 - 1, con = '...') {
        if (str != text) return str.substring(str, end);
        else return str.substring(str, end) + con;
    }

    trimWords(str, end = 31 - 1, con = '...') {
        if (str != text) return str.split(" ").splice(0, end).join(" ");
        else return str.split(" ").splice(0, end).join(" ") + con;
    }
}

let Str = new String();

const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

console.log(Str.lower('MAKAN'));
console.log(Str.upper('malam'));
console.log(Str.capitalize('saya ingin makan'));
console.log(Str.reverse('kasur'));
console.log(Str.contains('Saya ingin makan sate', 'makan'));
console.log(Str.contains('Saya ingin makan sate', 'rujak'));
console.log(Str.contains('Saya ingin makan sate', ['sate', 'rujak']));
console.log(Str.random());
console.log(Str.random(6));
console.log(Str.random(32));
console.log(Str.slug(title));
console.log(Str.slug(title, '_'));
console.log(Str.count('lorem ipsum'));
console.log(Str.countWords('lorem ipsum'));
console.log(Str.trim('Less than 100 characters'));
console.log(Str.trim(text));
console.log(Str.trim(text, 20));
console.log(Str.trim(text, 20, '·····'));
console.log(Str.trimWords('Less than 30 characters'));
console.log(Str.trimWords(text));
console.log(Str.trimWords(text, 3));
console.log(Str.trimWords(text, 3, '·····'));