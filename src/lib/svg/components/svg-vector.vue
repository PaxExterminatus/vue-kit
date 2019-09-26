<template>
    <svg :class="cssClass" :viewBox="box" v-html="html"></svg>
</template>

<script>
import {conf} from 'svg/options'
import vectors from '../vectors'
import {typeCheck} from '../../vue/DataTypeCheck'
export default {
    props: {
        name: {
            required: true,
            validator: val => typeCheck(val).isString().isArray().result,
        },
    },

    data(){return{
        cssClass: conf.cssClass + ' ',
        box: null,
        html: '',
    }},

    beforeMount()
    {
        let nameType = typeCheck(this.name);

        if (nameType.isArray().result)
        {
            let maxsize = 0;
            this.name.forEach( name =>
            {
                const vector = vectors[name];
                if (vector.size > maxsize)
                {
                    maxsize = vector.size;
                }
                this.html += vector.html;
                this.box = `0 0 ${maxsize} ${maxsize}`;
            });
        }
        else if (nameType.isString().result)
        {
            const icon = vectors[this.name];
            this.cssClass += icon.cssClass;
            this.box = icon.box;
            this.html = icon.html;
        }
    },
}
</script>