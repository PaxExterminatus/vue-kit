export class SvgBindingLineOpt
{
    root: DOMRect;
    points: DOMRect[];
    constructor({root, points} : {root : DOMRect, points : DOMRect[]})
    {
        this.root = root;
        this.points = points;
    }
}