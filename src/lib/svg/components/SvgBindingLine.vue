<template>
    <svg class="binding-line-cmp" v-html="ent.htmlPoints"></svg>
</template>

<script>
import {resize} from 'lib/events/ResizeEvent'
import {SvgBindingLineEntity} from './SvgBindingLineEntity'
export default {
    props: {
        opt: {},
    },

    data(){return{
        ent: new SvgBindingLineEntity({
            root: this.opt.root,
            points: this.opt.points,
        }),
        resize: resize(),
    }},

    methods: {
        onResize()
        {
            console.log('onResize')
        }
    },

    beforeDestroy(){
        console.log('beforeDestroy');
    }
}
</script>
