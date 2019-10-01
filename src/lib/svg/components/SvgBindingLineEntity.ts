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
    }

    circle(cx : number, cy : number)
    {
        return `<circle cx="${cx}" cy="${cy}" r="2" fill="red" stroke="none"/>`
    }

    path(vector : string)
    {
        return `<path d="${vector}" stroke-dasharray="5"/>`
    }

    bezierCurve ()
    {

    }

    get curvesBezierQuadratic ()
    {
        let str = '', x = 0, y = 0;
        for (let i = 0; i < this.svgPoints.length; i++)
        {
            let p = this.svgPoints[i], pr;
            if (i === 0) {
                str += `M${p.x} ${p.y} `;
            } else {
                pr = this.svgPoints[i - 1];
                x = this.linePoint(p.x, pr.x);
                y = this.linePoint(p.y, pr.y);
                str += `q${-50} ${100},${x} ${y} `;
            }
        }
        return str;
    }
    get curvesBezierQuadraticDouble ()
    {
        let str = '', x = 0, y = 0;
        for (let i = 0; i < this.svgPoints.length; i++)
        {
            let p = this.svgPoints[i], pr;
            if (i === 0) {
                str += `M${p.x} ${p.y} `;
            } else {
                pr = this.svgPoints[i - 1];
                x = this.linePoint(p.x, pr.x) / 2;
                y = this.linePoint(p.y, pr.y) / 2;
                str += `q${-35} ${50},${x} ${y} t${x} ${y}`;
            }
        }
        return str;
    }

    get circles()
    {
        let str = '';
        for (let i = 0; i < this.svgPoints.length; i++)
        {
            let p = this.svgPoints[i];
            str += this.circle(p.x,p.y);
        }
        return str;
    }

    get linesStraight()
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
                x = this.linePoint(p.x, pr.x);
                y = this.linePoint(p.y, pr.y);
                str += `l${x} ${y} `;
            }
        }

        return str;
    }

    private linePoint(current : number, prev : number)
    {
        return current > prev ? current - prev : (prev - current) * -1
    }

    get htmlPoints()
    {
        //return this.path(this.linesStraight);
        //return this.circles;
        //return this.path(this.curvesBezierQuadratic);
        return this.path(this.curvesBezierQuadraticDouble);
    }
}