export class SvgBindingLineEntity
{
    root: DOMRect;
    points: DOMRect[];
    svgPoints: {x:number,y:number}[] = [];
    constructor({root, points} : {root : DOMRect, points : DOMRect[]})
    {
        this.root = root;
        this.points = points;

        for (const p of points)
        {
            this.svgPoints.push({
                x: p.left - this.root.left + p.width / 2,
                y: p.top - this.root.top + p.height / 2,
            });
        }

        console.log(JSON.parse(JSON.stringify(this.svgPoints)));
    }

    circle(cx : number, cy : number)
    {
        return `<circle cx="${cx}" cy="${cy}" r="2" fill="red" stroke="none"/>`
    }

    path(vector : string)
    {
        return `<path d="${vector}"/>`
    }

    get htmlPoints()
    {
        let str = '', x = 0, y = 0;
        for (let i = 0; i < this.svgPoints.length; i++)
        {
            let p = this.svgPoints[i], pr;
            if (i === 0)
            {
                str += `M${p.x} ${p.y} `;
            }
            else
            {
                pr = this.svgPoints[i-1];
                x = p.x > pr.x ? p.x - pr.x : (pr.x - p.x) * -1;
                y = p.y > pr.y ? p.y - pr.y : (pr.y - p.y) * -1;
                str += `l${x} ${y} `;
            }
        }
        return this.path(str);
    }
}