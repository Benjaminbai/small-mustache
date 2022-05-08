import parseToTokens from './parseToTokens'
import renderTemplate from './renderTemplate'

window.mustache_template = {
    render(templateStr, data) {
        const tokens = parseToTokens(templateStr)
        const dom = renderTemplate(tokens, data)
        console.log(1111, dom)
        document.body.innerHTML = dom
    }
}