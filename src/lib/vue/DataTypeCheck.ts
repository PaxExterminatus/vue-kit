export function typeCheck(val : any) : DataTypeCheck
{
    return new DataTypeCheck(val);
}

export class DataTypeCheck
{
    private readonly val : any;
    result = false;
    
    constructor(value : any)
    {
        this.val = value;
    }

    get isString()
    {
        return typeof this.val === 'string' || this.val instanceof String;
    }
    orString()
    {
        if (!this.result)
            this.result = this.isString;
        return this;
    }

    get isArray()
    {
        return this.val instanceof Array || Array.isArray(this.val);
    }
    orArray()
    {
        if (!this.result)
            this.result = this.isArray;
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