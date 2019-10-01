<template>
    <svg class="binding-line-cmp" v-html="ent.htmlPoints"></svg>
</template>

<script>
    import {SvgBindingLineEntity} from './SvgBindingLineEntity'
    export default {
        props: {
            opt: {}
        },

        data(){return{
            ent: new SvgBindingLineEntity({
                root: this.opt.root,
                points: this.opt.points,
            }),
        }},
    }
</script>
