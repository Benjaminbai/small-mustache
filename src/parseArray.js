import renderTemplate from "./renderTemplate";
import lookup from "./lookup";

export default function parseArray(token, data) {
    const v = lookup(data, token[1])
    let resultStr = ''

    for (let i = 0; i < v.length; i++) {
        resultStr += renderTemplate(token[2], {
            ".": v[i],
            ...v[i]
        })

    }
    return resultStr
}