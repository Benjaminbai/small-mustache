
export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr;
        this.pos = 0;
        this.tail = templateStr;
    }

    // 扫描路过的内容
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            this.pos += tag.length;
            this.tail = this.templateStr.substring(this.pos);
        }
    }

    // 指针扫描，并且返回扫描的内容
    scanUtil(stopTag) {
        let startPos = this.pos;
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++;
            this.tail = this.templateStr.substring(this.pos);
        }
        return this.templateStr.substring(startPos, this.pos);
    }

    eos() {
        return this.pos >= this.templateStr.length
    }
}