export class SvgBindingLineEntity
{
    root: DOMRect;
    points: DOMRect[];
    constructor({root, points} : {root : DOMRect, points : DOMRect[]})
    {
        this.root = root;
        this.points = points;
    }

    circle(cx : number, cy : number)
    {
        return `<circle cx="${cx}" cy="${cy}" r="2" fill="red" stroke="none"/>`
    }

    get htmlPoints()
    {
        let p = this.points[0], r = this.root;
        return this.circle(p.top - r.top + p.height / 2, p.left - r.left + p.width / 2);
    }
}