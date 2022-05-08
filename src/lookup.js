
export default function lookup(obj, key) {
    if (key.indexOf(".") != -1 && key != ".") {
        let temp = obj
        const names = key.split(".")
        for (let i = 0; i < names.length; i++) {
            temp = temp[names[i]];

        }
    }
    return obj[key]
}