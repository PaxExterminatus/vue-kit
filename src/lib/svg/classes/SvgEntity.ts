// @ts-ignore
import {conf} from 'lib/svg/options'
import {SvgInterface} from './SvgInterface'

export class Svg implements SvgInterface {
    cssClass: string;
    size: number;
    html: string;
    constructor({cssClass, size, html} : SvgInterface)
    {
        this.size = size;
        this.cssClass = cssClass;
        this.html = `<path class="${conf.cssClassVector} ${cssClass}" d="${html}"/>`;
    }

    get box() {
        return `0 0 ${this.size} ${this.size}`;
    }
}