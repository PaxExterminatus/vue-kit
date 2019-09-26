export function validation(val : any) : PropsValidation {
    return new PropsValidation(val);
}

export class PropsValidation
{
    private readonly val : any;
    result = false;
    
    constructor(value : any)
    {
        this.val = value;
    }

    isString()
    {
        if (!this.result)
            this.result = typeof this.val === 'string' || this.val instanceof String;
        return this;
    }

    isArray()
    {
        if (!this.result)
            this.result = this.val instanceof Array;
        return this;
    }

    isNumber()
    {
        if (!this.result)
            this.result = typeof this.val === 'number' && isFinite(this.val);
        return this;
    }

    isFunction()
    {
        if (!this.result)
            this.result = this.val === 'function';
        return this;
    }

    isObject ()
    {
        if (!this.result)
            this.result = this.val && typeof this.val === 'object' && this.val.constructor === Object;
    }

//     export function isNull (value) {
//     return value === null;
// }
//
//     export function isUndefined (value) {
//     return typeof value === 'undefined';
// }
//
//     export function isBoolean (value) {
//     return typeof value === 'boolean';
// }
//
//     export function isRegExp (value) {
//     return value && typeof value === 'object' && value.constructor === RegExp;
// }
//
//     export function isError (value) {
//     return value instanceof Error && typeof value.message !== 'undefined';
// }
//
//     export function isDate (value) {
//     return value instanceof Date;
// }
//
//     export function isSymbol (value) {
//     return typeof value === 'symbol';
//}
}