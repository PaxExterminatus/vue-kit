export function resize(): ResizeEvent
{
    return new ResizeEvent().add();
}

export class ResizeEvent {
    width : number = window.innerWidth;
    height : number = window.innerHeight;
    constructor()
    {

    }

    add()
    {
        window.removeEventListener('resize', this.fn);
        window.addEventListener('resize', this.fn);
        return this;
    }

    private fn () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        console.log('resize', this.width, this.height);
    };
}